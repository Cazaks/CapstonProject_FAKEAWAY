import { Link } from "react-router-dom";

export default function TicketLayout() {
  const events = [
    { id: 1, title: "Tech Conference 2026" },
    { id: 2, title: "Music Fest" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ticket Dashboard</h1>

      <div className="space-y-4">
        {events.map(event => (
          <div
            key={event.id}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow"
          >
            <div>
              <h2 className="font-semibold">{event.title}</h2>
              <p className="text-sm text-gray-500">
                Manage tickets for this event
              </p>
            </div>

            <Link
              to={`/dashboard/tickets/${event.id}`}
              className="px-4 py-2 bg-black text-white rounded"
            >
              Manage Tickets
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
