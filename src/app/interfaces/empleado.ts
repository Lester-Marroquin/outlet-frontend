export interface Empleado {

  CodEmpleado: number;
  UsuarioEmpleado: string;
  CodPersona: number;
  Jefe: number;
  CodCargo: number;
  FechaIngreso: string;
  FechaRetiro: string;
  CodEstado: number;
  CodRol: number;
  Nombre: string;
  Apellido: string;
  FechaNacimiento: string;
  Sexo: boolean;
  CodTipoIdentificacion: number;
  NumeroIdentificacion: string;
  Telefono: string;
  Correo: string;
  Direccion: string;
  CodMunicipio: number;
  NombreCargo: string;
  NombreRol: string;

}

export interface EmpleadoResult {

  success: boolean;
  message: string;
  data: Empleado[];

}