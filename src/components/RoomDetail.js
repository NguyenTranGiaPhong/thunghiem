import React from "react";

function RoomDetail({ room, setSelectedRoom }) {
  if (!room) return null;

  // Format giá tiền
  const formattedPrice = room.price
    ? room.price.toLocaleString() // Định dạng giá
    : "Không có giá";

  return (
    <div>
      <h3>{room.name}</h3>
      <img src={room.image} alt={room.name} />
      <p>{room.description}</p>
      <p>Giá: {formattedPrice} VND</p> {/* Hiển thị giá đã được format */}
      <button onClick={() => setSelectedRoom(null)}>Quay lại</button>
    </div>
  );
}

export default RoomDetail;
