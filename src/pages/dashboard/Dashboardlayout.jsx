import { Link, Outlet, useNavigate } from "react-router-dom";

export default function DashBoardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="relative h-screen w-full flex">


      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/first_bgImage.jpg')",
        }}
      />


      <div className="absolute inset-0 bg-black/40" />

      <aside className="relative z-10 w-64 bg-gray-100 border-r">
        <div className="flex items-center gap-1">
        <img
          src="/assets/logo.svg"
          alt="logo"
          className="h-12 w-10 shrink-0 md:h-14 md:w-10"
        />

        <span className="text-base md:text-4xl font-extrabold text-blue-469 leading-none">
          FAKEAWAY
        </span>
        </div>

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

          <button
            onClick={handleLogout}
            className="mt-6 p-2 text-left rounded hover:bg-red-100 text-red-600"
          >
            Logout
          </button>
        </nav>
      </aside>


      <main className="relative z-10 flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
