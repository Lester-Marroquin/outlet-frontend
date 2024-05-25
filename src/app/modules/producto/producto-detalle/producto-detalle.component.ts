import { Component, OnInit } from '@angular/core';
import { ProductoResult } from '../../../interfaces/producto';
import { Observable, of } from 'rxjs';
import { ProductoService } from '../../../services/producto.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css',
})
export class ProductoDetalleComponent implements OnInit {
  // @Input() productoData!: Producto;

  public productoList$!: Observable<ProductoResult>;
  public errorMensaje: string = '';

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getAllProducto$().subscribe(
      (response) => {
        if (response.success) {
          this.productoList$ = of(response);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = error.error.message;
      }
    );
  }
}
