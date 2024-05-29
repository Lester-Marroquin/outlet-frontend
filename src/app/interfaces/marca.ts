export interface Marca {

  CodMarcaProducto: number;
  MarcaProducto: string;

}

export interface MarcaResult {

  success: boolean;
  message: string;
  data: Marca[];
  
}
