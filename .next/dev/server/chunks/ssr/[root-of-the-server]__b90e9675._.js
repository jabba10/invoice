module.exports = [
"[project]/src/pages/AboutUs.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "aboutUs": "AboutUs-module__IeySAa__aboutUs",
  "card": "AboutUs-module__IeySAa__card",
  "cards": "AboutUs-module__IeySAa__cards",
  "ctaButton": "AboutUs-module__IeySAa__ctaButton",
  "ctaButtonLarge": "AboutUs-module__IeySAa__ctaButtonLarge",
  "ctaButtonMedium": "AboutUs-module__IeySAa__ctaButtonMedium",
  "ctaButtonPrimary": "AboutUs-module__IeySAa__ctaButtonPrimary",
  "ctaButtonSecondary": "AboutUs-module__IeySAa__ctaButtonSecondary",
  "ctaButtonSmall": "AboutUs-module__IeySAa__ctaButtonSmall",
  "ctaButtonTertiary": "AboutUs-module__IeySAa__ctaButtonTertiary",
  "features": "AboutUs-module__IeySAa__features",
  "footerCta": "AboutUs-module__IeySAa__footerCta",
  "hero": "AboutUs-module__IeySAa__hero",
  "heroContent": "AboutUs-module__IeySAa__heroContent",
  "missionContent": "AboutUs-module__IeySAa__missionContent",
  "missionSection": "AboutUs-module__IeySAa__missionSection",
  "sectionTitle": "AboutUs-module__IeySAa__sectionTitle",
  "statItem": "AboutUs-module__IeySAa__statItem",
  "statLabel": "AboutUs-module__IeySAa__statLabel",
  "statNumber": "AboutUs-module__IeySAa__statNumber",
  "statsGrid": "AboutUs-module__IeySAa__statsGrid",
  "statsSection": "AboutUs-module__IeySAa__statsSection",
});
}),
"[project]/src/pages/aboutus.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getStaticProps",
    ()=>getStaticProps,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/pages/AboutUs.module.css [ssr] (css module)");
;
;
;
;
const AboutUs = ({ currentDate, lastModifiedDate })=>{
    const siteUrl = 'https://www.nofeesinvoice.com/about';
    const logoUrl = 'https://www.nofeesinvoice.com/images/logo.png';
    const imageUrl = 'https://www.nofeesinvoice.com/images/invoice-preview.jpg';
    // Structured Data Objects
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'InvoiceGenius',
        url: 'https://www.nofeesinvoice.com',
        logo: logoUrl,
        description: 'A free, secure, and private online invoice generator that helps freelancers and small businesses create professional invoices instantly.',
        foundingDate: '2022',
        founder: 'The InvoiceGenius Team',
        datePublished: currentDate,
        dateModified: lastModifiedDate,
        sameAs: [
            'https://twitter.com/InvoiceGenius',
            'https://linkedin.com/company/invoicegenius'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Support',
            email: 'support@yourdomain.com',
            availableLanguage: 'English'
        }
    };
    const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Free Online Invoice Generator',
        description: 'Create professional invoices in seconds. No registration, no cost, secure, and supports PDF export, taxes, and multi-language.',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        datePublished: currentDate,
        dateModified: lastModifiedDate,
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '156'
        },
        featureList: 'Free to use, No registration, Secure & private, PDF export, Custom templates, Mobile-friendly',
        url: 'https://www.nofeesinvoice.com',
        publisher: {
            '@type': 'Organization',
            name: 'InvoiceGenius'
        }
    };
    // Add FAQ Schema for better SEO
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Is this invoice generator really free?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes, our invoice generator is 100% free with no hidden fees, no subscriptions, and no registration required. We believe in providing accessible tools for all businesses.',
                    datePublished: currentDate
                }
            },
            {
                '@type': 'Question',
                name: 'Is my data secure and private?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Your data is never stored on our servers. All invoice generation happens in your browser, ensuring complete privacy and security.',
                    datePublished: currentDate
                }
            },
            {
                '@type': 'Question',
                name: 'Do I need to create an account?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'No account creation is required. You can start creating invoices immediately without any sign-up process.',
                    datePublished: currentDate
                }
            }
        ]
    };
    // Add NewsArticle Schema for content freshness
    const newsArticleSchema = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: 'About Us | Trusted Free Online Invoice Generator for Professionals',
        description: 'Learn about our mission to provide a fast, secure, and completely free online invoice generator.',
        image: [
            imageUrl
        ],
        datePublished: currentDate,
        dateModified: lastModifiedDate,
        author: {
            '@type': 'Organization',
            name: 'InvoiceGenius',
            url: 'https://www.nofeesinvoice.com'
        },
        publisher: {
            '@type': 'Organization',
            name: 'InvoiceGenius',
            logo: {
                '@type': 'ImageObject',
                url: logoUrl
            }
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': siteUrl
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "date",
                        content: currentDate
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "last-modified",
                        content: lastModifiedDate
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 132,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "article:published_time",
                        content: lastModifiedDate
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "article:modified_time",
                        content: lastModifiedDate
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "googlebot-news",
                        content: "index,follow"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 137,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "robots",
                        content: "max-snippet:150, max-image-preview:large"
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 138,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/aboutus.js",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(organizationSchema)
                }
            }, "organization-schema", false, {
                fileName: "[project]/src/pages/aboutus.js",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(softwareSchema)
                }
            }, "software-schema", false, {
                fileName: "[project]/src/pages/aboutus.js",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqSchema)
                }
            }, "faq-schema", false, {
                fileName: "[project]/src/pages/aboutus.js",
                lineNumber: 152,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(newsArticleSchema)
                }
            }, "newsarticle-schema", false, {
                fileName: "[project]/src/pages/aboutus.js",
                lineNumber: 157,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].aboutUs,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].hero,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].heroContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    children: "Who We Are"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "Your trusted partner in creating professional invoices, fast and free."
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/free-invoice-generator",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].ctaButton,
                                    children: "Start Creating Invoices"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/aboutus.js",
                            lineNumber: 166,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 165,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].missionSection,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].missionContent,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                    children: "Our Mission"
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "We believe that creating professional invoices should be accessible to everyone—freelancers, small business owners, and entrepreneurs alike. That's why we built a completely free, secure, and easy-to-use invoice generator that puts you in control of your billing process."
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    children: "No hidden fees, no complex sign-up processes, and no data storage. Just a straightforward tool that helps you get paid faster while maintaining your professional image."
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                                    itemProp: "datePublished",
                                    content: currentDate
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                                    itemProp: "dateModified",
                                    content: lastModifiedDate
                                }, void 0, false, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 190,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/aboutus.js",
                            lineNumber: 177,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 176,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statsSection,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statsGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statNumber,
                                            children: "50K+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                            children: "Invoices Created"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 199,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statNumber,
                                            children: "99.9%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 202,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                            children: "Uptime"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 203,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statNumber,
                                            children: "100%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                            children: "Free Forever"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statNumber,
                                            children: "24/7"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                            children: "Available"
                                        }, void 0, false, {
                                            fileName: "[project]/src/pages/aboutus.js",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/pages/aboutus.js",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/pages/aboutus.js",
                            lineNumber: 196,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 195,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].features,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Why Choose Our Free Invoice Generator?"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/aboutus.js",
                                lineNumber: 218,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cards,
                                children: [
                                    {
                                        title: '✨ Easy to Use',
                                        description: 'Create and customize professional invoices in minutes with our intuitive interface. No design or accounting skills required.'
                                    },
                                    {
                                        title: '🔒 Secure & Private',
                                        description: 'Your data is never stored or shared. We respect your privacy and ensure your documents remain confidential.'
                                    },
                                    {
                                        title: '📄 Professional Templates',
                                        description: 'Choose from a variety of sleek, customizable invoice templates that match your brand and style.'
                                    },
                                    {
                                        title: '📥 Instant Download',
                                        description: 'Generate your invoice and download it instantly in PDF or printable format—ready to send to your clients.'
                                    },
                                    {
                                        title: '🌍 Access Anywhere',
                                        description: 'Use our invoice generator on any device—desktop, tablet, or mobile—without needing to install anything.'
                                    },
                                    {
                                        title: '💸 Completely Free',
                                        description: 'No hidden fees, no subscriptions. Just a powerful, free tool to help you get paid faster and more professionally.'
                                    }
                                ].map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                children: feature.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/aboutus.js",
                                                lineNumber: 253,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                children: feature.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/aboutus.js",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                                                itemProp: "datePublished",
                                                content: currentDate
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/aboutus.js",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                                                itemProp: "dateModified",
                                                content: lastModifiedDate
                                            }, void 0, false, {
                                                fileName: "[project]/src/pages/aboutus.js",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/pages/aboutus.js",
                                        lineNumber: 252,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/pages/aboutus.js",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 217,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].footerCta,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                children: "Ready to Start Creating Invoices?"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/aboutus.js",
                                lineNumber: 265,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/free-invoice-generator",
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$AboutUs$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].ctaButton,
                                children: "Generate Your First Invoice"
                            }, void 0, false, {
                                fileName: "[project]/src/pages/aboutus.js",
                                lineNumber: 266,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                                itemProp: "datePublished",
                                content: currentDate
                            }, void 0, false, {
                                fileName: "[project]/src/pages/aboutus.js",
                                lineNumber: 270,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                                itemProp: "dateModified",
                                content: lastModifiedDate
                            }, void 0, false, {
                                fileName: "[project]/src/pages/aboutus.js",
                                lineNumber: 271,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/pages/aboutus.js",
                        lineNumber: 264,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/pages/aboutus.js",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
async function getStaticProps() {
    // Generate dates at build time
    const buildDate = new Date();
    const currentDate = buildDate.toISOString().split('T')[0]; // YYYY-MM-DD
    const lastModifiedDate = buildDate.toISOString(); // Full ISO 8601
    return {
        props: {
            currentDate,
            lastModifiedDate
        },
        revalidate: 86400
    };
}
const metadata = {
    title: 'About Us | Trusted Free Online Invoice Generator for Professionals',
    description: 'Learn about our mission to provide a fast, secure, and completely free online invoice generator. No registration. No data storage. 100% private.',
    keywords: 'about invoice generator, free invoicing tool, online invoice creator, secure invoice app, no-signup invoice, create professional invoices, about us invoicing',
    alternates: {
        canonical: 'https://www.nofeesinvoice.com/aboutus'
    },
    openGraph: {
        title: 'About Us | Free & Secure Invoice Generator for Freelancers & Small Businesses',
        description: 'We believe invoicing should be fast, free, and private. Learn how our tool helps thousands create professional invoices in seconds.',
        url: 'https://www.nofeesinvoice.com/aboutus',
        siteName: 'InvoiceGenius',
        images: [
            {
                url: 'https://www.nofeesinvoice.com/images/invoice-preview.jpg',
                width: 1200,
                height: 630,
                alt: 'Free Invoice Generator - Clean, Professional Invoices in Seconds'
            }
        ],
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us | The Free Invoice Tool Trusted by Thousands',
        description: 'No registration. No fees. Just a simple, secure way to create professional invoices online. Learn about our mission.',
        images: [
            'https://www.nofeesinvoice.com/images/invoice-preview.jpg'
        ],
        site: '@InvoiceGenius',
        creator: '@InvoiceGenius'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1
        }
    }
};
const __TURBOPACK__default__export__ = AboutUs;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b90e9675._.js.map