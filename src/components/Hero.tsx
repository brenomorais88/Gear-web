export default function Hero() {
    return (
        <section className="bg-gear-ice text-center py-12 px-4 shadow">
            <h1 className="text-4xl font-bold text-primary mb-4">Seu Carro Ideal</h1>
            <p className="mb-6 text-gear-textGray">Encontre as melhores ofertas de carros novos e usados em um só lugar.</p>
            <div className="flex justify-center space-x-4">
                <button className="bg-primary text-gear-ice px-6 py-2 rounded shadow hover:opacity-90">Ver Mais</button>
                <button className="border border-gear-darkGray text-gear-black px-6 py-2 rounded shadow hover:border-primary">Cadastrar</button>
            </div>
        </section>
    );
}
