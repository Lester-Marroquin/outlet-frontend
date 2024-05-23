import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductoDetalleComponent } from '../producto-detalle/producto-detalle.component';
import { ProductoService } from '../../services/producto.service';
import { AsyncPipe } from '@angular/common';
import { ProductoResult } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [AsyncPipe, ProductoDetalleComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;

  public errorMensaje: string = '';
  public errorBanner: boolean = false;

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoList$ = this.productoService.getAllProducto$().pipe(
      catchError((error) => {
        this.errorMensaje = error.errorMessage;
        return throwError(() => error);
      })
    );
  }
}
