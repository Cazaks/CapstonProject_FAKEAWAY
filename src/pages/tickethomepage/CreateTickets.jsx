export default function CreateTicket() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Create Ticket</h2>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Ticket name (VIP)"
          className="w-full p-3 border rounded"
        />

        <input
          type="number"
          placeholder="Price"
          className="w-full p-3 border rounded"
        />

        <input
          type="number"
          placeholder="Quantity"
          className="w-full p-3 border rounded"
        />

        <button className="w-full bg-black text-white p-3 rounded">
          Create Ticket
        </button>
      </form>
    </div>
  );
}
