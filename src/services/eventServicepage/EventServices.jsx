
const BASE_URL = "http://localhost:8080/Event"; 

const EventServices = {
  /**
   * Create a new event
   * @param {Object} eventData - event details from the form
   */
  createEvent: async (eventData) => {
    try {
      const token = localStorage.getItem("token"); 

      if (!token) {
        throw new Error("You must be logged in as an admin to create events.");
      }

      const response = await fetch(`${BASE_URL}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to create event");
      }

      return await response.json();
    } catch (error) {
      console.error("Create event error:", error);
      throw error;
    }
  },


  fetchEvents: async () => {
    try {
      const response = await fetch(`${BASE_URL}/all`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to fetch events");
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch events error:", error);
      throw error;
    }
  },
};

export default EventServices;
