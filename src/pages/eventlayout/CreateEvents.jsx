
export default function CreateEvents() {
  return (
    
    <div className="pt-14 px-6">
      
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Event Name"
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          className="w-full border p-2 rounded"
        />

        <textarea
          placeholder="Event Description"
          className="w-full border p-2 rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Event
        </button>
      </form>
    </div>
  
  );
}
