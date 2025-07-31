import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaUserFriends,
  FaComments,
  FaUserCircle,
  FaChevronDown,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import logo from '../assets/loveconnect.png';

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src={logo} alt="loveconnect.png" className="h-10 w-auto" />
            <motion.h1
              className="text-3xl font-extrabold text-pink-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Serendate
            </motion.h1>
          </div>

          <button
            className="md:hidden ml-auto text-pink-600 text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className="hidden md:flex flex-row md:space-x-6 items-center w-full md:w-auto space-y-0 relative">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition" onClick={handleNavClick}>Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 transition" onClick={handleNavClick}>About</Link>
            {!isLoggedIn && (
              <>
                <Link to="/login" className="w-full md:w-auto" onClick={handleNavClick}>
                  <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">Login</button>
                </Link>
                <Link to="/signup" className="w-full md:w-auto" onClick={handleNavClick}>
                  <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">Join Now</button>
                </Link>
              </>
            )}
            {isLoggedIn && (
              <div className="relative">
                <button
                  className="flex items-center text-gray-700 hover:text-pink-600 transition"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <FaUserCircle className="text-2xl mr-1" />
                  <FaChevronDown className="text-sm" />
                </button>
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg border z-50">
                    <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700" onClick={handleNavClick}>My Profile</Link>
                    <Link to="/chats" className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700" onClick={handleNavClick}>Chats</Link>
                    <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700" onClick={handleNavClick}>Settings</Link>
                    <span onClick={() => {
                      localStorage.removeItem('isLoggedIn');
                      setIsLoggedIn(false);
                      setShowDropdown(false);
                      setMenuOpen(false);
                    }} className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 cursor-pointer">Logout</span>
                  </div>
                )}
              </div>
            )}
          </nav>

          {menuOpen && (
            <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl py-4 z-40 flex flex-col items-center animate-fade-in">
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center" onClick={handleNavClick}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center" onClick={handleNavClick}>About</Link>
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="w-full" onClick={handleNavClick}>
                    <button className="w-full bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition my-2">Login</button>
                  </Link>
                  <Link to="/signup" className="w-full" onClick={handleNavClick}>
                    <button className="w-full bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition my-2">Join Now</button>
                  </Link>
                </>
              )}
              {isLoggedIn && (
                <div className="w-full flex flex-col items-center">
                  <Link to="/profile" className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center" onClick={handleNavClick}>My Profile</Link>
                  <Link to="/chats" className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center" onClick={handleNavClick}>Chats</Link>
                  <Link to="/settings" className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center" onClick={handleNavClick}>Settings</Link>
                  <span onClick={() => {
                    localStorage.removeItem('isLoggedIn');
                    setIsLoggedIn(false);
                    setMenuOpen(false);
                  }} className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 cursor-pointer w-full text-center">Logout</span>
                </div>
              )}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-pink-100 py-20 text-center px-4">
        <motion.h2 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4 flex justify-center items-center gap-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let The Stars Lead You To Love
          <motion.span className="text-yellow-400 text-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 1.2 }}>
            ⭐
          </motion.span>
        </motion.h2>
        <p className="text-lg sm:text-xl text-gray-700">Where real connections bloom in a safe and loving space.</p>
        <p className="mt-4 italic text-pink-700 text-base sm:text-lg">“Because love should feel like serendipity.”</p>
      </section>

      {/* What is Serendate */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-pink-600 mb-6">What is Serendate?</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-semibold text-pink-500">Serendate</span> isn’t your average dating app.
            It’s a soulful digital garden where people don't just swipe — they connect, deeply and intentionally.
            In a world craving authenticity, Serendate offers something different: a space where
            <span className="font-semibold text-pink-500"> hearts speak first</span>, and profiles are just the beginning.
            <br /><br />
            We’re here for the thoughtful, the gentle, the romantic. We’re here for the night owls who want to talk at 2am and the poets who want to be seen. With features like our <span className="font-semibold text-pink-500">Moments feed</span>, we let you express yourself daily — not just through selfies, but through thoughts, art, music, and emotion.
            <br /><br />
            Love isn’t rushed here. It's discovered in shared stories, kind comments, meaningful glances, and the spark of “I see you.” If you're tired of the noise, welcome to the calm — welcome to Serendate.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">Why Choose Serendate?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <div>
            <FaHeart className="text-pink-500 text-5xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Genuine Connections</h4>
            <p>Meet people who share your values and vibe with you authentically.</p>
          </div>
          <div>
            <FaUserFriends className="text-pink-500 text-5xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Inclusive & Safe</h4>
            <p>Everyone is welcome. Gender-neutral. No judgment. Just love.</p>
          </div>
          <div>
            <FaComments className="text-pink-500 text-5xl mx-auto mb-4" />
            <h4 className="font-bold text-xl mb-2">Moments Feature</h4>
            <p>Share photos, thoughts, and feelings through daily Moments.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-pink-50 text-center px-4 md:px-24">
        <h3 className="text-3xl font-bold text-pink-600 mb-8">How It Works</h3>
        <p className="mb-6 text-gray-700 text-base sm:text-lg">
          Create your profile, explore matches, chat, share moments, and discover love—naturally.
        </p>
        <div className="flex justify-center">
          <video width="100%" className="rounded-lg shadow-lg max-w-md sm:max-w-xl" controls>
            <source src="/assets/how-it-works.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t text-center p-6 mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Serendate — Where Stars Align ✨
      </footer>
    </div>
  );
};

export default LandingPage;
