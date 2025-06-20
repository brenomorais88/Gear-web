"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { Anuncio } from '@/types/anuncio';

export default function CarList() {
    const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAnuncios() {
            try {
                const response = await axios.post<Anuncio[]>('/api/proxy/anuncios');
                setAnuncios(response.data);
            } catch (error) {
                console.error('Erro ao buscar anúncios:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchAnuncios();
    }, []);

    if (loading) {
        return <p className="p-8 text-center text-gear-textGray">Carregando anúncios...</p>;
    }

    return (
        <section className="bg-gear-ice p-8">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Carros em destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {anuncios.map((anuncio) => (
                    <div
                        key={anuncio.idAnuncio}
                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {anuncio.veiculoFotos.length > 0 ? (
                            <Image
                                src={anuncio.veiculoFotos[0].linkFoto}
                                alt={`${anuncio.descricaoMarca} ${anuncio.descricaoModelo}`}
                                width={300}
                                height={200}
                                className="object-cover w-full h-48 rounded-md mb-4"
                            />
                        ) : (
                            <div className="bg-gear-darkGray w-full h-48 flex items-center justify-center mb-4 rounded-md text-gear-ice">
                                Sem imagem
                            </div>
                        )}
                        <h3 className="font-medium text-lg text-gear-black mb-1">
                            {anuncio.descricaoMarca} {anuncio.descricaoModelo}
                        </h3>
                        <p className="text-gear-textGray text-sm mb-2">Ano: {anuncio.anoFabMod}</p>
                        <p className="text-primary font-semibold text-lg">
                            R${anuncio.preco.toLocaleString('pt-BR')}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
