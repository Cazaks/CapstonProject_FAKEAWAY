// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import EventServices from "../../services/eventServicepage/EventServices";

// export default function ListOfEvents() {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const fetchAllEvents = async () => {
//     try {
//       setLoading(true);
//       const data = await EventServices.fetchEvents();
//       setEvents(data);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to load events");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllEvents();
//   }, []);

//   return (
//     <div className="p-6 min-h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6">Manage Events</h1>

//       {loading && <p>Loading events...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             onClick={() => navigate(`/events/${event.id}`)}
//             className="bg-white p-4 rounded-xl shadow-lg cursor-pointer hover:shadow-xl"
//           >
//             <h2 className="text-lg font-bold">{event.eventName}</h2>
//             <p>{event.eventDate}</p>
//             <p>{event.venue}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }