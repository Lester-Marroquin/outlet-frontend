export interface Cliente {

    CodPersona?: number,
    Nombre?: string,
    Apellido?: string,
    FechaNacimiento?: string,
    Sexo?: number,
    CodTipoIdentificacion?: number,
    NumeroIdentificacion?: number,
    Telefono?: string,
    Correo?: string,
    Direccion?: string,
    CodMunicipio?: number,
    TipoIdentificacion?: string,
    Municipio?: string,
    CodDepartamento?: number,
    Departamento?: string,

}

export interface ClienteResult {

    success: boolean;
    message: string;
    data: Cliente[];

}