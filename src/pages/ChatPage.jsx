import React, { useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import { toast } from 'react-toastify';

// Connect to backend
const socket = io('http://localhost:5000');

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: 'Jane', text: 'Hi there!', time: '10:01 AM' },
    { sender: 'me', text: 'Hey Jane!', time: '10:02 AM' },
    { sender: 'Jane', text: 'How’s everything?', time: '10:03 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const currentUser = 'me';

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Typing detection
  useEffect(() => {
    if (newMessage.length > 0) {
      setIsTyping(true);
      const timeout = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [newMessage]);

  // Notifications
  const showNotification = (message) => {
    if (message.sender !== currentUser) {
      const audio = new Audio('/notification.mp3');
      audio.play().catch(() => {});
      document.title = `💌 New message from ${message.sender}`;
      setTimeout(() => {
        document.title = 'Love Connect 💕';
      }, 3000);
    }
  };

  // Listen for messages
  useEffect(() => {
    const handleIncoming = (data) => {
      // Avoid duplicate if you already added it locally
      if (data.sender !== currentUser) {
        setMessages((prev) => [...prev, data]);
        toast.info(`📩 New message from ${data.sender}: "${data.text}"`);
        showNotification(data);
      }
    };

    socket.on('receive_message', handleIncoming);
    return () => {
      socket.off('receive_message', handleIncoming);
    };
  }, []);

  const handleSend = () => {
    if (newMessage.trim() === '') return;

    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    const messageData = {
      sender: currentUser,
      text: newMessage,
      time: formattedTime,
    };

    socket.emit('send_message', messageData);
    setMessages((prev) => [...prev, messageData]);
    setNewMessage('');
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="Jane Avatar"
            className="w-10 h-10 rounded-full"
            onError={(e) => {
              e.currentTarget.src = 'https://ui-avatars.com/api/?name=Jane+Doe';
            }}
          />
          <div>
            <p className="font-semibold">Jane Doe</p>
            <p className="text-sm text-gray-500">Online</p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-2 sm:p-4 relative">
        <div className="flex-1 overflow-y-auto space-y-3 pb-28">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === currentUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] p-3 rounded-lg shadow ${
                  msg.sender === currentUser
                    ? 'bg-pink-500 text-white rounded-br-none'
                    : 'bg-white text-gray-900 rounded-bl-none'
                }`}
              >
                <p>{msg.text}</p>
                <p className="text-[10px] text-gray-300 mt-1 text-right">{msg.time}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="text-sm text-gray-400 italic ml-2">Jane is typing...</div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="w-full absolute bottom-0 left-0 p-2 bg-pink-50 border-t border-gray-200 flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none"
          />
          <button
            onClick={handleSend}
            className="bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
