import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Proveedor, ProveedorResult } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllProveedor$(): Observable<ProveedorResult> {
    return this.http.get<ProveedorResult>(`${this.URL}/proveedor`);
  }

  getProveedorId$(id: number): Observable<ProveedorResult> {
    return this.http.get<ProveedorResult>(`${this.URL}/proveedor/${id}`);
  }

  postProveedor$(dataCliente: Proveedor): Observable<ProveedorResult> {
    return this.http
      .post<ProveedorResult>(`${this.URL}/proveedor`, dataCliente)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }

  putProveedor$(id: number, dataProveedor: Proveedor): Observable<ProveedorResult> {
    console.log(id, '|', dataProveedor);
    return this.http
      .put<ProveedorResult>(`${this.URL}/persona/${id}`, dataProveedor)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }
}
