import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login-cliente',
    loadChildren: () =>
      import('@modules/login-cliente/login-cliente.module').then(
        (m) => m.LoginClienteModule
      ),
  },
  {
    path: 'login-colaborador',
    loadChildren: () =>
      import('@modules/login-colaborador/login-colaborador.module').then(
        (m) => m.LoginColaboradorModule
      ),
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('@modules/registro/registro.module').then((m) => m.RegistroModule),
  },
  {
    path: '**',
    redirectTo: '/auth/login-cliente'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
