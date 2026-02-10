// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

// // Sample data
// const overviewStats = [
//   { title: "Total Events", value: 12 },
//   { title: "Tickets Sold", value: 340 },
//   { title: "Available Tickets", value: 120 },
//   { title: "Revenue", value: "$12,450" },
// ];

// const eventsData = [
//   { id: 1, name: "Music Fest 2026", date: "2026-03-15", venue: "Stadium A", ticketsSold: 120, status: "Active" },
//   { id: 2, name: "Tech Conference", date: "2026-04-10", venue: "Hall B", ticketsSold: 80, status: "Active" },
//   { id: 3, name: "Comedy Night", date: "2026-05-01", venue: "Theater C", ticketsSold: 50, status: "Sold Out" },
// ];

// const ticketsData = [
//   { id: "T001", event: "Music Fest 2026", buyer: "Alice", date: "2026-02-01", status: "Used" },
//   { id: "T002", event: "Tech Conference", buyer: "Bob", date: "2026-02-15", status: "Not Used" },
//   { id: "T003", event: "Comedy Night", buyer: "Charlie", date: "2026-03-01", status: "Not Used" },
// ];

// export default function DashboardHome() {
//   const [sortBy, setSortBy] = useState("date");

//   return (
//     <div className="p-6 w-full">
//       {/* Overview Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//         {overviewStats.map((stat) => (
//           <div key={stat.title} className="bg-white p-4 rounded shadow flex flex-col items-start">
//             <p className="text-gray-500">{stat.title}</p>
//             <h2 className="text-2xl font-bold">{stat.value}</h2>
//           </div>
//         ))}
//       </div>

//       {/* Events Table */}
//       <section className="mb-8">
//         <h3 className="text-xl font-semibold mb-2">Events</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border rounded shadow">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-2">Event Name</th>
//                 <th className="p-2">Date</th>
//                 <th className="p-2">Venue</th>
//                 <th className="p-2">Tickets Sold</th>
//                 <th className="p-2">Status</th>
//                 <th className="p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {eventsData.map((event) => (
//                 <tr key={event.id} className="border-b">
//                   <td className="p-2">{event.name}</td>
//                   <td className="p-2">{event.date}</td>
//                   <td className="p-2">{event.venue}</td>
//                   <td className="p-2">{event.ticketsSold}</td>
//                   <td className={`p-2 font-medium ${event.status === "Sold Out" ? "text-red-500" : "text-green-500"}`}>
//                     {event.status}
//                   </td>
//                   <td className="p-2 flex gap-2">
//                     <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">Edit</button>
//                     <button className="bg-red-500 text-white px-2 py-1 rounded text-sm">Cancel</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Tickets Table */}
//       <section>
//         <h3 className="text-xl font-semibold mb-2">Tickets</h3>
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border rounded shadow">
//             <thead>
//               <tr className="bg-gray-100 text-left">
//                 <th className="p-2">Ticket ID</th>
//                 <th className="p-2">Event</th>
//                 <th className="p-2">Buyer</th>
//                 <th className="p-2">Purchase Date</th>
//                 <th className="p-2">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {ticketsData.map((ticket) => (
//                 <tr key={ticket.id} className="border-b">
//                   <td className="p-2">{ticket.id}</td>
//                   <td className="p-2">{ticket.event}</td>
//                   <td className="p-2">{ticket.buyer}</td>
//                   <td className="p-2">{ticket.date}</td>
//                   <td className={`p-2 font-medium ${ticket.status === "Used" ? "text-green-500" : "text-yellow-600"}`}>
//                     {ticket.status}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Placeholder Chart Section */}
//       <section className="mt-8">
//         <h3 className="text-xl font-semibold mb-2">Ticket Sales Overview</h3>
//         <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded">
//           <p className="text-gray-400">[Chart will go here]</p>
//         </div>
//       </section>
//     </div>
//   );
// }
