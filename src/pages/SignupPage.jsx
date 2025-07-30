import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('age', age);
    formData.append('gender', gender);
    formData.append('location', location);
    formData.append('bio', bio);
    formData.append('hobby', hobby);
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
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        alert(data.message || 'Signup successful!');
        navigate('/browse');
      } else {
        alert(data.error || 'Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gradient-to-br from-rose-50 via-pink-100 to-rose-200">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 w-full max-w-md">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-rose-600 font-[Poppins] mb-1">
          Create Your Serendate Account 💖
        </h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Begin your journey to genuine, meaningful connections.
        </p>

        <form onSubmit={handleSignup} className="space-y-4 text-sm" encType="multipart/form-data">
          <Input label="Your Name" value={username} onChange={setUsername} placeholder="e.g. Taylor" required />
          <Input label="Email Address" type="email" value={email} onChange={setEmail} placeholder="e.g. taylor@email.com" required />
          <Input label="Password" type="password" value={password} onChange={setPassword} placeholder="Create a strong password" required />
          <Input label="Age" type="number" value={age} onChange={setAge} placeholder="e.g. 25" required />
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 border border-pink-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <Input label="Location" value={location} onChange={setLocation} placeholder="e.g. Nairobi" required />
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself"
              className="w-full px-4 py-2 border border-pink-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <Input label="Hobby" value={hobby} onChange={setHobby} placeholder="e.g. Reading, Hiking" required />
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="w-full"
            />
          </div>
          <div className="flex items-center text-gray-600">
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
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-rose-500 hover:underline font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

// Reusable input component
function Input({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-gray-700 mb-1 font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-2 border border-pink-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
    </div>
  );
}

export default SignupPage;