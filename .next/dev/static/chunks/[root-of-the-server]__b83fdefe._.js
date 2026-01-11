(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/src/pages/Custom404.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "buttonContainer": "Custom404-module__MB5iSG__buttonContainer",
  "ctaButton": "Custom404-module__MB5iSG__ctaButton",
  "ctaButtonPrimary": "Custom404-module__MB5iSG__ctaButtonPrimary",
  "errorContainer": "Custom404-module__MB5iSG__errorContainer",
  "errorContent": "Custom404-module__MB5iSG__errorContent",
  "errorDescription": "Custom404-module__MB5iSG__errorDescription",
  "errorHero": "Custom404-module__MB5iSG__errorHero",
  "errorHeroContent": "Custom404-module__MB5iSG__errorHeroContent",
  "errorNumber": "Custom404-module__MB5iSG__errorNumber",
  "errorTitle": "Custom404-module__MB5iSG__errorTitle",
});
}),
"[project]/src/pages/404.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$Custom404$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/Custom404.module.css [client] (css module)");
'use client';
;
;
;
;
;
const Custom404 = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        className: "jsx-d296f8c6c00d013f",
                        children: "Page Not Found | Free Online Invoice Generator"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/404.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "The page you're looking for doesn't exist. Return to our homepage to create professional invoices instantly.",
                        className: "jsx-d296f8c6c00d013f"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/404.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "noindex, follow",
                        className: "jsx-d296f8c6c00d013f"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/404.js",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, maximum-scale=5",
                        className: "jsx-d296f8c6c00d013f"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/404.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/404.js",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-d296f8c6c00d013f" + " " + "errorContainer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-d296f8c6c00d013f" + " " + "errorContent",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-d296f8c6c00d013f" + " " + "errorHero",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-d296f8c6c00d013f" + " " + "errorHeroContent",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d296f8c6c00d013f" + " " + "errorNumber",
                                    children: "404"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/404.js",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "jsx-d296f8c6c00d013f" + " " + "errorTitle",
                                    children: "Page Not Found"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/404.js",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-d296f8c6c00d013f" + " " + "errorDescription",
                                    children: "Oops! The page you're looking for seems to have gone missing. Don't worry, we'll help you get back on track."
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/404.js",
                                    lineNumber: 27,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-d296f8c6c00d013f" + " " + "buttonContainer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "ctaButton ctaButtonPrimary",
                                        children: "Return to Homepage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/pages/404.js",
                                        lineNumber: 32,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/404.js",
                                    lineNumber: 31,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/404.js",
                            lineNumber: 21,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/404.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/pages/404.js",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/pages/404.js",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "d296f8c6c00d013f",
                children: ".jsx-d296f8c6c00d013f:root{--primary:#1f2937;--secondary:#2563eb;--accent:#10b981;--button-bg:#1e40af;--button-hover:#1e3a8a;--background:#fff;--text:#374151;--error-bg:linear-gradient(135deg,#f8fafc 0%,#e2e8f0 100%);--hero-bg:linear-gradient(135deg,var(--primary)0%,var(--secondary)100%);--shadow:0 20px 40px #0000001a;--border-radius:12px}.errorContainer.jsx-d296f8c6c00d013f{background:var(--error-bg);color:var(--text);scroll-behavior:smooth;box-sizing:border-box;justify-content:center;align-items:center;width:100%;min-height:100dvh;padding:16px;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;line-height:1.6;display:flex}.errorContent.jsx-d296f8c6c00d013f{width:100%;max-width:600px;margin:0 auto}.errorHero.jsx-d296f8c6c00d013f{background:var(--hero-bg);color:#fff;text-align:center;border-radius:var(--border-radius);box-shadow:var(--shadow);box-sizing:border-box;width:100%;padding:3rem 1.5rem;position:relative;overflow:hidden}.errorHero.jsx-d296f8c6c00d013f:before{content:\"\";opacity:.3;pointer-events:none;background:url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");position:absolute;inset:0}.errorHeroContent.jsx-d296f8c6c00d013f{z-index:2;width:100%;max-width:500px;margin:0 auto;position:relative}.errorNumber.jsx-d296f8c6c00d013f{-webkit-text-fill-color:transparent;opacity:.9;background:linear-gradient(135deg,#fff 0%,#e5e7eb 100%);background-clip:text;margin-bottom:1rem;font-size:5rem;font-weight:900;line-height:1}.errorTitle.jsx-d296f8c6c00d013f{color:#fff;letter-spacing:-.02em;margin-bottom:1rem;font-size:1.75rem;font-weight:700;line-height:1.3}.errorDescription.jsx-d296f8c6c00d013f{opacity:.9;color:#fffffff2;max-width:400px;margin-bottom:2.5rem;margin-left:auto;margin-right:auto;font-size:1.0625rem;line-height:1.6}.buttonContainer.jsx-d296f8c6c00d013f{justify-content:center;width:100%;display:flex}.ctaButton.jsx-d296f8c6c00d013f{background:var(--button-bg);color:#fff;cursor:pointer;text-align:center;border:none;border-radius:8px;justify-content:center;align-items:center;width:auto;min-width:220px;max-width:280px;min-height:56px;padding:.875rem 2.5rem;font-size:1.0625rem;font-weight:600;line-height:1.2;text-decoration:none;transition:all .3s cubic-bezier(.4,0,.2,1);display:inline-flex;position:relative;overflow:hidden;box-shadow:0 4px 14px #1e40af66}.ctaButtonPrimary.jsx-d296f8c6c00d013f{background:var(--button-bg);color:#fff}.ctaButton.jsx-d296f8c6c00d013f:hover{background:var(--button-hover);transform:translateY(-2px);box-shadow:0 8px 25px #1e40af80}.ctaButton.jsx-d296f8c6c00d013f:active{transition:all .1s;transform:translateY(0);box-shadow:0 2px 10px #1e40af4d}.ctaButton.jsx-d296f8c6c00d013f:focus-visible{outline-offset:2px;outline:3px solid #fffc}.ctaButton.jsx-d296f8c6c00d013f:after{content:\"\";opacity:0;background:#ffffff4d;border-radius:50%;width:0;height:0;transition:width .3s,height .3s,opacity .3s;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.ctaButton.jsx-d296f8c6c00d013f:active:after{opacity:0;width:120px;height:120px;transition:all}@media (width<=374px){.errorContainer.jsx-d296f8c6c00d013f{padding:12px}.errorHero.jsx-d296f8c6c00d013f{border-radius:10px;padding:2rem 1rem}.errorNumber.jsx-d296f8c6c00d013f{margin-bottom:.75rem;font-size:3.5rem}.errorTitle.jsx-d296f8c6c00d013f{margin-bottom:.875rem;font-size:1.375rem}.errorDescription.jsx-d296f8c6c00d013f{margin-bottom:2rem;font-size:.9375rem;line-height:1.5}.ctaButton.jsx-d296f8c6c00d013f{width:100%;min-width:180px;max-width:none;min-height:48px;padding:.75rem 1.5rem;font-size:1rem}}@media (width>=375px) and (width<=424px){.errorHero.jsx-d296f8c6c00d013f{padding:2.5rem 1.25rem}.errorNumber.jsx-d296f8c6c00d013f{font-size:4rem}.errorTitle.jsx-d296f8c6c00d013f{font-size:1.5rem}.errorDescription.jsx-d296f8c6c00d013f{font-size:1rem}.ctaButton.jsx-d296f8c6c00d013f{min-width:200px}}@media (width>=425px) and (width<=767px){.errorHero.jsx-d296f8c6c00d013f{padding:3rem 1.5rem}.errorNumber.jsx-d296f8c6c00d013f{font-size:4.5rem}.errorTitle.jsx-d296f8c6c00d013f{font-size:1.625rem}.errorDescription.jsx-d296f8c6c00d013f{font-size:1.0625rem}}@media (width>=768px) and (width<=1023px){.errorContainer.jsx-d296f8c6c00d013f{padding:24px}.errorHero.jsx-d296f8c6c00d013f{padding:4rem 2rem}.errorNumber.jsx-d296f8c6c00d013f{font-size:5.5rem}.errorTitle.jsx-d296f8c6c00d013f{font-size:2rem}.errorDescription.jsx-d296f8c6c00d013f{margin-bottom:3rem;font-size:1.125rem}.ctaButton.jsx-d296f8c6c00d013f{min-width:240px;min-height:60px;padding:1rem 3rem;font-size:1.125rem}}@media (width>=1024px) and (width<=1439px){.errorContent.jsx-d296f8c6c00d013f{max-width:650px}.errorHero.jsx-d296f8c6c00d013f{padding:5rem 3rem}.errorNumber.jsx-d296f8c6c00d013f{font-size:6rem}.errorTitle.jsx-d296f8c6c00d013f{font-size:2.25rem}.errorDescription.jsx-d296f8c6c00d013f{margin-bottom:3.5rem;font-size:1.25rem}}@media (width>=1440px){.errorContent.jsx-d296f8c6c00d013f{max-width:700px}.errorHero.jsx-d296f8c6c00d013f{padding:6rem 4rem}.errorNumber.jsx-d296f8c6c00d013f{font-size:7rem}.errorTitle.jsx-d296f8c6c00d013f{font-size:2.5rem}.errorDescription.jsx-d296f8c6c00d013f{margin-bottom:4rem;font-size:1.375rem}.ctaButton.jsx-d296f8c6c00d013f{min-width:260px;min-height:64px;padding:1.125rem 3.5rem;font-size:1.25rem}}@media (width>=1920px){.errorContent.jsx-d296f8c6c00d013f{max-width:800px}.errorHero.jsx-d296f8c6c00d013f{padding:7rem 5rem}}@media (hover:none) and (pointer:coarse){.ctaButton.jsx-d296f8c6c00d013f:hover{transform:none}.ctaButton.jsx-d296f8c6c00d013f:active{transform:scale(.98);box-shadow:0 2px 8px #1e40af4d}@media (width<=768px){.ctaButton.jsx-d296f8c6c00d013f{min-height:52px}}}@media (prefers-reduced-motion:reduce){.errorContainer.jsx-d296f8c6c00d013f{scroll-behavior:auto}.ctaButton.jsx-d296f8c6c00d013f{transition:none}.ctaButton.jsx-d296f8c6c00d013f:hover,.ctaButton.jsx-d296f8c6c00d013f:active{transform:none}.ctaButton.jsx-d296f8c6c00d013f:after{display:none}}@media (prefers-color-scheme:dark){.jsx-d296f8c6c00d013f:root{--error-bg:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);--hero-bg:linear-gradient(135deg,#1e293b 0%,#2563eb 100%);--button-bg:#1e40af;--button-hover:#1e3a8a}}@media (prefers-contrast:high){.ctaButton.jsx-d296f8c6c00d013f{border:2px solid}.errorDescription.jsx-d296f8c6c00d013f{opacity:1}}.ctaButton.jsx-d296f8c6c00d013f:disabled{opacity:.6;cursor:not-allowed;box-shadow:none!important;transform:none!important}@media (height<=600px) and (orientation:portrait){.errorContainer.jsx-d296f8c6c00d013f{align-items:flex-start;padding:40px 20px 20px}.errorHero.jsx-d296f8c6c00d013f{padding:2rem 1.5rem}}@media (height<=500px) and (orientation:landscape){.errorContainer.jsx-d296f8c6c00d013f{padding:10px}.errorHero.jsx-d296f8c6c00d013f{padding:1.5rem 2rem}.errorNumber.jsx-d296f8c6c00d013f{margin-bottom:.5rem;font-size:3rem}.errorTitle.jsx-d296f8c6c00d013f{margin-bottom:.5rem;font-size:1.375rem}.errorDescription.jsx-d296f8c6c00d013f{margin-bottom:1.5rem;font-size:.9375rem}.ctaButton.jsx-d296f8c6c00d013f{min-height:44px;padding:.625rem 1.5rem}}@media (height<=400px){.errorHero.jsx-d296f8c6c00d013f{padding:1rem 1.5rem}.errorNumber.jsx-d296f8c6c00d013f{font-size:2.5rem}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c = Custom404;
const __TURBOPACK__default__export__ = Custom404;
var _c;
__turbopack_context__.k.register(_c, "Custom404");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/404.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/404";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/src/pages/404.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/src/pages/404\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/404.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__b83fdefe._.js.map