import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { DepartamentoResult, MunicipioDeptResult } from '../interfaces/municipio';


@Injectable({
  providedIn: 'root',
})
export class MunicipioService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getDepartamento$(): Observable<DepartamentoResult> {
    return this.http.get<DepartamentoResult>(`${this.URL}/municipio-dept`).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }))
    );
  }

  getMunicipio$(id: number): Observable<MunicipioDeptResult> {
    return this.http.get<MunicipioDeptResult>(`${this.URL}/municipio-dept/${id}`).pipe(
        map((response) => ({
                    success: response.success,
        message: response.message,
        data: response.data,
        }))
    );
  }




}

