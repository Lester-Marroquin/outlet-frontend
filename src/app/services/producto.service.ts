import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ProductoResult } from '../interfaces/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private readonly URL = environment.api;
  
  constructor(private http: HttpClient){}

  getAllProducto$(): Observable<ProductoResult> {
    return this.http.get<ProductoResult>(`${this.URL}/producto`);
  }

  getProductoId$(id: number): Observable<ProductoResult> {
    return this.http.get<ProductoResult>(`${this.URL}/producto/${id}`);
  }

  


}
