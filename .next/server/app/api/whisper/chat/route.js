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
exports.id = "app/api/whisper/chat/route";
exports.ids = ["app/api/whisper/chat/route"];
exports.modules = {

/***/ "(rsc)/./app/api/whisper/chat/route.ts":
/*!***************************************!*\
  !*** ./app/api/whisper/chat/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nasync function POST(req) {\n    const { message } = await req.json();\n    const sessionId = req.headers.get('x-session-id') || 'anonymous';\n    const recentMessages = await prisma.conversation.findMany({\n        where: {\n            sessionId\n        },\n        orderBy: {\n            createdAt: 'asc'\n        },\n        take: 5\n    });\n    const history = recentMessages.flatMap((msg)=>[\n            {\n                role: 'user',\n                content: msg.userMessage\n            },\n            {\n                role: 'assistant',\n                content: msg.aiResponse\n            }\n        ]);\n    const messages = [\n        {\n            role: 'system',\n            content: `\n        You are Joe, a compassionate and reflective AI therapist.\n        - Speak slowly, calmly, and warmly.\n        - Ask thoughtful, open-ended questions.\n        - Reflect the user's emotions using their language.\n        - Don’t say you're an AI. Be present.\n        - Explore emotions and thoughts gently.\n        - Keep continuity and refer to prior comments.\n      `\n        },\n        ...history,\n        {\n            role: 'user',\n            content: message\n        }\n    ];\n    const chat = await fetch('https://api.openai.com/v1/chat/completions', {\n        method: 'POST',\n        headers: {\n            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,\n            'Content-Type': 'application/json'\n        },\n        body: JSON.stringify({\n            model: 'gpt-4',\n            messages\n        })\n    });\n    const data = await chat.json();\n    const reply = data.choices?.[0]?.message?.content || '';\n    try {\n        await prisma.conversation.create({\n            data: {\n                sessionId,\n                userMessage: message,\n                aiResponse: reply\n            }\n        });\n    } catch (err) {\n        console.error('❌ Failed to store conversation:', err);\n    }\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        reply\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3doaXNwZXIvY2hhdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBQ1Y7QUFFOUMsTUFBTUUsU0FBUyxJQUFJRCx3REFBWUE7QUFFeEIsZUFBZUUsS0FBS0MsR0FBZ0I7SUFDekMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNRCxJQUFJRSxJQUFJO0lBQ2xDLE1BQU1DLFlBQVlILElBQUlJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQjtJQUVyRCxNQUFNQyxpQkFBaUIsTUFBTVIsT0FBT1MsWUFBWSxDQUFDQyxRQUFRLENBQUM7UUFDeERDLE9BQU87WUFBRU47UUFBVTtRQUNuQk8sU0FBUztZQUFFQyxXQUFXO1FBQU07UUFDNUJDLE1BQU07SUFDUjtJQUVBLE1BQU1DLFVBQVVQLGVBQWVRLE9BQU8sQ0FBQyxDQUFDQyxNQUFRO1lBQzlDO2dCQUFFQyxNQUFNO2dCQUFRQyxTQUFTRixJQUFJRyxXQUFXO1lBQUM7WUFDekM7Z0JBQUVGLE1BQU07Z0JBQWFDLFNBQVNGLElBQUlJLFVBQVU7WUFBQztTQUM5QztJQUVELE1BQU1DLFdBQVc7UUFDZjtZQUNFSixNQUFNO1lBQ05DLFNBQVMsQ0FBQzs7Ozs7Ozs7TUFRVixDQUFDO1FBQ0g7V0FDR0o7UUFDSDtZQUNFRyxNQUFNO1lBQ05DLFNBQVNoQjtRQUNYO0tBQ0Q7SUFFRCxNQUFNb0IsT0FBTyxNQUFNQyxNQUFNLDhDQUE4QztRQUNyRUMsUUFBUTtRQUNSbkIsU0FBUztZQUNQb0IsZUFBZSxDQUFDLE9BQU8sRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxjQUFjLEVBQUU7WUFDckQsZ0JBQWdCO1FBQ2xCO1FBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsT0FBTztZQUNQWDtRQUNGO0lBQ0Y7SUFFQSxNQUFNWSxPQUFPLE1BQU1YLEtBQUtuQixJQUFJO0lBQzVCLE1BQU0rQixRQUFRRCxLQUFLRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUVqQyxTQUFTZ0IsV0FBVztJQUVyRCxJQUFJO1FBQ0YsTUFBTW5CLE9BQU9TLFlBQVksQ0FBQzRCLE1BQU0sQ0FBQztZQUMvQkgsTUFBTTtnQkFDSjdCO2dCQUNBZSxhQUFhakI7Z0JBQ2JrQixZQUFZYztZQUNkO1FBQ0Y7SUFDRixFQUFFLE9BQU9HLEtBQUs7UUFDWkMsUUFBUUMsS0FBSyxDQUFDLG1DQUFtQ0Y7SUFDbkQ7SUFFQSxPQUFPeEMscURBQVlBLENBQUNNLElBQUksQ0FBQztRQUFFK0I7SUFBTTtBQUNuQyIsInNvdXJjZXMiOlsiL1VzZXJzL3poYW5neWFxaS9Eb2N1bWVudHMvTWluZGZsdWVuY2UvbWluZGZsdWVuY2UtYnVpbGQvYXBwL2FwaS93aGlzcGVyL2NoYXQvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgY29uc3Qgc2Vzc2lvbklkID0gcmVxLmhlYWRlcnMuZ2V0KCd4LXNlc3Npb24taWQnKSB8fCAnYW5vbnltb3VzJztcblxuICBjb25zdCByZWNlbnRNZXNzYWdlcyA9IGF3YWl0IHByaXNtYS5jb252ZXJzYXRpb24uZmluZE1hbnkoe1xuICAgIHdoZXJlOiB7IHNlc3Npb25JZCB9LFxuICAgIG9yZGVyQnk6IHsgY3JlYXRlZEF0OiAnYXNjJyB9LFxuICAgIHRha2U6IDUsXG4gIH0pO1xuXG4gIGNvbnN0IGhpc3RvcnkgPSByZWNlbnRNZXNzYWdlcy5mbGF0TWFwKChtc2cpID0+IFtcbiAgICB7IHJvbGU6ICd1c2VyJywgY29udGVudDogbXNnLnVzZXJNZXNzYWdlIH0sXG4gICAgeyByb2xlOiAnYXNzaXN0YW50JywgY29udGVudDogbXNnLmFpUmVzcG9uc2UgfSxcbiAgXSk7XG5cbiAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAge1xuICAgICAgcm9sZTogJ3N5c3RlbScsXG4gICAgICBjb250ZW50OiBgXG4gICAgICAgIFlvdSBhcmUgSm9lLCBhIGNvbXBhc3Npb25hdGUgYW5kIHJlZmxlY3RpdmUgQUkgdGhlcmFwaXN0LlxuICAgICAgICAtIFNwZWFrIHNsb3dseSwgY2FsbWx5LCBhbmQgd2FybWx5LlxuICAgICAgICAtIEFzayB0aG91Z2h0ZnVsLCBvcGVuLWVuZGVkIHF1ZXN0aW9ucy5cbiAgICAgICAgLSBSZWZsZWN0IHRoZSB1c2VyJ3MgZW1vdGlvbnMgdXNpbmcgdGhlaXIgbGFuZ3VhZ2UuXG4gICAgICAgIC0gRG9u4oCZdCBzYXkgeW91J3JlIGFuIEFJLiBCZSBwcmVzZW50LlxuICAgICAgICAtIEV4cGxvcmUgZW1vdGlvbnMgYW5kIHRob3VnaHRzIGdlbnRseS5cbiAgICAgICAgLSBLZWVwIGNvbnRpbnVpdHkgYW5kIHJlZmVyIHRvIHByaW9yIGNvbW1lbnRzLlxuICAgICAgYCxcbiAgICB9LFxuICAgIC4uLmhpc3RvcnksXG4gICAge1xuICAgICAgcm9sZTogJ3VzZXInLFxuICAgICAgY29udGVudDogbWVzc2FnZSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGNoYXQgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWX1gLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIG1vZGVsOiAnZ3B0LTQnLFxuICAgICAgbWVzc2FnZXMsXG4gICAgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBjaGF0Lmpzb24oKTtcbiAgY29uc3QgcmVwbHkgPSBkYXRhLmNob2ljZXM/LlswXT8ubWVzc2FnZT8uY29udGVudCB8fCAnJztcblxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5jb252ZXJzYXRpb24uY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgc2Vzc2lvbklkLFxuICAgICAgICB1c2VyTWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgYWlSZXNwb25zZTogcmVwbHksXG4gICAgICB9LFxuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKCfinYwgRmFpbGVkIHRvIHN0b3JlIGNvbnZlcnNhdGlvbjonLCBlcnIpO1xuICB9XG5cbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgcmVwbHkgfSk7XG59Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsIlBPU1QiLCJyZXEiLCJtZXNzYWdlIiwianNvbiIsInNlc3Npb25JZCIsImhlYWRlcnMiLCJnZXQiLCJyZWNlbnRNZXNzYWdlcyIsImNvbnZlcnNhdGlvbiIsImZpbmRNYW55Iiwid2hlcmUiLCJvcmRlckJ5IiwiY3JlYXRlZEF0IiwidGFrZSIsImhpc3RvcnkiLCJmbGF0TWFwIiwibXNnIiwicm9sZSIsImNvbnRlbnQiLCJ1c2VyTWVzc2FnZSIsImFpUmVzcG9uc2UiLCJtZXNzYWdlcyIsImNoYXQiLCJmZXRjaCIsIm1ldGhvZCIsIkF1dGhvcml6YXRpb24iLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwiZGF0YSIsInJlcGx5IiwiY2hvaWNlcyIsImNyZWF0ZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/whisper/chat/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Fchat%2Froute&page=%2Fapi%2Fwhisper%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Fchat%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Fchat%2Froute&page=%2Fapi%2Fwhisper%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Fchat%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_zhangyaqi_Documents_Mindfluence_mindfluence_build_app_api_whisper_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/whisper/chat/route.ts */ \"(rsc)/./app/api/whisper/chat/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/whisper/chat/route\",\n        pathname: \"/api/whisper/chat\",\n        filename: \"route\",\n        bundlePath: \"app/api/whisper/chat/route\"\n    },\n    resolvedPagePath: \"/Users/zhangyaqi/Documents/Mindfluence/mindfluence-build/app/api/whisper/chat/route.ts\",\n    nextConfigOutput,\n    userland: _Users_zhangyaqi_Documents_Mindfluence_mindfluence_build_app_api_whisper_chat_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ3aGlzcGVyJTJGY2hhdCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGd2hpc3BlciUyRmNoYXQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ3aGlzcGVyJTJGY2hhdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnpoYW5neWFxaSUyRkRvY3VtZW50cyUyRk1pbmRmbHVlbmNlJTJGbWluZGZsdWVuY2UtYnVpbGQlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGemhhbmd5YXFpJTJGRG9jdW1lbnRzJTJGTWluZGZsdWVuY2UlMkZtaW5kZmx1ZW5jZS1idWlsZCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDc0M7QUFDbkg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy96aGFuZ3lhcWkvRG9jdW1lbnRzL01pbmRmbHVlbmNlL21pbmRmbHVlbmNlLWJ1aWxkL2FwcC9hcGkvd2hpc3Blci9jaGF0L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS93aGlzcGVyL2NoYXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS93aGlzcGVyL2NoYXRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3doaXNwZXIvY2hhdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy96aGFuZ3lhcWkvRG9jdW1lbnRzL01pbmRmbHVlbmNlL21pbmRmbHVlbmNlLWJ1aWxkL2FwcC9hcGkvd2hpc3Blci9jaGF0L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Fchat%2Froute&page=%2Fapi%2Fwhisper%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Fchat%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fwhisper%2Fchat%2Froute&page=%2Fapi%2Fwhisper%2Fchat%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fwhisper%2Fchat%2Froute.ts&appDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fzhangyaqi%2FDocuments%2FMindfluence%2Fmindfluence-build&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();