import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, UserCircle2, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const dropdownRef = useRef();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f8f9] via-[#f0ecf6] to-[#e6f0f6] font-sans flex flex-col text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-pink-600 flex items-center gap-2">
            <HeartHandshake className="w-7 h-7 animate-pulse text-rose-400" />
            Serendate
          </div>

          <ul className="hidden md:flex gap-6 text-gray-600 font-medium justify-end items-center">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/browse" className="hover:text-pink-500">Browse</Link></li>
            <li><Link to="/about" className="hover:text-pink-500">About</Link></li>
            <li><Link to="/support" className="hover:text-pink-500">Support</Link></li>
            {isLoggedIn ? (
              <li><Link to="/profile" className="hover:text-pink-500">Profile</Link></li>
              ) : null}
          </ul>

          {/* Profile Dropdown (only if logged in) */}
          {isLoggedIn && (
            <div className="relative hidden md:block ml-4" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-pink-600 focus:outline-none"
              >
                <UserCircle2 className="w-7 h-7" />
                <ChevronDown className="w-4 h-4" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-pink-50 text-sm text-gray-700"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('isLoggedIn');
                      setIsLoggedIn(false);
                      setDropdownOpen(false);
                      alert("You’ve been logged out!");
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-pink-50 text-sm text-gray-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-white px-4 pb-4 space-y-2 text-gray-700 font-medium shadow-md">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/browse" onClick={closeMenu}>Browse</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/support" onClick={closeMenu}>Support</Link></li>
            {isLoggedIn ? (
              <li><Link to="/profile" onClick={closeMenu}>My Profile</Link></li>
              ) : null}
            {isLoggedIn ? (
              <li><Link to="/settings" onClick={closeMenu}>Settings</Link></li>
              ) : null}
            {isLoggedIn ? (
              <li><button onClick={() => {
                localStorage.removeItem('isLoggedIn');
                setIsLoggedIn(false);
                alert("You’ve been logged out!");
              }}>Logout</button></li>
            ) : null}
          </ul>
        )}
      </header>

      {/* Hero Section */}
      <section
        className="flex-1 flex items-center justify-center text-center px-4"
        style={{
          backgroundColor: '#ffe4e6', // Light pink background
          paddingTop: '100px',
        }}
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-3xl shadow-lg max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-4"> Let the stars lead you to love ✨</h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
             Serendate isn’t just a dating app — it’s where true connections begin. Built with soul and starlight, Serendate helps you meet people meant for you.
          </p>
          <div className="flex justify-center gap-4">
            {!isLoggedIn && (
              <Link
                to="/signup"
                className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
              >
                Join Now
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-gray-500 text-sm mt-auto border-t">
        © {new Date().getFullYear()} Serendate — Where gentle hearts collide 💞
      </footer>
    </div>
  );
};

export default HomePage;
