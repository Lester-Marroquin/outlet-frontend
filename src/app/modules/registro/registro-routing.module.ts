import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRegistroComponent } from './page-registro/page-registro.component';

const routes: Routes = [
  {
    path: '',
    component: PageRegistroComponent,
    outlet: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
