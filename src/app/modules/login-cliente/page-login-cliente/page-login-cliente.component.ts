import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-page-login-cliente',
  templateUrl: './page-login-cliente.component.html',
  styleUrls: ['./page-login-cliente.component.css']
})
export class PageLoginClienteComponent implements OnInit {

  formularioLogin: FormGroup = new FormGroup({});
  
  constructor(
    private fb: FormBuilder,
    private authServices: AuthService
    ) {}

  ngOnInit() {
    this.formularioLogin = this.fb.group({
      UsuarioID: ['', [Validators.required, Validators.email]],
      ClaveUsuario: ['', [Validators.minLength(3), Validators.maxLength(128), Validators.required]]
    });

  }

  loginCliente(): void {
    const { UsuarioID, ClaveUsuario } = this.formularioLogin.value
    this.authServices.enviarCredenciales(UsuarioID, ClaveUsuario)
  }

}
