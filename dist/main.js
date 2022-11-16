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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_pageload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pageload */ \"./src/modules/pageload.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\r\n\r\n\r\n\r\nconst init = () => {\r\n  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  (0,_modules_pageload__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  (0,_modules_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\r\ninit();\r\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst BurgerMenu = () => {\r\n  const burger = document.querySelector('.burger-menu');\r\n  const navbarPanel = document.querySelector('.app__sidebar');\r\n  burger.addEventListener('click', () => {\r\n    if (navbarPanel.style.display === 'none') {\r\n      navbarPanel.style.display = 'block';\r\n    } else {\r\n      navbarPanel.style.display = 'none';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BurgerMenu);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/pageload.js":
/*!*********************************!*\
  !*** ./src/modules/pageload.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst newProjectForm = document.querySelector('.new__todo-form');\r\nconst newProjectBtn = document.querySelector('.new__project-btn');\r\nconst cancelProjectBtn = document.querySelector('.cancel__btn');\r\nconst section = document.querySelector('section');\r\nconst deleteFolderBtn = document.querySelector('.delete-folder');\r\nconst modal = document.querySelector('.app__remove-card');\r\nconst modalCancelBtn = document.querySelector('.remove__cnclBtn');\r\n\r\nconst showModal = () => {\r\n  if (modal.style.display === 'none') {\r\n    section.classList.add('is-blurred');\r\n    modal.style.display = 'flex';\r\n  } else {\r\n    section.classList.remove('is-blurred');\r\n    modal.style.display = 'none';\r\n  }\r\n};\r\n\r\nconst ProjectForm = () => {\r\n  if (newProjectForm.style.display === 'block') {\r\n    newProjectBtn.style.display = 'flex';\r\n    newProjectForm.style.display = 'none';\r\n  } else {\r\n    newProjectBtn.style.display = 'none';\r\n    newProjectForm.style.display = 'block';\r\n  }\r\n};\r\n\r\nconst addNewProjectEvent = () => {\r\n  newProjectBtn.addEventListener('click', ProjectForm);\r\n  cancelProjectBtn.addEventListener('click', ProjectForm);\r\n  deleteFolderBtn.addEventListener('click', showModal);\r\n  modalCancelBtn.addEventListener('click', showModal);\r\n};\r\n\r\nconst LoadPage = () => {\r\n  addNewProjectEvent();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadPage);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/pageload.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst allTasks = JSON.parse(localStorage.getItem('todos')) || [];\r\nconst tasksUL = document.querySelector('.app__tasks-list-ul');\r\nconst tasksCounter = document.querySelector('.all_tasks');\r\nconst taskForm = document.querySelector('.app__task-new-form');\r\nconst formInput = document.querySelector('.addTaskInput');\r\n\r\nclass Task {\r\n  constructor(name) {\r\n    this.folder = 'Test';\r\n    this.name = name;\r\n    this.done = false;\r\n  }\r\n}\r\n\r\nconst setItem = (x) => {\r\n  localStorage.setItem('todos', JSON.stringify(x));\r\n  showTasks();\r\n};\r\n\r\nconst showTasks = () => {\r\n  tasksUL.innerHTML = '';\r\n  allTasks?.map((task) => {\r\n    const newListEntry = document.createElement('li');\r\n    newListEntry.innerHTML = `<input class=\"checkbox-todo\" type=\"checkbox\" />\r\n                      <p>${task.name}</p>\r\n                      <span class=\"task-date\"></span>`;\r\n    tasksUL.appendChild(newListEntry);\r\n  });\r\n  tasksCounter.textContent = allTasks.length;\r\n  storageFunctions();\r\n};\r\n\r\nconst storageFunctions = () => {\r\n  const deleteTaskBtns = Array.from(\r\n    document.querySelectorAll('.checkbox-todo')\r\n  );\r\n\r\n  deleteTaskBtns.map((button, index) => {\r\n    button.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      allTasks.splice(index, 1);\r\n      setItem(allTasks);\r\n    });\r\n  });\r\n\r\n  taskForm.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const task = new Task(formInput.value);\r\n    if (task.name != '') {\r\n      allTasks.push(task);\r\n      setItem(allTasks);\r\n    }\r\n    e.target.reset();\r\n  });\r\n};\r\n\r\nconst storageActions = () => {\r\n  showTasks();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageActions);\r\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storage.js?");

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