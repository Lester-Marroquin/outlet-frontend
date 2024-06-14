import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Empleado, EmpleadoResult } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllCliente$(): Observable<EmpleadoResult> {
    return this.http.get<EmpleadoResult>(`${this.URL}/empleado`);
  }

  getClienteId$(id: number): Observable<EmpleadoResult> {
    return this.http.get<EmpleadoResult>(`${this.URL}/empleado/${id}`);
  }

  postCliente$(dataEmpleado: Empleado): Observable<EmpleadoResult> {
    return this.http
      .post<EmpleadoResult>(`${this.URL}/empleado`, dataEmpleado)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }

  putCliente$(id: number, dataEmpleado: Empleado): Observable<EmpleadoResult> {
    console.log(id, '|', dataEmpleado);
    return this.http
      .put<EmpleadoResult>(`${this.URL}/empleado/${id}`, dataEmpleado)
      .pipe(
        map((response) => ({
          success: response.success,
          message: response.message,
          data: response.data,
        }))
      );
  }
}
