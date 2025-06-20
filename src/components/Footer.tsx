export default function Footer() {
    return (
        <footer className="bg-gear-ice text-center p-4 mt-8 text-gear-textGray text-sm shadow-inner">
            <p>© 2025 GeaGarage. Todos os direitos reservados.</p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="hover:text-primary">Política de Privacidade</a>
                <a href="#" className="hover:text-primary">Termos de Uso</a>
                <a href="#" className="hover:text-primary">Configurações de Cookies</a>
            </div>
        </footer>
    );
}
