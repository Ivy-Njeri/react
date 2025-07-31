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
        <nav className="hidden md:flex space-x-4 text-sm md:text-base font-medium">
          <Link to="/" className="text-gray-700 hover:text-pink-500">Home</Link>
          <Link to="/signup" className="text-gray-700 hover:text-pink-500">Join</Link>
          <Link to="/moments" className="text-gray-700 hover:text-pink-500">Moments</Link>
          <Link to="/support" className="text-gray-700 hover:text-pink-500">Support</Link>
          <Link to="/about" className="text-pink-600 font-semibold underline underline-offset-4">About</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-600 focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <Link to="/moments" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Moments</Link>
          <Link to="/support" onClick={closeMenu} className="block text-gray-700 hover:text-pink-500">Support</Link>
          <Link to="/about" onClick={closeMenu} className="block text-pink-600 font-semibold underline underline-offset-4">About</Link>
        </div>
      )}

      {/* Main About Section */}
      <main className="max-w-4xl mx-auto px-6 py-12 bg-white/90 rounded-xl shadow-xl mt-10 mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-pink-600 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Where Stories Begin — Welcome to Serendate 🌸
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-6 leading-relaxed text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Serendate is not just another dating app. It's a *sanctuary* for romantics, dreamers, believers — for anyone who still believes in connection with soul and substance. Built on the idea that love shouldn’t feel like a game, Serendate is a safe, intentional space where *real hearts meet*.
        </motion.p>

        <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
          We believe that love isn't found in swipes — it's found in stories. In laughter. In vulnerable conversations at 2 a.m. In shared playlists, whispered dreams, and inside jokes. Every detail of Serendate is crafted to help you find more than a match — to help you find *meaning*.
        </motion.p>

        <motion.p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
          The name <strong>Serendate</strong> comes from <em>“Serendipity”</em> — the beautiful chance of finding something unexpectedly wonderful — and <em>“Date”</em>. Because the best love stories begin with a little magic and a meaningful moment.✨
        </motion.p>

        {/* Moments */}
        <div className="bg-pink-50 border border-pink-200 p-6 rounded-xl mb-10 shadow-md">
          <h3 className="text-2xl font-bold text-pink-700 mb-2 text-center">📸 Discover Moments</h3>
          <p className="text-gray-700 text-base text-center">
            More than selfies and bios, <strong>Moments</strong> are how you show your vibe. Share real thoughts, snapshots of your day, or little love notes. It’s where strangers feel familiar, and conversations spark naturally.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-pink-100/70 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">💖 Heartfelt Connections</h3>
            <p className="text-gray-700 text-sm">
              Meet people who are here for the right reasons — not games, not hookups. Just real, open-hearted connection.
            </p>
          </div>
          <div className="bg-pink-100/70 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🔒 A Safe Place</h3>
            <p className="text-gray-700 text-sm">
              Our community is built on kindness, respect, and authenticity. We use verification, reporting, and moderation to keep Serendate safe for everyone.
            </p>
          </div>
          <div className="bg-pink-100/70 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-pink-700 mb-2">🌈 Inclusive Love</h3>
            <p className="text-gray-700 text-sm">
              Love is diverse — and so are we. All identities, orientations, and stories are welcome here.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <p className="text-center text-pink-700 text-lg font-medium mt-10 italic">
          You're not just joining an app — you're stepping into your next chapter. Let’s write your story. 💫
        </p>
      </main>

      <footer className="bg-white/70 text-center py-4 text-gray-600 text-sm border-t mt-auto">
        © {new Date().getFullYear()} <strong>Serendate</strong> — Where stars align 💫
      </footer>
    </div>
  );
};

export default AboutPage;
