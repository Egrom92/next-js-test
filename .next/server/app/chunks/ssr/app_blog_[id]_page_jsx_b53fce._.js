(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/app_blog_[id]_page_jsx_b53fce._.js", {

"[project]/app/blog/[id]/page.jsx (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>Page,
    "generateMetadata": ()=>generateMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
async function generateMetadata({ params: { id } }) {
    const post = await getData(id);
    return {
        title: post.title
    };
}
async function getData(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.json();
}
async function Page({ params: { id } }) {
    const post = await getData(id);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                children: post.title
            }, void 0, false, {
                fileName: "<[project]/app/blog/[id]/page.jsx>",
                lineNumber: 16,
                columnNumber: 5
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                children: post.body
            }, void 0, false, {
                fileName: "<[project]/app/blog/[id]/page.jsx>",
                lineNumber: 17,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true);
}

})()),
}]);

//# sourceMappingURL=app_blog_[id]_page_jsx_b53fce._.js.map