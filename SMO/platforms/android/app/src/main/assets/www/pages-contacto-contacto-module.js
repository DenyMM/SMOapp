(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contacto-contacto-module"],{

/***/ "./src/app/pages/contacto/contacto.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.module.ts ***!
  \***************************************************/
/*! exports provided: ContactoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPageModule", function() { return ContactoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contacto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacto.page */ "./src/app/pages/contacto/contacto.page.ts");







var routes = [
    {
        path: '',
        component: _contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]
    }
];
var ContactoPageModule = /** @class */ (function () {
    function ContactoPageModule() {
    }
    ContactoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contacto_page__WEBPACK_IMPORTED_MODULE_6__["ContactoPage"]]
        })
    ], ContactoPageModule);
    return ContactoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n          <ion-icon id=\"iconBig\" name=\"arrow-back\" routerLink=\"/home\"></ion-icon>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n  \n  \n\n<ion-content class=\"background\">\n  <ion-card color=\"primary\">\n    <ion-card-header>\n      <ion-card-title color=\"primary\" >Sociedad Mexicana de Oftalmología A.C.</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n      Boston 99, <br>\n      Col. Nochebuena, <br>\n      CDMX C.P. 03720, <br>\n      Telefonos:(55) 5563-9393, 5563-7812, 5598-3827 y 5598-5372, 5611-1343 <br>\n      contacto@smo.org.mx\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card color=\"primary\">\n      <ion-card-header>\n          <ion-card-title>Formulario de Contácto</ion-card-title>\n        </ion-card-header>\n    <ion-item color=\"primary\">\n        <ion-label>Nombre:</ion-label>\n         <ion-input placeholder=\"Nombre\"></ion-input>\n         <hr>\n    </ion-item>\n    <ion-item color=\"primary\">\n        <ion-label>Apellido:</ion-label>\n        <ion-input placeholder=\"Apellido\"></ion-input>\n        <hr>\n    </ion-item>\n    <ion-item color=\"primary\">\n        <ion-label>Teléfono:</ion-label>\n        <ion-input type=\"number\" placeholder=\"5555555555\"></ion-input>\n        <hr>\n    </ion-item>\n    <ion-item color=\"primary\">\n        <ion-label>Correo Electrónico:</ion-label>\n        <ion-input placeholder=\"correo@email.com\"></ion-input>\n        <hr>\n    </ion-item>\n    <ion-item color=\"primary\">\n        <ion-label >Comentarios:</ion-label>\n        <ion-textarea></ion-textarea>\n      </ion-item>\n\n    <br>\n        <br>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat; }\n\n.iconBig {\n  size: 30px;\n  padding: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9TTU9hcHAvU01PL3NyYy9hcHAvcGFnZXMvY29udGFjdG8vY29udGFjdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkRBQWEsRUFBQTs7QUFHakI7RUFDSSxVQUFVO0VBQ1YsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdG8vY29udGFjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQuYmFja2dyb3VuZHtcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC5qcGcpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xufVxuXG4uaWNvbkJpZ3tcbiAgICBzaXplOiAzMHB4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/contacto/contacto.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contacto/contacto.page.ts ***!
  \*************************************************/
/*! exports provided: ContactoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoPage", function() { return ContactoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactoPage = /** @class */ (function () {
    function ContactoPage() {
    }
    ContactoPage.prototype.ngOnInit = function () {
    };
    ContactoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__(/*! ./contacto.page.html */ "./src/app/pages/contacto/contacto.page.html"),
            styles: [__webpack_require__(/*! ./contacto.page.scss */ "./src/app/pages/contacto/contacto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactoPage);
    return ContactoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contacto-contacto-module.js.map