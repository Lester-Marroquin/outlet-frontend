import { Component, OnInit } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { ProductoResult } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { CategoriaResult } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;
  public categoriaList$!: Observable<CategoriaResult>;
  public productoPorCategoriaList$!: Observable<ProductoResult>;
  public seccionProducto!: boolean;

  //Varibales para mostrar el mensaje de error
  public errorMessage: string = '';
  public errorSuccess: boolean = false;

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.productoList$ = this.productoService.getAllProducto$().pipe(
      catchError((error) => {
          this.errorSuccess = true;
          this.errorMessage = error.message;
        return of({ success: false, message: error.message, data: [] });
      })
    );

    this.categoriaList$ = this.categoriaService.getAllCategoria$().pipe(
      catchError((error) => {
          this.errorSuccess = true;
          this.errorMessage = error.message;
        return of({ success: false, message: error.message, data: [] });
      })
    );
  }

  mostrarError(): void {
    
  }

  productoPorCategoria(codCategoriaProducto: number): void {
    if (!this.seccionProducto) {
      this.seccionProducto = !this.seccionProducto;
    }

    this.productoPorCategoriaList$ = this.productoService
      .getProductoPorCategoria$(codCategoriaProducto)
      .pipe(
        catchError((error) => {
            this.errorSuccess = true;
            this.errorMessage = error.message;
          return of({ success: false, message: error.message, data: [] });
        })
      );
  }
}
