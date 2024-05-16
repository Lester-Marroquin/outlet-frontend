import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Producto, ProductoResult } from '../interfaces/producto';
import { catchError, map } from 'rxjs/operators';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllProducto$(): Observable<Producto[]> {
    return this.http.get<ProductoResult>(`${this.URL}/producto`).pipe(
      map(response => response.data),
      catchError(error => of([]))
    );
  }

  // getProductoId$(id: number): Observable<Producto> {
  //   return this.http.get<ProductoResult>(`${this.URL}/producto/${id}`);
  // }

  getProductoPorCategoria(id: number): Observable<Producto[]> {
    return this.http.get<ProductoResult>(
      `${this.URL}/productoPorCategoria/${id}`
    ).pipe(
      map(response => response.data),
      catchError(error => of([]))
    );
  }
}
