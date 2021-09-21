/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"totalOrder\": function() { return /* binding */ totalOrder; },\n/* harmony export */   \"getColor\": function() { return /* binding */ getColor; },\n/* harmony export */   \"createImage\": function() { return /* binding */ createImage; },\n/* harmony export */   \"createDiv\": function() { return /* binding */ createDiv; },\n/* harmony export */   \"createHType\": function() { return /* binding */ createHType; },\n/* harmony export */   \"showTeddies\": function() { return /* binding */ showTeddies; },\n/* harmony export */   \"getCartLength\": function() { return /* binding */ getCartLength; },\n/* harmony export */   \"showCartItem\": function() { return /* binding */ showCartItem; },\n/* harmony export */   \"checkMail\": function() { return /* binding */ checkMail; },\n/* harmony export */   \"checkName\": function() { return /* binding */ checkName; }\n/* harmony export */ });\n/* ------------ Fonction qui fait le total de la commande (Return : String) ---------- */\nfunction totalOrder(cart) {\n  let total = 0;\n  for (let i = 0; i < cart.length; i++) {\n    total += cart[i].price;\n  }\n  return total / 100 + \"€\";\n}\n/* ---------- Fonction qui fait le total de la commande (Return : String) ---------- */\n\n//Fonction qui récupère la couleur choisie par l'utilisateur dans le select ainsi que l'ID du teddy et la stocke dans un objet avec localStorage\n//Cette fonction sera appelée par le button \"Ajouter au panier\"\nfunction getColor(getColorId, getColorColor) {\n  const temp = {\n    id: getColorId,\n    color: getColorColor,\n  };\n\n  //Si le localStorage ne contient pas de tableau appelée \"cart\", on l'initialise.\n  if (localStorage.getItem(\"cart\") === null) {\n    localStorage.setItem(\"cart\", JSON.stringify([temp]));\n  }\n  else {\n    //On fait une copie temporaire du tableau qui est dans le localStorage\n    let tempCart = JSON.parse(localStorage.getItem(\"cart\"));\n    //On ajoute l'objet avec les informations de l'utilisateur dans le tableau\n    tempCart.push(temp);\n    //On met à jour le localStorage avec le nouveau tableau\n    localStorage.setItem(\"cart\", JSON.stringify(tempCart));\n    }\n}\n\n/* ---------- Fonction qui créer une image (return : void) ---------- */\nfunction createImage(imageURL, className, width, height, container)  {\n  let teddyImg = document.createElement(\"img\");\n  teddyImg.src = imageURL.replace(/^http:\\/\\//i, \"https://\"); //Remplace  http par https\n  teddyImg.className = className;\n  teddyImg.width = width;\n  teddyImg.height = height;\n  document.getElementById(container).appendChild(teddyImg);\n}\n/* ---------- Fin fonction qui créer une image (return : void) ---------- */\n\nfunction createDiv(className, container, id) {\n  let div = document.createElement(\"div\");\n  div.className = className;\n  div.id = id;\n  container.appendChild(div);\n}\n\nfunction createHType(type, text, container, className, id) {\n  let hType = document.createElement(type);\n  hType.textContent = text;\n  hType.className = className;\n  hType.id = id;\n  container.appendChild(hType);\n}\n\n//Fonction qui affiche les teddies sur la page d'accueil\nfunction showTeddies(teddys) {\n  //Faire une boucle qui parcours tout les teddys\n    let j = -2; //Sert pour les cas de i impaires\n    for (let i = 0; i < teddys.length; i++) {\n        let teddy = teddys[i];\n        teddy.price = teddy.price / 100;\n        //Créer une div si i est pair\n        if (i % 2 === 0) {\n            let div = document.createElement(\"div\");\n            div.className = \"row mb-2\";\n            div.id = \"containerFor2\" + i;\n            document.getElementById(\"listOfTeddies\").appendChild(div);\n            j += 2;\n        }\n        //Créer une div dans la dernière div créée\n        let div = document.createElement(\"div\");\n        div.className = \"col-md-6\";\n        let imgUrlSecure = teddy.imageUrl;\n        imgUrlSecure = imgUrlSecure.replace(/^http:\\/\\//i, \"https://\");\n        div.innerHTML +=\n            `\n            <a class=\"teddylink\" href=\"./product.html?id=${teddy._id}\" >\n                <div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 cursor-pointer\">\n                    <div class=\"col p-4 d-flex flex-column position-static\">\n                        <h3 class=\"mb-0\" >${teddy.name}</h3>\n                        <div class=\"mb-1 text-muted\">${teddy.price} €\n                        </div>\n                        <p class=\"card-text mb-auto\">${teddy.description}</p>\n                        <div class =\"col-auto d-none d-lg-block\" id=\"teddy__0__img\">\n                            <img src=\"${imgUrlSecure}\" alt=\"${teddy.name}\" class=\"img-fluid rounded\"  width=\"200\" height=\"250\" role=\"img\" aria-label=\"Ours en peluche fait main\">\n                        </div>\n                    </div>\n                </div>\n            </a>\n        `;\n        //Ajouter la div dans la dernière div containerFor2\n        document.getElementById(\"containerFor2\" + j).appendChild(div);\n    }\n}\n\n//Fonction qui affiche un produit du panier\nfunction showCartItem(nameItem, colorItem, priceItem, i) {\n  createHType(\"li\", \"\", \"cartListUl\", \"list-group-item d-flex justify-content-between lh-sm\",nameItem + \"Li\" + i);\n  createItem(nameItem, colorItem, priceItem, i);\n}\n\nfunction createItem(nameItem, colorItem, priceItem, i) {\n  let div1 = document.createElement(\"div\");\n  //Ajouter div1 dans le li\n  document.getElementById(nameItem + \"Li\" + i).appendChild(div1);\n  \n  //Ajouter un h6 dans la div1\n  let h61 = document.createElement(\"h6\");\n  h61.innerHTML = nameItem;\n  h61.className = \"my-0\";\n  div1.appendChild(h61);\n\n  //Ajouter un span dans la div1\n  let span1 = document.createElement(\"span\");\n  span1.innerHTML = colorItem;\n  span1.className = \"text-muted\";\n  div1.appendChild(span1);\n\n  //Ajouter un span dans la \"li\" parente de \"div1\"\n  let span2 = document.createElement(\"span\");\n  span2.className = \"text-muted\";\n  span2.innerHTML = priceItem;\n  document.getElementById(nameItem + \"Li\" + i).appendChild(span2);\n}\n\n/* ---------- Fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */\nfunction getCartLength(cart) {\n  if (cart === null) {\n    return 0;\n  } else {\n    return cart.length;\n  }\n}\n/* ---------- Fin fonction qui récupère le nombre d'article dans le panier (Return : int) ---------- */\n\n/* ------------ Fonction qui vérifie l'adresse mail (Return boolean) ------------ */\nfunction checkMail(mail) {\n  let regex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\\.[a-z]{2,})$/i;\n  return regex.test(mail);\n}\n/* ------------ Fin fonction qui vérifie l'adresse mail ------------ */\n\n/* ------------ Fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\nfunction checkName(name) {\n  let regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆŠŽ∂ð ,.'-]+$/u;\n  return regex.test(name);\n}\n/* ------------ Fin fonction qui vérifie le prénom et nom (Return : boolean) ------------ */\n\n\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/functions.js?");

/***/ }),

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiUrl\": function() { return /* binding */ apiUrl; }\n/* harmony export */ });\nconst apiUrl = \"https://backorinoco.nitatemic.ovh/api/teddies\";\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/global.js?");

/***/ }),

/***/ "./src/js/product/index.js":
/*!*********************************!*\
  !*** ./src/js/product/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.js */ \"./src/js/global.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions.js */ \"./src/js/functions.js\");\n\nconst urlParams = new URLSearchParams(window.location.search);\nconst id = urlParams.get(\"id\");\nconst apiUrlId = _global_js__WEBPACK_IMPORTED_MODULE_0__.apiUrl + \"/\" + id;\n\nfetch(apiUrlId)\n  .then(function (res) {\n    if (res.ok) {\n      return res.json();\n    }\n  })\n\n  .then(function (teddys) {\n\n    //Put the name of the teddie in the title of the page\n    document.title = teddys.name + \" | Orinoco\";\n\n    //Create a div in the container div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"row\", \"container\", \"divRow\");\n\n    //Create a div in the row div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"col-md-4\", \"divRow\", \"divCol\");\n\n    //Create a div in the col div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"col-auto d-none d-lg-block\", \"divCol\", \"teddyImgContainer\");\n\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createImage)(teddys.imageUrl, \"img-fluid rounded\", 400, 500, \"teddyImgContainer\");\n\n    //Create a div in the container div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"col mt-5\", \"divRow\", \"divCol2\");\n\n    //Create a h1 in the col2 div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"h1\", teddys.name, \"divCol2\");\n\n    //Create a h2 in the col2 div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"h2\", teddys.description, \"divCol2\", \"h5\");\n\n    //Create a h3 in the col2 div\n     let priceString = \"Price: \" + teddys.price + \"€\";\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"h3\", priceString, \"divCol2\");\n\n    //Create a h4 in the col2 div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"h4\", \"Choisissez la couleur de votre teddy :\", \"divCol2\",\"h6\");\n\n    //Create a form in the col2 div\n    (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"form\", \"\", \"form-inline\", \"divCol2\", \"form\")\n\n    //Create a select in the form\n    ;(0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"select\", \"\", \"dropdown\", \"form\", \"colorschoise\");\n\n    //Add all colors in selection\n    for (let j = 0; j < teddys.colors.length; j++) {\n      (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.createHType)(\"option\", teddys.colors[j], \"me-2\", \"colorschoise\");\n    }\n    document.getElementById(\"form\").appendChild(document.getElementById(\"colorschoise\"));\n\n    //Add a submit in the form\n    let submit = document.createElement(\"button\");\n    submit.type = \"submit\";\n    submit.className = \"btn btn-warning\";\n    //Ajouter un attribut onclick au bouton\n    submit.onclick = function (e) {\n      e.preventDefault();\n      let color = document.getElementById(\"colorschoise\").value; //TODO : Faire un test pour vérifier les données qui vont être envoyées\n      (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.getColor)(id, color);\n    };\n    submit.textContent = \"Ajouter au panier\";\n    document.getElementById(\"form\").appendChild(submit);\n  })\n\n  .catch(function () {\n    console.error(\n      \"Oops, an error occurred. Please contact alexandre@nitatemic.ovh\"\n    );\n    //Ajouter du html dans le container\n    let errorMsg = document.createElement(\"div\");\n    errorMsg.className = \"alert alert-danger\";\n    errorMsg.role = \"alert\";\n    errorMsg.textContent =\n      \"Oops, an error occurred. Please contact alexandre@nitatemic.ovh\";\n    document.getElementById(\"container\").appendChild(errorMsg);\n  });\n\n//# sourceURL=webpack://orinoco-frontend/./src/js/product/index.js?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/product/index.js");
/******/ 	
/******/ })()
;