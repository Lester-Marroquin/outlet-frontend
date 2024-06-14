import { Component, OnInit } from '@angular/core';
import { Producto, ProductoResult } from '../../../interfaces/producto';
import { Observable, catchError, of, throwError } from 'rxjs';
import { ProductoService } from '../../../services/producto.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';
import { CategoriaResult } from '../../../interfaces/categoria';
import { MarcaResult } from '../../../interfaces/marca';
import { MarcaService } from '../../../services/marca.service';
import { ProveedorResult } from '../../../interfaces/proveedor';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css',
})
export class ProductoDetalleComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;
  public categoriaList$!: Observable<CategoriaResult>;
  public marcaList$!: Observable<MarcaResult>;
  public proveedorList$!: Observable<ProveedorResult>;

  public productoItem!: Producto;
  public productoModificado!: Producto;

  public errorMensaje: string = '';
  public successMensaje: string = '';
  public seccionListado: boolean = false;
  public detallesProducto: boolean = false;
  public modificarProducto: boolean = false;
  public seccionCrear: boolean = false;

  public productoForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private proveedorService: ProveedorService
  ) {}

  ngOnInit(): void {
    this.productoForm = this.fb.group({
      CodCategoriaProducto: [''],
      Producto: [''],
      Cantidad: [''],
      Precio: [''],
      Color: [''],
      CodMarcaProducto: [''],
      Observaciones: [''],
      Tipo: ['Producto'],
      CodProveedor: [''],
    });

    this.getCategorias();
    this.getMarcas();
    this.getProductos();
    this.getProveedores();
    this.seccionListado = false;
    this.detallesProducto = false;
    this.modificarProducto = false;
    this.seccionCrear = false;
  }

  verListado(): void {
    this.seccionListado = !this.seccionListado;
    this.detallesProducto = false;
    this.modificarProducto = false;
    this.seccionCrear = false;
  }

  verCrearProducto(): void {
    this.seccionCrear = !this.seccionCrear;
    this.seccionListado = false;
    this.detallesProducto = false;
    this.modificarProducto = false;
  }

  getProductos() {
    this.productoService.getAllProducto$().subscribe(
      (response) => {
        if (response.success) {
          this.productoList$ = of(response);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  crearProducto() {
    const dataProducto = this.productoForm.value;
    const Imagen = 'Imagen producto';
    const Tipo = 'Producto';

    dataProducto.Imagen = Imagen;
    dataProducto.Tipo = Tipo;
    dataProducto.CodEstado = 1;

    this.productoService.postProducto$(dataProducto).subscribe(
      (response) => {
        if (response.success) {
          this.getProductos();
          this.successMensaje = response.message;
          this.productoForm.reset();
        }
      },
      (error) => {
          this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );

  }

  setModificarProducto(): void {
    let codProducto: number | undefined = this.productoModificado.CodProducto;
    const {
      CategoriaProducto,
      CodProducto,
      MarcaProducto,
      ...productoModificado
    } = this.productoModificado;

    if (codProducto != null) {
      this.productoService
        .putProducto$(codProducto, productoModificado)
        .subscribe(
          (response) => {
            if (response.success) {
              this.modificarProducto = !this.modificarProducto;
              this.seccionListado = !this.seccionListado;
              this.getProductos();
              this.successMensaje = response.message;
            }
          },
          (error) => {
            this.errorMensaje = `${error.error.message} ${error.error.data}`;
          }
        );
    }
  }

  editarProducto(producto: Producto): void {
    if (this.productoList$) {
      this.productoItem = producto;
    }
    if (!this.detallesProducto) {
      this.detallesProducto = !this.detallesProducto;
    }
  }

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

  getProveedores(): void {
    this.proveedorList$ = this.proveedorService.getAllProveedor$().pipe(
      catchError((error) => {
        this.errorMensaje = error.errorMessage;
        return throwError(() => error);
      })
    );
  }
}
