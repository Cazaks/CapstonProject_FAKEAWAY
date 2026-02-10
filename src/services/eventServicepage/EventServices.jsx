import CreateEvents from "../../pages/eventlayout/CreateEvents";

const BASE_URL = "http://localhost:8080/Tickvest";

export const fetchEvents = async () => {
    try {
        const response = await fetch(`${BASE_URL}/events`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include"
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to fetch events");
        }
        return response.json();
    } catch (error) {
        console.error("Fetch events error:", error);
        throw error;
    }
};

export default {CreateEvents}