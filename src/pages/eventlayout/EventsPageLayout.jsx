import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import EventServices from "../../services/eventServicepage/EventServices";
import EventCards from "./EventCards";

export default function EventsPageLayout() {

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
       const data = await EventServices.fetchEvents();
      console.log("Fetched events:", data);
      setEvents(data);

    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/event_bg_image.jpg')" }}
    >

      {/* HERO SECTION */}
      <div className="bg-black/40 flex flex-col items-center justify-center text-center py-16 px-6">

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Make Your Event Unforgettable!
        </h1>

        <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl drop-shadow-md">
          Planning an event has never been this easy. With FakeAway, you can create,
          customize, postpone, cancel, or change your event venue in just a few clicks.
          Click create event to get started!
        </p>

        <Link
          to="/dashboard/create-event"
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        >
          Create Event
        </Link>

      </div>


      {/* EVENTS SECTION */}
      <main className="flex-1 p-6 bg-black/50">

        {loading && (
          <p className="text-white text-center text-xl">
            Loading events...
          </p>
        )}


        {!loading && events.length === 0 && (
          <p className="text-white text-center text-xl font-semibold">
            No events available. Click "Create Event" above to create one.
          </p>
        )}


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {events.map((event) => (

            <EventCards
              key={event.eventId}
              event={event}
              refreshEvents={fetchEvents}
            />

          ))}

        </div>

      </main>

    </div>
  );
}