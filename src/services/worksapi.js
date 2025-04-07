import { endpoint } from "./config";

export async function getWorks() {
    try {
      const response = await fetch(endpoint.works);
      if (!response.ok) {
        throw new Error(`Error fetching works: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }