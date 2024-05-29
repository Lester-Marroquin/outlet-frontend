export interface Cargo {

  CodCargo: number;
  NombreCargo: string;
}

export interface MarcaResult {

  success: boolean;
  message: string;
  data: Cargo[];
  
}
