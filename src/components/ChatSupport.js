import React, { useState } from "react";

function ChatSupport() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    alert("Tin nhắn gửi đi: " + message);
    setMessage("");
  };

  return (
    <div className="card">
      <h3>Hỗ trợ khách hàng</h3>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Nhập câu hỏi của bạn"
      />
      <button onClick={sendMessage}>Gửi</button>
    </div>
  );
}

export default ChatSupport;
