import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente, ClienteResult } from '../../interfaces/cliente';
import { Observable, of } from 'rxjs';
import { DepartamentoResult, MunicipioDeptResult } from '../../interfaces/municipio';
import { MunicipioService } from '../../services/municipio.service';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-colaborador',
  standalone: true,
  imports: [AsyncPipe, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './colaborador.component.html',
  styleUrl: './colaborador.component.css',
})
export class ColaboradorComponent implements OnInit {
  public clienteForm!: FormGroup;
  public empleadoForm!: FormGroup;
  public personaCreada!: Observable<ClienteResult>;

  public clienteList$!: Observable<ClienteResult>;
  public departamentoList$!: Observable<DepartamentoResult>;
  public municipioList$!: Observable<MunicipioDeptResult>;
  public clienteItem!: Cliente;
  public clienteModificado!: Cliente;

  public departementoCod!: number;
  public errorMensaje: string = '';
  public successMensaje: string = '';
  public seccionListado: boolean = false;
  public detallesCliente: boolean = false;
  public modificarCliente: boolean = false;
  public seccionCrear: boolean = false;
  public seccionCrearEmpleado: boolean = false;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private municipioServices: MunicipioService,
    private empleadoServices: EmpleadoService
  ) {}

  ngOnInit(): void {
    this.clienteForm = this.fb.group({
      Nombre: [''],
      Apellido: [''],
      FechaNacimiento: [''],
      Sexo: [''],
      CodTipoIdentificacion: [''],
      NumeroIdentificacion: [''],
      Telefono: [''],
      Correo: [''],
      Direccion: [''],
      CodMunicipio: [''],
      CodDepartamento: [''],
    });

    this.empleadoForm = this.fb.group({
      UsuarioEmpleado: [''],
      ClaveEmpleado: [''],
      CodPersona: [''],
      Jefe: [''],
      CodCargo: [''],
      FechaIngreso: [''],
      FechaRetiro: [''],
      CodEstado: [''],
      CodRol: [''],
    });

    this.getCliente();
    this.getDepartamento();
    this.seccionListado = false;
    this.detallesCliente = false;
    this.modificarCliente = false;
    this.seccionCrear = false;
    this.seccionCrearEmpleado = false;

    this.clienteForm.get('CodDepartamento')?.valueChanges.subscribe((value) => {
      this.departementoCod = value;
      this.getMunicipio(value);
    });
  }

  verListado(): void {
    this.seccionListado = !this.seccionListado;
    this.detallesCliente = false;
    this.modificarCliente = false;
    this.seccionCrear = false;
    this.seccionCrearEmpleado = false;
  }

  verCrearCliente(): void {
    this.seccionCrear = !this.seccionCrear;
    this.seccionListado = false;
    this.detallesCliente = false;
    this.modificarCliente = false;
    this.seccionCrearEmpleado = false;
  }

  getCliente() {
    this.clienteService.getAllCliente$().subscribe(
      (response) => {
        if (response.success) {
          this.clienteList$ = of(response);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  getDepartamento() {
    this.municipioServices.getDepartamento$().subscribe(
      (response) => {
        if (response.success) {
          this.departamentoList$ = of(response);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  getMunicipio(id: number) {
    this.municipioServices.getMunicipio$(id).subscribe(
      (response) => {
        if (response.success) {
          this.municipioList$ = of(response);
        } else {
          this.errorMensaje = response.message;
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  crearCliente() {
    const dataCliente = this.clienteForm.value;

    dataCliente.Sexo = Number(dataCliente.Sexo);
    dataCliente.CodTipoIdentificacion = Number(
      dataCliente.CodTipoIdentificacion
    );
    const { CodDepartamento, ...dataClienteNew } = dataCliente;

    console.log(dataCliente);
    this.clienteService.postCliente$(dataClienteNew).subscribe(
      (response) => {
        if (response.success) {
          this.successMensaje = response.message;
          const CodPersona = response.data
          console.log(CodPersona);
          this.getCliente()  
          this.clienteForm.reset();
        }
      },
      (error) => {
        this.errorMensaje = `${error.error.message} ${error.error.data}`;
      }
    );
  }

  crearEmpleado() {
    const dataEmpleado = this.empleadoForm.value;
    
    
    
    
    console.log(dataEmpleado);


    

  }

  setModificarCliente(): void {
    const codPersona: number | undefined = this.clienteModificado.CodPersona;

    const {
      CodDepartamento,
      CodPersona,
      Departamento,
      Municipio,
      TipoIdentificacion,
      ...clienteModificado
    } = this.clienteModificado;

    clienteModificado.Sexo = 1;
    const fecha = new Date();
    clienteModificado.FechaNacimiento = fecha.toISOString().split('T')[0];

    if (codPersona != null) {
      this.clienteService.putCliente$(codPersona, clienteModificado).subscribe(
        (response) => {
          if (response.success) {
            this.modificarCliente = !this.modificarCliente;
            this.seccionListado = !this.seccionListado;
            this.getCliente();
            this.successMensaje = response.message;
          }
        },
        (error) => {
          this.errorMensaje = `${error.error.message} ${error.error.data}`;
        }
      );
    }
  }

  editarCliente(cliente: Cliente): void {
    if (this.clienteList$) {
      this.clienteItem = cliente;
    }
    if (!this.detallesCliente) {
      this.detallesCliente = !this.detallesCliente;
    }
  }
}
