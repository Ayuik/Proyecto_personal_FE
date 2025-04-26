import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import SigninForm from "../components/SigninForm";
import UserAdminHeader from "../components/UserAdminHeader";

function SigninUserPage() {
   return (
    <>
      <UserAdminHeader />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Inicia sesión para ingresar a tu perfil o realizar una compra
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <SigninForm redirectTo="/userpage" />

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            ¿Usuario nuevo?{" "}
            <Link
              to="/signupuserpage"
              className="font-semibold text-purple-600 hover:text-purple-500"
            >
              Regístrate
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SigninUserPage;
