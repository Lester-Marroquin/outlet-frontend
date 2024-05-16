import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  formularioLogin: FormGroup = new FormGroup({
    UsuarioEmpleado: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    ClaveEmpleado: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(128),
      Validators.required,
    ]),
  });

  menuOpcion: String = '';
  errorSesion: boolean = false;
  dataErrorSesion!: string;

  constructor(
    private loginService: LoginService,
    private renderer: Renderer2, 
    private elementRef: ElementRef) {}

  login(): void {
    const { UsuarioEmpleado, ClaveEmpleado } = this.formularioLogin.value;

    this.loginService.loginEmpleado$(UsuarioEmpleado, ClaveEmpleado);
    

  }

  registro() {}

  respuestaLogin() {}

  onOpcion(menuOpcion: string) {
    this.menuOpcion = menuOpcion;
  }

  toggleMenu() {
    const navbarToggler =
      this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const isCollapsed = navbarToggler.getAttribute('aria-expanded') === 'false';

    if (isCollapsed) {
      this.renderer.addClass(
        this.elementRef.nativeElement.querySelector('.navbar-collapse'),
        'show'
      );
      this.renderer.setAttribute(navbarToggler, 'aria-expanded', 'true');
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement.querySelector('.navbar-collapse'),
        'show'
      );
      this.renderer.setAttribute(navbarToggler, 'aria-expanded', 'false');
    }
  }
}
