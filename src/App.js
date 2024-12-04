import React, { useState } from "react";
import HomePage from "./components/HomePage";
import HotelList from "./components/HotelList";
import RoomDetail from "./components/RoomDetail"; // Nhập khẩu đúng cách
import Payment from "./components/Payment";
import Review from "./components/Review";
import ChatSupport from "./components/ChatSupport";
import UserProfile from "./components/UserProfile";
import BookingHistory from "./components/BookingHistory";

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null); // Để lưu thông tin phòng đã chọn
  const [hotelFilter, setHotelFilter] = useState("");

  const hotels = [
    {
      id: 1,
      name: "Liberty Central Hotel",
      location: "Nha Trang",
      rating: 4,
      rooms: [
        {
          id: 1,
          name: "Phòng Đôi",
          price: 598889,
          description: "Phòng cho 1 người",
          image:
            "https://www.libertycentralsaigoncentre.com/media/filer_public/94/ac/94ac44d1-95cd-4bca-b233-de6a9e36f4a8/lc_suite01_1200x800px.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Pavillon Garden Hotel",
      location: "Nha Trang",
      rating: 5.0,
      rooms: [
        {
          id: 2,
          name: "Phòng Đôi",
          price: 1504800,
          description: "Phòng cho 2 người",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/square600/509857113.webp?k=416a908a12ac697e5d763e59d4a19fa46e857b322a9d074f6332deee6545caf4&o=",
        },
      ],
    },
    {
      id: 3,
      name: "Prime New Hotel",
      location: "Nha Trang",
      rating: 5.0,
      rooms: [
        {
          id: 3,
          name: "Phòng Đôi",
          price: 646000,
          description: "Phòng cho 2 người",
          image:
            "https://th.bing.com/th/id/OIP.krinEUZh4OexNXVhUdAvYQHaGj?rs=1&pid=ImgDetMain",
        },
      ],
    },
    {
      id: 4,
      name: "Venue Hotel",
      location: "Nha Trang",
      rating: 4.5,
      rooms: [
        {
          id: 4,
          name: "Phòng Cơ Bản",
          price: 900000,
          description: "Phòng cho 1-2 người",
          image:
            "https://th.bing.com/th/id/R.1214e30c85c6042792208c2ebfeb53e5?rik=1Do8MVRfMSBaqg&riu=http%3a%2f%2fpix10.agoda.net%2fhotelImages%2f865%2f8653%2f8653_17022813570051293449.jpg&ehk=OGXeYHzMzNwY9EMtyhTFb1IJYsgWRKqTWxe%2bS%2f01Xbg%3d&risl=&pid=ImgRaw&r=0",
        },
      ],
    },
    {
      id: 5,
      name: "Mountain View Hotel",
      location: "Đà Lạt",
      rating: 4.8,
      rooms: [
        {
          id: 5,
          name: "Phòng Gia Đình",
          price: 1200000,
          description: "Phòng cho 4 người",
          image:
            "https://th.bing.com/th/id/OIP.HdDqNrsS9A5HMVz8IjOYmQHaE7?rs=1&pid=ImgDetMain",
        },
      ],
    },
    {
      id: 6,
      name: "Sunrise Beach Hotel",
      location: "Hội An",
      rating: 4.7,
      rooms: [
        {
          id: 6,
          name: "Phòng Hướng Biển",
          price: 1500000,
          description: "Phòng cho 2 người, có view biển",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/74/bb/16/zinfandel-room.jpg?w=1200&h=-1&s=1",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <h1>Ứng Dụng Đặt Phòng Khách Sạn</h1>

      {/* Tìm kiếm và lọc khách sạn */}
      <HomePage hotels={hotels} setHotelFilter={setHotelFilter} />

      {/* Danh sách khách sạn */}
      <HotelList
        hotels={hotels}
        filter={hotelFilter}
        setSelectedRoom={setSelectedRoom} // Truyền hàm chọn phòng
      />

      {/* Hiển thị chi tiết phòng khi người dùng chọn */}
      {selectedRoom && (
        <RoomDetail room={selectedRoom} setSelectedRoom={setSelectedRoom} />
      )}

      {/* Các phần khác như thanh toán, đánh giá, hỗ trợ chat... */}
      <Payment />
      <Review />
      <ChatSupport />
      <UserProfile />
      <BookingHistory />
    </div>
  );
}

export default App;
