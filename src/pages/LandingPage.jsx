import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeart, FaUserFriends, FaComments, FaUserCircle, FaChevronDown } from 'react-icons/fa';

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-3xl font-extrabold text-pink-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Serendate 💞
          </motion.h1>

          <nav className="flex space-x-6 items-center relative">
            <Link to="/" className="text-gray-700 hover:text-pink-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-600 transition">About</Link>
            {!isLoggedIn && (
              <Link to="/login">
                <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">
                  Login
                </button>
              </Link>
            )}
            {!isLoggedIn && (
              <Link to="/signup">
                <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition">
                  Join Now
                </button>
              </Link>
            )}
            {/* Profile dropdown icon */}
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
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/chats"
                      className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
                    >
                      Chats
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
                    >
                      Settings
                    </Link>
                    <span
                      onClick={() => {
                        localStorage.removeItem('isLoggedIn');
                        setIsLoggedIn(false);
                        setShowDropdown(false);
                      }}
                      className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 cursor-pointer"
                    >
                      Logout
                    </span>
                  </div>
                )}
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-pink-100 py-20 text-center">
        <motion.h2
          className="text-5xl font-bold text-pink-600 mb-4 flex justify-center items-center gap-2"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let The Stars Lead You To Love
          <motion.span
            className="text-yellow-400 text-3xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 1.2,
            }}
          >
            ⭐
          </motion.span>
        </motion.h2>

        <p className="text-xl text-gray-700">Where real connections bloom in a safe and loving space.</p>
        <p className="mt-4 italic text-pink-700 text-lg">“Because love should feel like serendipity.”</p>
      </section>

        {/* Why Choose Us */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">Why Choose Serendate?</h3>
        <div className="grid md:grid-cols-3 gap-10 text-center">
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

      {/* How It Works Section */}
      <section className="py-16 bg-pink-50 text-center px-4 md:px-24">
        <h3 className="text-3xl font-bold text-pink-600 mb-8">How It Works</h3>
        <p className="mb-6 text-gray-700 text-lg">
          Create your profile, explore matches, chat, share moments, and discover love—naturally.
        </p>
        <div className="flex justify-center">
          <video width="500" className="rounded-lg shadow-lg" controls>
            <source src="/assets/how-it-works.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t text-center p-6 mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} Serendate — Love, Unscripted..
      </footer>
    </div>
  );
};

export default LandingPage;

