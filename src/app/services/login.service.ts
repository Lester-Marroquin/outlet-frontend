import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LoginResult } from '../interfaces/login';
import { response } from 'express';


@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  loginEmpleado$(
    UsuarioEmpleado: string,
    ClaveEmpleado: string
  ): Observable<LoginResult> {
    
    const body = { UsuarioEmpleado, ClaveEmpleado };
    
    return this.http.post<LoginResult>(`${this.URL}/login-empleado`, body).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }))
    );
  }
}
