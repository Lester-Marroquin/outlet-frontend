export interface Sucursal {

    CodSucursal: number;
    NombreSucursal: string;
    DireccionSucursal: string;
    CodMunicipio: number;

}

export interface SucursalResult {

    success: boolean;
    message: string;
    data: Sucursal[];
    
}
