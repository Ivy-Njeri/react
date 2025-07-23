import React from 'react';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      {/* ✅ Navbar at the top */}
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


      <header className="bg-white shadow-md py-6 px-8">
        <h1 className="text-4xl font-extrabold text-pink-600 text-center">
          💖 Welcome to LoveConnect
        </h1>
        <p className="text-center text-gray-600 text-lg mt-2">
          Where hearts meet, safely and sincerely.
        </p>
      </header>

      <main className="p-8 max-w-5xl mx-auto space-y-12">
        {/* Section 1: Trust & Safety */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">🔐 Your Safety, Our Priority</h2>
          <p className="text-lg leading-relaxed">
            At <strong>LoveConnect</strong>, your privacy and security are at the heart of everything we do.
            Our platform uses the latest security protocols to ensure your personal data is protected. Every profile is verified, and our friendly support team is always ready to help.
          </p>
        </section>

        {/* Section 2: Romantic and Fun */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">🎉 Romantic, Fun & Friendly</h2>
          <p className="text-lg leading-relaxed">
            Love doesn't have to be boring! We designed LoveConnect to be vibrant, fun, and full of personality.
            From romantic vibes to interactive features, every click brings you closer to the love you deserve.
          </p>
        </section>

        {/* Section 3: Why We're Different */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">🌟 Why Choose LoveConnect?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>💌 Verified profiles — real people, real connections</li>
            <li>💖 Romantic design and user-friendly interface</li>
            <li>⚡ Instant messaging with fun reactions & emojis</li>
            <li>🌍 Inclusive — open to everyone, everywhere</li>
            <li>📱 Accessible anytime, from any device</li>
            <li>🔒 Secure, private and trustworthy</li>
          </ul>
        </section>

        {/* Section 4: How It Works */}
        <section>
          <h2 className="text-2xl font-semibold text-pink-500 mb-4">💡 How LoveConnect Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">1. Create Your Profile 💁‍♀️</h3>
              <p className="text-gray-700">
                Sign up and tell us about yourself. Add a photo, write a short bio, and what you're looking for.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">2. Browse & Match ❤️</h3>
              <p className="text-gray-700">
                Discover people who match your vibe. Swipe, like, or message — your choice!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">3. Chat & Connect ✨</h3>
              <p className="text-gray-700">
                Start meaningful conversations and build real connections at your own pace.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-pink-500 mb-2">✨ Ready to Start Your Love Story?</h2>
          <p className="text-lg mb-4">
            Join thousands of others who’ve found love, friendship, and connection on LoveConnect.
          </p>
          <a
            href="/signup"
            className="bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600 transition-all"
          >
            Join Now 💖
          </a>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
