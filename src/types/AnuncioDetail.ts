export interface Veiculo {
  id: number
  anoModelo: string
  anoFabricacao: string
  quilometragem: number
  numeroPortas: number
  placa: string
  veiculoNovo: boolean
  vendedorLoja: boolean
  blindado: boolean
  modificado: boolean
  financiado: boolean
  descricaoTipoVeiculo: string
  descricaoModelo: string
  descricaoMarca: string
  descricaoCor: string
  hexadecimal: string
  descricaoMotor: string
  descricaoAlimentacao: string
  descricaoCilindradas: string
  descricaoTipoTracao: string
  descricaoCidade: string
  descricaoEstado: string
  descricaoTipoCombustivel: string
  descricaoTipoCarroceria: string
  descricaoDocumento: string
  descricaoTipoCambio: string
}

export interface VeiculoFoto {
  id: number
  linkFoto: string
  nome: string
}

export interface AnuncioDetail {
  id: number
  descricao: string
  nomeUsuario: string
  preco: number
  dataHoraCriacao: string
  favoritado: boolean
  veiculo: Veiculo
  veiculoFoto: VeiculoFoto[]
  veiculoOpcionais: string[]
}
