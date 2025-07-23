import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
   <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('../../public/images/download.jpg')"
      }}
    >
    <div className="bg-pink-50 min-h-screen font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-600">💞 Love Connect</div>
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-500">Contact</Link></li>
          <li><Link to="/login" className="hover:text-pink-500">Login</Link></li>
          <li><Link to="/signup" className="hover:text-pink-500">Join</Link></li>
        </ul>
        <div className="md:hidden">
          {/* Optional: Add mobile hamburger menu here later */}
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 text-center px-6">
        <h1 className="text-5xl font-bold text-pink-600 mb-4 leading-tight">
          Find Love That Lasts 💖
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Discover meaningful connections in a safe, friendly, and romantic space.
        </p>

        {/* Quick Buttons */}
        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700 transition"
          >
            💕 Join Now
          </Link>
          <Link
            to="/login"
            className="bg-white text-pink-600 border border-pink-500 px-6 py-3 rounded-full shadow hover:bg-pink-100 transition"
          >
            🔐 Log In
          </Link>
          <Link
            to="/explore"
            className="bg-gradient-to-r from-pink-400 to-red-400 text-white px-6 py-3 rounded-full shadow hover:opacity-90 transition"
          >
            🌹 Explore Matches
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="mt-20 px-6 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-10">Why Choose Love Connect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-pink-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">💗 Real People</h3>
            <p>Verified profiles only — meet genuine matches near you.</p>
          </div>
          <div className="p-6 bg-pink-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🔐 Private & Safe</h3>
            <p>Your privacy is our priority with secure chat and profiles.</p>
          </div>
          <div className="p-6 bg-pink-100 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🌟 Romance + Fun</h3>
            <p>A fun way to connect and build lasting love stories.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 text-center py-6 mt-10">
        <p className="text-pink-600">&copy; {new Date().getFullYear()} Love Connect. All rights reserved.</p>
        <div className="mt-2 text-sm space-x-4">
          <Link to="/privacy" className="text-pink-500 hover:underline">Privacy</Link>
          <Link to="/terms" className="text-pink-500 hover:underline">Terms</Link>
          <Link to="/support" className="text-pink-500 hover:underline">Support</Link>
        </div>
      </footer>
    </div>
    </div>
  );
};

export default HomePage;
