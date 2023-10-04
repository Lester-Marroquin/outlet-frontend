import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor() { }

  enviarCredenciales(UsuarioID: string, ClaveUsuario: string): void {
    console.log(UsuarioID, ClaveUsuario);
  }

}
