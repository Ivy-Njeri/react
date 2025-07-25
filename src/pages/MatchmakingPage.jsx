import React, { useState } from 'react';
import { Heart, X, Sparkles, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockProfiles = [
  {
    id: 1,
    name: 'Taylor',
    age: 26,
    bio: 'Lover of books, sunsets & good coffee.',
    photo: '/images/user1.jpg',
  },
  {
    id: 2,
    name: 'Jordan',
    age: 29,
    bio: 'Music junkie and adventure seeker.',
    photo: '/images/user2.jpg',
  },
  {
    id: 3,
    name: 'Alex',
    age: 24,
    bio: 'Cat parent | Coder | Traveler.',
    photo: '/images/user3.jpg',
  },
];

const MatchmakingPage = () => {
  const [index, setIndex] = useState(0);
  const [matched, setMatched] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLike = () => {
    setMatched(true);
    setTimeout(() => {
      setMatched(false);
      setIndex((prev) => (prev + 1) % mockProfiles.length);
    }, 1500);
  };

  const handleDislike = () => {
    setIndex((prev) => (prev + 1) % mockProfiles.length);
  };

  const current = mockProfiles[index];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 via-pink-100 to-purple-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="text-2xl font-bold text-rose-500">
          💖 LoveConnect
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-rose-500">Home</Link>
          <Link to="/browse" className="text-rose-500">Browse</Link>
          <Link to="/matches" className="hover:text-rose-500">Matches</Link>
          <Link to="/profile" className="hover:text-rose-500">Profile</Link>
          <Link to="/logout" className="hover:text-rose-500">Logout</Link>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-700"
        >
          <Menu size={24} />
        </button>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md flex flex-col items-center py-4 space-y-3 md:hidden z-40">
            <Link to="/" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/browse" className="text-rose-500" onClick={() => setMenuOpen(false)}>Browse</Link>
            <Link to="/matches" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Matches</Link>
            <Link to="/profile" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Profile</Link>
            <Link to="/logout" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Logout</Link>
          </div>
        )}
      </nav>

      {/* Matchmaking card */}
      <div className="flex items-center justify-center p-6">
        <div className="max-w-sm w-full bg-white rounded-3xl shadow-xl overflow-hidden relative transition-all">
          {matched && (
            <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10 rounded-3xl">
              <div className="text-center">
                <Sparkles className="text-pink-500 animate-bounce mb-2" size={48} />
                <h3 className="text-xl font-bold text-rose-500">It's a Match! 💘</h3>
                <p className="text-sm text-gray-600 mt-1">You and {current.name} like each other</p>
              </div>
            </div>
          )}

          <img
            src={current.photo}
            alt={current.name}
            className="w-full h-72 object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold text-gray-800">{current.name}, {current.age}</h2>
            <p className="text-sm text-gray-600 mt-1">{current.bio}</p>
          </div>
          <div className="flex justify-around p-4 border-t">
            <button
              onClick={handleDislike}
              className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-gray-600 transition"
              aria-label="Dislike"
            >
              <X size={24} />
            </button>
            <button
              onClick={handleLike}
              className="bg-rose-500 hover:bg-rose-600 p-3 rounded-full text-white transition"
              aria-label="Like"
            >
              <Heart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchmakingPage;
