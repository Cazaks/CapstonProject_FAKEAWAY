export default function CreateEvents() {
  return (
    <div
      className="min-h-screen w-full flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/event_bg_image.jpg')" }} 
    >
      <div className="bg-black/40 w-full min-h-screen flex justify-center items-center px-4">
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-white/10 backdrop-blur-lg border border-white/30 p-6 sm:p-8 rounded-2xl shadow-xl shadow-black/10">
          <h1 className="text-2xl font-bold mb-6 text-center">Create Event</h1>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Event Name"
              className="w-full border border-gray-300 bg-white/10 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            <input
              type="date"
              className="w-full border border-gray-300 bg-white/10 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            <div className="relative">
              <select
                name="category"
                required
                className="w-full appearance-none border border-gray-300 bg-white/10 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black-500"
              >
                <option value="" disabled selected>
                  Select Category
                </option>

                <option value="CONCERT">Concert</option>
                <option value="CONFERENCE">Conference</option>
                <option value="WORKSHOP">Workshop</option>
                <option value="SPORTS">Sports</option>
                <option value="FESTIVAL">Festival</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                ▼
              </span>
            </div>

            <textarea
              placeholder="Event Description"
              rows={4}
              className="w-full border border-gray-300 bg-white/10 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
