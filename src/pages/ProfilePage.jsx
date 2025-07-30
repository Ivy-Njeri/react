import React, { useState, useEffect } from "react";
import { Edit, Heart, Save, X, User, Mail, MapPin, Calendar, Users } from "lucide-react";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    age: "",
    gender: "",
    location: "",
    bio: "",
    hobby: "",
    profile_pic: "",
  });
  const [originalProfile, setOriginalProfile] = useState({});

  // Get user ID from localStorage, URL params, or context
  const getUserId = () => {
    // Try to get from localStorage first
    const userId = localStorage.getItem('userId');
    if (userId) return userId;
    
    // Try to get from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const urlUserId = urlParams.get('userId');
    if (urlUserId) return urlUserId;
    
    // Try to get from URL path (e.g., /profile/123)
    const pathParts = window.location.pathname.split('/');
    const pathUserId = pathParts[pathParts.length - 1];
    if (pathUserId && !isNaN(pathUserId)) return pathUserId;
    
    return null;
  };

  // Fetch user profile data
  useEffect(() => {
    const fetchProfile = async () => {
      const userId = getUserId();
      console.log("Fetching profile for user ID:", userId);
      
      if (!userId) {
        setError("User ID not found. Please log in again.");
        setLoading(false);
        return;
      }

      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:5000/api/auth/profile/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...(token && { "Authorization": `Bearer ${token}` })
          },
        });
        console.log("Response status:", response); // Log the response status

        if (response.ok) {
          const data = await response.json();
          console.log("data",data); // check what's returned
          setProfile(data.user);
          setOriginalProfile(data.user);
          setError(null);
        } else {
          const errorData = await response.json();
          setError(errorData.error || "Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Network error. Please check your connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Convert hobby string to interests array for display
  const getInterestsArray = () => {
    return profile.hobby ? profile.hobby.split(',').map(item => item.trim()).filter(item => item) : [];
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Reset to original values when canceling
      setProfile(originalProfile);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleInterestsChange = (e) => {
    // Convert comma-separated interests back to string for backend
    setProfile({ ...profile, hobby: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    const userId = getUserId();
    
    if (!userId) {
      alert("User ID not found. Please log in again.");
      setSaving(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:5000/api/auth/profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...(token && { "Authorization": `Bearer ${token}` })
        },
        body: JSON.stringify({
          username: profile.username,
          email: profile.email,
          age: profile.age ? parseInt(profile.age) : null,
          gender: profile.gender,
          location: profile.location,
          bio: profile.bio,
          hobby: profile.hobby,
          profile_pic: profile.profile_pic
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Profile updated successfully!");
        setProfile(data.user);
        setOriginalProfile(data.user);
        setIsEditing(false);
        setError(null);
      } else {
        alert(data.error || data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Network error. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setProfile(originalProfile);
    setIsEditing(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-2xl shadow-lg max-w-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Profile</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-rose-500 text-white px-6 py-2 rounded-lg hover:bg-rose-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-lg px-6 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-rose-600 tracking-wide">
            Serendate 💘
          </div>
          <div className="space-x-6 text-sm">
            <a href="/" className="text-gray-700 hover:text-rose-500 transition duration-200">Home</a>
            <a href="/matches" className="text-gray-700 hover:text-rose-500 transition duration-200">Matches</a>
            <a href="/testimonials" className="text-gray-700 hover:text-rose-500 transition duration-200">Testimonials</a>
            <a href="/logout" className="text-gray-700 hover:text-rose-500 transition duration-200">Logout</a>
          </div>
        </div>
      </nav>

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto mt-8 p-6">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-rose-100 hover:shadow-3xl transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Profile Image */}
            <div className="relative">
              <img
                src={profile.profile_pic || "/images/default-avatar.jpg"}
                alt="Profile"
                className="w-48 h-48 object-cover rounded-2xl shadow-lg ring-4 ring-rose-200 hover:ring-rose-300 transition-all duration-300"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/200x200/f3f4f6/9ca3af?text=No+Image";
                }}
              />
              {isEditing && (
                <button className="absolute bottom-2 right-2 bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition shadow-lg">
                  <Edit size={16} />
                </button>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex-1 w-full">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-4xl font-bold text-gray-800 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  {profile.username ? `@${profile.username}` : "No username"}
                </h2>
                
                {isEditing ? (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      disabled={saving}
                      className="flex items-center bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600 transition shadow-lg disabled:opacity-50"
                    >
                      <Save size={16} className="mr-2" />
                      {saving ? 'Saving...' : 'Save'}
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center bg-gray-500 text-white px-5 py-2 rounded-xl hover:bg-gray-600 transition shadow-lg"
                    >
                      <X size={16} className="mr-2" />
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleEditToggle}
                    className="flex items-center bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-rose-600 hover:to-pink-600 transition shadow-lg transform hover:scale-105"
                  >
                    <Edit size={16} className="mr-2" />
                    Edit Profile
                  </button>
                )}
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="username"
                        value={profile.username || ""}
                        onChange={handleChange}
                        placeholder="Username"
                        className="w-full pl-12 pr-4 py-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                      />
                    </div>
                    <div className="relative">
                      <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={profile.email || ""}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full pl-12 pr-4 py-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                      />
                    </div>
                    <div className="relative">
                      <Calendar size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="number"
                        name="age"
                        value={profile.age || ""}
                        onChange={handleChange}
                        placeholder="Age"
                        min="18"
                        max="100"
                        className="w-full pl-12 pr-4 py-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                      />
                    </div>
                    <div className="relative">
                      <Users size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <select
                        name="gender"
                        value={profile.gender || ""}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition appearance-none"
                      >
                        <option value="">Select Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Non-binary">Non-binary</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="relative">
                    <MapPin size={20} className="absolute left-3 top-4 text-gray-400" />
                    <input
                      type="text"
                      name="location"
                      value={profile.location || ""}
                      onChange={handleChange}
                      placeholder="Location"
                      className="w-full pl-12 pr-4 py-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                    />
                  </div>
                  <textarea
                    name="bio"
                    value={profile.bio || ""}
                    onChange={handleChange}
                    placeholder="Tell us about yourself..."
                    rows={3}
                    className="w-full p-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition resize-none"
                  />
                  <input
                    type="text"
                    name="hobby"
                    value={profile.hobby || ""}
                    onChange={handleInterestsChange}
                    placeholder="Hobbies (separate with commas)"
                    className="w-full p-4 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                  />
                </div>
              ) : (
                <div className="space-y-4 text-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <p className="flex items-center">
                      <Mail size={16} className="mr-2 text-rose-500" />
                      <span className="font-semibold text-rose-600 mr-2">Email:</span> 
                      {profile.email || "Not provided"}
                    </p>
                    <p className="flex items-center">
                      <Calendar size={16} className="mr-2 text-rose-500" />
                      <span className="font-semibold text-rose-600 mr-2">Age:</span> 
                      {profile.age || "Not provided"}
                    </p>
                    <p className="flex items-center">
                      <Users size={16} className="mr-2 text-rose-500" />
                      <span className="font-semibold text-rose-600 mr-2">Gender:</span> 
                      {profile.gender || "Not specified"}
                    </p>
                    <p className="flex items-center">
                      <MapPin size={16} className="mr-2 text-rose-500" />
                      <span className="font-semibold text-rose-600 mr-2">Location:</span> 
                      {profile.location || "Not provided"}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-rose-600 mb-2">Bio:</p>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg">
                      {profile.bio || "No bio available yet. Click edit to add one!"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Interests Section */}
          <div className="mt-8 pt-8 border-t border-rose-100">
            <h3 className="text-xl font-bold text-rose-500 mb-4 flex items-center">
              <Heart size={20} className="mr-2" />
              Interests & Hobbies
            </h3>
            <div className="flex flex-wrap gap-3">
              {getInterestsArray().length > 0 ? (
                getInterestsArray().map((interest, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm shadow-sm border border-rose-200 hover:shadow-md transition-all duration-200 transform hover:scale-105"
                  >
                    {interest}
                  </span>
                ))
              ) : (
                <div className="text-center w-full py-8">
                  <Heart size={40} className="mx-auto text-gray-300 mb-2" />
                  <span className="text-gray-400 italic">No interests added yet</span>
                  {!isEditing && (
                    <p className="text-sm text-gray-500 mt-2">Click "Edit Profile" to add your interests!</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 py-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          © {new Date().getFullYear()} Serendate. Built with 💖 to bring hearts together.
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;