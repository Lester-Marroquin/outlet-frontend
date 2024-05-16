export interface Categoria {
    
  CodCategoriaProducto: number;
  CategoriaProducto: string;
}

export interface CategoriaResult {

    success: boolean;
    message: string;
    data: Categoria[];
    
}
