import React from "react";
import { useNavigate } from "react-router-dom";
import {register} from "../services/authapi";
import { useState } from "react";

function SignupForm({ role, redirectTo }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(
        formData.username,
        formData.password,
        role
      );

      alert("Registro exitoso!");
      navigate(redirectTo);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm/6 font-medium text-gray-900"
        >
          Crear nombre de usuario
        </label>
        <div className="mt-2">
          <input
            id="username"
            name="username"
            type="text"
            onChange={handleChange}
            required
            autoComplete="username"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Crear contraseña
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            required
            autoComplete="current-password"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Crear usuario
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
