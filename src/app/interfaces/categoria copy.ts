export interface Estado {
    
  CodEstado: number;
  Estado: string;
  
}

export interface EstadoResult {

    success: boolean;
    message: string;
    data: Estado[];
    
}
