import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginClienteComponent } from './page-login-cliente/page-login-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: PageLoginClienteComponent,
    outlet: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginClienteRoutingModule { }
