import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Producto, ProductoResult } from '../interfaces/producto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllProducto$(): Observable<ProductoResult> {
    return this.http.get<ProductoResult>(`${this.URL}/producto`).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }))
    );
  }

  getProductoPorCategoria$(id: number): Observable<ProductoResult> {
    return this.http
      .get<ProductoResult>(`${this.URL}/productoPorCategoria/${id}`)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }

  postProducto$(dataProducto: Producto): Observable<ProductoResult> {
    return this.http
      .post<ProductoResult>(`${this.URL}/producto`, dataProducto)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }

  putProducto$(id: number, dataProducto: Producto): Observable<ProductoResult> {
    console.log(dataProducto);
    return this.http
      .put<ProductoResult>(`${this.URL}/producto/${id}`, dataProducto)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }
}
