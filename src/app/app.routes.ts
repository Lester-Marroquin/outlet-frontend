import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProductoComponent } from './modules/producto/producto.component';
import { ClienteComponent } from './modules/cliente/cliente.component';
import { ProductoDetalleComponent } from './modules/producto-detalle/producto-detalle.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'producto/:id', component: ProductoDetalleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
