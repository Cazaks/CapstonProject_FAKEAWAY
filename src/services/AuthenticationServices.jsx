const BASE_URL = "http://localhost:8080/Tickvest";

// Login service
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
      credentials: "include" // allows cookies if your backend uses them
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }

    return response.json(); // returns { token: "JWT_TOKEN" } or whatever your backend returns
  } catch (error) {
    console.error("Login service error:", error);
    throw error; // re-throw for component to handle
  }
};

// Register service
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "include" // allows cookies if needed
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return response.json(); // your registration response
  } catch (error) {
    console.error("Register service error:", error);
    throw error;
  }
};
