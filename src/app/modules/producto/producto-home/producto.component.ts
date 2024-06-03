import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductoDetalleComponent } from '../producto-detalle/producto-detalle.component';
import { AsyncPipe } from '@angular/common';
import { ProductoResult } from '../../../interfaces/producto';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [
    AsyncPipe,
    ProductoDetalleComponent,
    CommonModule,
  ],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;

  constructor() {}

  ngOnInit(): void {}


}
