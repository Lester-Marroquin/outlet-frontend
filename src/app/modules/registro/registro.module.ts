import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistroRoutingModule } from './registro-routing.module';
import { PageRegistroComponent } from './page-registro/page-registro.component';


@NgModule({
  declarations: [
    PageRegistroComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
