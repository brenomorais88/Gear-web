'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-3 shadow bg-gear-ice">
            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="GeaGarage Logo"
                    width={120}
                    height={40}
                />
            </div>

            {/* Menu Desktop */}
            <nav className="hidden md:flex space-x-6 text-gear-black font-medium">
                <a href="#" className="hover:text-primary transition-colors">Pesquisar</a>
                <a href="#" className="hover:text-primary transition-colors">Vender</a>
                <a href="#" className="hover:text-primary transition-colors">Ajuda</a>
            </nav>

            {/* Botão Login */}
            <button className="bg-primary text-gear-ice px-4 py-2 rounded hover:opacity-90 hidden md:block transition-opacity">
                Login
            </button>

            {/* Botão Hamburger Mobile */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-gear-ice shadow-md flex flex-col p-4 space-y-4 text-gear-black">
                    <a href="#" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Pesquisar</a>
                    <a href="#" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Vender</a>
                    <a href="#" className="hover:text-primary transition-colors" onClick={() => setMenuOpen(false)}>Ajuda</a>
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="bg-primary text-gear-ice px-4 py-2 rounded hover:opacity-90 transition-opacity"
                    >
                        Login
                    </button>
                </div>
            )}
        </header>
    );
}
