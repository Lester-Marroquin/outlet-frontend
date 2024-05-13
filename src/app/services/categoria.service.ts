import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriaResult } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private readonly URL = environment.api;

  constructor(private http:HttpClient) { }

  getAllCategoria$(): Observable<CategoriaResult> {
    return this.http.get<CategoriaResult>(`${this.URL}/categoria-producto`);
  }

}
