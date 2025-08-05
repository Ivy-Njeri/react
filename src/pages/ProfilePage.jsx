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
    gallery: [], // Array of image URLs
    relationship_type: "",
    height: "",
    education: "",
    occupation: "",
    smoking: "",
    drinking: "",
    exercise: "",
    religion: "",
    family_goals: "",
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
          profile_pic: profile.profile_pic,
          relationship_type: profile.relationship_type,
          height: profile.height,
          education: profile.education,
          occupation: profile.occupation,
          smoking: profile.smoking,
          drinking: profile.drinking,
          exercise: profile.exercise,
          religion: profile.religion,
          family_goals: profile.family_goals,
          gallery: profile.gallery,
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
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white/90 shadow-lg px-4 py-3 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 text-base">
            <a href="/" className="hover:text-rose-500 transition font-medium">Home</a>
            <a href="/about" className="hover:text-rose-500 transition font-medium">About</a>
            <a href="/support" className="hover:text-rose-500 transition font-medium">Support</a>
            <a href="/matches" className="hover:text-rose-500 transition font-medium">Matches</a>
            <a href="/testimonials" className="hover:text-rose-500 transition font-medium">Testimonials</a>
            <a href="/logout" className="hover:text-rose-500 transition font-medium">Logout</a>
          </div>
          <div className="flex items-center gap-2 ml-6">
            <span className="text-xl font-bold text-rose-600 tracking-wide font-serif drop-shadow">Serendate</span>
            <img src={require('../assets/loveconnect.png')} alt="Serendate Logo" className="w-9 h-9 rounded-full bg-white p-1 shadow" />
          </div>
        </div>
      </nav>
      {/* Profile Card */}
      <main className="flex-1 flex items-center justify-center py-8 px-2">
        <section className="w-full max-w-3xl bg-white/95 rounded-3xl shadow-2xl border border-rose-100 p-6 md:p-10 flex flex-col md:flex-row gap-10 md:gap-14 backdrop-blur-md">
          {/* Profile Image & Gallery */}
          <div className="flex flex-col items-center gap-6 md:w-1/3">
            <div className="relative group">
              <img
                src={profile.profile_pic || '/images/default-avatar.jpg'}
                alt="Profile"
                className="w-36 h-36 md:w-44 md:h-44 object-cover rounded-2xl shadow-lg ring-4 ring-rose-200 group-hover:ring-rose-400 transition-all duration-300 bg-gray-100"
                onError={e => { e.target.src = 'https://via.placeholder.com/200x200/f3f4f6/9ca3af?text=No+Image'; }}
              />
              {isEditing && (
                <button className="absolute bottom-2 right-2 bg-rose-500 text-white p-2 rounded-full hover:bg-rose-600 transition shadow-lg">
                  <Edit size={16} />
                </button>
              )}
            </div>
            {/* Gallery Thumbnails */}
            {profile.gallery && profile.gallery.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {profile.gallery.map((img, idx) => (
                  <img key={idx} src={img} alt="Gallery" className="w-14 h-14 object-cover rounded-lg border shadow" />
                ))}
              </div>
            )}
          </div>
          {/* Profile Info */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent font-serif tracking-tight">
                {profile.username ? `@${profile.username}` : 'No username'}
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
            {/* Bio & About */}
            <div className="space-y-2">
              <div className="flex flex-wrap gap-4 text-base text-gray-700">
                <span className="flex items-center"><Mail size={16} className="mr-2 text-rose-500" />{profile.email || 'No email'}</span>
                <span className="flex items-center"><Calendar size={16} className="mr-2 text-rose-500" />{profile.age || 'No age'}</span>
                <span className="flex items-center"><Users size={16} className="mr-2 text-rose-500" />{profile.gender || 'No gender'}</span>
                <span className="flex items-center"><MapPin size={16} className="mr-2 text-rose-500" />{profile.location || 'No location'}</span>
              </div>
              <div className="mt-2">
                <p className="font-semibold text-rose-600 mb-1">Bio:</p>
                <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-lg min-h-[56px]">
                  {profile.bio || 'No bio available yet. Click edit to add one!'}
                </p>
              </div>
            </div>
            {/* Interests Section */}
            <div>
              <h3 className="text-lg font-bold text-rose-500 mb-2 flex items-center"><Heart size={20} className="mr-2" />Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {getInterestsArray().length > 0 ? (
                  getInterestsArray().map((interest, index) => (
                    <span key={index} className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 px-4 py-2 rounded-full text-sm shadow-sm border border-rose-200 hover:shadow-md transition-all duration-200 transform hover:scale-105">
                      {interest}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 italic">No interests added yet</span>
                )}
              </div>
            </div>
            {/* Additional Info */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <span><span className="font-semibold text-rose-600">Looking for:</span> {profile.relationship_type || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Height:</span> {profile.height || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Education:</span> {profile.education || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Occupation:</span> {profile.occupation || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Smoking:</span> {profile.smoking || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Drinking:</span> {profile.drinking || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Exercise:</span> {profile.exercise || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Religion:</span> {profile.religion || 'Not specified'}</span>
              <span><span className="font-semibold text-rose-600">Family Goals:</span> {profile.family_goals || 'Not specified'}</span>
            </div>
            {/* Gallery Upload (edit mode) */}
            {isEditing && (
              <div className="mt-4">
                <label className="block font-semibold mb-2">Photo Gallery</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={async (e) => {
                    const files = Array.from(e.target.files);
                    const urls = await Promise.all(files.map(file => new Promise(res => {
                      const reader = new FileReader();
                      reader.onload = () => res(reader.result);
                      reader.readAsDataURL(file);
                    })));
                    setProfile({ ...profile, gallery: urls });
                  }}
                  className="block mt-2"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {profile.gallery && profile.gallery.length > 0 && profile.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt="Gallery" className="w-16 h-16 object-cover rounded-lg border" />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-10 text-center text-sm text-gray-500 py-8 bg-white/60">
        <div className="max-w-4xl mx-auto">
          © {new Date().getFullYear()} Serendate. Built with 💖 to bring hearts together.
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;