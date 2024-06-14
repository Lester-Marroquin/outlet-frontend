// venta.component.ts

import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ClienteService } from '../../services/cliente.service';
import { CategoriaService } from '../../services/categoria.service';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Cliente, ClienteResult } from '../../interfaces/cliente';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriaResult } from '../../interfaces/categoria';
import { ProductoResult } from '../../interfaces/producto';

@Component({
  selector: 'app-venta',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css'],
})
export class VentaComponent implements OnInit {
  public clienteList$!: Observable<ClienteResult>;
  public categoriaList$!: Observable<CategoriaResult>;
  public productoList$!: Observable<ProductoResult>;

  public clienteItem!: any | null;
  public productoItem!: any | null;

  public errorMensaje: string = '';
  public successMensaje: string = '';

  public rows: any[] = [
    { col1: '', col2: '', col3: '', col4: '', col5: '', col6: '' },
  ];

  constructor(
    private productoService: ProductoService,
    private clienteService: ClienteService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCliente(id: number) {
    this.clienteService.getClienteId$(id).subscribe(
      (response) => {
        if (response.success) {
          this.clienteItem = response.data;
          console.log(this.clienteItem);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  getCategorias(): void {
    this.categoriaList$ = this.categoriaService.getAllCategoria$().pipe(
      catchError((error) => {
        this.errorMensaje = error.errorMessage;
        return throwError(() => error);
      })
    );
  }

  getProductoPorCategoria(id: number) {
    this.productoService.getProductoPorCategoria$(id).subscribe(
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

  getProductoId(id: number) {
    this.productoService.getProductoId(id).subscribe(
      (response) => {
        if (response.success) {
          this.productoItem = response.data;
          console.log(this.productoItem);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  buscarCliente(codPersona: any) {
    console.log('Valor a buscar: ', codPersona);
    this.getCliente(codPersona);
  }

  buscarProducto(codProducto: any) {
    console.log('Valor a buscar: ', codProducto);
  }

  addRow() {
    this.rows.push({
      col1: '',
      col2: '',
      col3: '',
      col4: '',
      col5: '',
      col6: '',
    });
  }

  removeRow(index: number) {
    if (this.rows.length > 1) {
      this.rows.splice(index, 1);
    }
  }

  calculateSubtotal(row: any) {
    row.col5 = row.col2 * row.col4;
  }

  get partialValue(): number {
    return this.rows.reduce((sum, row) => sum + (row.col5 || 0), 0);
  }

  get taxes(): number {
    return this.partialValue * 0.12;
  }

  get totalValue(): number {
    return this.partialValue + this.taxes;
  }
}
