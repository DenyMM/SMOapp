import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
var routes = [
    { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
    { path: 'notif', loadChildren: './tab1/tab1.module#Tab1PageModule' },
    { path: 'home', loadChildren: './tab2/tab2.module#Tab2PageModule' },
    { path: 'socio', loadChildren: './tab3/tab3.module#Tab3PageModule' },
    { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
    { path: 'directiva', loadChildren: './pages/directiva/directiva.module#DirectivaPageModule' },
    { path: 'sesiones', loadChildren: './pages/sesiones/sesiones.module#SesionesPageModule' },
    { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
    { path: 'congresos', loadChildren: './pages/congresos/congresos.module#CongresosPageModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map