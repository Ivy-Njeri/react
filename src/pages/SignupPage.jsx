import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [hobby, setHobby] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('username', username);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('location', location);
    formData.append('bio', bio);
    formData.append('hobby', hobby);
    formData.append('email', email);
    formData.append('password', password);
    if (profilePic) {
      formData.append('profilePic', profilePic);
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message || 'Signup successful');
        navigate('/browse');
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200 p-6">
      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-md transition duration-300 hover:shadow-rose-200">
        <h2 className="text-4xl font-bold text-center text-rose-600 mb-2 font-[Poppins]">
          Create Your Serendate Account 💖
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Begin your journey to genuine, meaningful connections.
        </p>

        <form onSubmit={handleSignup} className="space-y-5 text-sm" encType="multipart/form-data">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Your Name</label>
            <input
              type="text"
              placeholder="e.g. Taylor"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email Address</label>
            <input
              type="email"
              placeholder="e.g. taylor@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Age</label>
            <input
              type="number"
              placeholder="e.g. 25"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Location</label>
            <input
              type="text"
              placeholder="e.g. Nairobi"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Bio</label>
            <textarea
              placeholder="Tell us about yourself"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Hobby</label>
            <input
              type="text"
              placeholder="e.g. Reading, Hiking"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 font-medium">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="w-full"
            />
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              className="mr-2 accent-pink-500"
            />
            <span>Remember me on this device</span>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-pink-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-rose-500 hover:underline font-medium">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
