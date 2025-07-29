import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      
      {/* Navbar */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-600 flex items-center space-x-2">
           {/* Logo */}
          <div className="text-2xl font-bold text-pink-600 flex items-center gap-2">
            <Heart className="text-red-500 animate-pulse" />
            Serendate
          </div>

        </div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-pink-500 font-medium">Home</Link>
          <Link to="/signup" className="text-gray-700 hover:text-pink-500 font-medium">Join</Link>
          <Link to="/support" className="text-gray-700 hover:text-pink-500 font-medium">Support</Link>
          <Link to="/about" className="text-pink-600 font-semibold">About</Link>
        </nav>
      </header>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">Welcome to Serendate 🌸</h1>
        <p className="text-lg mb-4 leading-relaxed">
          At Serendate, we believe love should be more than just a swipe.
          We're a modern dating platform built on warmth, safety, and genuine connection.
          Whether you're searching for a soulmate or meaningful friendships, Serendate is where hearts meet, and real stories begin.
        </p>
        <p className="text-lg mb-4 leading-relaxed">
          We were born out of a simple idea: that love isn't just found — it's felt.
          That's why we've created a space that feels romantic, respectful, and refreshing.
          With heartfelt profiles, elegant design, and safety-first features, Serendate is here to make online dating feel human again.
        </p>
        <p className="text-lg leading-relaxed">
          Our name says it all: <strong>Serendate = Serendipity + Date</strong> — a magical moment where your story begins. 💖
        </p>

        {/* Values Section */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="bg-pink-100 rounded-lg p-6 text-center shadow">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">💗 Real Connections</h3>
            <p className="text-gray-700">
              We focus on authentic profiles and thoughtful interactions that go beyond surface-level matches.
            </p>
          </div>
          <div className="bg-pink-100 rounded-lg p-6 text-center shadow">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🔒 Safety First</h3>
            <p className="text-gray-700">
              Your privacy and comfort matter. We use smart tools and a caring community to keep you safe while dating.
            </p>
          </div>
          <div className="bg-pink-100 rounded-lg p-6 text-center shadow">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🌍 Open to All</h3>
            <p className="text-gray-700">
              Serendate is inclusive, respectful, and open to every type of love. Everyone deserves to find their person.
            </p>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="bg-white text-center py-4 text-gray-500 text-sm mt-auto border-t">
        © {new Date().getFullYear()} Serendate. Where stars align 💫|Made with love💖.
      </footer>
    </div>
  );
};

export default AboutPage;
