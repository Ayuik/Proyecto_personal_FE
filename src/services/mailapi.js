import {endpoint} from "./config";
export async function sendMail (formData){
    try {
        const response = await fetch(endpoint.mail, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });
        if (!response.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return response;
      } catch (error) {
        console.error("Error en sendMail:", error);
        throw error;  
      }
}