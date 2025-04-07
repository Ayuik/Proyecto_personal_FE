import { endpoint } from "./config";

export async function getTestimonials() {
    try {
      const response = await fetch(endpoint.testimonials);
      if (!response.ok) {
        throw new Error(`Error fetching testimonials: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }