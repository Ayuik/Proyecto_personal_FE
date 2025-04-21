import { buildHeader, endpoint } from "./config";

export async function getCategories() {
  try {
    const response = await fetch(endpoint.categories);
    if (!response.ok) {
      throw new Error(`Error fetching categories: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return [];
  }
}

export async function postCategory(newCategoryName, token) {
  try {
    const response = await fetch(`${endpoint.categories}`, {
      method: "POST",
      headers: buildHeader(token),
      body: JSON.stringify(newCategoryName),
    });

    if (!response.ok) {
      throw new Error(`Error creating category: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al crear la categoría:", error.message);
    throw error;
  }
}