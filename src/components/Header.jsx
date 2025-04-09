import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { useAuth } from "./AuthContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLogged } = useAuth();

    return (
    <header className="sticky top-0 z-10 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <Link to="/#home" className="text-xl font-bold">
          Gonzalo Blanco Ortiz
        </Link>
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
          <Link
            to="/#home"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Home
          </Link>
          <Link
            to="/#about"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Sobre mí
          </Link>
          <Link
            to="/#works"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Trabajos
          </Link>
          <Link
            to="/#courses"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Cursos
          </Link>
          <Link
            to="/#contact"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link
          to={isLogged ? "/userpage" : "/signinpage"}
            aria-label="Usuario"
            className="p-1 hover:bg-gray-800 rounded-full"
          >
            <User className="h-5 w-5" />
          </Link>
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
