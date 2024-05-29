import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cliente, ClienteResult } from '../interfaces/cliente';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllCliente$(): Observable<ClienteResult> {
    return this.http.get<ClienteResult>(`${this.URL}/Cliente-producto`);
  }

  getClienteId$(id: number): Observable<ClienteResult> {
    return this.http.get<ClienteResult>(
      `${this.URL}/Cliente-producto/${id}`
    );
  }

  postCliente$(dataCliente: Cliente): Observable<ClienteResult> {
    return this.http
      .post<ClienteResult>(`${this.URL}/Cliente-producto`, dataCliente)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }

  putCliente$(id: number, dataCliente: Cliente ): Observable<ClienteResult> {
    return this.http.post<ClienteResult>(`${this.URL}/Cliente-producto${id}`, dataCliente)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }
}
