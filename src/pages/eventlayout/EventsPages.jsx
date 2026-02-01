import { Outlet } from "react-router-dom";

export default function EventLayout() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/event_bg_image.jpg')" }}
    >
      
      {/* <header className="p-4 text-white text-2xl font-bold">Create Your Event</header> */}

      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}
