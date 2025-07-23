import React, { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert('Signup failed: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-pink-300 text-white px-4 text-center w-full">
      <h1 className="text-4xl font-bold mb-2">💕 Create Your LoveConnect Account</h1>
      <p className="text-lg mb-8">Start your journey to love</p>

      <form onSubmit={handleSignup} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-gray-800">
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-md bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 rounded-md bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <button
          type="submit"
          className="w-full bg-pink-400 text-white py-3 rounded-md font-semibold hover:bg-pink-500 transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <a href="/" className="text-pink-500 font-bold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignupPage;
