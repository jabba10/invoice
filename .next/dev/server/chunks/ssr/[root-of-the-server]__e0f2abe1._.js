module.exports = [
"[project]/src/pages/PrivacyPolicy.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "card": "PrivacyPolicy-module__6RZeGG__card",
  "cardsSection": "PrivacyPolicy-module__6RZeGG__cardsSection",
  "conclusion": "PrivacyPolicy-module__6RZeGG__conclusion",
  "fadeInDown": "PrivacyPolicy-module__6RZeGG__fadeInDown",
  "header": "PrivacyPolicy-module__6RZeGG__header",
  "intro": "PrivacyPolicy-module__6RZeGG__intro",
  "link": "PrivacyPolicy-module__6RZeGG__link",
  "privacyPolicyContainer": "PrivacyPolicy-module__6RZeGG__privacyPolicyContainer",
  "visible": "PrivacyPolicy-module__6RZeGG__visible",
});
}),
"[project]/src/pages/privacy-policy.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivacyPolicy,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/PrivacyPolicy.module.css [ssr] (css module)");
'use client';
;
;
;
function PrivacyPolicy() {
    const sectionsRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])([]);
    // Animate sections on scroll
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].visible);
                }
            });
        }, {
            threshold: 0.1
        });
        sectionsRef.current.forEach((el)=>{
            if (el) observer.observe(el);
        });
        return ()=>{
            sectionsRef.current.forEach((el)=>{
                if (el) observer.unobserve(el);
            });
        };
    }, []);
    const cards = [
        {
            title: "✅ No Data Collection",
            desc: "We do not collect, store, or track any personal information including names, email addresses, phone numbers, or IP addresses."
        },
        {
            title: "🔒 No Data Storage",
            desc: "All invoices are generated locally in your browser and are not stored on our servers or any third-party systems."
        },
        {
            title: "🌐 No Cookies or Tracking",
            desc: "Our site does not use cookies, analytics, or any tracking technologies. Your use of the site is completely anonymous."
        },
        {
            title: "📄 Invoice Data",
            desc: "Any invoice data you create is stored only temporarily in your browser memory and is cleared once you close the tab."
        },
        {
            title: "📱 Fully Client-Side",
            desc: "The entire invoice generation process happens in your browser. No data is sent to or processed by any external server."
        },
        {
            title: "🔐 Secure by Design",
            desc: "Since we never collect or store data, there's no risk of data breaches, leaks, or misuse of your personal information."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].privacyPolicyContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header} ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].visible}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    children: "Privacy Policy"
                }, void 0, false, {
                    fileName: "[project]/src/pages/privacy-policy.jsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/privacy-policy.jsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                ref: (el)=>sectionsRef.current[0] = el,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].intro,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Introduction"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/privacy-policy.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "At ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                children: "FreeInvoiceGenerator.com"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/privacy-policy.jsx",
                                lineNumber: 72,
                                columnNumber: 14
                            }, this),
                            ", we are committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our free invoice generator service."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/privacy-policy.jsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/privacy-policy.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                ref: (el)=>sectionsRef.current[1] = el,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardsSection,
                children: cards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        ref: (el)=>sectionsRef.current[index + 2] = el,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/src/pages/privacy-policy.jsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: card.desc
                            }, void 0, false, {
                                fileName: "[project]/src/pages/privacy-policy.jsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/pages/privacy-policy.jsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/pages/privacy-policy.jsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                ref: (el)=>sectionsRef.current[8] = el,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].conclusion,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        children: "Have Questions?"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/privacy-policy.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "If you have any questions about our privacy practices, feel free to reach out via our",
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                href: "/contact-us",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$PrivacyPolicy$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].link,
                                children: "contact page"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/privacy-policy.jsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            ". We're always happy to help!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/privacy-policy.jsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/privacy-policy.jsx",
                lineNumber: 93,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/privacy-policy.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
const metadata = {
    title: 'Privacy Policy | Free Invoice Generator',
    description: 'We respect your privacy. Our free invoice generator collects no data, uses no cookies, and stores nothing on servers.'
};
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e0f2abe1._.js.map