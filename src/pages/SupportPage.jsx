import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/loveconnect.png';

const SupportPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans flex flex-col">
      
      {/* Navbar */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-2xl font-bold text-pink-600">
            <img src={logo} alt="Serendate Logo" className="h-10 w-auto" />
            Serendate
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-pink-500 font-medium">Home</Link>
            <Link to="/signup" className="text-gray-700 hover:text-pink-500 font-medium">Join</Link>
            <Link to="/support" className="text-pink-600 font-semibold">Support</Link>
            <Link to="/about" className="text-gray-700 hover:text-pink-500 font-medium">About</Link>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-pink-600 font-medium focus:outline-none"
              >
                Profile <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-pink-50 text-gray-700">My Profile</Link>
                  <Link to="/settings" className="block px-4 py-2 hover:bg-pink-50 text-gray-700">Settings</Link>
                  <Link to="/logout" className="block px-4 py-2 hover:bg-pink-50 text-gray-700">Logout</Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-pink-600">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-lg">
            <Link to="/" className="block text-gray-700 hover:text-pink-500 font-medium">Home</Link>
            <Link to="/signup" className="block text-gray-700 hover:text-pink-500 font-medium">Join</Link>
            <Link to="/support" className="block text-pink-600 font-semibold">Support</Link>
            <Link to="/about" className="block text-gray-700 hover:text-pink-500 font-medium">About</Link>
            <Link to="/profile" className="block text-gray-700 hover:text-pink-500 font-medium">My Profile</Link>
            <Link to="/settings" className="block text-gray-700 hover:text-pink-500 font-medium">Settings</Link>
            <Link to="/logout" className="block text-gray-700 hover:text-pink-500 font-medium">Logout</Link>
          </div>
        )}
      </header>

      {/* Support Section */}
      <section className="max-w-4xl mx-auto mt-28 bg-white p-6 sm:p-8 rounded-xl shadow-lg w-[90%]">
        <h1 className="text-3xl sm:text-4xl font-bold text-pink-600 mb-4">How can we help you? 💬</h1>
        <p className="text-base sm:text-lg mb-4 leading-relaxed">
          Whether you're facing technical difficulties, have a question about your account, or just need some guidance — we’re here for you.
          Serendate is a safe, supportive, and inclusive space, and your peace of mind matters deeply to us.
        </p>
        <p className="text-base sm:text-lg mb-4 leading-relaxed">
          Our team is dedicated to making your dating journey smooth and joyful.
          We promise to listen, respond kindly, and keep your trust at the heart of everything we do.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          You can always reach out to us — because no question is too small, and no concern is too big. 🌸
        </p>

        {/* Support Options */}
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-pink-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">📧 Email Support</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Reach us at <strong>support@serendate.com</strong> — we’ll respond as soon as possible.
            </p>
          </div>
          <div className="bg-pink-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">💬 Live Chat</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Use the in-app chat to talk to a friendly support guide or browse helpful topics (coming soon!).
            </p>
          </div>
          <div className="bg-pink-100 rounded-lg p-6 text-center shadow hover:shadow-md transition">
            <h3 className="text-lg sm:text-xl font-semibold text-pink-700 mb-2">🔐 Safety Center</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Learn how we protect you and how to stay safe while dating online. Visit our full Safety Center.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-gray-500 text-sm mt-auto border-t">
        © {new Date().getFullYear()} <strong>Serendate</strong>. Where stars align 💫 | We're here for you.
      </footer>
    </div>
  );
};

export default SupportPage;
