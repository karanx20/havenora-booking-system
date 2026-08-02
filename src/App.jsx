import { useState } from "react";
import "./App.css";
import RoomCard from "./components/RoomCard.jsx";

function App() {
  const [name, setName] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("");
  const [date, setDate] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [deletedBooking, setDeletedBooking] = useState(null);

  const rooms = [
    { name: "Deluxe", price: 1800 },
    { name: "Super Deluxe", price: 2500 },
    { name: "Superior", price: 3500 },
    { name: "Premium", price: 4000 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name) {
      alert("Name required!");
      return;
    }
    if (!selectedRoom) {
      alert("Room required!");
      return;
    }
    if (!date) {
      alert("Date required!");
      return;
    }

    setSubmittedData({
      name,
      room: selectedRoom,
      date,
    });

    alert("Form Submitted!");

    setName("");
    setSelectedRoom("");
    setDate("");

    const newBooking = {
      id: crypto.randomUUID(),
      name,
      room: selectedRoom,
      date,
    };

    setBookings((prev) => [...prev, newBooking]);
  };

  const handleDelete = (id) => {
    const findData = bookings.find((booking) => booking.id === id);
    const updatedData = bookings.filter((booking) => booking.id !== id);

    setDeletedBooking(findData);
    setTimeout(() => {
      setDeletedBooking(null);
    }, 5000);
    setBookings(updatedData);
  };

  const handleUndo = () => {
    setBookings((prev) => [...prev, deletedBooking]);
    setDeletedBooking(null);
    console.log(deletedBooking);
  };

  return (
    <div className="mx-auto shrink-0 p-6 flex flex-col items-center bg-amber-100">
      <h1 className="font-bold text-lg text-center">HAVENORA</h1>
      <p className="font-semibold text-center">
        Your Haven of Timeless Comfort
      </p>

      <h2 className="text-center">Our Rooms:</h2>

      <div className="flex gap-2">
        {rooms.map((room, index) => (
          <RoomCard
            name={room.name}
            price={room.price}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="mt-4"
          name="Name"
          value={name}
          placeholder="Please enter name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <p>Selected Date: {date}</p>
        <button type="submit" disabled={!name || !selectedRoom || !date}>
          SUBMIT
        </button>
        {submittedData && (
          <div className="border p-4 rounded shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-2">Booking Summary:</h2>
            <p>
              <span className="font-medium">Name: {submittedData.name}</span>
            </p>
            <p>
              <span className="font-medium">Room: {submittedData.room}</span>
            </p>
            <p>
              <span className="font-medium">Date: {submittedData.date}</span>
            </p>
          </div>
        )}
        <h2 className="text-lg font-semibold mb-2">All Bookings:</h2>
        {bookings.length === 0 ? (
          <p>No Bookings found!</p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id}>
              <p>
                <span>Name: {booking.name}</span>
              </p>
              <p>
                <span>Room: {booking.room}</span>
              </p>
              <p>
                <span>Date: {booking.date}</span>
              </p>
              <button onClick={() => handleDelete(booking.id)}>Delete</button>
            </div>
          ))
        )}
        {deletedBooking && (
          <div>
            <p>Booking deleted</p>
            <button onClick={handleUndo}>Undo</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
