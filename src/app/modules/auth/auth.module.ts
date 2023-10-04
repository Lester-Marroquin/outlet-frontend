import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { PageAuthComponent } from './page-auth/page-auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
