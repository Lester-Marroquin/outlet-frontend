import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'personas',
    loadChildren: () =>
      import(`@modules/persona/persona.module`).then((m) => m.PersonaModule),
  },
  {
    path: 'proveedores',
    loadChildren: () =>
      import(`@modules/proveedor/proveedor.module`).then(
        (m) => m.ProveedorModule
      ),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import(`@modules/cliente/cliente.module`).then((m) => m.ClienteModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
