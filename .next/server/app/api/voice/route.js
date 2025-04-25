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
exports.id = "app/api/voice/route";
exports.ids = ["app/api/voice/route"];
exports.modules = {

/***/ "(rsc)/./app/api/voice/route.ts":
/*!********************************!*\
  !*** ./app/api/voice/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function POST(req) {\n    const { text } = await req.json();\n    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/AeRdCCKzvd23BpJoofzx', {\n        method: 'POST',\n        headers: {\n            'xi-api-key': 'sk_1fc6795cd4d46387dd70ee9052aad0325278c79e19f1caa1',\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            text,\n            model_id: 'eleven_monolingual_v1',\n            voice_settings: {\n                stability: 0.5,\n                similarity_boost: 0.75\n            }\n        })\n    });\n    console.log('🔊 ElevenLabs response status:', response.status);\n    if (!response.ok) {\n        const error = await response.text();\n        console.error('❌ ElevenLabs Error:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to generate audio'\n        }, {\n            status: 500\n        });\n    }\n    const audioBuffer = await response.arrayBuffer();\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(audioBuffer, {\n        headers: {\n            'Content-Type': 'audio/mpeg',\n            'Content-Disposition': 'inline; filename=\"voice.mp3\"'\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3ZvaWNlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXdEO0FBRWpELGVBQWVDLEtBQUtDLEdBQWdCO0lBQ3pDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUQsSUFBSUUsSUFBSTtJQUUvQixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLG9FQUNBO1FBQ0VDLFFBQVE7UUFDUkMsU0FBUztZQUNQLGNBQWM7WUFDZCxnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ25CUjtZQUNBUyxVQUFVO1lBQ1ZDLGdCQUFnQjtnQkFDZEMsV0FBVztnQkFDWEMsa0JBQWtCO1lBQ3BCO1FBQ0Y7SUFDRjtJQUdGQyxRQUFRQyxHQUFHLENBQUMsa0NBQWtDWixTQUFTYSxNQUFNO0lBRTdELElBQUksQ0FBQ2IsU0FBU2MsRUFBRSxFQUFFO1FBQ2hCLE1BQU1DLFFBQVEsTUFBTWYsU0FBU0YsSUFBSTtRQUNqQ2EsUUFBUUksS0FBSyxDQUFDLHVCQUF1QkE7UUFDckMsT0FBT3BCLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRWdCLE9BQU87UUFBMkIsR0FBRztZQUFFRixRQUFRO1FBQUk7SUFDaEY7SUFFQSxNQUFNRyxjQUFjLE1BQU1oQixTQUFTaUIsV0FBVztJQUU5QyxPQUFPLElBQUl0QixxREFBWUEsQ0FBQ3FCLGFBQWE7UUFDbkNiLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEIsdUJBQXVCO1FBQ3pCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3poYW5neWFxaS9Eb2N1bWVudHMvTWluZGZsdWVuY2UvbWluZGZsdWVuY2UtYnVpbGQvYXBwL2FwaS92b2ljZS9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgdGV4dCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICdodHRwczovL2FwaS5lbGV2ZW5sYWJzLmlvL3YxL3RleHQtdG8tc3BlZWNoL0FlUmRDQ0t6dmQyM0JwSm9vZnp4JyxcbiAgICB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ3hpLWFwaS1rZXknOiAnc2tfMWZjNjc5NWNkNGQ0NjM4N2RkNzBlZTkwNTJhYWQwMzI1Mjc4Yzc5ZTE5ZjFjYWExJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRleHQsXG4gICAgICAgIG1vZGVsX2lkOiAnZWxldmVuX21vbm9saW5ndWFsX3YxJyxcbiAgICAgICAgdm9pY2Vfc2V0dGluZ3M6IHtcbiAgICAgICAgICBzdGFiaWxpdHk6IDAuNSxcbiAgICAgICAgICBzaW1pbGFyaXR5X2Jvb3N0OiAwLjc1LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfVxuICApO1xuXG4gIGNvbnNvbGUubG9nKCfwn5SKIEVsZXZlbkxhYnMgcmVzcG9uc2Ugc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFbGV2ZW5MYWJzIEVycm9yOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBnZW5lcmF0ZSBhdWRpbycgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxuXG4gIGNvbnN0IGF1ZGlvQnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcblxuICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShhdWRpb0J1ZmZlciwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXVkaW8vbXBlZycsXG4gICAgICAnQ29udGVudC1EaXNwb3NpdGlvbic6ICdpbmxpbmU7IGZpbGVuYW1lPVwidm9pY2UubXAzXCInLFxuICAgIH0sXG4gIH0pO1xufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwidGV4dCIsImpzb24iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZWxfaWQiLCJ2b2ljZV9zZXR0aW5ncyIsInN0YWJpbGl0eSIsInNpbWlsYXJpdHlfYm9vc3QiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwib2siLCJlcnJvciIsImF1ZGlvQnVmZmVyIiwiYXJyYXlCdWZmZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/voice/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fvoice%2Froute&page=%2Fapi%2Fvoice%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvoice%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fvoice%2Froute&page=%2Fapi%2Fvoice%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvoice%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_zhangyaqi_Documents_Mindfluence_mindfluence_build_app_api_voice_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/voice/route.ts */ \"(rsc)/./app/api/voice/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/voice/route\",\n        pathname: \"/api/voice\",\n        filename: \"route\",\n        bundlePath: \"app/api/voice/route\"\n    },\n    resolvedPagePath: \"/Users/zhangyaqi/Documents/Mindfluence/mindfluence-build/app/api/voice/route.ts\",\n    nextConfigOutput,\n    userland: _Users_zhangyaqi_Documents_Mindfluence_mindfluence_build_app_api_voice_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ2b2ljZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdm9pY2UlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ2b2ljZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnpoYW5neWFxaSUyRkRvY3VtZW50cyUyRk1pbmRmbHVlbmNlJTJGbWluZGZsdWVuY2UtYnVpbGQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGemhhbmd5YXFpJTJGRG9jdW1lbnRzJTJGTWluZGZsdWVuY2UlMkZtaW5kZmx1ZW5jZS1idWlsZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDK0I7QUFDNUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy96aGFuZ3lhcWkvRG9jdW1lbnRzL01pbmRmbHVlbmNlL21pbmRmbHVlbmNlLWJ1aWxkL2FwcC9hcGkvdm9pY2Uvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3ZvaWNlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdm9pY2VcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3ZvaWNlL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3poYW5neWFxaS9Eb2N1bWVudHMvTWluZGZsdWVuY2UvbWluZGZsdWVuY2UtYnVpbGQvYXBwL2FwaS92b2ljZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fvoice%2Froute&page=%2Fapi%2Fvoice%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvoice%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fvoice%2Froute&page=%2Fapi%2Fvoice%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fvoice%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();