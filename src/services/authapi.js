import { endpoint } from "./config";
export async function login(username, password) {
    const response = await fetch(endpoint.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password}),
    });
  
    if (!response.ok) {
  
      const {message} = await response.json();
  
        throw new Error(message);
      }
    
  
    return await response.json();
  }

  export async function register(username, password, role) {
    const response = await fetch(endpoint.register, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, role}),
    });
  
    if (!response.ok) {
  
      const {message} = await response.json();
  
        throw new Error(message);
      }
    
  
    return await response.json();
  }