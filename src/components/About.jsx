function About() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Sobre mí</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Mi trayectoria</h3>
          <p className="text-gray-600 mb-6">
            Mi camino en la música comenzó de forma casi accidental a los 12
            años cuando descubrí una vieja guitarra en el ático de mis abuelos.
            Esa curiosidad inicial se transformó en pasión cuando monté mi
            primer home studio con apenas 18 años.
          </p>
          <p className="text-gray-600 mb-6">
            Tras completar mis estudios en el Conservatorio Superior de Música y
            especializarme en Tecnología Musical en Londres, regresé a España
            donde fundé mi propio estudio de producción en 2015. Desde entonces,
            he tenido el privilegio de colaborar con más de 50 artistas,
            abarcando desde talentos emergentes hasta nombres consolidados en la
            industria.
          </p>
          <p className="text-gray-600">
            Mi filosofía es sencilla: cada artista tiene una voz única que
            merece ser escuchada en su máxima expresión. Mi trabajo es crear el
            entorno sonoro perfecto donde esa voz pueda brillar con
            autenticidad.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-purple-600">
                Géneros musicales
              </h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Pop contemporáneo</li>
                <li>• R&B y Soul</li>
                <li>• Electrónica</li>
                <li>• Indie & Alternative</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-purple-600">Herramientas</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Ableton Live</li>
                <li>• Pro Tools</li>
                <li>• Logic Pro</li>
                <li>• Waves & UAD Plugins</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-purple-600">Servicios</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Producción completa</li>
                <li>• Composición</li>
                <li>• Arreglos</li>
                <li>• Mezcla y masterización</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
