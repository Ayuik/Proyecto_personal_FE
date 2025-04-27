import React from "react";
import { Link } from "react-router-dom";
import SigninForm from "../components/SigninForm";
import UserAdminHeader from "../components/UserAdminHeader";

function SigninAdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UserAdminHeader />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Inicia sesión para ingresar a tu panel administrador
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <SigninForm redirectTo="/adminhome" />
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            ¿Administrador nuevo?{" "}
            <Link
              to="/signupadminpage"
              className="font-semibold text-purple-600 hover:text-purple-500"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SigninAdminPage;
