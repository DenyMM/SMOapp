(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-icon id=\"iconBig\" name=\"arrow-back\" routerLink=\"/home\"></ion-icon>\n    </ion-buttons>\n    <ion-title>Socio SMO</ion-title>\n    \n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"background\">\n  <ion-card color=\"shadow\">\n    <img class=\"logoSmall\" src=\"../../assets/logo_smo_blanco.png\"> \n    <br>\n    <h1 class=\"white\">Socio SMO</h1>\n    <h4 class=\"white\">Introduzca los siguientes datos para iniciar sesion:</h4>\n    <br>\n    <ion-row>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"10\" color=\"transp\">\n        <ion-item color=\"warning\">\n          <ion-label>Correo Electrónico:</ion-label>\n          <ion-input type=\"email\" placeholder=\"correo@email.com\"></ion-input>\n          <hr>\n      </ion-item>\n      <ion-item color=\"warning\">\n        <ion-label >Contraseña:</ion-label>\n         <ion-input type=\"password\" placeholder=\"******\"></ion-input>\n         <hr>\n    </ion-item>\n      </ion-col>\n      <ion-col size=\"1\">        \n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"1\">\n      </ion-col>\n      <ion-col size=\"5\">\n        <ion-buttons><p class=\"blueOne\">¿Olvidaste tu contraseña? <br>\n          Recuperala aquí</p></ion-buttons>\n         \n        </ion-col>\n        <ion-col size=\"5\">\n        <p class=\"blueOne\">¿Ya no cuentas con el mismo correo? <br>\n            Solicita su actualización aquí</p>\n      </ion-col>\n      <ion-col size=\"1\">\n      </ion-col>\n    </ion-row>\n   \n</ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat; }\n\n.logoSmall {\n  background-color: #00000000;\n  size: 4em; }\n\n.white {\n  color: white;\n  padding: 10px;\n  text-align: center; }\n\n.blueOne {\n  color: #0303b4;\n  padding: 10px;\n  text-align: center; }\n\n.blueOne:hover {\n  color: #dedee4;\n  padding: 10px;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9TTU9hcHAvU01PL3NyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJEQUFhLEVBQUE7O0FBRWpCO0VBQ0ksMkJBQTJCO0VBQzNCLFNBQVMsRUFBQTs7QUFHYjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cbi5sb2dvU21hbGx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDAwO1xuICAgIHNpemU6IDRlbTtcbn1cblxuLndoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsdWVPbmV7XG4gICAgY29sb3I6ICMwMzAzYjQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYmx1ZU9uZTpob3ZlcntcbiAgICBjb2xvcjogI2RlZGVlNDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0gIl19 */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab3Page = /** @class */ (function () {
    function Tab3Page() {
    }
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map