export interface LoginEmpleado {
  
  UsuarioEmpleado: string;
  ClaveEmpleado: string;
}

export interface LoginCliente {

  UsuarioID: string;
  ClaveUsuario: string;

}

export interface LoginEmpleadoResult {

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

export interface LoginClienteResult {

  success: boolean;
  message: string;
  data: {
    Usuario: {
      CodUsuario: number;
      UsuarioID: string;
      CodPersona: number;
      CodRol: number;
      FechaRegistro: string;
      FechaBaja: string;
      CodEstado: number;
    };
    token: string;
  } | null;
  
}
