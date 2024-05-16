import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, BehaviorSubject, takeUntil } from 'rxjs';
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
export class HomeComponent implements OnInit, OnDestroy {
  public productoList$!: Observable<ProductoResult>;
  public categoriaList$!: Observable<CategoriaResult>;
  public productoPorCategoriaList$!: Observable<ProductoResult>;
  public seccionProducto!: boolean;
  private destroy$ = new Subject<void>();
  private productoPorCategoriaSubject = new BehaviorSubject<ProductoResult[]>(
    []
  );

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {}

  ngOnInit(): void {
    this.productoList$ = this.productoService.getAllProducto$();
    this.categoriaList$ = this.categoriaService.getAllCategoria$();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  productoPorCategoria(codCategoriaProducto: number): void {
    if (!this.seccionProducto) {
      this.seccionProducto = !this.seccionProducto;
    }

    this.productoService
      .getProductoPorCategoria(codCategoriaProducto)
      .pipe(takeUntil(this.destroy$))
      .subscribe((productos) => {
        this.productoPorCategoriaSubject.next([productos]);
      });
  }

  get productoPorCategoriaList(): ProductoResult[] {
    return this.productoPorCategoriaSubject.value;
  }
}
