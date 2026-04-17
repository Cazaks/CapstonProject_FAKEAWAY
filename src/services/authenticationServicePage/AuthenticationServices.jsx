const BASE_URL = import.meta.env.VITE_API_URL;

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
    console.log("Registering user with data:", userData);

    const response = await fetch("http://localhost:8080/Tickvest/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    console.log("Register response status:", response);

    if (!response.ok) {
      const errorData = await response.json();
      console.log("Register error data:", errorData);
      throw new Error(errorData.message || "Registration failed");
    }

    return response.json();
  } catch (error) {

    console.log("Registration service error:", error);

    console.log("Hi Bolaji1");
    console.log("Register service error=", error.message);
    throw error;
  }
};
