export interface Usuario {

    CodUsuario: number;
    UsuarioID: string;
    ClaveUsuario: string;
    CodPersona: number;
    CodRol: number;
    FechaRegistro: string;
    FechaBaja: string;
    CodEstado: number;
    Nombre: string;
    Apellido: string;
    FechaNacimiento: string
    Sexo: boolean;
    CodTipoIdentificacion: number;
    NumeroIdentificacion: string;
    Telefono: string;
    Correo: string;
    Direccion: string;
    CodMunicipio: number

}

export interface UsuarioResult {

    success: boolean;
    message: string;
    data: Usuario[];

}

