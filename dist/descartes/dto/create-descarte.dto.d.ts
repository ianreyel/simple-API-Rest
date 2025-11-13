export declare enum TipoResiduoEnum {
    PLASTICO = "pl\u00E1stico",
    PAPEL = "papel",
    ORGANICO = "org\u00E2nico",
    ELETRONICO = "eletr\u00F4nico",
    VIDRO = "vidro",
    OUTROS = "outros"
}
export declare class CreateDescarteDto {
    nomeUsuario: string;
    id_pontoDescarte: number;
    tipoResiduo: TipoResiduoEnum;
    data: string;
}
