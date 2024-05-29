import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { MarcaResult } from '../interfaces/marca';

@Injectable({
  providedIn: 'root',
})
export class MarcaService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllMarca$(): Observable<MarcaResult> {
    return this.http.get<MarcaResult>(`${this.URL}/marca-producto`).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data,
      }))
    );
  }
}
