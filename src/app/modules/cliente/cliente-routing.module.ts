import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClienteComponent } from './page-cliente/page-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: PageClienteComponent,
    outlet: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
