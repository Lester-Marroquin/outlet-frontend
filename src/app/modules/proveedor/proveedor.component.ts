import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Proveedor, ProveedorResult } from '../../interfaces/proveedor';
import { Observable, of } from 'rxjs';
import { ProveedorService } from '../../services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css',
})
export class ProveedorComponent implements OnInit {
  public proveedorForm!: FormGroup;

  public proveedorList$!: Observable<ProveedorResult>;

  public proveedorItem!: Proveedor;
  public proveedorModificado!: Proveedor;

  public departementoCod!: number;
  public errorMensaje: string = '';
  public successMensaje: string = '';
  public seccionListado: boolean = false;
  public detallesProveedor: boolean = false;
  public modificarProveedor: boolean = false;
  public seccionCrear: boolean = false;

  constructor(
    private fb: FormBuilder,
    public proveedorService: ProveedorService
  ) {}

  ngOnInit(): void {
    this.proveedorForm = this.fb.group({
      RazonSocial: [''],
      NombreComercial: [''],
      CodTipoIdentificacion: [''],
      NumeroIdentificacion: [''],
      CodEstado: [''],
    });

    this.getProveedor();
    this.seccionListado = false;
    this.detallesProveedor = false;
    this.modificarProveedor = false;
    this.seccionCrear = false;

  }

  verListado(): void {
    this.seccionListado = !this.seccionListado;
    this.detallesProveedor = false;
    this.modificarProveedor = false;
    this.seccionCrear = false;
  }

  verCrearProveedor(): void {
    this.seccionCrear = !this.seccionCrear;
    this.seccionListado = false;
    this.detallesProveedor = false;
    this.modificarProveedor = false;
  }

  getProveedor() {
    this.proveedorService.getAllProveedor$().subscribe(
      (response) => {
        if (response.success) {
          this.proveedorList$ = of(response);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }


  crearProveedor() {
    const dataProveedor = this.proveedorForm.value;

    dataProveedor.Sexo = Number(dataProveedor.Sexo);
    dataProveedor.CodTipoIdentificacion = Number(
      dataProveedor.CodTipoIdentificacion
    );
    const { CodDepartamento, ...dataProveedorNew } = dataProveedor;

    this.proveedorService.postProveedor$(dataProveedorNew).subscribe(
      (response) => {
        if (response.success) {
          this.getProveedor();
          this.successMensaje = response.message;
          this.proveedorForm.reset();
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  setModificarProveedor(): void {
    const codProveedor: number | undefined = this.proveedorModificado.CodProveedor;

    const {

      ...proveedorModificado
    } = this.proveedorModificado;
  

    if (codProveedor != null) {
      this.proveedorService.putProveedor$(codProveedor, proveedorModificado).subscribe(
        (response) => {
          if (response.success) {
            this.modificarProveedor = !this.modificarProveedor;
            this.seccionListado = !this.seccionListado;
            this.getProveedor();
            this.successMensaje = response.message;
          }
        },
        (error) => {
          this.errorMensaje = `${error.error.message} ${error.error.data}`;
        }
      );
    }
  }

  editarProveedor(Proveedor: Proveedor): void {
    if (this.proveedorList$) {
      this.proveedorItem = Proveedor;
    }
    if (!this.detallesProveedor) {
      this.detallesProveedor = !this.detallesProveedor;
    }
  }
}
