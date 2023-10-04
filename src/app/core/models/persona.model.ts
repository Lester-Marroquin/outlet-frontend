// import { ArtisModel } from './persona.model';

export interface PersonaModel {
    Nombre: string;
    Apellido: string;
    FechaNacimiento: Date;
    Sexo: boolean;
    CodTipoIdentificacion: number;
    NumeroIdentificacion: string;
    Telefono: string;
    Correo: string; 
    Direccion: string;
    CodMunicipio: number;
}