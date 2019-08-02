(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content class=\"background\">\n  \n  <ion-item color=\"primary\">\n    <img class=\"logoSmall\" src=\"../../assets/logo_smo_blanco.png\">\n</ion-item>\n      \n  \n  <br>\n    <ion-row>\n      <ion-col size=\"4\">\n        <ion-buttons routerLink=\"/socio\" color=\"secondary\" expand=\"full\" shape=\"round\">\n          <img class=\"logoHome\" src=\"../../assets/icon/socios.png\">\n        </ion-buttons>\n      </ion-col>\n    <ion-col size=\"4\">\n      <ion-buttons expand=\"full\" shape=\"round\">\n        <img class=\"logoHome\" src=\"../../assets/icon/coloq.png\">\n      </ion-buttons>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-buttons expand=\"full\" shape=\"round\">\n        <img class=\"logoHome\" src=\"../../assets/icon/transm.png\">\n      </ion-buttons>\n    </ion-col>\n  </ion-row>\n  <br>\n  <ion-row>\n      <ion-col size=\"4\">\n        <ion-buttons routerLink=\"/congresos\" expand=\"full\" shape=\"round\">\n          <img class=\"logoHome\" src=\"../../assets/icon/congres.png\">\n        </ion-buttons>\n      </ion-col> \n      <ion-col size=\"4\">\n          <ion-buttons routerLink=\"/sesiones\" expand=\"full\" shape=\"round\">\n            <img class=\"logoHome\" src=\"../../assets/icon/sesion.png\">\n          </ion-buttons>\n      </ion-col> \n      <ion-col size=\"4\">\n        <ion-buttons (click)=\"revistaSMO()\" color=\"secondary\" expand=\"full\" shape=\"round\">\n          <img class=\"logoHome\" src=\"../../assets/icon/REVISTA.png\">\n        </ion-buttons>\n      </ion-col>\n    </ion-row>\n    <br>\n    <ion-row>\n        <ion-col size=\"4\">\n          <ion-buttons routerLink=\"/directiva\" expand=\"full\" shape=\"round\">\n            <img class=\"logoHome\" src=\"../../assets/icon/mesa.png\">\n          </ion-buttons>\n        </ion-col> \n        <ion-col size=\"4\">\n          <ion-buttons (click)=\"articulosSMO()\" expand=\"full\" shape=\"round\">\n            <img class=\"logoHome\" src=\"../../assets/icon/articulos.png\">\n          </ion-buttons>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-buttons routerLink=\"/contacto\" expand=\"full\" shape=\"round\">\n            <img class=\"logoHome\" src=\"../../assets/icon/contact.png\">\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n      <br>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-buttons (click)=\"fbSMO()\" color=\"secondary\" expand=\"full\" shape=\"round\">\n            <img class=\"logoHome\" src=\"../../assets/icon/redes.png\">\n          </ion-buttons>\n        </ion-col> \n        <ion-col size=\"4\">\n          <!--->ion-buttons (click)=\"()\" expand=\"full\" shape=\"round\">\n            <img class=\"logoHome\" src=\"../../assets/icon/.png\">\n          </ion-buttons-->\n        </ion-col>\n        <ion-col size=\"4\">\n          <!-->ion-buttons routerLink=\"/\" expand=\"full\" shape=\"round\">\n            <img class=\"logoHome\" src=\"../../assets/icon/.png\">\n          </ion-buttons-->\n        </ion-col>\n      </ion-row>\n<br>\n      \n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.background {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat; }\n\n.buttonLett {\n  font-size: 0.6em;\n  font-size-adjust: unset;\n  color: #ffffff; }\n\n.logoSmall {\n  size: 4em; }\n\n.logoHome {\n  size: 1em;\n  padding: 7px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmIvRG9jdW1lbnRzL0dpdEh1Yi9TTU9hcHAvU01PL3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDJEQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksU0FBUyxFQUFBOztBQUdiO0VBQ0ksU0FBUztFQUNULFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50LmJhY2tncm91bmR7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JhY2tncm91bmQuanBnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuLmJ1dHRvbkxldHR7XG4gICAgZm9udC1zaXplOiAwLjZlbTtcbiAgICBmb250LXNpemUtYWRqdXN0OiB1bnNldDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmxvZ29TbWFsbHtcbiAgICBzaXplOiA0ZW07XG59XG5cbi5sb2dvSG9tZXtcbiAgICBzaXplOiAxZW07XG4gICAgcGFkZGluZzogN3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(iab) {
        this.iab = iab;
    }
    Tab2Page.prototype.fbSMO = function () {
        var browser = this.iab.create('https://www.facebook.com/socmexofta/', '_system');
    };
    Tab2Page.prototype.revistaSMO = function () {
        var browser = this.iab.create('http://www.rmo.com.mx/', '_system');
    };
    Tab2Page.prototype.articulosSMO = function () {
        var browser = this.iab.create('https://www.smo.org.mx/solicitud_articulos.php', '_system');
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map