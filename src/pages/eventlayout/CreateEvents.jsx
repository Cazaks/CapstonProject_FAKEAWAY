import { useState } from "react";
import EventServices from "../../services/eventServicepage/EventServices";

export default function CreateEvents() {
  const [formData, setFormData] = useState({
    eventName: "",
    description: "",
    venue: "",
    eventDate: "",
    eventTime: "",
    ticketPrices: {
      REGULAR: "",
      VIP: "",
    },
    totalTickets: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleTicketPriceChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      ticketPrices: {
        ...prev.ticketPrices,
        [name]: value,
      },
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const formattedDateTime = `${formData.eventDate}T${formData.eventTime}`;

      const payload = {
        eventName: formData.eventName,
        description: formData.description,
        venue: formData.venue,
        eventDate: formattedDateTime,
        eventTime: formData.eventTime,
        ticketPrices: {
          REGULAR: parseFloat(formData.ticketPrices.REGULAR),
          VIP: parseFloat(formData.ticketPrices.VIP),
        },
        totalTickets: parseInt(formData.totalTickets),
      };

      await EventServices.createEvent(payload);

      setSuccess("Event created successfully!");
      setFormData({
        eventName: "",
        description: "",
        venue: "",
        eventDate: "",
        eventTime: "",
        ticketPrices: { REGULAR: "", VIP: "" },
        totalTickets: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong");
      console.log("Create event error in component:", err);
    }
  }

  return (
    <div
      className="min-h-screen w-full flex justify-center items-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/assets/event_bg_image.jpg')" }}
    >
      <div className="w-full max-w-md bg-black/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create Event
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            placeholder="Event Name"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white"
          />

          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Venue"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white"
          />

          <div className="flex gap-2">
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-1/2 p-3 rounded bg-white/20 text-white placeholder-white"
            />
            <input
              type="time"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              required
              className="w-1/2 p-3 rounded bg-white/20 text-white placeholder-white"
            />
          </div>

          <input
            type="number"
            name="REGULAR"
            value={formData.ticketPrices.REGULAR}
            onChange={handleTicketPriceChange}
            placeholder="Regular Ticket Price"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white"
          />

          <input
            type="number"
            name="VIP"
            value={formData.ticketPrices.VIP}
            onChange={handleTicketPriceChange}
            placeholder="VIP Ticket Price"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white"
          />

          <input
            type="number"
            name="totalTickets"
            value={formData.totalTickets}
            onChange={handleChange}
            placeholder="Total Tickets"
            required
            className="w-full p-3 rounded bg-white/20 text-white placeholder-white"
          />

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-bold transition"
          >
            Create Event
          </button>

          {error && <p className="text-red-500 text-center">{error}</p>}
          {success && <p className="text-green-500 text-center">{success}</p>}
        </form>
      </div>
    </div>
  );
}