import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAuthComponent } from '@modules/auth/page-auth/page-auth.component';
import { PageDashboardComponent } from '@modules/dashboard/page-dashboard/page-dashboard.component';
import { PageHomeComponent } from '@modules/home/page-home/page-home.component';

// Ingreso de rutas desde el navegado:  ruta, componente a enviar
const routes: Routes = [
  {
    path: 'auth',
    component: PageAuthComponent,
    loadChildren: () =>
      import(`./modules/auth/auth.module`).then((m) => m.AuthModule),
  },
  {
    path: 'home',
    component: PageHomeComponent,
    loadChildren: () =>
      import(`./modules/home/home.module`).then((m) => m.HomeModule),
  },
  {
    path: 'dashboard',
    component: PageDashboardComponent,
    loadChildren: () =>
      import(`./modules/dashboard/dashboard.module`).then((m) => m.DashboardModule),
  },
  {
    path: '**',
    component: PageHomeComponent,
    loadChildren: () =>
      import(`./modules/home/home.module`).then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
