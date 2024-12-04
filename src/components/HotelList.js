import React from "react";

function HotelList({ hotels }) {
  return (
    <div>
      <h2>Danh Sách Khách Sạn</h2>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-item">
          <h3>{hotel.name}</h3>
          <p>Vị trí: {hotel.location}</p>
          <p>Đánh giá: {hotel.rating} / 5</p>

          {/* Hiển thị thông tin phòng cho mỗi khách sạn */}
          {hotel.rooms.map((room) => (
            <div key={room.id} className="room-item">
              <img
                src={room.image || "default_image.jpg"} // Hiển thị ảnh phòng
                alt={room.name}
                style={{ width: "200px", height: "120px", objectFit: "cover" }}
              />
              <p>{room.name}</p>
              <p>{room.description}</p>
              <p>Giá: {room.price ? room.price.toLocaleString() : "Liên hệ"}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HotelList;
