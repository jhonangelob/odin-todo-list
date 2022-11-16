/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_BurgerMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/BurgerMenu */ \"./src/modules/BurgerMenu.js\");\n/* harmony import */ var _modules_LoadPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/LoadPage */ \"./src/modules/LoadPage.js\");\n/* harmony import */ var _modules_storageActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storageActions */ \"./src/modules/storageActions.js\");\n\r\n\r\n\r\n\r\nconst init = () => {\r\n  (0,_modules_BurgerMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_LoadPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_modules_storageActions__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/BurgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/BurgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst BurgerMenu = () => {\r\n  const burger = document.querySelector('.burger-menu');\r\n  const navbarPanel = document.querySelector('.app__sidebar');\r\n  burger.addEventListener('click', () => {\r\n    if (navbarPanel.style.display === 'none') {\r\n      navbarPanel.style.display = 'block';\r\n    } else {\r\n      navbarPanel.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerMenu);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/BurgerMenu.js?");

/***/ }),

/***/ "./src/modules/LoadPage.js":
/*!*********************************!*\
  !*** ./src/modules/LoadPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst newProjectForm = document.querySelector('.new__todo-form');\r\nconst newProjectBtn = document.querySelector('.new__project-btn');\r\nconst cancelProjectBtn = document.querySelector('.cancel__btn');\r\nconst section = document.querySelector('section');\r\nconst deleteFolderBtn = document.querySelector('.delete-folder');\r\nconst modal = document.querySelector('.app__remove-card');\r\nconst modalCancelBtn = document.querySelector('.remove__cnclBtn');\r\n\r\nconst showModal = () => {\r\n  if (modal.style.display === 'none') {\r\n    section.classList.add('is-blurred');\r\n    modal.style.display = 'flex';\r\n  } else {\r\n    section.classList.remove('is-blurred');\r\n    modal.style.display = 'none';\r\n  }\r\n};\r\n\r\nconst ProjectForm = () => {\r\n  if (newProjectForm.style.display === 'block') {\r\n    newProjectBtn.style.display = 'flex';\r\n    newProjectForm.style.display = 'none';\r\n  } else {\r\n    newProjectBtn.style.display = 'none';\r\n    newProjectForm.style.display = 'block';\r\n  }\r\n};\r\n\r\nconst addNewProjectEvent = () => {\r\n  newProjectBtn.addEventListener('click', ProjectForm);\r\n  cancelProjectBtn.addEventListener('click', ProjectForm);\r\n  deleteFolderBtn.addEventListener('click', showModal);\r\n  modalCancelBtn.addEventListener('click', showModal);\r\n};\r\n\r\nconst LoadPage = () => {\r\n  addNewProjectEvent();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadPage);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/LoadPage.js?");

/***/ }),

/***/ "./src/modules/storageActions.js":
/*!***************************************!*\
  !*** ./src/modules/storageActions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todos = JSON.parse(localStorage.getItem('todos')) || [];\r\n\r\nconst showTodoList = () => {\r\n  const tasksUL = document.querySelector('.app__tasks-list-ul');\r\n\r\n  todos?.map((todo) => {\r\n    const newT = document.createElement('li');\r\n    newT.innerHTML = `<input type=\"checkbox\" />\r\n    <p>${todo.name}</p>\r\n    <span class=\"task-date\">00/00/0000</span>`;\r\n    tasksUL.appendChild(newT);\r\n  });\r\n\r\n  const tasksCounter = document.querySelector('.all_tasks');\r\n  tasksCounter.textContent = todos.length;\r\n};\r\n\r\nconst addTodos = () => {\r\n  const newTodo = {\r\n    folder: 'Work',\r\n    name: 'Feed the dog',\r\n    done: false,\r\n  };\r\n\r\n  todos.push(newTodo);\r\n  localStorage.setItem('todos', JSON.stringify(todos));\r\n};\r\n\r\nconst getProjects = () => {\r\n  const taskUL = document.querySelector('.app__sidebar-ul');\r\n\r\n  todos?.map((todo) => {\r\n    const li = document.createElement('li');\r\n    li.innerHTML = `<button><i class=\"bi bi-collection-fill\"></i>${todo.folder}</button>`;\r\n    taskUL.appendChild(li);\r\n  });\r\n};\r\n\r\nconst storageActions = () => {\r\n  showTodoList();\r\n  getProjects();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageActions);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storageActions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;