
export interface Departamento {

  CodDepartamento: number;
  Departamento: string;

}

export interface DepartamentoResult {
  
  success: boolean;
  message: string;
  data: Departamento[];

}

export interface MunicipioDept {

  CodMunicipio: number;
  Municipio: string;
  CodDepartamento: number;

}


export interface MunicipioDeptResult {

  success: boolean;
  message: string;
  data: MunicipioDept[];

}