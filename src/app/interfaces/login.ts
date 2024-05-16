export interface Login {
  UsuarioEmpleado: string;
  ClaveEmpleado: string;
}

export interface LoginResult {
  success: boolean;
  message: string;
  data: Login[];
}
