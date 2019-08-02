import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DirectivaPage } from './directiva.page';
var routes = [
    {
        path: '',
        component: DirectivaPage
    }
];
var DirectivaPageModule = /** @class */ (function () {
    function DirectivaPageModule() {
    }
    DirectivaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DirectivaPage]
        })
    ], DirectivaPageModule);
    return DirectivaPageModule;
}());
export { DirectivaPageModule };
//# sourceMappingURL=directiva.module.js.map