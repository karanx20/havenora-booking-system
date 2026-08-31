import RoomCard from "./RoomCard";

function RoomList({ rooms, selectedRoom, setSelectedRoom }) {
  return (
    <div>
      {rooms.map((room) => (
        <RoomCard
          key={room.name}
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
