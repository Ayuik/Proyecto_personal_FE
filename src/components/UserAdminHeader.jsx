import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function UserAdminHeader() {
  const navigate = useNavigate();
  const { setIsLogged } = useAuth();
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLogged(false); 
    navigate("/#home");
  };

  return (
    <header className="sticky top-0 z-10 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/#home" className="text-xl font-bold">
          Gonzalo Blanco Ortiz
        </Link>
        <button
          onClick={handleLogout}
          className="p-2 hover:bg-gray-100 rounded-full"
          aria-label="Cerrar sesión"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export default UserAdminHeader;
