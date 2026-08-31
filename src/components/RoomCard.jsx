function RoomCard({
  name,
  price,
  selectedRoom,
  setSelectedRoom,
}) {
  return (
    <div
      className="w-60 rounded-lg border p-4 shadow-md bg-white text-center"
    >
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button
        type="button"
        onClick={() => setSelectedRoom(name)}
        className={`px-4 py-2 cursor-pointer rounded transition-all duration-200
        ${
          selectedRoom === name
            ? "bg-green-500 text-white border-green-700 scale-105"
            : "bg-white text-black border-gray-400 hover:bg-gray-100"
        }
          `}
      >
        {selectedRoom === name ? "SELECTED!" : "SELECT ROOM"}
      </button>
    </div>
  );
}

export default RoomCard;
