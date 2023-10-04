import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabezeraUsuarioComponent } from './components/cabezera-usuario/cabezera-usuario.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { BarraLateralComponent } from './components/barra-lateral/barra-lateral.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CabezeraUsuarioComponent,
    PiePaginaComponent,
    BarraLateralComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BarraLateralComponent,
    CabezeraUsuarioComponent,
    PiePaginaComponent,
  ]
})
export class SharedModule { }
