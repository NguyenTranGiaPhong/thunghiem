import React, { useState } from "react";

function UserProfile() {
  // State để lưu trữ thông tin cá nhân của người dùng
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Quản lý trạng thái đăng nhập

  // Hàm xử lý khi người dùng đăng xuất
  const handleLogout = () => {
    setName(""); // Xóa thông tin người dùng
    setEmail("");
    setIsLoggedIn(false); // Đánh dấu trạng thái đăng xuất
  };

  // Hàm xử lý khi người dùng gửi thông tin
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngừng reload trang khi submit form
  };

  return (
    <div className="card">
      {isLoggedIn ? (
        <div>
          <h3>Thông tin cá nhân</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Tên:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} // Cập nhật state khi người dùng nhập tên
                placeholder="Nhập tên của bạn"
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Cập nhật state khi người dùng nhập email
                placeholder="Nhập email của bạn"
              />
            </div>
            <button type="submit">Lưu thông tin</button>
          </form>

          <h4>Thông tin cá nhân đã nhập:</h4>
          <p>Tên: {name || "Chưa nhập tên"}</p>
          <p>Email: {email || "Chưa nhập email"}</p>

          <button onClick={handleLogout}>Đăng xuất</button>
        </div>
      ) : (
        <div>
          <h3>Vui lòng đăng nhập</h3>
          <button onClick={() => setIsLoggedIn(true)}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
