import React, { useState, useEffect, useRef } from 'react';
import { MdDoneAll } from 'react-icons/md';
import { BsMoon, BsSun } from 'react-icons/bs';
import {
  FiArrowLeft,
  FiSmile,
  FiImage,
  FiPaperclip,
  FiMic,
  FiSend
} from 'react-icons/fi';
import { io } from 'socket.io-client'; 
import EmojiPicker from 'emoji-picker-react';

const socket = io('http://localhost:5000');

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [online, setOnline] = useState(true);
  const [recording, setRecording] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    socket.on('chatMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
      setIsTyping(false);
    });

    socket.on('userTyping', () => setIsTyping(true));
    socket.on('userStoppedTyping', () => setIsTyping(false));

    return () => socket.disconnect();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const message = {
      text: input,
      timestamp: new Date(),
      from: 'me',
      seen: true,
    };
    socket.emit('chatMessage', message);
    setMessages((prev) => [...prev, message]);
    setInput('');
    setShowEmoji(false);
  };

  const handleTyping = (e) => {
    setInput(e.target.value);
    socket.emit('userTyping');
    setTimeout(() => socket.emit('userStoppedTyping'), 1000);
  };

  const addEmoji = (emoji) => {
    setInput((prev) => prev + emoji.emoji);
  };

  const handleBack = () => {
    // You can replace with navigate('/') if using React Router
    alert('Go back or close chat');
  };

  const toggleRecording = () => {
    setRecording(!recording);
    // Add actual MediaRecorder logic later
    alert(recording ? 'Recording stopped' : 'Recording started');
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} h-screen flex`}>
      {/* Chat List */}
      <div className="w-full md:w-1/3 lg:w-1/4 border-r border-gray-300 p-4 hidden md:block">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        <div className="flex items-center gap-3 mb-3">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <p>{online ? 'Online' : 'Offline'} • Last seen: 2 mins ago</p>
        </div>
      </div>

      {/* Chat Box */}
      <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col relative">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <div className="flex items-center gap-4">
            {/* Always-visible exit arrow to profile */}
            <button onClick={() => window.location.href = '/profile'} className="mr-2">
              <FiArrowLeft size={24} />
            </button>
            <img src="https://placehold.co/40x40" alt="avatar" className="rounded-full w-10 h-10" />
            <div>
              <p className="font-semibold">Jane Doe</p>
              <p className="text-sm text-gray-500">{online ? 'Online' : 'Last seen 2m ago'}</p>
            </div>
          </div>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl ${
                msg.from === 'me'
                  ? 'bg-blue-500 text-white ml-auto'
                  : 'bg-gray-200 text-black'
              }`}
            >
              <p>{msg.text}</p>
              <div className="text-xs flex justify-between items-center mt-1">
                <span>{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                {msg.seen && msg.from === 'me' && (
                  <MdDoneAll className="text-white ml-1 w-4 h-4" />
                )}
              </div>
            </div>
          ))}
          {isTyping && (
            <p className="text-sm text-gray-500 italic">Jane is typing...</p>
          )}
          <div ref={messagesEndRef}></div>
        </div>

        {/* Input */}
        <div className="relative p-4 border-t border-gray-300">
          <div className="flex items-center gap-2">
            <button onClick={() => setShowEmoji(!showEmoji)} className="text-xl"><FiSmile /></button>

            <input type="file" id="upload-image" className="hidden" />
            <label htmlFor="upload-image" className="cursor-pointer text-xl"><FiImage /></label>

            <input type="file" id="upload-file" className="hidden" />
            <label htmlFor="upload-file" className="cursor-pointer text-xl"><FiPaperclip /></label>

            <button onClick={toggleRecording} className={`text-xl ${recording ? 'text-red-500 animate-pulse' : ''}`}>
              <FiMic />
            </button>

            <input
              type="text"
              placeholder="Type a message"
              value={input}
              onChange={handleTyping}
              className={`flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 ring-blue-400 ${darkMode ? 'bg-gray-800 text-white placeholder-gray-300' : 'bg-white text-black placeholder-gray-500'}`}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white p-2 rounded-full"
            >
              <FiSend />
            </button>
          </div>

          {showEmoji && (
            <div className="absolute bottom-20 left-4 z-10 bg-white rounded shadow dark:bg-gray-700">
              <EmojiPicker onEmojiClick={addEmoji} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
