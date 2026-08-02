import RoomCard from "./RoomCard";

function RoomList({ name, price, selectedRoom, setSelectedRoom }) {
  return (
    <div>
      {rooms.map((room, index) => (
        <RoomCard
          name={room.name}
          price={room.price}
          selectedRoom={selectedRoom}
          setSelectedRoom={setSelectedRoom}
        />
      ))}
    </div>
  );
}

export default RoomList;
