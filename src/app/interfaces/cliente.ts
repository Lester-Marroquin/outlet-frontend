export interface Cliente {

    CodUsuario: number,
    UsuarioID: string,
    ClaveUsuario: string,
    CodPersona: number,
    CodRol: number,
    FechaRegistro: string,
    FechaBaja: string,
    CodEstado: number,
    Nombre: string,
    Apellido: string,
    FechaNacimiento: string,
    Sexo: string,
    CodTipoIdentificacion: number,
    NumeroIdentificacion: string,
    Telefono: string,
    Correo: string,
    Direccion: string,
    CodMunicipio: number

}

export interface ClienteResult {

    success: boolean;
    message: string;
    data: Cliente[];
    
}