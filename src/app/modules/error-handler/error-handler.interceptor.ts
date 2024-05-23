import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface BackendResponse {
  success: boolean;
  message: string;
  data: any | null;
}

export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        
        let errorMessage: string;
        let backendResponse: BackendResponse;

        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente
          errorMessage = `Error: ${error.error.message}`;
          backendResponse = {
            success: false,
            message: errorMessage,
            data: null,
          };
        } else {
          // Error del lado del servidor
          backendResponse = error.error;
          
          if (!backendResponse.message) {
            errorMessage = 'Error desconocido';
            backendResponse.message = errorMessage;
          }
        }

        return throwError(() => backendResponse);
      })
    );
  }
}