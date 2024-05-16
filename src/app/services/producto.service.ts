import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ProductoResult } from '../interfaces/producto';
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
    return this.http.get<ProductoResult>(`${this.URL}/producto/${id}`).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }))
    );
  }

}
