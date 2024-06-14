import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ClienteComponent } from './modules/cliente/cliente.component';
import { ProductoComponent } from './modules/producto/producto-home/producto.component';
import { ProductoDetalleComponent } from './modules/producto/producto-detalle/producto-detalle.component';
import { ColaboradorComponent } from './modules/colaborador/colaborador.component';
import { VentaComponent } from './modules/venta/venta.component';
import { ProveedorComponent } from './modules/proveedor/proveedor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'cliente', component: ClienteComponent },
      { path: 'proveedor', component: ProveedorComponent },
      { path: 'venta', component: VentaComponent },
      { path: 'colaborador', component: ColaboradorComponent },
      { path: 'producto', component: ProductoComponent,
        children: [
          { path: 'detalle', component: ProductoDetalleComponent },
          { path: 'lista_productos', component: ProductoDetalleComponent },
        ],
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'home' },
];
