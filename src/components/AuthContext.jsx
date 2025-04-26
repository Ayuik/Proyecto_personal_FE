import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Inicializamos el token desde localStorage.
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLogged, setIsLogged] = useState(!!token);

  // Sincronizamos el estado con localStorage.
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setIsLogged(true);
    } else {
      localStorage.removeItem("token");
      setIsLogged(false);
    }
  }, [token]);

  // Función para actualizar el token.
  const updateToken = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isLogged, token, updateToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
