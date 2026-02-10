import { Link} from "react-router-dom";
// import LenisScroll from "../../components/LenisScroll";
// import EventServices from "../../services/EventServices";

export default function EventsPageLayout() {
  return (

    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('/assets/event_bg_image.jpg')" }}
    >
      <div className="bg-black/40 flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Make Your Event Unforgettable!
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl drop-shadow-md">
          Planning an event has never been this easy. With FakeAway, you can create, customize, and launch
          your event in just a few clicks. Let’s make it epic! 
          click create event to get started!
        </p>
        <Link
          to="/dashboard/create-event" 
          className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        >
          Create Event
        </Link>
      </div>

      <main className="flex-1 p-6">
      </main>
    </div>
     
  );
}
