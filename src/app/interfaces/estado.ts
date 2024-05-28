export interface Estado {
  CodEstado: number;
  Estado: string;
}

export interface MarcaResult {
  success: boolean;
  message: string;
  data: Estado[];
}
