import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LoginCliente, LoginClienteResult, LoginEmpleado, LoginEmpleadoResult } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  loginEmpleado$(dataLogin: LoginEmpleado): Observable<LoginEmpleadoResult> {
    
    return this.http.post<LoginEmpleadoResult>(`${this.URL}/login-empleado`, dataLogin).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }))
    );
  }

  loginCliente$(datalogin: LoginCliente): Observable<LoginClienteResult> {
    
    return this.http.post<LoginClienteResult>(`${this.URL}/login-empleado`, datalogin).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }))
    );
  }
}
