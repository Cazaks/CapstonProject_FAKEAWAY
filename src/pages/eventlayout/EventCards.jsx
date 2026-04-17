import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import EventServices from "../../services/eventServicepage/EventServices";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function EventCards({ event, refreshEvents }) {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const location = useLocation();

  const isPostponePage = location.pathname.includes("postpone");

  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [reason, setReason] = useState("");
  const [newVenue, setNewVenue] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Cancel Event
  async function handleCancel(e) {
    e.stopPropagation();
    if (!window.confirm("Are you sure you want to cancel this event?")) return;
    try {
      await EventServices.cancelEvent(event.eventId);
      setSuccess("Event cancelled successfully");
      refreshEvents();
    } catch (err) {
      setError(err.message);
    }
  }

  // Postpone Event (used on full-page postpone form)
  async function handlePostpone() {
    if (!newDate || !newTime) {
      setError("Date and time are required");
      return;
    }

    try {
      await EventServices.postponeEvent(event.eventId, newDate, newTime, reason);
      setSuccess("Event postponed successfully");

      // Clear form
      setNewDate("");
      setNewTime("");
      setReason("");

      refreshEvents();
      navigate("/dashboard/events"); // go back to events list
    } catch (err) {
      setError(err.message);
    }
  }

  // Change Venue
  async function handleChangeVenue(e) {
    e.stopPropagation();
    try {
      await EventServices.changeVenue(event.eventId, { venue: newVenue });
      setSuccess("Venue changed successfully");
      setNewVenue("");
      refreshEvents();
    } catch (err) {
      setError(err.message);
    }
  }

  // ------------------------
  // FULL-PAGE POSTPONE VIEW
  // ------------------------
  if (isPostponePage) {
    return (
      <div className="min-h-screen bg-[url('/images/event-bg.jpg')] bg-cover bg-center flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="bg-white/95 p-10 rounded-2xl w-[600px] max-w-[90%] shadow-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Postpone Event</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}

            <input
              type="date"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
              className="w-full border p-3 rounded mb-4 text-lg"
            />

            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="w-full border p-3 rounded mb-4 text-lg"
            />

            <textarea
              placeholder="Reason (optional)"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full border p-3 rounded mb-6 text-lg"
            />

            <div className="flex gap-4">
              <button
                onClick={handlePostpone}
                className="bg-yellow-500 text-white py-3 rounded w-full text-lg"
              >
                Confirm Postpone
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white py-3 rounded w-full text-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // ------------------------
  // NORMAL EVENT CARD VIEW
  // ------------------------
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition">
      {/* clickable header only */}
      <div
        className="cursor-pointer"
        onClick={() => navigate(`/dashboard/events/${event.eventId}`)}
      >
        <h2 className="text-lg font-bold">{event.eventName}</h2>
        <p>Date: {event.eventDate}</p>
        <p>Status: {event.status}</p>
        <p>Venue: {event.venue}</p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col gap-2 mt-4">
        <button onClick={handleCancel} className="bg-red-500 text-white py-2 rounded">
          Cancel Event
        </button>

        <button
          onClick={() => navigate(`/dashboard/events/${event.eventId}/postpone`)}
          className="bg-yellow-500 text-white py-2 rounded"
        >
          Postpone Event
        </button>

        <input
          type="text"
          placeholder="New Venue"
          value={newVenue}
          onChange={(e) => setNewVenue(e.target.value)}
          className="border p-2 rounded"
        />
        <button onClick={handleChangeVenue} className="bg-blue-500 text-white py-2 rounded">
          Change Venue
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
    </div>
  );
}