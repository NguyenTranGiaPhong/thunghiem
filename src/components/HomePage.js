import React from "react";

function HomePage({ hotels, setHotelFilter }) {
  const handleSearch = (event) => {
    setHotelFilter(event.target.value);
  };

  return (
    <div className="card">
      <h3>Tìm kiếm khách sạn</h3>
      <input
        type="text"
        placeholder="Tìm kiếm khách sạn"
        onChange={handleSearch}
      />
    </div>
  );
}

export default HomePage;
