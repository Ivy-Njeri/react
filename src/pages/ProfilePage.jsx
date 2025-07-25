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
    <div className="min-h-screen bg-pink-50 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-pink-600">LoveConnect 💖</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-700 hover:text-pink-600">Home</a>
          <a href="/testimonials" className="text-gray-700 hover:text-pink-600">Testimonials</a>
          <a href="/logout" className="text-gray-700 hover:text-pink-600">Logout</a>
        </div>
      </nav>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-2xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={profile.image}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full shadow-md"
          />
          <div className="flex-1">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-pink-600">
                {profile.name}
              </h2>
              <button
                onClick={handleEditToggle}
                className="flex items-center bg-pink-500 text-white px-4 py-2 rounded-xl hover:bg-pink-600"
              >
                <FaEdit className="mr-2" /> {isEditing ? "Cancel" : "Edit"}
              </button>
            </div>

            {isEditing ? (
              <div className="mt-4 space-y-2">
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-2 border border-pink-300 rounded"
                />
                <input
                  type="text"
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  placeholder="Bio"
                  className="w-full p-2 border border-pink-300 rounded"
                />
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full p-2 border border-pink-300 rounded"
                />
                <input
                  type="text"
                  name="username"
                  value={profile.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full p-2 border border-pink-300 rounded"
                />
              </div>
            ) : (
              <div className="mt-4 text-gray-700 space-y-1">
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
        <div className="mt-6">
          <h3 className="text-xl font-bold text-pink-500 mb-2 flex items-center">
            <FaHeart className="mr-2" /> Interests
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.interests.map((interest, index) => (
              <span
                key={index}
                className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-600 py-4">
        © {new Date().getFullYear()} LoveConnect. All rights reserved 💘
      </footer>
    </div>
  );
};

export default ProfilePage;
