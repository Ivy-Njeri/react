import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/loveconnect.png';

const AboutPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 font-sans">
      
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Serendate Logo" className="h-10 w-auto" />
          <motion.h1
            className="text-xl md:text-3xl font-extrabold text-pink-600"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Serendate 
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 text-sm md:text-base font-medium">
          <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
          <Link to="/signup" className="text-gray-700 hover:text-pink-500">Join</Link>
          <Link to="/support" className="text-gray-700 hover:text-pink-500">Support</Link>
          <Link to="/about" className="text-pink-600 font-semibold underline underline-offset-4">About</Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-600 focus:outline-none">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 px-6 py-4 shadow-md space-y-3 text-sm font-medium text-center">
          <Link to="/" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Home</Link>
          <Link to="/signup" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Join</Link>
          <Link to="/support" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Support</Link>
          <Link to="/about" onClick={closeMenu} className="block text-pink-600 font-semibold underline underline-offset-4">About</Link>
        </div>
      )}

      {/* About Section */}
      <main className="max-w-4xl mx-auto px-6 py-12 bg-white/90 rounded-xl shadow-xl mt-10 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Serendate 🌸
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          At Serendate, we believe love should be more than just a swipe.
          We’re a modern dating platform built on warmth, safety, and real connection.
        </motion.p>

        <p className="text-base md:text-lg text-gray-700 mb-4 leading-relaxed text-center">
          Whether you’re searching for your soulmate or meaningful friendship,
          Serendate is where hearts meet, and real stories begin. 💗
        </p>

        <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed text-center">
          <strong>Serendate = Serendipity + Date</strong> — a magical moment where your story begins.
        </p>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-pink-100/70 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">💖 Real Connections</h3>
            <p className="text-gray-700 text-sm">
              We focus on authenticity and thoughtful interactions that go beyond surface-level matches.
            </p>
          </div>
          <div className="bg-pink-100/70 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🔒 Safety First</h3>
            <p className="text-gray-700 text-sm">
              Your comfort is our priority. Our tools and support keep your experience safe and respectful.
            </p>
          </div>
          <div className="bg-pink-100/70 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🌍 Open to All</h3>
            <p className="text-gray-700 text-sm">
              Serendate celebrates diversity. We welcome all kinds of love and stories with open arms.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/70 text-center py-4 text-gray-600 text-sm border-t mt-auto">
        © {new Date().getFullYear()} <strong>Serendate</strong>. Where stars align 💫 .
      </footer>
    </div>
  );
};

export default AboutPage;
