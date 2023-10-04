import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { PageProveedorComponent } from './page-proveedor/page-proveedor.component';


@NgModule({
  declarations: [
    PageProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedorRoutingModule
  ]
})
export class ProveedorModule { }
