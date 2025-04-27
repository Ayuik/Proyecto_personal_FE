export const API_URL = "http://localhost:8080/gonzawhiplash";

export const endpoint = {
  courses: `${API_URL}/courses`,
  testimonials: `${API_URL}/testimonials`,
  works: `${API_URL}/works`,
  videos: `${API_URL}/videos`,
  categories: `${API_URL}/categories`,
  login: `${API_URL}/login`,
  register: `${API_URL}/register`
};

export function buildHeader(token) {
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
}
