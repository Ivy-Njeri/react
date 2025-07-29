import React from 'react';
import { Link } from 'react-router-dom';

const AuthLanding = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300">
      <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-10 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-6">Welcome to Serendate 💖</h1>
        <div className="flex flex-col gap-4">
          <Link to="/login" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-xl text-center transition duration-300">
            Log In
          </Link>
          <Link to="/signup" className="w-full bg-white border border-pink-500 text-pink-500 font-semibold py-3 px-4 rounded-xl text-center transition duration-300">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthLanding;
