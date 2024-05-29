import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProveedorResult } from '../interfaces/proveedor';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getAllProveedor$(): Observable<ProveedorResult> {
    return this.http.get<ProveedorResult>(`${this.URL}/proveedor`);
  }


}
