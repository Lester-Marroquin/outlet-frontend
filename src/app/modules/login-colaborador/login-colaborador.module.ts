import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginColaboradorRoutingModule } from './login-colaborador-routing.module';
import { PageLoginColaboradorComponent } from './page-login-colaborador/page-login-colaborador.component';


@NgModule({
  declarations: [
    PageLoginColaboradorComponent
  ],
  imports: [
    CommonModule,
    LoginColaboradorRoutingModule
  ]
})
export class LoginColaboradorModule { }
