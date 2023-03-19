/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Body */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    background-color: black;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header {\n    background-image: linear-gradient(#e26c33, #df5e3a, #302043,black);\n    \n    height: 125px;\n    width: 100%;\n}\n\n#navBar {\n    display: flex;\n\n    background-color: transparent;\n}\n\n/* Mid */\n.middle {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Main Logo at the start */\n#mainLogo {\n    width: 100%;\n}\n\n/* Used when page is in the works */\n#underConstruction {\n    color: white;\n    font-size: 36px;\n}\n\n/* Language Buttons */\n.middle button {\n    background-color: white;\n\n    background-color: bisque;\n    font-size: 16px;\n    height: 50px;\n    width: 150px;\n    padding: 5px 20px;\n    margin: 0px 20px;\n\n    text-align: center;\n    border-radius: 10px;\n}\n\n/* Footer */\n.footer {\n    background-color:  black;\n    color: white;\n    position: fixed;\n    bottom: 0;\n    padding: 2px;\n  \n    height: 25px;\n    width: 100%;\n  \n    text-align: center;\n}  \n\n.footer a {\n    color: white;\n}\n\n/* Mobile screen */\n@media only screen and (max-width: 600px) {\n    /* .square {\n      padding: .7em;\n    } */\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,kEAAkE;;IAElE,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;;IAEb,6BAA6B;AACjC;;AAEA,QAAQ;AACR;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,2BAA2B;AAC3B;IACI,WAAW;AACf;;AAEA,mCAAmC;AACnC;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA,qBAAqB;AACrB;IACI,uBAAuB;;IAEvB,wBAAwB;IACxB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;;IAEhB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,SAAS;IACT,YAAY;;IAEZ,YAAY;IACZ,WAAW;;IAEX,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA,kBAAkB;AAClB;IACI;;OAEG;AACP","sourcesContent":["/* Body */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    background-color: black;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header {\n    background-image: linear-gradient(#e26c33, #df5e3a, #302043,black);\n    \n    height: 125px;\n    width: 100%;\n}\n\n#navBar {\n    display: flex;\n\n    background-color: transparent;\n}\n\n/* Mid */\n.middle {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Main Logo at the start */\n#mainLogo {\n    width: 100%;\n}\n\n/* Used when page is in the works */\n#underConstruction {\n    color: white;\n    font-size: 36px;\n}\n\n/* Language Buttons */\n.middle button {\n    background-color: white;\n\n    background-color: bisque;\n    font-size: 16px;\n    height: 50px;\n    width: 150px;\n    padding: 5px 20px;\n    margin: 0px 20px;\n\n    text-align: center;\n    border-radius: 10px;\n}\n\n/* Footer */\n.footer {\n    background-color:  black;\n    color: white;\n    position: fixed;\n    bottom: 0;\n    padding: 2px;\n  \n    height: 25px;\n    width: 100%;\n  \n    text-align: center;\n}  \n\n.footer a {\n    color: white;\n}\n\n/* Mobile screen */\n@media only screen and (max-width: 600px) {\n    /* .square {\n      padding: .7em;\n    } */\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/Assets/Functions/foot.js":
/*!**************************************!*\
  !*** ./src/Assets/Functions/foot.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ foot)
/* harmony export */ });
function foot(footer) {
    footer.innerHTML = '<p>Made by Kevin Drake <a href="https://github.com/kdrake1992"> <i class="fa-brands fa-github"></i></a></p>'
}

/***/ }),

/***/ "./src/Assets/Pages/enHome.js":
/*!************************************!*\
  !*** ./src/Assets/Pages/enHome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enHome)
/* harmony export */ });
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/Assets/Pages/head.js");


function enHome(header, mid) {

    (0,_head__WEBPACK_IMPORTED_MODULE_0__["default"])(header, 'eng');
    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = 'Work in Progress';
    underConstruction.setAttribute('id', 'underConstruction')
    mid.appendChild(underConstruction);
}

/***/ }),

/***/ "./src/Assets/Pages/head.js":
/*!**********************************!*\
  !*** ./src/Assets/Pages/head.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ head)
/* harmony export */ });
function head(header, lang) {

    // Creates the initial div's used in header
    const navBar = document.createElement('div');
    navBar.setAttribute('id', 'navBar');

    const navLang = document.createElement('div');
    navLang.setAttribute('id', 'navLang');

    // The dropdown
    // Home page
    const home = document.createElement('button');
    home.classList.add('navBarButtons');


    // Training page
    const training = document.createElement('button');
    training.classList.add('navBarButtons');


    // About page
    const about = document.createElement('button');
    about.classList.add('navBarButtons');

    // Contact page
    const contact = document.createElement('button');
    contact.classList.add('navBarButtons');


    // Side language change
    const navEn = document.createElement('button');
    navEn.innerHTML = 'English';

    const navJp = document.createElement('button');
    navJp.innerHTML = '日本語';

    navLang.appendChild(navEn);
    navLang.appendChild(navJp)

    // English NavBar
    if(lang = 'eng') {
        home.innerHTML = 'Home';
        training.innerHTML = 'Training';
        about.innerHTML = 'About'
        contact.innerHTML = 'Contact'

        navBar.appendChild(home);
        navBar.appendChild(training);
        navBar.append(about);
        navBar.append(contact);
        navBar.appendChild(navLang);
        header.appendChild(navBar);
        console.log('English')
    }

    // Japanese NavBar
    else {
        home.innerHTML = 'Home';
        training.innerHTML = 'Training';
        about.innerHTML = 'About'
        contact.innerHTML = 'Contact'

        navBar.appendChild(home);
        navBar.appendChild(training);
        navBar.append(about);
        navBar.append(contact);
        navBar.appendChild(navLang);
        header.appendChild(navBar);
        console.log('日本語です。')
    }
}

/***/ }),

/***/ "./src/Assets/Pages/jpHome.js":
/*!************************************!*\
  !*** ./src/Assets/Pages/jpHome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ jpHome)
/* harmony export */ });
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head */ "./src/Assets/Pages/head.js");


function jpHome(header, mid) {

    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = '工事中';
    underConstruction.setAttribute('id', 'underConstruction')
    mid.appendChild(underConstruction);
}

/***/ }),

/***/ "./src/Assets/Pages/mid.js":
/*!*********************************!*\
  !*** ./src/Assets/Pages/mid.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mid)
/* harmony export */ });
/* harmony import */ var _jpHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jpHome */ "./src/Assets/Pages/jpHome.js");
/* harmony import */ var _enHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enHome */ "./src/Assets/Pages/enHome.js");



function mid(header, mid) {
    // Reset
    // header.textContent = '';
    // mid.textContent = '';

    // Create language option panel
    const choice = document.createElement('div');
    choice.classList.add('choice')

    // Choose lanaguage
    const eng = document.createElement('button');
    eng.innerHTML = 'English';
    choice.appendChild(eng);

    const nihongo = document.createElement('button');
    nihongo.innerHTML = '日本語';
    choice.appendChild(nihongo);

    mid.appendChild(choice);

    // Event listeners
    eng.addEventListener('click', () => {
        choice.remove();
        (0,_enHome__WEBPACK_IMPORTED_MODULE_1__["default"])(header, mid);
    })

    nihongo.addEventListener('click', () => {
        choice.remove();
        (0,_jpHome__WEBPACK_IMPORTED_MODULE_0__["default"])(header, mid)
    })
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_fontawesome_free_js_all__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Assets_Logos_Main_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Assets/Logos/Main.png */ "./src/Assets/Logos/Main.png");
/* harmony import */ var _Assets_Functions_foot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/Functions/foot */ "./src/Assets/Functions/foot.js");
/* harmony import */ var _Assets_Pages_mid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets/Pages/mid */ "./src/Assets/Pages/mid.js");







// Intial Site Loadup
function component() {
    const GaMan = document.body;

    // Logo import
    let mainLogo = new Image();
    mainLogo.src = _Assets_Logos_Main_png__WEBPACK_IMPORTED_MODULE_2__;
    mainLogo.setAttribute('id', 'mainLogo');

    // Page layout
    const header = document.createElement('div');
    header.classList.add('header');

    const middle = document.createElement('div');
    middle.classList.add('middle');
    middle.appendChild(mainLogo);
    (0,_Assets_Pages_mid__WEBPACK_IMPORTED_MODULE_4__["default"])(header, middle);

    const footer = document.createElement('div');
    footer.classList.add('footer');
    (0,_Assets_Functions_foot__WEBPACK_IMPORTED_MODULE_3__["default"])(footer);

    GaMan.appendChild(header);
    GaMan.appendChild(middle);
    GaMan.appendChild(footer);

    return GaMan;
}

component();

/***/ }),

/***/ "./src/Assets/Logos/Main.png":
/*!***********************************!*\
  !*** ./src/Assets/Logos/Main.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c9410ec749531e22cbd8.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgamanrunning"] = self["webpackChunkgamanrunning"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_css-loader_dist_runt-2de1a3"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1dDaERBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2dhbWFucnVubmluZy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvLi9zcmMvQXNzZXRzL0Z1bmN0aW9ucy9mb290LmpzIiwid2VicGFjazovL2dhbWFucnVubmluZy8uL3NyYy9Bc3NldHMvUGFnZXMvZW5Ib21lLmpzIiwid2VicGFjazovL2dhbWFucnVubmluZy8uL3NyYy9Bc3NldHMvUGFnZXMvaGVhZC5qcyIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvLi9zcmMvQXNzZXRzL1BhZ2VzL2pwSG9tZS5qcyIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvLi9zcmMvQXNzZXRzL1BhZ2VzL21pZC5qcyIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBCb2R5ICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZTI2YzMzLCAjZGY1ZTNhLCAjMzAyMDQzLGJsYWNrKTtcXG4gICAgXFxuICAgIGhlaWdodDogMTI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbmF2QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIE1pZCAqL1xcbi5taWRkbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogTWFpbiBMb2dvIGF0IHRoZSBzdGFydCAqL1xcbiNtYWluTG9nbyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBVc2VkIHdoZW4gcGFnZSBpcyBpbiB0aGUgd29ya3MgKi9cXG4jdW5kZXJDb25zdHJ1Y3Rpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG59XFxuXFxuLyogTGFuZ3VhZ2UgQnV0dG9ucyAqL1xcbi5taWRkbGUgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgIG1hcmdpbjogMHB4IDIwcHg7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgXFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn0gIFxcblxcbi5mb290ZXIgYSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLyogTW9iaWxlIHNjcmVlbiAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLyogLnNxdWFyZSB7XFxuICAgICAgcGFkZGluZzogLjdlbTtcXG4gICAgfSAqL1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFNBQVM7QUFDVDtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBLFdBQVc7QUFDWDtJQUNJLGtFQUFrRTs7SUFFbEUsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7O0lBRWIsNkJBQTZCO0FBQ2pDOztBQUVBLFFBQVE7QUFDUjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsbUNBQW1DO0FBQ25DO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUEscUJBQXFCO0FBQ3JCO0lBQ0ksdUJBQXVCOztJQUV2Qix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTs7SUFFWixZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBLGtCQUFrQjtBQUNsQjtJQUNJOztPQUVHO0FBQ1BcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQm9keSAqL1xcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2UyNmMzMywgI2RmNWUzYSwgIzMwMjA0MyxibGFjayk7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEyNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI25hdkJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBNaWQgKi9cXG4ubWlkZGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1haW4gTG9nbyBhdCB0aGUgc3RhcnQgKi9cXG4jbWFpbkxvZ28ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogVXNlZCB3aGVuIHBhZ2UgaXMgaW4gdGhlIHdvcmtzICovXFxuI3VuZGVyQ29uc3RydWN0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi8qIExhbmd1YWdlIEJ1dHRvbnMgKi9cXG4ubWlkZGxlIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBtYXJnaW46IDBweCAyMHB4O1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gIFxcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICBcXG5cXG4uZm9vdGVyIGEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIE1vYmlsZSBzY3JlZW4gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIC5zcXVhcmUge1xcbiAgICAgIHBhZGRpbmc6IC43ZW07XFxuICAgIH0gKi9cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3QoZm9vdGVyKSB7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICc8cD5NYWRlIGJ5IEtldmluIERyYWtlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2RyYWtlMTk5MlwiPiA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+PC9hPjwvcD4nXG59IiwiaW1wb3J0IGhlYWQgZnJvbSAnLi9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5Ib21lKGhlYWRlciwgbWlkKSB7XG5cbiAgICBoZWFkKGhlYWRlciwgJ2VuZycpO1xuICAgIGNvbnN0IHVuZGVyQ29uc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5kZXJDb25zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gJ1dvcmsgaW4gUHJvZ3Jlc3MnO1xuICAgIHVuZGVyQ29uc3RydWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndW5kZXJDb25zdHJ1Y3Rpb24nKVxuICAgIG1pZC5hcHBlbmRDaGlsZCh1bmRlckNvbnN0cnVjdGlvbik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZChoZWFkZXIsIGxhbmcpIHtcblxuICAgIC8vIENyZWF0ZXMgdGhlIGluaXRpYWwgZGl2J3MgdXNlZCBpbiBoZWFkZXJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZCYXIuc2V0QXR0cmlidXRlKCdpZCcsICduYXZCYXInKTtcblxuICAgIGNvbnN0IG5hdkxhbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZMYW5nLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2TGFuZycpO1xuXG4gICAgLy8gVGhlIGRyb3Bkb3duXG4gICAgLy8gSG9tZSBwYWdlXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgnbmF2QmFyQnV0dG9ucycpO1xuXG5cbiAgICAvLyBUcmFpbmluZyBwYWdlXG4gICAgY29uc3QgdHJhaW5pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0cmFpbmluZy5jbGFzc0xpc3QuYWRkKCduYXZCYXJCdXR0b25zJyk7XG5cblxuICAgIC8vIEFib3V0IHBhZ2VcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFib3V0LmNsYXNzTGlzdC5hZGQoJ25hdkJhckJ1dHRvbnMnKTtcblxuICAgIC8vIENvbnRhY3QgcGFnZVxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ25hdkJhckJ1dHRvbnMnKTtcblxuXG4gICAgLy8gU2lkZSBsYW5ndWFnZSBjaGFuZ2VcbiAgICBjb25zdCBuYXZFbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG5hdkVuLmlubmVySFRNTCA9ICdFbmdsaXNoJztcblxuICAgIGNvbnN0IG5hdkpwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmF2SnAuaW5uZXJIVE1MID0gJ+aXpeacrOiqnic7XG5cbiAgICBuYXZMYW5nLmFwcGVuZENoaWxkKG5hdkVuKTtcbiAgICBuYXZMYW5nLmFwcGVuZENoaWxkKG5hdkpwKVxuXG4gICAgLy8gRW5nbGlzaCBOYXZCYXJcbiAgICBpZihsYW5nID0gJ2VuZycpIHtcbiAgICAgICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgICAgIHRyYWluaW5nLmlubmVySFRNTCA9ICdUcmFpbmluZyc7XG4gICAgICAgIGFib3V0LmlubmVySFRNTCA9ICdBYm91dCdcbiAgICAgICAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCdcblxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZCh0cmFpbmluZyk7XG4gICAgICAgIG5hdkJhci5hcHBlbmQoYWJvdXQpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kKGNvbnRhY3QpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2TGFuZyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgICAgICBjb25zb2xlLmxvZygnRW5nbGlzaCcpXG4gICAgfVxuXG4gICAgLy8gSmFwYW5lc2UgTmF2QmFyXG4gICAgZWxzZSB7XG4gICAgICAgIGhvbWUuaW5uZXJIVE1MID0gJ0hvbWUnO1xuICAgICAgICB0cmFpbmluZy5pbm5lckhUTUwgPSAnVHJhaW5pbmcnO1xuICAgICAgICBhYm91dC5pbm5lckhUTUwgPSAnQWJvdXQnXG4gICAgICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gJ0NvbnRhY3QnXG5cbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQodHJhaW5pbmcpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kKGFib3V0KTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZChjb250YWN0KTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxhbmcpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICAgICAgY29uc29sZS5sb2coJ+aXpeacrOiqnuOBp+OBmeOAgicpXG4gICAgfVxufSIsImltcG9ydCBoZWFkIGZyb20gJy4vaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGpwSG9tZShoZWFkZXIsIG1pZCkge1xuXG4gICAgY29uc3QgdW5kZXJDb25zdHJ1Y3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB1bmRlckNvbnN0cnVjdGlvbi5pbm5lckhUTUwgPSAn5bel5LqL5LitJztcbiAgICB1bmRlckNvbnN0cnVjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VuZGVyQ29uc3RydWN0aW9uJylcbiAgICBtaWQuYXBwZW5kQ2hpbGQodW5kZXJDb25zdHJ1Y3Rpb24pO1xufSIsImltcG9ydCBqcEhvbWUgZnJvbSBcIi4vanBIb21lXCI7XG5pbXBvcnQgZW5Ib21lIGZyb20gXCIuL2VuSG9tZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWQoaGVhZGVyLCBtaWQpIHtcbiAgICAvLyBSZXNldFxuICAgIC8vIGhlYWRlci50ZXh0Q29udGVudCA9ICcnO1xuICAgIC8vIG1pZC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgLy8gQ3JlYXRlIGxhbmd1YWdlIG9wdGlvbiBwYW5lbFxuICAgIGNvbnN0IGNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNob2ljZS5jbGFzc0xpc3QuYWRkKCdjaG9pY2UnKVxuXG4gICAgLy8gQ2hvb3NlIGxhbmFndWFnZVxuICAgIGNvbnN0IGVuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVuZy5pbm5lckhUTUwgPSAnRW5nbGlzaCc7XG4gICAgY2hvaWNlLmFwcGVuZENoaWxkKGVuZyk7XG5cbiAgICBjb25zdCBuaWhvbmdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmlob25nby5pbm5lckhUTUwgPSAn5pel5pys6KqeJztcbiAgICBjaG9pY2UuYXBwZW5kQ2hpbGQobmlob25nbyk7XG5cbiAgICBtaWQuYXBwZW5kQ2hpbGQoY2hvaWNlKTtcblxuICAgIC8vIEV2ZW50IGxpc3RlbmVyc1xuICAgIGVuZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hvaWNlLnJlbW92ZSgpO1xuICAgICAgICBlbkhvbWUoaGVhZGVyLCBtaWQpO1xuICAgIH0pXG5cbiAgICBuaWhvbmdvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjaG9pY2UucmVtb3ZlKCk7XG4gICAgICAgIGpwSG9tZShoZWFkZXIsIG1pZClcbiAgICB9KVxufSIsImltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vQXNzZXRzL0xvZ29zL01haW4ucG5nJztcblxuaW1wb3J0IGZvb3QgZnJvbSAnLi9Bc3NldHMvRnVuY3Rpb25zL2Zvb3QnO1xuaW1wb3J0IG1pZCBmcm9tICcuL0Fzc2V0cy9QYWdlcy9taWQnXG5cbi8vIEludGlhbCBTaXRlIExvYWR1cFxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAgIGNvbnN0IEdhTWFuID0gZG9jdW1lbnQuYm9keTtcblxuICAgIC8vIExvZ28gaW1wb3J0XG4gICAgbGV0IG1haW5Mb2dvID0gbmV3IEltYWdlKCk7XG4gICAgbWFpbkxvZ28uc3JjID0gbG9nbztcbiAgICBtYWluTG9nby5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21haW5Mb2dvJyk7XG5cbiAgICAvLyBQYWdlIGxheW91dFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IG1pZGRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1pZGRsZS5jbGFzc0xpc3QuYWRkKCdtaWRkbGUnKTtcbiAgICBtaWRkbGUuYXBwZW5kQ2hpbGQobWFpbkxvZ28pO1xuICAgIG1pZChoZWFkZXIsIG1pZGRsZSk7XG5cbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgZm9vdChmb290ZXIpO1xuXG4gICAgR2FNYW4uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBHYU1hbi5hcHBlbmRDaGlsZChtaWRkbGUpO1xuICAgIEdhTWFuLmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICByZXR1cm4gR2FNYW47XG59XG5cbmNvbXBvbmVudCgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rZ2FtYW5ydW5uaW5nXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2dhbWFucnVubmluZ1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19mb3J0YXdlc29tZV9mb250YXdlc29tZS1mcmVlX2pzX2FsbF9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnQtMmRlMWEzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=