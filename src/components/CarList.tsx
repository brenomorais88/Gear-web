// src/components/CarList.tsx
'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Image from 'next/image'
import { Anuncio, VeiculoFoto } from '@/types/Anuncio'


export default function CarList() {
    const [anuncios, setAnuncios] = useState<Anuncio[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchAnuncios() {
            try {
                const resp = await axios.post<Anuncio[]>('/api/proxy/anuncios')
                setAnuncios(resp.data)
            } catch (error) {
                console.error('Erro ao buscar anúncios:', error)
            } finally {
                setLoading(false)
            }
        }
        fetchAnuncios()
    }, [])

    if (loading) {
        return (
            <p className="p-8 text-center text-gear-textGray">
                Carregando anúncios...
            </p>
        )
    }

    return (
        <section className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {anuncios.map((a) => {
                // pega primeira foto, se existir
                const foto: VeiculoFoto | undefined = a.veiculoFotos[0]

                return (
                    <Link
                        key={a.idAnuncio}
                        href={`/anuncios/${a.idAnuncio}`}
                        className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
                    >
                        {/* Imagem do carro */}
                        <div className="relative h-48 w-full">
                            {foto ? (
                                <Image
                                    src={foto.linkFoto}
                                    alt={foto.linkFoto}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full bg-gear-bgLight">
                                    Sem imagem
                                </div>
                            )}
                        </div>

                        {/* Corpo do card */}
                        <div className="p-4">
                            {/* Marca e modelo */}
                            <h3 className="text-lg font-semibold">
                                {a.descricaoMarca} {a.descricaoModelo}
                            </h3>

                            {/* Preço */}
                            <p className="text-red-500 mt-1">
                                {a.preco.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}
                            </p>

                            {/* Km e ano */}
                            <p className="text-sm text-gear-textGray mt-2">
                                {a.quilometragem.toLocaleString()} km • {a.anoFabMod}
                            </p>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}
