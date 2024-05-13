import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoDetalleComponent } from '../producto-detalle/producto-detalle.component';
import { ProductoService } from '../../services/producto.service';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { AsyncPipe } from '@angular/common';
import { ProductoResult } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [AsyncPipe, ErrorMessageComponent, ProductoDetalleComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoList$ = this.productoService.getAllProducto$();
  }
}
