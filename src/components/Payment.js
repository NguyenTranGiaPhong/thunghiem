import React from "react";

function Payment() {
  return (
    <div className="card">
      <h3>Thanh toán</h3>
      <p>Chọn phương thức thanh toán:</p>
      <select>
        <option value="credit-card">Thẻ tín dụng</option>
        <option value="paypal">PayPal</option>
      </select>
      <p>
        Chính sách hủy phòng: Hủy miễn phí trong vòng 24 giờ trước khi nhận
        phòng.
      </p>
    </div>
  );
}

export default Payment;
