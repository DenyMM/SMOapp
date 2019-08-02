import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
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
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [InAppBrowser])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map