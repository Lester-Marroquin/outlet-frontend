export interface Identificacion {
  CodTipoIdentificacion: number;
  TipoIdentificacion: string;
}

export interface IdentificacionResult {
  success: boolean;
  message: string;
  data: Identificacion[];
}
