import React, { useState } from 'react';
import { Heart, X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const mockProfiles = [
  {
    id: 1,
    name: 'Taylor',
    age: 26,
    bio: 'Lover of books, sunsets & good coffee.',
    photo: '/images/Taylor.jpg',
  },
  {
    id: 2,
    name: 'Jordan',
    age: 29,
    bio: 'Music junkie and adventure seeker.',
    photo: '/images/jordan.jpg',
  },
  {
    id: 3,
    name: 'Alex',
    age: 24,
    bio: 'Cat parent | Coder | Traveler.',
    photo: '/images/alex.jpg',
  },
];

const BrowsePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [likedProfiles, setLikedProfiles] = useState([]);

  const handleLike = (id) => {
    if (!likedProfiles.includes(id)) {
      setLikedProfiles([...likedProfiles, id]);
    }
  };

  const handleDislike = (id) => {
    setLikedProfiles(likedProfiles.filter(profileId => profileId !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="text-3xl font-extrabold text-rose-500 tracking-wide">
          💖 Serendate
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
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
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 md:hidden z-40">
            <Link to="/" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/browse" className="text-rose-500" onClick={() => setMenuOpen(false)}>Browse</Link>
            <Link to="/matches" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Matches</Link>
            <Link to="/profile" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Profile</Link>
            <Link to="/logout" className="hover:text-rose-500" onClick={() => setMenuOpen(false)}>Logout</Link>
          </div>
        )}
      </nav>

      {/* Profiles Grid */}
      <section className="px-6 py-10">
        <h1 className="text-3xl font-bold text-center text-rose-600 mb-8">Find Your Perfect Match 💕</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mockProfiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-3xl shadow-lg overflow-hidden relative group hover:scale-105 transition">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">{profile.name}, {profile.age}</h2>
                <p className="text-sm text-gray-600 mt-1">{profile.bio}</p>
              </div>
              <div className="flex justify-around p-4 border-t">
                <button
                  onClick={() => handleDislike(profile.id)}
                  className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-gray-600 transition"
                  aria-label="Dislike"
                >
                  <X size={22} />
                </button>
                <button
                  onClick={() => handleLike(profile.id)}
                  className="bg-rose-500 hover:bg-rose-600 p-3 rounded-full text-white transition"
                  aria-label="Like"
                >
                  <Heart size={22} />
                </button>
              </div>
              {likedProfiles.includes(profile.id) && (
                <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center rounded-3xl z-10">
                  <p className="text-lg font-semibold text-rose-500">You liked {profile.name}! 💖</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BrowsePage;
