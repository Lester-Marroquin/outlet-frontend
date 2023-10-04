import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageProveedorComponent } from './page-proveedor/page-proveedor.component';

const routes: Routes = [
  {
    path: '',
    component: PageProveedorComponent,
    outlet: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }
