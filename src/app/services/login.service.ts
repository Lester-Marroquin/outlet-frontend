import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResult } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  loginEmpleado$(UsuarioEmpleado: String, ClaveEmpleado: String): Observable<LoginResult> {
    const body = {
      UsuarioEmpleado: UsuarioEmpleado,
      ClaveEmpleado: ClaveEmpleado
    }

    return this.http.post<LoginResult>(`${this.URL}/login-empleado`, body)

  }
}
