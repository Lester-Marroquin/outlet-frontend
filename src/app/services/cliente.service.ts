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
      return this.http.get<ClienteResult>(`${this.URL}/persona`);
    }
  
    getClienteId$(id: number): Observable<ClienteResult> {
      return this.http.get<ClienteResult>(`${this.URL}/persona/${id}`);
    }
  
    postCliente$(dataCliente: Cliente): Observable<ClienteResult> {
      return this.http
        .post<ClienteResult>(`${this.URL}/persona`, dataCliente)
        .pipe(
          map((response) => ({
            success: response.success,
            message: response.message,
            data: response.data,
          }))
        );
    }
  
    putCliente$(id: number, dataCliente: Cliente): Observable<ClienteResult> {
      console.log(id, '|', dataCliente);
      return this.http
        .put<ClienteResult>(`${this.URL}/persona/${id}`, dataCliente)
        .pipe(
          map((response) => ({
            success: response.success,
            message: response.message,
            data: response.data,
          }))
        );
    }
}
