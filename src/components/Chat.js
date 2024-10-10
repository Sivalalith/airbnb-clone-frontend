// src/Chat.js
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Link } from "react-router-dom";

const socket = io("http://localhost:5000"); // Adjust based on your backend URL

const Chat = ({ room }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.emit("joinRoom", room);

    socket.on("previousMessages", (previousMessages) => {
      setMessages(previousMessages);
    });

    socket.on("receiveMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("previousMessages");
    };
  }, [room]);

  const sendMessage = () => {
    if (message) {
      socket.emit("sendMessage", { room, message });
      setMessage("");
    }
  };

  return (
    <>
      <div className="m-4 p-4 bg-gray-50 rounded-lg shadow-lg w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Chat with Admin</h2>
        <div className="mb-4 max-h-60 overflow-y-auto border border-gray-300 rounded-lg p-2">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 mb-2 rounded-lg bg-blue-100">
              {msg}
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white rounded-lg p-2 ml-2 transition duration-200 hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </div>
      <Link
        to="/"
        className="bg-blue-500 text-white rounded-lg p-2 ml-4 mt-10 transition duration-200 hover:bg-blue-600"
      >
        Home
      </Link>
    </>
  );
};

export default Chat;
