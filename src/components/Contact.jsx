import {Instagram} from "lucide-react";
import SoundCloudIcon from "../../public/SoundCloudIcon";
import SpotifyIcon from "../../public/SpotifyIcon";
function Contact() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Envíame un mensaje</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Información de contacto
          </h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 mt-0.5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-gray-600">contacto@gonzaloblanco.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 mt-0.5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h4 className="font-medium">Teléfono</h4>
                <p className="text-gray-600">+34 600 123 456</p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3 mt-0.5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h4 className="font-medium">Kathedrale Studios</h4>
                <p className="text-gray-600">
                  El Berrón, Asturias, España
                </p>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Sígueme en redes</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 transition-colors text-purple-600"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 transition-colors text-purple-600"
            >
              <SpotifyIcon />
            </a>
            <a
              href="#"
              className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 hover:bg-purple-200 transition-colors text-purple-600"
            >
              <SoundCloudIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
