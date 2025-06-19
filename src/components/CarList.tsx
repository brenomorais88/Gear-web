'use client';

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
        return <p className="p-8 text-center">Carregando anúncios...</p>;
    }

    return (
        <section className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Carros em destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {anuncios.map((anuncio) => (
                    <div key={anuncio.idAnuncio} className="border rounded p-4 shadow">
                        {anuncio.veiculoFotos.length > 0 ? (
                            <Image
                                src={anuncio.veiculoFotos[0].linkFoto}
                                alt={`${anuncio.descricaoMarca} ${anuncio.descricaoModelo}`}
                                width={300}
                                height={200}
                                className="object-cover w-full h-48 rounded mb-2"
                            />
                        ) : (
                            <div className="bg-gray-300 w-full h-48 flex items-center justify-center mb-2">
                                Sem imagem
                            </div>
                        )}
                        <h3 className="font-medium">{anuncio.descricaoMarca} {anuncio.descricaoModelo}</h3>
                        <p className="text-gray-600">Ano: {anuncio.anoFabMod}</p>
                        <p className="text-gray-800 font-semibold">R${anuncio.preco.toLocaleString('pt-BR')}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
