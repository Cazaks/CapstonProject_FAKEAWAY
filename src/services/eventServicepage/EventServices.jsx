const BASE_URL = "http://localhost:8080/event";

const EventServices = {

  // ===============================
  // CREATE EVENT
  // ===============================
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

  // ===============================
  // FETCH ALL EVENTS
  // ===============================
  fetchEvents: async () => {
    try {
      const token = localStorage.getItem("token");

    const response = await fetch(`${BASE_URL}/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
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

  // ===============================
  // FETCH SINGLE EVENT
  // (You must create this endpoint in backend)
  // GET /Tickvest/events/{id}
  // ===============================
  getEventById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch event");
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch single event error:", error);
      throw error;
    }
  },

  // ===============================
  // UPDATE EVENT
  // (Cancel, Postpone, Change Venue)
  // PUT /Tickvest/events/{id}
  // ===============================


   cancelEvent: async (eventId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("You must be logged in to cancel events.");

      const response = await fetch(`${BASE_URL}/${eventId}/cancel`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to cancel event");
      }

      return await response.json();
    } catch (error) {
      console.error("Cancel event error:", error);
      throw error;
    }
  },

  // updateEvent: async (eventId, updatedData) => {
  //   try {
  //     const token = localStorage.getItem("token");

  //     if (!token) {
  //       throw new Error("You must be logged in to update events.");
  //     }

  //     const response = await fetch(`${BASE_URL}/${eventId}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${token}`,
  //       },
  //       body: JSON.stringify(updatedData),
  //     });

  //     if (!response.ok) {
  //       const errorData = await response.json().catch(() => ({}));
  //       throw new Error(errorData.message || "Failed to update event");
  //     }

  //     return await response.json();
  //   } catch (error) {
  //     console.error("Update event error:", error);
  //     throw error;
  //   }
  // },

  postponeEvent: async (
  eventId, newDate, newTime, reason
) => {

  const token = localStorage.getItem("token");

  const response = await fetch(
    `${BASE_URL}/${eventId}/postpone`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        newEventDate:
          `${newDate}T${newTime}:00`,

        newEventTime: newTime,

        reason: reason,

        notifyTicketHolders: true,

      }),

    }
  );

  if (!response.ok) {

    const error =
      await response.json();

    throw new Error(error.message);

  }

  return response.json();
},

};

export default EventServices;
