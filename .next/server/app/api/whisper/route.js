/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/whisper/route";
exports.ids = ["app/api/whisper/route"];
exports.modules = {

/***/ "(rsc)/./app/api/whisper/route.ts":
/*!**********************************!*\
  !*** ./app/api/whisper/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(req) {\n    const formData = await req.formData();\n    const file = formData.get('file');\n    if (!file) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'No audio file received'\n        }, {\n            status: 400\n        });\n    }\n    const buffer = Buffer.from(await file.arrayBuffer());\n    const openaiRes = await fetch('https://api.openai.com/v1/audio/transcriptions', {\n        method: 'POST',\n        headers: {\n            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`\n        },\n        body: (()=>{\n            const form = new FormData();\n            form.append('file', new File([\n                buffer\n            ], 'audio.webm'));\n            form.append('model', 'whisper-1');\n            form.append('language', 'en'); // Force English transcription\n            return form;\n        })()\n    });\n    const data = await openaiRes.json();\n    if (!data.text) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Whisper failed to transcribe audio'\n        }, {\n            status: 500\n        });\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        text: data.text\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3doaXNwZXIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFFakQsZUFBZUMsS0FBS0MsR0FBZ0I7SUFDekMsTUFBTUMsV0FBVyxNQUFNRCxJQUFJQyxRQUFRO0lBQ25DLE1BQU1DLE9BQU9ELFNBQVNFLEdBQUcsQ0FBQztJQUUxQixJQUFJLENBQUNELE1BQU07UUFDVCxPQUFPSixxREFBWUEsQ0FBQ00sSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBeUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDOUU7SUFFQSxNQUFNQyxTQUFTQyxPQUFPQyxJQUFJLENBQUMsTUFBTVAsS0FBS1EsV0FBVztJQUVqRCxNQUFNQyxZQUFZLE1BQU1DLE1BQU0sa0RBQWtEO1FBQzlFQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLEVBQUc7UUFDeEQ7UUFDQUMsTUFBTSxDQUFDO1lBQ0wsTUFBTUMsT0FBTyxJQUFJQztZQUNqQkQsS0FBS0UsTUFBTSxDQUFDLFFBQVEsSUFBSUMsS0FBSztnQkFBQ2hCO2FBQU8sRUFBRTtZQUN2Q2EsS0FBS0UsTUFBTSxDQUFDLFNBQVM7WUFDckJGLEtBQUtFLE1BQU0sQ0FBQyxZQUFZLE9BQU8sOEJBQThCO1lBQzdELE9BQU9GO1FBQ1Q7SUFDRjtJQUVBLE1BQU1JLE9BQU8sTUFBTWIsVUFBVVAsSUFBSTtJQUVqQyxJQUFJLENBQUNvQixLQUFLQyxJQUFJLEVBQUU7UUFDZCxPQUFPM0IscURBQVlBLENBQUNNLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQXFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzFGO0lBRUEsT0FBT1IscURBQVlBLENBQUNNLElBQUksQ0FBQztRQUFFcUIsTUFBTUQsS0FBS0MsSUFBSTtJQUFDO0FBQzdDIiwic291cmNlcyI6WyIvVXNlcnMvemhhbmd5YXFpL0RvY3VtZW50cy9NaW5kZmx1ZW5jZS9taW5kZmx1ZW5jZS1idWlsZC9hcHAvYXBpL3doaXNwZXIvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0UmVxdWVzdCkge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcS5mb3JtRGF0YSgpO1xuICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgQmxvYjtcblxuICBpZiAoIWZpbGUpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ05vIGF1ZGlvIGZpbGUgcmVjZWl2ZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gIH1cblxuICBjb25zdCBidWZmZXIgPSBCdWZmZXIuZnJvbShhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCkpO1xuXG4gIGNvbnN0IG9wZW5haVJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2F1ZGlvL3RyYW5zY3JpcHRpb25zJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSF9YCxcbiAgICB9LFxuICAgIGJvZHk6ICgoKSA9PiB7XG4gICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBmb3JtLmFwcGVuZCgnZmlsZScsIG5ldyBGaWxlKFtidWZmZXJdLCAnYXVkaW8ud2VibScpKTtcbiAgICAgIGZvcm0uYXBwZW5kKCdtb2RlbCcsICd3aGlzcGVyLTEnKTtcbiAgICAgIGZvcm0uYXBwZW5kKCdsYW5ndWFnZScsICdlbicpOyAvLyBGb3JjZSBFbmdsaXNoIHRyYW5zY3JpcHRpb25cbiAgICAgIHJldHVybiBmb3JtO1xuICAgIH0pKCksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBvcGVuYWlSZXMuanNvbigpO1xuXG4gIGlmICghZGF0YS50ZXh0KSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdXaGlzcGVyIGZhaWxlZCB0byB0cmFuc2NyaWJlIGF1ZGlvJyB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgdGV4dDogZGF0YS50ZXh0IH0pO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwiZm9ybURhdGEiLCJmaWxlIiwiZ2V0IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImFycmF5QnVmZmVyIiwib3BlbmFpUmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImJvZHkiLCJmb3JtIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJGaWxlIiwiZGF0YSIsInRleHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/whisper/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Froute&page=%2Fapi%2Fwhisper%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Froute&page=%2Fapi%2Fwhisper%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_zhangyaqi_Documents_Mindfluence_mindfluence_build_app_api_whisper_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/whisper/route.ts */ \"(rsc)/./app/api/whisper/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/whisper/route\",\n        pathname: \"/api/whisper\",\n        filename: \"route\",\n        bundlePath: \"app/api/whisper/route\"\n    },\n    resolvedPagePath: \"/Users/zhangyaqi/Documents/Mindfluence/mindfluence-build/app/api/whisper/route.ts\",\n    nextConfigOutput,\n    userland: _Users_zhangyaqi_Documents_Mindfluence_mindfluence_build_app_api_whisper_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ3aGlzcGVyJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3aGlzcGVyJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2hpc3BlciUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnpoYW5neWFxaSUyRkRvY3VtZW50cyUyRk1pbmRmbHVlbmNlJTJGbWluZGZsdWVuY2UtYnVpbGQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGemhhbmd5YXFpJTJGRG9jdW1lbnRzJTJGTWluZGZsdWVuY2UlMkZtaW5kZmx1ZW5jZS1idWlsZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDaUM7QUFDOUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy96aGFuZ3lhcWkvRG9jdW1lbnRzL01pbmRmbHVlbmNlL21pbmRmbHVlbmNlLWJ1aWxkL2FwcC9hcGkvd2hpc3Blci9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd2hpc3Blci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3doaXNwZXJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3doaXNwZXIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvemhhbmd5YXFpL0RvY3VtZW50cy9NaW5kZmx1ZW5jZS9taW5kZmx1ZW5jZS1idWlsZC9hcHAvYXBpL3doaXNwZXIvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Froute&page=%2Fapi%2Fwhisper%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Froute&page=%2Fapi%2Fwhisper%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();