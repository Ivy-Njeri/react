import React, { useState } from "react";
import { FaEdit, FaHeart } from "react-icons/fa";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Taylor",
    username: "Taylor-love",
    age: 24,
    gender: "Female",
    location: "Nairobi, Kenya",
    bio: "Lover of art, animals, and meaningful conversations 💕",
    interests: ["Traveling", "Cooking", "Photography", "Hiking"],
    image: "/images/ss.jpg",
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-pink-100 via-pink-50 to-rose-100 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-rose-600 tracking-wide">
          Serendate 💘
        </div>
        <div className="space-x-6 text-sm">
          <a href="/" className="text-gray-700 hover:text-rose-500 transition">Home</a>
          <a href="/testimonials" className="text-gray-700 hover:text-rose-500 transition">Testimonials</a>
          <a href="/logout" className="text-gray-700 hover:text-rose-500 transition">Logout</a>
        </div>
      </nav>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-3xl shadow-2xl border border-rose-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={profile.image}
            alt="Profile"
            className="w-44 h-44 object-cover rounded-full shadow-md ring-4 ring-rose-200"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-semibold text-rose-600">{profile.name}</h2>
              <button
                onClick={handleEditToggle}
                className="flex items-center bg-rose-500 text-white px-5 py-2 rounded-xl hover:bg-rose-600 transition shadow-sm"
              >
                <FaEdit className="mr-2" /> {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>

            {isEditing ? (
              <div className="mt-5 space-y-3">
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-3 border border-rose-200 rounded-lg focus:outline-rose-400"
                />
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full p-3 border border-rose-200 rounded-lg"
                />
                <input
                  type="text"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  placeholder="Bio"
                  className="w-full p-3 border border-rose-200 rounded-lg"
                />
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full p-3 border border-rose-200 rounded-lg"
                />
              </div>
            ) : (
              <div className="mt-4 text-gray-700 space-y-2 text-sm">
                <p><span className="font-semibold">Username:</span> @{profile.username}</p>
                <p><span className="font-semibold">Age:</span> {profile.age}</p>
                <p><span className="font-semibold">Gender:</span> {profile.gender}</p>
                <p><span className="font-semibold">Location:</span> {profile.location}</p>
                <p><span className="font-semibold">Bio:</span> {profile.bio}</p>
              </div>
            )}
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-rose-500 mb-3 flex items-center">
            <FaHeart className="mr-2" /> Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm shadow-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 py-5">
        © {new Date().getFullYear()} Serendate. Built with 💖 to bring hearts together.
      </footer>
    </div>
  );
};

export default ProfilePage;
