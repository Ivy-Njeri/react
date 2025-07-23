import React from 'react';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-400 to-pink-300 text-white px-4 text-center w-full">
      <h1 className="text-4xl font-bold mb-2">💕 Welcome to LoveConnect</h1>
      <p className="text-lg mb-8">Find your perfect match today</p>

      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm text-gray-800">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-3 mb-4 rounded-md bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 mb-4 rounded-md bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        <div className="flex justify-between items-center text-sm mb-4 flex-wrap gap-2">
          <label className="flex items-center gap-1">
            <input type="checkbox" className="accent-pink-500" />
            Remember Me
          </label>
          <a href="/" className="text-pink-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-400 text-white py-3 rounded-md font-semibold hover:bg-pink-500 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account?{' '}
          <a href="/" className="text-pink-500 font-bold hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
