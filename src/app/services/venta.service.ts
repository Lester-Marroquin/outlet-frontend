import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface VentaResult {
    success: boolean;
    message: string;
    data: any;
}

@Injectable({
    providedIn: 'root'
})

export class VentaService {
      
    private readonly URL = environment.api;
    
    constructor(private http: HttpClient) {}
  

  getAllVentas$(): Observable<VentaResult> {
    return this.http.get<VentaResult>(`${this.URL}`);
  }

  getVentasId$(id: number): Observable<VentaResult> {
    return this.http.get<VentaResult>(`${this.URL}/${id}`);
  }

  postVenta$(dataVenta: any): Observable<VentaResult> {
    return this.http.post<VentaResult>(`${this.URL}`, dataVenta).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data
      }))
    );
  }

  anularVenta$(numeroFactura: string): Observable<VentaResult> {
    return this.http.post<VentaResult>(`${this.URL}/anular`, { NumeroFactura: numeroFactura }).pipe(
      map((response) => ({
        success: response.success,
        message: response.message,
        data: response.data
      }))
    );
  }

}