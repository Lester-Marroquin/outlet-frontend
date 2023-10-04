import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePersonaComponent } from './page-persona/page-persona.component';

const routes: Routes = [
  {
    path: '',
    component: PagePersonaComponent,
    outlet: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
