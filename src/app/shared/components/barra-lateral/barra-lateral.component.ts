import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-barra-lateral',
  templateUrl: './barra-lateral.component.html',
  styleUrls: ['./barra-lateral.component.css']
})
export class BarraLateralComponent implements OnInit {

  menu: {
    defaultOptions: Array<any>, 
    accessLink: Array<any> 
  } = { defaultOptions: [], accessLink: [] }
  customOptions: Array<any> = []

  constructor(){ }

  ngOnInit(){
    this.menu.defaultOptions = [
      {
        name: 'Personas',
        router: ['/', 'dashboard', 'personas']
      },
      {
        name: 'Proveedores',
        router: ['/', 'dashboard', 'proveedores']
      },
      {
        name: 'Clientes',
        router: ['/', 'dashboard', 'clientes']
      }
    ]

    this.customOptions = [
      {
        name: 'Personas actuales'
      },
      {
        name: 'Proveedores actuales'
      },
      {
        name: 'Compras'
      }
    ]

  }


}
