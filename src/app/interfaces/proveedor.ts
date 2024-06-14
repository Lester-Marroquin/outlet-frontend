export interface Proveedor {

    CodProveedor?: number;
    RazonSocial: string;
    NombreComercial: string;
    CodTipoIdentificacion: number;
    NumeroIdentificacion: string;
    CodEstado: number;

}

export interface ProveedorResult {

    success: boolean;
    message: string;
    data: Proveedor[];

}