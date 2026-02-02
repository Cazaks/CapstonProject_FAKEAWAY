import { Link, Outlet, useNavigate } from "react-router-dom";
import LenisScroll from "../../components/LenisScroll";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function DashBoardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <>
      <LenisScroll />
      <Header showAutoSwitchButton={false} />

      <div className="relative min-h-screen flex w-full">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/assets/backgroundImage.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* Sidebar */}
        <aside className="relative z-10 w-64 shrink-0 bg-gray-100 border-r">
          <nav className="flex flex-col gap-2 px-4 pt-20">
            <Link to="/dashboard" className="p-2 rounded hover:bg-gray-200">
              Overview
            </Link>

            {/* ✅ Events link points to EventPages landing page */}
            <Link to="/dashboard/events" className="p-2 rounded hover:bg-gray-200">
              Events
            </Link>

            <Link to="/dashboard/tickets" className="p-2 rounded hover:bg-gray-200">
              Tickets
            </Link>

            <Link to="/dashboard/profile" className="p-2 rounded hover:bg-gray-200">
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="mt-6 p-2 text-left rounded hover:bg-red-100 text-red-600"
            >
              Logout
            </button>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="relative z-10 flex-1 flex flex-col min-h-screen">
          <div className="flex-1 overflow-y-auto pt-6 px-6">
            {/* Outlet renders the current page */}
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
