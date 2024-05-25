import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductoDetalleComponent } from '../producto-detalle/producto-detalle.component';
import { AsyncPipe } from '@angular/common';
import { ProductoResult } from '../../../interfaces/producto';
import { CommonModule } from '@angular/common';
import { ProductoCrearComponent } from '../producto-crear/producto-crear.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductoDetalleComponent,
    ProductoCrearComponent,
    CommonModule,
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;

  public verDetalle: boolean = false;
  public verCrear: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  verDetalleComponent(event: any) {
    this.verCrear = this.verCrear = false;
    this.verDetalle = !this.verDetalle;
  }

  verCrearComponent(event: any) {
    this.verDetalle = this.verDetalle = false;
    this.verCrear = !this.verCrear;
  }
}
