export interface Empleado {

  CodEmpleado?: number;
  UsuarioEmpleado: string;
  ClaveEmpleado: string;
  CodPersona: number;
  Jefe: number;
  CodCargo: number;
  FechaIngreso: string;
  FechaRetiro: string;
  CodEstado: number;
  CodRol: number;

}

export interface EmpleadoResult {

  success: boolean;
  message: string;
  data: Empleado[];
  
}
