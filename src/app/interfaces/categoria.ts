export interface Categoria {

    CodProducto: number;
    CategoriaProducto: string;

}

export interface CategoriaResult {

    success: boolean;
    message: string;
    data: Categoria[];
    
}
