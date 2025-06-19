'use client';

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 shadow">
            <div className="text-xl font-bold">GeaGarage</div>
            <nav className="hidden md:flex space-x-4">
                <a href="#">Início Rápido</a>
                <a href="#">Carros Usados</a>
                <a href="#">Marcas Populares</a>
                <a href="#">Novidades</a>
            </nav>
            <button className="bg-black text-white px-4 py-2 rounded">Login</button>
        </header>
    );
}
