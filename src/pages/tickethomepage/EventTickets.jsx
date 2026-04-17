import { useState } from "react";
import { useParams } from "react-router-dom";
import CreateTicket from "./CreateTickets";

export default function EventTickets() {
  const { eventId } = useParams();

  const [eventOpen, setEventOpen] = useState(true);
  const [openTicketId, setOpenTicketId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  // fake data (comes from backend later)
  const event = {
    id: eventId,
    title: "Tech Conference 2026",
  };

  const tickets = [
    { id: 1, name: "Regular", price: 5000, quantity: 100 },
    { id: 2, name: "VIP", price: 15000, quantity: 20 },
     {id: 3, name: "VVIP", price: 30000, available: 5 },
    { id: 4, name: "Student", price: 3000, available: 50 },
    { id: 5, name: "Early Bird", price: 4000, available: 30 },
    { id: 6, name: "Premium", price: 20000, available: 10 },
    { id: 7, name: "Table for 10", price: 100000, available: 15 },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* LEFT SIDE */}
      <div className="space-y-6">

        {/* EVENT DROPDOWN HEADER */}
        <div className="border rounded-xl bg-white overflow-hidden">
          <button
            onClick={() => setEventOpen(!eventOpen)}
            className="w-full flex justify-between items-center p-4 hover:bg-gray-100"
          >
            <h1 className="text-xl font-bold">{event.title}</h1>

            <span
              className={`transition-transform ${
                eventOpen ? "rotate-90" : ""
              }`}
            >
              ▶
            </span>
          </button>

          {/* EVENT CONTENT */}
          {eventOpen && (
            <div className="p-4 border-t space-y-4 bg-gray-50">

              {/* CREATE TICKET */}
              <button
                onClick={() => setShowCreate(!showCreate)}
                className="px-4 py-2 bg-black text-white rounded"
              >
                + Create Ticket
              </button>

              {showCreate && (
                <div className="border rounded-lg p-4 bg-white">
                  <CreateTicket />
                </div>
              )}

              {/* TICKETS LIST */}
              <div className="space-y-3">
                {tickets.map(ticket => (
                  <div
                    key={ticket.id}
                    className="border rounded-lg bg-white overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenTicketId(
                          openTicketId === ticket.id ? null : ticket.id
                        )
                      }
                      className="w-full flex justify-between items-center p-3 hover:bg-gray-100"
                    >
                      <span className="font-medium">{ticket.name}</span>
                      <span className="text-sm text-gray-500">
                        ₦{ticket.price}
                      </span>
                    </button>

                    {openTicketId === ticket.id && (
                      <div className="p-3 border-t bg-gray-50 space-y-2">
                        <p className="text-sm text-gray-600">
                          Quantity: {ticket.quantity}
                        </p>

                        <div className="flex gap-4">
                          <button className="text-sm text-blue-600 hover:underline">
                            Edit
                          </button>
                          <button className="text-sm text-red-600 hover:underline">
                            Disable
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block">
        <img
          src="/assets/ticket-dashboard.jpg"
          alt="Ticket dashboard"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
