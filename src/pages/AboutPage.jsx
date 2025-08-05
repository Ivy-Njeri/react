import React, { useState, useEffect } from "react";
import {
  Heart,
  Shield,
  Users,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import logo from "../assets/loveconnect.png";

const AboutPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="w-full px-2 py-4 flex justify-between items-center">
    {/* Left Side - Logo and Brand */}
    <div className="flex items-center space-x-2 pl-2">
      <img src={logo} alt="Love Connect Logo" className="h-10 w-auto" />
      <span className="text-3xl font-extrabold text-pink-600">Serendate</span>
    </div>
    {/* Right Side - Navigation and Actions */}
    <div className="flex items-center space-x-6 pr-4">
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-pink-600 text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        )}
      </button>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-pink-600 transition" onClick={handleNavClick}>Home</Link>
        <Link to="/about" className="text-pink-600 font-semibold">About</Link>
        <Link to="/support" className="text-gray-700 hover:text-pink-600 transition" onClick={handleNavClick}>Support</Link>
        {!isLoggedIn && (
          <Link to="/login" onClick={handleNavClick}>
            <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition w-full md:w-auto text-base md:text-lg">Login</button>
          </Link>
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
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
                  onClick={handleNavClick}
                >
                  My Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
                  onClick={handleNavClick}
                >
                  Settings
                </Link>
                <span
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    setIsLoggedIn(false);
                    setShowDropdown(false);
                    setMenuOpen(false);
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
    {/* Mobile Nav */}
    {menuOpen && (
      <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl py-4 z-40 flex flex-col items-center animate-fade-in">
        <Link to="/" className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center" onClick={handleNavClick}>Home</Link>
        <Link to="/about" className="text-pink-600 font-semibold py-2 w-full text-center" onClick={handleNavClick}>About</Link>
        <Link to="/support" className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center" onClick={handleNavClick}>Support</Link>
        {!isLoggedIn && (
          <Link to="/login" className="w-full" onClick={handleNavClick}>
            <button className="w-full bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition my-2 text-base md:text-lg">Login</button>
          </Link>
        )}
        {isLoggedIn && (
          <div className="w-full flex flex-col items-center">
            <Link
              to="/profile"
              className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center"
              onClick={handleNavClick}
            >
              My Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center"
              onClick={handleNavClick}
            >
              Settings
            </Link>
            <span
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                setIsLoggedIn(false);
                setMenuOpen(false);
              }}
              className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 cursor-pointer w-full text-center"
            >
              Logout
            </span>
          </div>
        )}
      </nav>
    )}
  </div>
</nav>

      {/* About Page Content Only */}
      <div className="px-6 py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Love Connect Logo" className="w-20 h-20 rounded-3xl shadow-lg object-contain" style={{ background: 'none' }} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Where Stories Begin</h1>
          <h2 className="text-2xl md:text-3xl text-pink-600 font-medium mb-8">Welcome to Serendate</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Serendate is not just another dating app. It's a sanctuary for romantics, dreamers, believers — for anyone who still believes in connection with soul and substance.
          </p>
          {/* What is Serendate (Hero Section) */}
          <div className="bg-white/90 rounded-3xl shadow-xl p-8 mt-8 mx-auto max-w-2xl">
            <h3 className="text-3xl font-bold text-pink-600 mb-4">What is Serendate?</h3>
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold text-pink-500">Serendate</span> isn't your average dating app. It's a soulful digital garden where people don't just swipe — they connect, deeply and intentionally. In a world craving authenticity, Serendate offers something different: a space where
              <span className="font-semibold text-pink-500"> hearts speak first</span>, and profiles are just the beginning.<br /><br />
              We're here for the thoughtful, the gentle, the romantic. We're here for the night owls who want to talk at 2am and the poets who want to be seen. With features like our <span className="font-semibold text-pink-500">Moments feed</span>, we let you express yourself daily — not just through selfies, but through thoughts, art, music, and emotion.<br /><br />
              Love isn't rushed here. It's discovered in shared stories, kind comments, meaningful glances, and the spark of "I see you." If you're tired of the noise, welcome to the calm — welcome to Serendate.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-4xl font-bold text-gray-900">Our Story</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Built on the idea that love shouldn't feel like a game, Serendate is a safe, intentional space where real hearts meet. We believe that love isn't found in swipes — it's found in stories. In laughter. In vulnerable conversations at 2 a.m.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The name <strong className="text-pink-600">Serendate</strong> represents the beautiful synchronicity when two hearts find their rhythm together — that magical moment when everything just clicks. ✨
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                  alt="People connecting"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">📸 Discover Moments</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              More than selfies and bios, <strong className="text-pink-600">Moments</strong> are how you show your vibe. Share real thoughts, snapshots of your day, or little love notes. It's where strangers feel familiar, and conversations spark naturally.
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">What We Believe In</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6 bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">💖 Heartfelt Connections</h4>
              <p className="text-gray-600 leading-relaxed">Meet people who are here for the right reasons — not games, not hookups. Just real, open-hearted connection.</p>
            </div>
            <div className="text-center space-y-6 bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">🔒 A Safe Place</h4>
              <p className="text-gray-600 leading-relaxed">Our community is built on kindness, respect, and authenticity. We use verification, reporting, and moderation to keep Serendate safe for everyone.</p>
            </div>
            <div className="text-center space-y-6 bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">🌈 Inclusive Love</h4>
              <p className="text-gray-600 leading-relaxed">Love is diverse — and so are we. All identities, orientations, and stories are welcome here.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-20 bg-gradient-to-br from-pink-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <Sparkles className="w-16 h-16 text-pink-600 mx-auto" />
            <h3 className="text-4xl font-bold text-gray-900">Ready to Begin Your Story?</h3>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              You're not just joining an app — you're stepping into your next chapter. Let's write your story together.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white/70 text-center py-6 text-gray-600 text-sm border-t">
        © {new Date().getFullYear()} <strong>Serendate</strong> — Where hearts align 💫
      </footer>
    </div>
  );
};

export default AboutPage;