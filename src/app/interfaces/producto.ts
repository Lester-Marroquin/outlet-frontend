export interface Producto {

    CodProducto: number;
    CodCategoriaProducto: number;
    Producto: string;
    Cantidad: number;
    Precio: number;
    Imagen: string;
    Color: string;
    CodMarcaProducto: number;
    Observaciones: string;
    CodEstado: number;
    Tipo: string;
    CodProveedor: number;
    MarcaProducto: string;
    CategoriaProducto: string;

}

export interface ProductoResult {

    success: boolean;
    message: string;
    data: Producto[];

}