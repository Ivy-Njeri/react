import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert(data.message);
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Welcome Back 💘
        </h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-pink-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white"
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-700">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="form-checkbox accent-pink-500"
              />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="text-pink-500 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-700 mt-5">
          Don’t have an account?{' '}
          <a href="/signup" className="text-pink-500 hover:underline font-medium">
            Create one 💗
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
