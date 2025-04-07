import { endpoint } from "./config";

export async function getCourses() {
    try {
      const response = await fetch(endpoint.courses);
      if (!response.ok) {
        throw new Error(`Error fetching courses: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }