export interface Login {
  UsuarioEmpleado: string;
  ClaveEmpleado: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
  data: {
    Empleado: {
      CodEmpleado: number;
      UsuarioEmpleado: string;
      CodPersona: number;
      Jefe: number;
      CodCargo: number;
      FechaIngreso: string;
      FechaRetiro: string;
      CodEstado: number;
      CodRol: number;
    };
    token: string;
  } | null;
}