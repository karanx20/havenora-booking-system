function BookingForm({ name, setName, date, setDate, selectedRoom, handleSubmit, submittedData, bookings, handleDelete, deletedBooking, handleUndo }) {
    return (
        <div>
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
        </div>
    );
}

export default BookingForm;