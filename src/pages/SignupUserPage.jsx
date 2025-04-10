import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import SignupForm from "../components/SignupForm";
import UserAdminHeader from "../components/UserAdminHeader";

function SignupUserPage() {
  const navigate = useNavigate();
  const { setIsLogged } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLogged(true);
    navigate("/#home");
    alert("Registro exitoso. Ya estás en tu cuenta");
  };

  return (
    <>
      <UserAdminHeader />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Regístrate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <SignupForm />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupUserPage;
