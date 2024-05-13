import { Component, Input } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent  {

  @Input() productoItem!: Producto;
  
}