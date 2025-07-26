import React, { useState } from 'react';
import { Menu, X, UserRound, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const closeUserMenu = () => setUserMenuOpen(false);

  return (
    <div className="min-h-screen bg-pink-50 relative font-sans flex flex-col">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bg-love.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-pink-500/20 to-white/60"></div>
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 bg-white/80 shadow-md">
        <div className="text-2xl font-bold text-pink-600">💞 LoveConnect</div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-pink-600">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/support">Support</Link></li>
          

          {/* Profile Dropdown */}
          <li className="relative">
            <button
              onClick={toggleUserMenu}
              className="flex items-center gap-1 text-pink-600 hover:text-pink-700 focus:outline-none"
            >
              <UserRound size={22} />
              <ChevronDown size={16} />
            </button>

            {userMenuOpen && (
              <ul
                className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md z-50 text-sm"
                onMouseLeave={closeUserMenu}
              >
                <li>
                  <Link to="/matchmaking" className="block px-4 py-2 hover:bg-pink-50">Matchmaking</Link>
                </li>
                <li>
                  <Link to="/support" className="block px-4 py-2 hover:bg-pink-50">Support</Link>
                </li>
                <li>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-pink-50">Settings</Link>
                </li>
                <li>
                  <Link to="/chats" className="block px-4 py-2 hover:bg-pink-50">Chat</Link>
                </li>
                <li>
                  <button className="block w-full text-left px-4 py-2 hover:bg-pink-50 text-red-500">Sign Out</button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden text-gray-700 font-medium z-20">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/signup" onClick={closeMenu}>Sign Up</Link></li>
          <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/testimonials" onClick={closeMenu}>Testimonials</Link></li>
          <li><Link to="/support" onClick={closeMenu}>Support</Link></li>
          <li><Link to="/matchmaking" onClick={closeMenu}>Matchmaking</Link></li>
          <li><Link to="/settings" onClick={closeMenu}>Settings</Link></li>
          <li><Link to="/chats" onClick={closeMenu}>Chat</Link></li>

          <li><button onClick={closeMenu} className="text-left text-red-500">Sign Out</button></li> X 
        </ul>
      )}

      {/* Hero Section */}
      <section className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-10 py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
          Where Real Love Begins 💕
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white/90 max-w-2xl">
          Join thousands of hearts looking for their perfect match in a safe, romantic, and fun space.
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
