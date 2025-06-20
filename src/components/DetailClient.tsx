'use client'

import { AnuncioDetail } from '@/types/AnuncioDetail'
import Carousel from './Carousel'

interface Props {
  anuncio: AnuncioDetail
}

export default function DetailClient({ anuncio }: Props) {
  const {
    veiculo,
    veiculoFoto,
    preco,
    dataHoraCriacao,
    descricao,
    nomeUsuario,
  } = anuncio

  return (
    <div className="p-4">
      {/* 1) Galeria */}
      <Carousel images={veiculoFoto.map((f) => f.linkFoto)} />

      {/* 2) Meta */}
      <div className="flex items-center text-sm text-gear-textGray mt-2 space-x-4">
        <span>📅 {new Date(dataHoraCriacao).toLocaleDateString('pt-BR')}</span>
        <span>👤 {nomeUsuario}</span>
      </div>

      {/* 3) Preço */}
      <h1 className="text-2xl font-bold text-primary mt-2">
        {preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </h1>

      {/* 4) Título */}
      <h2 className="text-xl font-medium">
        {veiculo.descricaoMarca} {veiculo.descricaoModelo}
      </h2>

      {/* 5) Grade de Características */}
      <div className="grid grid-cols-3 gap-4 bg-gear-bgLight p-4 rounded-lg mt-4">
        <div>
          <p className="font-semibold">
            {veiculo.anoModelo}/{veiculo.anoFabricacao}
          </p>
          <p className="text-xs text-gear-textGray">Ano</p>
        </div>
        <div>
          <p className="font-semibold">
            {veiculo.quilometragem.toLocaleString()}
          </p>
          <p className="text-xs text-gear-textGray">Km</p>
        </div>
        <div>
          <p className="font-semibold">Final {veiculo.placa.slice(-1)}</p>
          <p className="text-xs text-gear-textGray">Placa</p>
        </div>
        <div>
          <p className="font-semibold">{veiculo.descricaoTipoCambio}</p>
          <p className="text-xs text-gear-textGray">Câmbio</p>
        </div>
        <div>
          <p className="font-semibold">{veiculo.descricaoTipoTracao}</p>
          <p className="text-xs text-gear-textGray">Tração</p>
        </div>
        <div>
          <p className="font-semibold">{veiculo.numeroPortas} Portas</p>
          <p className="text-xs text-gear-textGray">Portas</p>
        </div>
        <div>
          <p className="font-semibold">{veiculo.descricaoDocumento}</p>
          <p className="text-xs text-gear-textGray">Documento</p>
        </div>
        <div>
          <p className="font-semibold">{veiculo.descricaoCor}</p>
          <p className="text-xs text-gear-textGray">Cor</p>
        </div>
        <div>
          <p className="font-semibold">
            {veiculo.blindado ? 'Com Blindagem' : 'Sem Blindagem'}
          </p>
          <p className="text-xs text-gear-textGray">Blindagem</p>
        </div>
      </div>

      {/* 6) Opcionais */}
      {anuncio.veiculoOpcionais.length > 0 && (
        <>
          <h3 className="mt-6 font-semibold">Opcionais</h3>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {anuncio.veiculoOpcionais.map((opt) => (
              <li key={opt} className="flex items-center text-sm">
                <span className="text-green-500 mr-2">✔️</span>
                <span>{opt}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* 7) Sobre o veículo */}
      <h3 className="mt-6 font-semibold">Sobre o veículo</h3>
      <p className="mt-2 text-gear-textGray">{descricao}</p>

      {/* 8) Botão de mensagem */}
      <button className="w-full mt-8 py-3 bg-black text-white rounded-xl">
        Enviar mensagem
      </button>
    </div>
  )
}
