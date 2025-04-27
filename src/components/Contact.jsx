import ContactInformation from "./ContactInformation";
import { sendMail } from "../services/mailapi";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendMail(formData);

      if (response.ok) {
        alert("Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un problema al enviar el mensaje.");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Contacto</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-4">Envíame un mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
                required
              ></textarea>
            </div>
            <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700">
              Enviar mensaje
            </button>
          </form>
        </div>
        <ContactInformation />
      </div>
    </div>
  );
}

export default Contact;
