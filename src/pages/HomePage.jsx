// src/pages/HomePage.jsx
import React from 'react';

function HomePage() {
  return (
    <div className="bg-pink-50 min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 bg-pink-100 shadow-md">
        <div className="text-2xl font-bold text-pink-700">💕 LoveConnect</div>
        <nav className="space-x-4 text-pink-600 font-medium">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-br from-pink-100 to-pink-200">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 leading-tight">
          Find Love That Lasts 💘
        </h1>
        <p className="mt-4 text-lg text-pink-600">Join thousands of singles finding real connections.</p>
        <a href="/signup" className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
          Get Started
        </a>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold text-pink-700 mb-4">Why Choose LoveConnect?</h2>
        <p className="text-pink-600 max-w-xl mx-auto">We focus on genuine, heartfelt connections. Whether you're looking for romance, friendship, or something long-term, our platform brings you closer to meaningful relationships.</p>
      </section>

      {/* Testimonials */}
      <section className="bg-pink-50 py-16 px-6">
        <h2 className="text-3xl text-center font-semibold text-pink-700 mb-10">Happy Couples 💑</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-pink-600">“We met in just 2 weeks and have been inseparable ever since!”</p>
            <p className="text-pink-800 font-bold mt-2">– Sarah & James</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-pink-600">“I never thought online love could be real—thank you LoveConnect!”</p>
            <p className="text-pink-800 font-bold mt-2">– Anna & Mike</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-pink-600">“From swipes to sunsets together. Forever grateful.”</p>
            <p className="text-pink-800 font-bold mt-2">– Lily & Jake</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 text-center text-pink-600 py-6">
        &copy; {new Date().getFullYear()} LoveConnect. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
