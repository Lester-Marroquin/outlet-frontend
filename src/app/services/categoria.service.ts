import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Categoria, CategoriaResult } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllCategoria$(): Observable<CategoriaResult> {
    return this.http.get<CategoriaResult>(`${this.URL}/categoria-producto`);
  }

  getCategoriaId$(id: number): Observable<CategoriaResult> {
    return this.http.get<CategoriaResult>(
      `${this.URL}/categoria-producto/${id}`
    );
  }

  postCategoria$(dataCategoria: Categoria): Observable<CategoriaResult> {
    return this.http
      .post<CategoriaResult>(`${this.URL}/categoria-producto`, dataCategoria)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }

  putCategoria$(id: number, dataCategoria: Categoria): Observable<CategoriaResult> {
    return this.http
      .post<CategoriaResult>(`${this.URL}/categoria-producto${id}`, dataCategoria)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }
}
