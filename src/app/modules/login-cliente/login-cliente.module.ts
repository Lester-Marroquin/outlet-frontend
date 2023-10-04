import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginClienteRoutingModule } from './login-cliente-routing.module';
import { PageLoginClienteComponent } from './page-login-cliente/page-login-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageLoginClienteComponent
  ],
  imports: [
    CommonModule,
    LoginClienteRoutingModule,
    ReactiveFormsModule,
  ]
})
export class LoginClienteModule { }
