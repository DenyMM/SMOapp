import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'notif', loadChildren: '../tab1/tab1.module#Tab1PageModule' },
  { path: 'home', loadChildren: '../tab2/tab2.module#Tab2PageModule' },
  { path: 'socio', loadChildren: '../tab3/tab3.module#Tab3PageModule' },
  { path: 'contacto', loadChildren: './pages/contacto/contacto.module#ContactoPageModule' },
  { path: 'directiva', loadChildren: './pages/directiva/directiva.module#DirectivaPageModule' },
  { path: 'sesiones', loadChildren: './pages/sesiones/sesiones.module#SesionesPageModule' },
  { path: 'usuario', loadChildren: './pages/usuario/usuario.module#UsuarioPageModule' },
  { path: 'congresos', loadChildren: './pages/congresos/congresos.module#CongresosPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
