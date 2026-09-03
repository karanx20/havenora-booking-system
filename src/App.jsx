import { useState } from "react";
import "./App.css";
import RoomList from "./components/RoomList.jsx";
import BookingForm from "./components/BookingForm.jsx";

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
        Your Heaven of Timeless Comfort
      </p>

      <h2 className="text-center">Our Rooms:</h2>

      <div className="flex gap-2">
        {rooms.map((room) => (
          <RoomList
          key={room.name}
            rooms={rooms}
            selectedRoom={selectedRoom}
            setSelectedRoom={setSelectedRoom}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <BookingForm
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          selectedRoom={selectedRoom}
          handleSubmit={handleSubmit}
          submittedData={submittedData}
          bookings={bookings}
          handleDelete={handleDelete}
          deletedBooking={deletedBooking}
          handleUndo={handleUndo}
        />
        
      </form>
    </div>
  );
}

export default App;
