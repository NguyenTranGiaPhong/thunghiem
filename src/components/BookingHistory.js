import React, { useState } from "react";

function BookingHistory() {
  // State để lưu trữ lịch sử đặt phòng
  const [bookings, setBookings] = useState([]);

  // State để lưu thông tin người dùng nhập vào form
  const [roomType, setRoomType] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [price, setPrice] = useState("");

  // Hàm xử lý khi người dùng gửi form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Tạo một booking mới
    const newBooking = {
      roomType,
      hotelName,
      price,
    };

    // Cập nhật lại state bookings với lịch sử mới
    setBookings([...bookings, newBooking]);

    // Reset lại các trường nhập
    setRoomType("");
    setHotelName("");
    setPrice("");
  };

  return (
    <div className="card">
      <h3>Lịch sử đặt phòng</h3>

      {/* Form nhập thông tin đặt phòng */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Loại phòng:</label>
          <input
            type="text"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Khách sạn:</label>
          <input
            type="text"
            value={hotelName}
            onChange={(e) => setHotelName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Giá tiền (VND):</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <button type="submit">Đặt phòng</button>
      </form>

      {/* Hiển thị lịch sử đặt phòng */}
      {bookings.length > 0 ? (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              Đặt phòng: {booking.roomType}, {booking.hotelName},{" "}
              {booking.price} VND
            </li>
          ))}
        </ul>
      ) : (
        <p>Chưa có lịch sử đặt phòng.</p>
      )}
    </div>
  );
}

export default BookingHistory;
