const BASE_URL = "http://localhost:8080/Tickvest";

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include" 
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    return response.json();
  } catch (error) {
    console.error("Login service error:", error);
    throw error; 
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "include"
    });

    console.log("Register response status:", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Register error data:", errorData);
      throw new Error(errorData.message || "Registration failed");
    }

    return response.json();
  } catch (error) {
    console.error("Register service error:", error);
    throw error;
  }
};
