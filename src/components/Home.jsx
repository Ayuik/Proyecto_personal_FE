import gonza from "../assets/gonza.jpg";
import React, { useRef, useEffect } from "react";
import { Typed } from "react-typed";
function Home() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "productor musical",
        "técnico de sonido",
        "backliner",
        "compositor",
        "mixer",
        "sesionista",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Gonza Whiplash
        </h1>
        <h3 className="text-xl md:text-2xl text-purple-400 mb-6">
          Soy <span ref={typedElement}></span>
        </h3>
        <p className="text-gray-300 max-w-lg mb-8">
          Especializado en producción musical contemporánea con más de 10 años
          de experiencia en la industria. Creando sonidos únicos y ayudando a
          artistas a encontrar su voz en el panorama musical actual.
        </p>
        <div className="flex space-x-4">
          <a
            href="#works"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Ver trabajos
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-900 hover:bg-opacity-30 transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="rounded-full overflow-hidden border-4 border-purple-400 shadow-xl w-64 h-64 md:w-80 md:h-80">
          <img
            src={gonza}
            alt="Gonzalo Blanco Ortiz"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
