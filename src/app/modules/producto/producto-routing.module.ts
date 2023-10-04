import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PageProductoComponent } from './page-producto/page-producto.component';

const routes: Routes = [
  {
    path: '',
    component: PageProductoComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
