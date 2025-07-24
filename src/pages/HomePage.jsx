import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false); // to close menu after clicking a link

  return (
    <div className="min-h-screen bg-pink-50 relative font-sans flex flex-col">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/bg-love.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-pink-500/20 to-white/60 backdrop-blur-none"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/80 shadow-md">
        <div className="text-2xl font-bold text-pink-600">💞 LoveConnect</div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-pink-600 focus:outline-none"
          >
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
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden text-gray-700 font-medium z-20">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/signup" onClick={closeMenu}>Sign Up</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
          <li><Link to="/support" onClick={closeMenu}>Support</Link></li>
        </ul>
      )}

      {/* Hero Section */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-10 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
          Where Real Love Begins 💕
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl">
          Join thousands of hearts looking for their perfect match in a safe, romantic, and fun space. Your love story starts here.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            to="/signup"
            className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-pink-700 transition"
          >
            Find Love Now
          </Link>
          <Link
            to="/login"
            className="bg-white text-pink-600 px-6 py-3 rounded-full text-lg shadow-md hover:bg-pink-100 transition"
          >
            Already a Member?
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 py-4 text-center text-sm text-gray-600 relative z-10 shadow-inner">
        © {new Date().getFullYear()} LoveConnect. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
