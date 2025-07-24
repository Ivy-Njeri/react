// src/pages/SupportPage.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gradient-to-br from-pink-50 via-white to-pink-100">

      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center relative z-10">
        <div className="text-2xl font-bold text-pink-600">💞 LoveConnect</div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-pink-600 focus:outline-none">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
            <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
          </ul>
        )}
      </nav>

      {/* Main content */}
      <main className="flex-grow px-4 md:px-20 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4">We're Here for You 💬</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Whether you’re facing an issue or just want to talk, our team is ready to listen. Your experience means everything to us. 💖
        </p>

        <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-pink-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-pink-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            placeholder="Your Message..."
            rows="5"
            className="w-full border border-pink-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner p-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} LoveConnect. All rights reserved 💘
      </footer>
    </div>
  );
};

export default SupportPage;
