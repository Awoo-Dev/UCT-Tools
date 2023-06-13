import React, { useState, useRef, useEffect } from 'react';
import './Chat.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const chatContainerRef = useRef(null);
  const socket = useRef(null);

  useEffect(() => {
    const socketOptions = {
      transports: ['websocket'],
      withCredentials: true,
      extraHeaders: {
        'Access-Control-Allow-Origin': 'http://localhost:4000', 
      },
    };

    socket.current = io('http://localhost:4000', socketOptions);

    socket.current.on('connect', () => {
      console.log('Conectado al servidor de WebSocket');
    });

    socket.current.on('message', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (name && message) {
      const newMessage = {
        name: name,
        message: message,
      };
      socket.current.emit('message', newMessage);
      setMessage('');
    }
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div>
      <Link to="/" className="chat-link">
        <i className="fa-solid fa-house"></i> Inicio
      </Link>
      <header className="headersec">
        <h1 className="sech1">UCT TOOLS!</h1>
      </header>
      <div className="chat-container">
        <h1 className="chat-title">Chat Global</h1>
        <div className="chat-messages" ref={chatContainerRef}>
          {messages.map((msg, index) => (
            <div key={index} className="chat-message">
              <span className="chat-sender">{msg.name}: </span>
              <span>{msg.message}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="chat-form">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="chat-input"
          />
          <input
            type="text"
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="chat-input"
          />
          <button type="submit" className="chat-button">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
