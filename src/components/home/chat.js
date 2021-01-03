import React from "react";

const Chat = () => {
  return (
    <div className="chat flex flex-column">
      <div className="chat__messages">

      </div>
      <textarea placeholder="Your message" className="chat__input"></textarea>
    </div>
  );
};

export default Chat;