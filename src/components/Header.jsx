import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <a href="#" className="text-xl font-bold">
          Gonzalo Blanco Ortiz
        </a>
        <button
          className="md:hidden p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-black md:bg-transparent p-4 md:p-0 md:items-center space-y-4 md:space-y-0 md:space-x-6`}
        >
          <a
            href="#"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Sobre mí
          </a>
          <a
            href="#works"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Trabajos
          </a>
          <a
            href="#courses"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Cursos
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Contacto
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            aria-label="Usuario"
            className="p-1 hover:bg-gray-800 rounded-full"
          >
            <User className="h-5 w-5" />
          </button>
          <div className="relative">
            <button
              aria-label="Carrito"
              className="p-1 hover:bg-gray-800 rounded-full"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
