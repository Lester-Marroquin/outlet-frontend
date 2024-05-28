import { Component, OnInit } from '@angular/core';
import { Producto, ProductoResult } from '../../../interfaces/producto';
import { Observable, catchError, of, throwError } from 'rxjs';
import { ProductoService } from '../../../services/producto.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';
import { CategoriaResult } from '../../../interfaces/categoria';
import { MarcaResult } from '../../../interfaces/marca';
import { MarcaService } from '../../../services/marca.service';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css',
})
export class ProductoDetalleComponent implements OnInit {
  // @Input() productoData!: Producto;

  public productoList$!: Observable<ProductoResult>;
  public categoriaList$!: Observable<CategoriaResult>;
  public marcaList$!: Observable<MarcaResult>;

  public productoItem!: Producto;
  public productoModificado!: Producto;

  public errorMensaje: string = '';
  public seccionListado: boolean = true;
  public detallesProducto: boolean = false;
  public modificarProducto: boolean = false;

  formularioProductoModificado: FormGroup = new FormGroup({
    UsuarioEmpleado: new FormControl('', [Validators.required]),
    ClaveEmpleado: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(128),
      Validators.required,
    ]),
  });

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
  ) {}

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

  editarProducto(producto: Producto): void {
    if (this.productoList$) {
      this.productoItem = producto;
    }
    if (!this.detallesProducto) {
      this.detallesProducto = !this.detallesProducto;
      this.getCategorias();
      this.getMarcas();
    }
  }

  setModificarProducto() {}

  getCategorias(): void {
    this.categoriaList$ = this.categoriaService.getAllCategoria$().pipe(
      catchError((error) => {
        this.errorMensaje = error.errorMessage;
        return throwError(() => error);
      })
    );
  }

  getMarcas(): void {
    this.marcaList$ = this.marcaService.getAllMarca$().pipe(
      catchError((error) => {
        this.errorMensaje = error.errorMessage;
        return throwError(() => error);
      })
    );
  }
}
