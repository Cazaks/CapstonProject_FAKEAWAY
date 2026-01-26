import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">

      <aside className="w-64 bg-white border-r">
        <div className="p-6 text-xl font-bold">FAKEAWAY</div>

        <nav className="flex flex-col gap-2 px-4">
          <Link to="/dashboard" className="p-2 rounded hover:bg-gray-100">
            Overview
          </Link>
          <Link to="/dashboard/events" className="p-2 rounded hover:bg-gray-100">
            Events
          </Link>
          <Link to="/dashboard/tickets" className="p-2 rounded hover:bg-gray-100">
            Tickets
          </Link>
          <Link to="/dashboard/profile" className="p-2 rounded hover:bg-gray-100">
            Profile
          </Link>
        </nav>
      </aside>

      
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
