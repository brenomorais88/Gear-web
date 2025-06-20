"use client";

import React, { useState, useEffect } from 'react';

export default function Hero() {
    // Imagens de fundo na pasta public
    const backgroundImages = [
        '/prop-gear-1.jpg',
        '/prop-gear-2.jpg',
        '/prop-gear-3.jpg',
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (backgroundImages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 10000); // 10 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden h-[500px] lg:h-[600px]">
            {/* Slides de background */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="flex h-full transition-transform duration-1000 ease-in-out"
                    style={{ width: `${backgroundImages.length * 100}%`, transform: `translateX(-${currentIndex * (100 / backgroundImages.length)}%)` }}
                >
                    {backgroundImages.map((img, i) => (
                        <div
                            key={i}
                            className="w-full h-full bg-center bg-cover flex-shrink-0"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </div>
            </div>

            {/* Conteúdo sobreposto */}
            <div className="relative bg-gradient-to-r from-blue-50 via-transparent to-blue-50 h-full">
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center h-full py-16 px-4">
                    {/* Texto e busca */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
                            Encontre Seu Carro Ideal
                        </h1>
                        <p className="text-lg lg:text-xl text-gear-textGray mb-8">
                            As melhores ofertas de carros novos e usados em um só lugar. Descubra, compare e reserve com facilidade.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                            <button className="bg-primary text-gear-ice px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition">
                                Ver Mais
                            </button>
                            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg shadow-lg hover:bg-primary hover:text-gear-ice transition">
                                Anunciar
                            </button>
                        </div>
                        {/* Barra de busca */}
                        <div className="mt-8 flex justify-center lg:justify-start">
                            <input
                                type="text"
                                placeholder="Buscar anúncios..."
                                className="w-full max-w-md px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                        </div>
                    </div>

                    {/* Imagem lateral usando /public */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <img
                            src="/hero-car.png"
                            alt="Carros em destaque"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
