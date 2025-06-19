export default function Hero() {
    return (
        <section className="bg-gray-100 text-center py-12 px-4">
            <h1 className="text-4xl font-bold mb-4">Seu Carro Ideal</h1>
            <p className="mb-6">Encontre as melhores ofertas de carros novos e usados em um só lugar.</p>
            <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded">Ver Mais</button>
                <button className="bg-gray-300 px-6 py-2 rounded">Cadastrar</button>
            </div>
        </section>
    );
}
