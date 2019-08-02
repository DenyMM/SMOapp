(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuario-module"],{

/***/ "./src/app/pages/usuario/usuario.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.module.ts ***!
  \*************************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario.page */ "./src/app/pages/usuario/usuario.page.ts");







var routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]
    }
];
var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar  color=\"primary\">\n    <ion-title>Dr. Eduardo Chavez Mondragón</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-item  color=\"primary\">\n    <img id=\"perfil\" src=\"../../assets/drEduardoC.png\">\n</ion-item>\n<ion-row color=\"medium\">\n  <ion-col size=\"3\">\n    <ion-card class=\"littleBlock\" color=\"medium\">\n        <ion-icon class=\"littleIcon\" name=\"document\"></ion-icon>\n      <p class=\"littleText\">Reglamento <br> y estatuto</p></ion-card>\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-card class=\"littleBlock\" color=\"medium\">\n        <ion-icon class=\"littleIcon\" name=\"today\"></ion-icon>\n      <p class=\"littleText\">Artículos <br> de revistas</p></ion-card>\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-card class=\"littleBlock\" color=\"medium\">\n        <ion-icon class=\"littleIcon\" name=\"browsers\"></ion-icon>\n      <p class=\"littleText\">Publicar <br> Anuncios</p></ion-card>\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-card class=\"littleBlock\" color=\"medium\">\n        <ion-icon class=\"littleIcon\" name=\"paper\"></ion-icon>\n      <p class=\"littleText\">Publicar <br> Artículos</p></ion-card>\n  </ion-col>\n</ion-row>\n<ion-row>\n  <ion-col size=\"9\">\n    <ion-card>\n      <ion-button>Reglamento y estatuto</ion-button>\n      <ion-button>Artículos de revistas</ion-button>\n      <ion-button>Publicar Anuncios</ion-button>\n      <ion-button>Publicar Artículos</ion-button>\n    </ion-card>\n  </ion-col>\n  <ion-col size=\"3\">\n    <ion-card>\n      <ion-list>\n        <p>Cuotas</p>\n        <ion-button> 2019</ion-button> <br>\n        <ion-button>2018</ion-button> <br>\n        <ion-button>2017</ion-button>\n      </ion-list>\n    </ion-card>\n  </ion-col>\n</ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".littleText {\n  font-size: 15px;\n  padding-left: 10px;\n  padding-right: 10px; }\n\nion-card.littleBlock {\n  border-style: solid;\n  border-width: 1px;\n  border-color: white;\n  margin: 1px; }\n\n.littleIcon {\n  font-size: 30px;\n  padding-right: 25px;\n  padding-left: 28px; }\n\n.img {\n  padding-right: 25px;\n  padding-left: 28px;\n  width: 3px !important;\n  height: 3px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmJjb21wYW55L1NNT2FwcC9TTU9hcHAvU01PL3NyYy9hcHAvcGFnZXMvdXN1YXJpby91c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDQSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGl0dGxlVGV4dHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbmlvbi1jYXJkLmxpdHRsZUJsb2Nre1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW46IDFweDtcbn1cblxuLmxpdHRsZUljb257XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xufVxuXG4uaW1ne1xucGFkZGluZy1yaWdodDogMjVweDtcbnBhZGRpbmctbGVmdDogMjhweDtcbndpZHRoOiAzcHggIWltcG9ydGFudDtcbmhlaWdodDogM3B4ICFpbXBvcnRhbnQ7XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/usuario/usuario.page.ts ***!
  \***********************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsuarioPage = /** @class */ (function () {
    function UsuarioPage() {
    }
    UsuarioPage.prototype.ngOnInit = function () {
    };
    UsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.page.html */ "./src/app/pages/usuario/usuario.page.html"),
            styles: [__webpack_require__(/*! ./usuario.page.scss */ "./src/app/pages/usuario/usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsuarioPage);
    return UsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-usuario-usuario-module.js.map