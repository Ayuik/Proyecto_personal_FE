import React from "react";
import SignupForm from "../components/SignupForm";
import UserAdminHeader from "../components/UserAdminHeader";

function SignupAdminPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <UserAdminHeader />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Regístrate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <SignupForm redirectTo="/signinadminpage" role = "admin"/>
        </div>
      </div>
    </div>
  );
}

export default SignupAdminPage;
