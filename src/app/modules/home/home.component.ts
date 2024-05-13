import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoResult } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { CategoriaResult } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ErrorMessageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;
  public categoriaList$!: Observable<CategoriaResult>;

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.productoList$ = this.productoService.getAllProducto$();
    this.categoriaList$ = this.categoriaService.getAllCategoria$();
  }
}

