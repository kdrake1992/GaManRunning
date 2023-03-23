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
___CSS_LOADER_EXPORT___.push([module.id, "/* Body */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    background-color: black;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header {\n    background-image: linear-gradient(#e26c33, #df5e3a, #302043,black);\n    \n    height: 100px;\n    width: 100%;\n}\n\n#navBar, #navLang {\n    display: flex;\n    justify-content: space-around;\n    padding: 15px 10px;\n\n    background-color: rgba(0,0,0,.2);\n\n    color: #fff;\n}\n\n#navLang {\n    justify-content: center;\n    background-color: transparent;\n}\n\n#navBar button {\n    color: white;\n    font-size: 14px;\n    background-color: transparent;\n    border: none;\n\n    text-align: center;\n    padding: 10px 20px;\n}\n\n#navBar button:hover { \n    color: wheat;\n    text-decoration: underline;\n}\n\n/* Mid */\n.middle {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Main Logo at the start */\n#mainLogo {\n    width: 100%;\n}\n\n/* Used when page is in the works */\n#underConstruction {\n    color: white;\n    font-size: 36px;\n}\n\n/* Language Buttons */\n.middle button {\n    background-color: white;\n\n    background-color: bisque;\n    font-size: 16px;\n    height: 50px;\n    width: 150px;\n    padding: 5px 20px;\n    margin: 0px 20px;\n\n    text-align: center;\n    border-radius: 10px;\n}\n\n/* Footer */\n.footer {\n    background-color:  black;\n    color: white;\n    position: fixed;\n    bottom: 0;\n    padding: 2px;\n  \n    height: 25px;\n    width: 100%;\n  \n    text-align: center;\n}  \n\n.footer a {\n    color: white;\n}\n\n/* Mobile screen */\n@media only screen and (max-width: 600px) {\n    /* .square {\n      padding: .7em;\n    } */\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,SAAS;AACT;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,kEAAkE;;IAElE,aAAa;IACb,WAAW;AACf;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;;IAElB,gCAAgC;;IAEhC,WAAW;AACf;;AAEA;IACI,uBAAuB;IACvB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,6BAA6B;IAC7B,YAAY;;IAEZ,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,0BAA0B;AAC9B;;AAEA,QAAQ;AACR;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA,2BAA2B;AAC3B;IACI,WAAW;AACf;;AAEA,mCAAmC;AACnC;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA,qBAAqB;AACrB;IACI,uBAAuB;;IAEvB,wBAAwB;IACxB,eAAe;IACf,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;;IAEhB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,wBAAwB;IACxB,YAAY;IACZ,eAAe;IACf,SAAS;IACT,YAAY;;IAEZ,YAAY;IACZ,WAAW;;IAEX,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA,kBAAkB;AAClB;IACI;;OAEG;AACP","sourcesContent":["/* Body */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: sans-serif;\n    background-color: black;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\n.header {\n    background-image: linear-gradient(#e26c33, #df5e3a, #302043,black);\n    \n    height: 100px;\n    width: 100%;\n}\n\n#navBar, #navLang {\n    display: flex;\n    justify-content: space-around;\n    padding: 15px 10px;\n\n    background-color: rgba(0,0,0,.2);\n\n    color: #fff;\n}\n\n#navLang {\n    justify-content: center;\n    background-color: transparent;\n}\n\n#navBar button {\n    color: white;\n    font-size: 14px;\n    background-color: transparent;\n    border: none;\n\n    text-align: center;\n    padding: 10px 20px;\n}\n\n#navBar button:hover { \n    color: wheat;\n    text-decoration: underline;\n}\n\n/* Mid */\n.middle {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n/* Main Logo at the start */\n#mainLogo {\n    width: 100%;\n}\n\n/* Used when page is in the works */\n#underConstruction {\n    color: white;\n    font-size: 36px;\n}\n\n/* Language Buttons */\n.middle button {\n    background-color: white;\n\n    background-color: bisque;\n    font-size: 16px;\n    height: 50px;\n    width: 150px;\n    padding: 5px 20px;\n    margin: 0px 20px;\n\n    text-align: center;\n    border-radius: 10px;\n}\n\n/* Footer */\n.footer {\n    background-color:  black;\n    color: white;\n    position: fixed;\n    bottom: 0;\n    padding: 2px;\n  \n    height: 25px;\n    width: 100%;\n  \n    text-align: center;\n}  \n\n.footer a {\n    color: white;\n}\n\n/* Mobile screen */\n@media only screen and (max-width: 600px) {\n    /* .square {\n      padding: .7em;\n    } */\n}"],"sourceRoot":""}]);
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

/***/ "./src/Assets/Pages/English/enHome.js":
/*!********************************************!*\
  !*** ./src/Assets/Pages/English/enHome.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ enHome)
/* harmony export */ });
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../head */ "./src/Assets/Pages/head.js");


function enHome(header, mid) {

    (0,_head__WEBPACK_IMPORTED_MODULE_0__["default"])(header, 'eng');
    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = 'Work in Progress';
    underConstruction.setAttribute('id', 'underConstruction')
    mid.appendChild(underConstruction);
}

/***/ }),

/***/ "./src/Assets/Pages/Japanese/jpHome.js":
/*!*********************************************!*\
  !*** ./src/Assets/Pages/Japanese/jpHome.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ jpHome)
/* harmony export */ });
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../head */ "./src/Assets/Pages/head.js");


function jpHome(header, mid) {

    const underConstruction = document.createElement('div');
    underConstruction.innerHTML = '工事中';
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
/* harmony import */ var _mid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mid */ "./src/Assets/Pages/mid.js");


function head(header, lang, mid) {

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

    // Adds event listener to menu
    home.addEventListener('click', () => {
        console.log('home');
    });
    training.addEventListener('click', () => {
        console.log('training');
    });
    about.addEventListener('click', () => {
        console.log('about');
    });
    contact.addEventListener('click', () => {
        console.log('contact');
    });

    navEn.addEventListener('click', () => {
        console.log('English');
    });
    navJp.addEventListener('click', () => {
        console.log('Japanese');
    });
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
/* harmony import */ var _Japanese_jpHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Japanese/jpHome */ "./src/Assets/Pages/Japanese/jpHome.js");
/* harmony import */ var _English_enHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./English/enHome */ "./src/Assets/Pages/English/enHome.js");



function mid(phase, header, mid) {

    // Checks if on intial loadup.
    if(phase = 'inital') {
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
            (0,_English_enHome__WEBPACK_IMPORTED_MODULE_1__["default"])(header, mid);
        })

        nihongo.addEventListener('click', () => {
            choice.remove();
            (0,_Japanese_jpHome__WEBPACK_IMPORTED_MODULE_0__["default"])(header, mid)
        })
    }

    else if(phase == 'going') {
        mid.innerHTML = '';
    }
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
    (0,_Assets_Pages_mid__WEBPACK_IMPORTED_MODULE_4__["default"])('start', header, middle);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7V0NoREE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dhbWFucnVubmluZy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2dhbWFucnVubmluZy8uL3NyYy9Bc3NldHMvRnVuY3Rpb25zL2Zvb3QuanMiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nLy4vc3JjL0Fzc2V0cy9QYWdlcy9FbmdsaXNoL2VuSG9tZS5qcyIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvLi9zcmMvQXNzZXRzL1BhZ2VzL0phcGFuZXNlL2pwSG9tZS5qcyIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvLi9zcmMvQXNzZXRzL1BhZ2VzL2hlYWQuanMiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nLy4vc3JjL0Fzc2V0cy9QYWdlcy9taWQuanMiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2dhbWFucnVubmluZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vZ2FtYW5ydW5uaW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9nYW1hbnJ1bm5pbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQm9keSAqL1xcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi8qIEhlYWRlciAqL1xcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2UyNmMzMywgI2RmNWUzYSwgIzMwMjA0MyxibGFjayk7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI25hdkJhciwgI25hdkxhbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4yKTtcXG5cXG4gICAgY29sb3I6ICNmZmY7XFxufVxcblxcbiNuYXZMYW5nIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jbmF2QmFyIGJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuI25hdkJhciBidXR0b246aG92ZXIgeyBcXG4gICAgY29sb3I6IHdoZWF0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLyogTWlkICovXFxuLm1pZGRsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBNYWluIExvZ28gYXQgdGhlIHN0YXJ0ICovXFxuI21haW5Mb2dvIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIFVzZWQgd2hlbiBwYWdlIGlzIGluIHRoZSB3b3JrcyAqL1xcbiN1bmRlckNvbnN0cnVjdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAzNnB4O1xcbn1cXG5cXG4vKiBMYW5ndWFnZSBCdXR0b25zICovXFxuLm1pZGRsZSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgbWFyZ2luOiAwcHggMjBweDtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICBcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIFxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufSAgXFxuXFxuLmZvb3RlciBhIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBNb2JpbGUgc2NyZWVuICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAvKiAuc3F1YXJlIHtcXG4gICAgICBwYWRkaW5nOiAuN2VtO1xcbiAgICB9ICovXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsU0FBUztBQUNUO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksa0VBQWtFOztJQUVsRSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrQkFBa0I7O0lBRWxCLGdDQUFnQzs7SUFFaEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFlBQVk7O0lBRVosa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUEsUUFBUTtBQUNSO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBLDJCQUEyQjtBQUMzQjtJQUNJLFdBQVc7QUFDZjs7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSxxQkFBcUI7QUFDckI7SUFDSSx1QkFBdUI7O0lBRXZCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7SUFDVCxZQUFZOztJQUVaLFlBQVk7SUFDWixXQUFXOztJQUVYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0k7O09BRUc7QUFDUFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBCb2R5ICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZTI2YzMzLCAjZGY1ZTNhLCAjMzAyMDQzLGJsYWNrKTtcXG4gICAgXFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jbmF2QmFyLCAjbmF2TGFuZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjIpO1xcblxcbiAgICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuI25hdkxhbmcge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNuYXZCYXIgYnV0dG9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4jbmF2QmFyIGJ1dHRvbjpob3ZlciB7IFxcbiAgICBjb2xvcjogd2hlYXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4vKiBNaWQgKi9cXG4ubWlkZGxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE1haW4gTG9nbyBhdCB0aGUgc3RhcnQgKi9cXG4jbWFpbkxvZ28ge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogVXNlZCB3aGVuIHBhZ2UgaXMgaW4gdGhlIHdvcmtzICovXFxuI3VuZGVyQ29uc3RydWN0aW9uIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDM2cHg7XFxufVxcblxcbi8qIExhbmd1YWdlIEJ1dHRvbnMgKi9cXG4ubWlkZGxlIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICBtYXJnaW46IDBweCAyMHB4O1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbi5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gIFxcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICBcXG5cXG4uZm9vdGVyIGEge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIE1vYmlsZSBzY3JlZW4gKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIC8qIC5zcXVhcmUge1xcbiAgICAgIHBhZGRpbmc6IC43ZW07XFxuICAgIH0gKi9cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvb3QoZm9vdGVyKSB7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICc8cD5NYWRlIGJ5IEtldmluIERyYWtlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20va2RyYWtlMTk5MlwiPiA8aSBjbGFzcz1cImZhLWJyYW5kcyBmYS1naXRodWJcIj48L2k+PC9hPjwvcD4nXG59IiwiaW1wb3J0IGhlYWQgZnJvbSAnLi4vaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuSG9tZShoZWFkZXIsIG1pZCkge1xuXG4gICAgaGVhZChoZWFkZXIsICdlbmcnKTtcbiAgICBjb25zdCB1bmRlckNvbnN0cnVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHVuZGVyQ29uc3RydWN0aW9uLmlubmVySFRNTCA9ICdXb3JrIGluIFByb2dyZXNzJztcbiAgICB1bmRlckNvbnN0cnVjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VuZGVyQ29uc3RydWN0aW9uJylcbiAgICBtaWQuYXBwZW5kQ2hpbGQodW5kZXJDb25zdHJ1Y3Rpb24pO1xufSIsImltcG9ydCBoZWFkIGZyb20gJy4uL2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBqcEhvbWUoaGVhZGVyLCBtaWQpIHtcblxuICAgIGNvbnN0IHVuZGVyQ29uc3RydWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdW5kZXJDb25zdHJ1Y3Rpb24uaW5uZXJIVE1MID0gJ+W3peS6i+S4rSc7XG4gICAgdW5kZXJDb25zdHJ1Y3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICd1bmRlckNvbnN0cnVjdGlvbicpXG4gICAgbWlkLmFwcGVuZENoaWxkKHVuZGVyQ29uc3RydWN0aW9uKTtcbn0iLCJpbXBvcnQgbWlkIGZyb20gJy4vbWlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZChoZWFkZXIsIGxhbmcsIG1pZCkge1xuXG4gICAgLy8gQ3JlYXRlcyB0aGUgaW5pdGlhbCBkaXYncyB1c2VkIGluIGhlYWRlclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkJhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdkJhcicpO1xuXG4gICAgY29uc3QgbmF2TGFuZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkxhbmcuc2V0QXR0cmlidXRlKCdpZCcsICduYXZMYW5nJyk7XG5cbiAgICAvLyBUaGUgZHJvcGRvd25cbiAgICAvLyBIb21lIHBhZ2VcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXZCYXJCdXR0b25zJyk7XG5cblxuICAgIC8vIFRyYWluaW5nIHBhZ2VcbiAgICBjb25zdCB0cmFpbmluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRyYWluaW5nLmNsYXNzTGlzdC5hZGQoJ25hdkJhckJ1dHRvbnMnKTtcblxuXG4gICAgLy8gQWJvdXQgcGFnZVxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2QmFyQnV0dG9ucycpO1xuXG4gICAgLy8gQ29udGFjdCBwYWdlXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2QmFyQnV0dG9ucycpO1xuXG5cbiAgICAvLyBTaWRlIGxhbmd1YWdlIGNoYW5nZVxuICAgIGNvbnN0IG5hdkVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbmF2RW4uaW5uZXJIVE1MID0gJ0VuZ2xpc2gnO1xuXG4gICAgY29uc3QgbmF2SnAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuYXZKcC5pbm5lckhUTUwgPSAn5pel5pys6KqeJztcblxuICAgIG5hdkxhbmcuYXBwZW5kQ2hpbGQobmF2RW4pO1xuICAgIG5hdkxhbmcuYXBwZW5kQ2hpbGQobmF2SnApXG5cbiAgICAvLyBFbmdsaXNoIE5hdkJhclxuICAgIGlmKGxhbmcgPSAnZW5nJykge1xuICAgICAgICBob21lLmlubmVySFRNTCA9ICdIb21lJztcbiAgICAgICAgdHJhaW5pbmcuaW5uZXJIVE1MID0gJ1RyYWluaW5nJztcbiAgICAgICAgYWJvdXQuaW5uZXJIVE1MID0gJ0Fib3V0J1xuICAgICAgICBjb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0J1xuXG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKHRyYWluaW5nKTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZChhYm91dCk7XG4gICAgICAgIG5hdkJhci5hcHBlbmQoY29udGFjdCk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMYW5nKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgICAgIGNvbnNvbGUubG9nKCdFbmdsaXNoJylcbiAgICB9XG5cbiAgICAvLyBKYXBhbmVzZSBOYXZCYXJcbiAgICBlbHNlIHtcbiAgICAgICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgICAgIHRyYWluaW5nLmlubmVySFRNTCA9ICdUcmFpbmluZyc7XG4gICAgICAgIGFib3V0LmlubmVySFRNTCA9ICdBYm91dCdcbiAgICAgICAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCdcblxuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgICAgIG5hdkJhci5hcHBlbmRDaGlsZCh0cmFpbmluZyk7XG4gICAgICAgIG5hdkJhci5hcHBlbmQoYWJvdXQpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kKGNvbnRhY3QpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2TGFuZyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICAgICAgICBjb25zb2xlLmxvZygn5pel5pys6Kqe44Gn44GZ44CCJylcbiAgICB9XG5cbiAgICAvLyBBZGRzIGV2ZW50IGxpc3RlbmVyIHRvIG1lbnVcbiAgICBob21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZScpO1xuICAgIH0pO1xuICAgIHRyYWluaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygndHJhaW5pbmcnKTtcbiAgICB9KTtcbiAgICBhYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Fib3V0Jyk7XG4gICAgfSk7XG4gICAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnRhY3QnKTtcbiAgICB9KTtcblxuICAgIG5hdkVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnRW5nbGlzaCcpO1xuICAgIH0pO1xuICAgIG5hdkpwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnSmFwYW5lc2UnKTtcbiAgICB9KTtcbn0iLCJpbXBvcnQganBIb21lIGZyb20gXCIuL0phcGFuZXNlL2pwSG9tZVwiO1xuaW1wb3J0IGVuSG9tZSBmcm9tIFwiLi9FbmdsaXNoL2VuSG9tZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWQocGhhc2UsIGhlYWRlciwgbWlkKSB7XG5cbiAgICAvLyBDaGVja3MgaWYgb24gaW50aWFsIGxvYWR1cC5cbiAgICBpZihwaGFzZSA9ICdpbml0YWwnKSB7XG4gICAgICAgIC8vIENyZWF0ZSBsYW5ndWFnZSBvcHRpb24gcGFuZWxcbiAgICAgICAgY29uc3QgY2hvaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNob2ljZS5jbGFzc0xpc3QuYWRkKCdjaG9pY2UnKVxuXG4gICAgICAgIC8vIENob29zZSBsYW5hZ3VhZ2VcbiAgICAgICAgY29uc3QgZW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVuZy5pbm5lckhUTUwgPSAnRW5nbGlzaCc7XG4gICAgICAgIGNob2ljZS5hcHBlbmRDaGlsZChlbmcpO1xuXG4gICAgICAgIGNvbnN0IG5paG9uZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgbmlob25nby5pbm5lckhUTUwgPSAn5pel5pys6KqeJztcbiAgICAgICAgY2hvaWNlLmFwcGVuZENoaWxkKG5paG9uZ28pO1xuXG4gICAgICAgIG1pZC5hcHBlbmRDaGlsZChjaG9pY2UpO1xuXG4gICAgICAgIC8vIEV2ZW50IGxpc3RlbmVyc1xuICAgICAgICBlbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjaG9pY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICBlbkhvbWUoaGVhZGVyLCBtaWQpO1xuICAgICAgICB9KVxuXG4gICAgICAgIG5paG9uZ28uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjaG9pY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICBqcEhvbWUoaGVhZGVyLCBtaWQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZWxzZSBpZihwaGFzZSA9PSAnZ29pbmcnKSB7XG4gICAgICAgIG1pZC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG59IiwiaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi9Bc3NldHMvTG9nb3MvTWFpbi5wbmcnO1xuXG5pbXBvcnQgZm9vdCBmcm9tICcuL0Fzc2V0cy9GdW5jdGlvbnMvZm9vdCc7XG5pbXBvcnQgbWlkIGZyb20gJy4vQXNzZXRzL1BhZ2VzL21pZCdcblxuLy8gSW50aWFsIFNpdGUgTG9hZHVwXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gICAgY29uc3QgR2FNYW4gPSBkb2N1bWVudC5ib2R5O1xuXG4gICAgLy8gTG9nbyBpbXBvcnRcbiAgICBsZXQgbWFpbkxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluTG9nby5zcmMgPSBsb2dvO1xuICAgIG1haW5Mb2dvLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkxvZ28nKTtcblxuICAgIC8vIFBhZ2UgbGF5b3V0XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgbWlkZGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWlkZGxlLmNsYXNzTGlzdC5hZGQoJ21pZGRsZScpO1xuICAgIG1pZGRsZS5hcHBlbmRDaGlsZChtYWluTG9nbyk7XG4gICAgbWlkKCdzdGFydCcsIGhlYWRlciwgbWlkZGxlKTtcblxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290KGZvb3Rlcik7XG5cbiAgICBHYU1hbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIEdhTWFuLmFwcGVuZENoaWxkKG1pZGRsZSk7XG4gICAgR2FNYW4uYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgIHJldHVybiBHYU1hbjtcbn1cblxuY29tcG9uZW50KCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtnYW1hbnJ1bm5pbmdcIl0gPSBzZWxmW1wid2VicGFja0NodW5rZ2FtYW5ydW5uaW5nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2ZvcnRhd2Vzb21lX2ZvbnRhd2Vzb21lLWZyZWVfanNfYWxsX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudC0yZGUxYTNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==