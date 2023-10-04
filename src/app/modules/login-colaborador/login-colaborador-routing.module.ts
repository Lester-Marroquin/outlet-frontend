import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginColaboradorComponent } from './page-login-colaborador/page-login-colaborador.component';

const routes: Routes = [
  {
    path: '',
    component: PageLoginColaboradorComponent,
    outlet: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginColaboradorRoutingModule { }
