import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-pink-600">LoveConnect 💖</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
          <li><Link to="/about" className="text-pink-600 font-semibold">About</Link></li>
          <li><Link to="/support" className="hover:text-pink-600">Support</Link></li>
          <li><Link to="/login" className="hover:text-pink-600">Login</Link></li>
          <li><Link to="/signup" className="hover:text-pink-600">Sign Up</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-pink-600 text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden px-6 py-4">
            <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
              <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            </ul>
          </div>
        )}
      </nav>

      {/* ✅ About Content */}
      <section className="pt-32 pb-20 px-6 bg-pink-50 min-h-screen text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-pink-600 mb-6">About LoveConnect 💖</h1>
          <p className="text-lg leading-relaxed mb-8">
            <strong>LoveConnect</strong> is a romantic and inclusive dating platform designed to make your online love journey safe, exciting, and meaningful. Whether you're looking for a partner, a friend, or true love, we’ve got you covered.
          </p>

          {/* Section 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">💘 What is LoveConnect?</h2>
            <p className="text-md leading-relaxed">
              LoveConnect is a space for real people looking for real love. With thoughtful matchmaking and respectful interaction, we make online dating feel like destiny.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">🌟 Why Choose Us?</h2>
            <ul className="text-md text-left list-disc pl-6 space-y-2">
              <li>🔒 <strong>Privacy First:</strong> We protect your data with industry-leading security.</li>
              <li>❤️ <strong>Authentic Users:</strong> Verified profiles and zero tolerance for fakes.</li>
              <li>🌍 <strong>Diverse Community:</strong> Inclusive, respectful, and welcoming to all.</li>
              <li>📱 <strong>Easy Access:</strong> Works perfectly on any device — desktop or mobile.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-pink-500 mb-4">🔐 Your Info is Safe with Us</h2>
            <p className="text-md leading-relaxed">
              We never share your personal details. Every message is encrypted, and your profile is only visible to the people you choose. At LoveConnect, your heart and your data are both protected.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default About;
