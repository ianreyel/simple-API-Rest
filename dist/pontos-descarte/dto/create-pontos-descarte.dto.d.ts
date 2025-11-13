export declare enum TipoLocalEnum {
    PUBLICO = "publico",
    PRIVADO = "privado"
}
export declare class CreatePontoDescarteDto {
    nomeLocal: string;
    bairro: string;
    tipoLocal: TipoLocalEnum;
    categoriaResiduos: string;
    geolocalizacao: string;
}
