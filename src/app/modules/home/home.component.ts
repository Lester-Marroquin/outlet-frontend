
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Observable, of, catchError, throwError } from 'rxjs';
import { ProductoResult } from '../../interfaces/producto';
import { ProductoService } from '../../services/producto.service';
import { CategoriaResult } from '../../interfaces/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { LoginEmpleado } from '../../interfaces/login';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public productoList$!: Observable<ProductoResult>;
  public categoriaList$!: Observable<CategoriaResult>;
  public productoPorCategoriaList$!: Observable<ProductoResult>;
  public seccionProductoPorCategoria!: boolean;

  //Varibales para mostrar el mensaje de error
  public errorMensaje: string = '';
  public verError: boolean = false;

  formularioLogin: FormGroup = new FormGroup({
    UsuarioEmpleado: new FormControl('', [
      Validators.required,
      // Validators.email,
    ]),
    ClaveEmpleado: new FormControl('', [
      Validators.minLength(3),
      Validators.maxLength(128),
      Validators.required,
    ]),
  });

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService,
    private loginService: LoginService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productoList$ = this.productoService.getAllProducto$().pipe(
      catchError((error) => {
        this.errorMensaje = error.errorMessage;
        return throwError(() => error);
      })
    );

    this.categoriaList$ = this.categoriaService.getAllCategoria$().pipe(
      catchError((error) => {
        this.errorMensaje = error.errorMessage;
        return throwError(() => error);
      })
    );
  }

  mostrarError(): void {
    // this.errorSuccess = !this.errorSuccess;
    this.errorMensaje = '';
  }


  productoPorCategoria(codCategoriaProducto: number): void {
    if (!this.seccionProductoPorCategoria) {
      this.seccionProductoPorCategoria = !this.seccionProductoPorCategoria;
    }

    this.productoPorCategoriaList$ = this.productoService
      .getProductoPorCategoria$(codCategoriaProducto)
      .pipe(
        catchError((error) => {
          this.errorMensaje = error.errorMessage;
          return throwError(() => error);
        })
      );
  }

  /////////////////////////////////////////////

  menuOpcion: String = '';

  login(): void {
    const dataLogin: LoginEmpleado = this.formularioLogin.value;

    this.loginService.loginEmpleado$(dataLogin).subscribe(
      (response) => {
        if (response.success) {
          const token  = response.data?.token;

          if (token) {
            localStorage.setItem('token', token);
            this.router.navigate(['/dashboard']);
            // Recargar la página después de un breve retraso
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          } else {
            this.errorMensaje = 'No se recibio token válido';
          }
          
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = error.error.message;
      }
    );
  }

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
