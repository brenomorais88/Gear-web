export type VeiculoFoto = {
    id: number;
    linkFoto: string;
};

export type Anuncio = {
    idAnuncio: number;
    idVeiculo: number;
    descricaoMarca: string;
    descricaoModelo: string;
    preco: number;
    quilometragem: number;
    anoFabMod: string;
    veiculoFotos: VeiculoFoto[];
    favoritado: boolean;
};
