import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { PagePersonaComponent } from './page-persona/page-persona.component';


@NgModule({
  declarations: [
    PagePersonaComponent
  ],
  imports: [
    CommonModule,
    PersonaRoutingModule
  ]
})
export class PersonaModule { }
