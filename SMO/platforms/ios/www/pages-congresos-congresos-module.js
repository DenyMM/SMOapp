(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-congresos-congresos-module"],{

/***/ "./src/app/pages/congresos/congresos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/congresos/congresos.module.ts ***!
  \*****************************************************/
/*! exports provided: CongresosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresosPageModule", function() { return CongresosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _congresos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./congresos.page */ "./src/app/pages/congresos/congresos.page.ts");







var routes = [
    {
        path: '',
        component: _congresos_page__WEBPACK_IMPORTED_MODULE_6__["CongresosPage"]
    }
];
var CongresosPageModule = /** @class */ (function () {
    function CongresosPageModule() {
    }
    CongresosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_congresos_page__WEBPACK_IMPORTED_MODULE_6__["CongresosPage"]]
        })
    ], CongresosPageModule);
    return CongresosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/congresos/congresos.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/congresos/congresos.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title text-capitalize>Event Cards</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"eventcard\" *ngFor=\"let event of events\" margin-bottom>\n        <ion-img [src]=\"event.largeimage\"></ion-img>\n        <ion-card-content>\n          <ion-row >\n            <ion-col size=\"2\"><h2 class=\"month\">{{event.month}}</h2><h1>{{event.date}}</h1><h3>{{event.day}}</h3></ion-col>\n            <div class=\"seperator\"></div>\n            <ion-col size=\"7\" class=\"name\"><h2><strong>{{event.name}}</strong></h2><h4 class=\"venue\">{{event.venues}}</h4></ion-col>\n            <ion-col size=\"2\"><button ion-button color=\"greenish\" class=\"btn\" >BOOK</button></ion-col>\n          </ion-row>\n          <div class=\"hor-seperator\"></div>\n          <ion-row>\n            <ion-col size=\"6\"><ion-badge color=\"light\">{{event.type}}</ion-badge></ion-col>\n            <ion-col size=\"6\" class=\"righttext\">₹ {{event.price}} Onwards</ion-col>\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/congresos/congresos.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/congresos/congresos.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmdyZXNvcy9jb25ncmVzb3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/congresos/congresos.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/congresos/congresos.page.ts ***!
  \***************************************************/
/*! exports provided: CongresosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongresosPage", function() { return CongresosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CongresosPage = /** @class */ (function () {
    function CongresosPage() {
    }
    CongresosPage.prototype.ngOnInit = function () {
    };
    CongresosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-congresos',
            template: __webpack_require__(/*! ./congresos.page.html */ "./src/app/pages/congresos/congresos.page.html"),
            styles: [__webpack_require__(/*! ./congresos.page.scss */ "./src/app/pages/congresos/congresos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CongresosPage);
    return CongresosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-congresos-congresos-module.js.map