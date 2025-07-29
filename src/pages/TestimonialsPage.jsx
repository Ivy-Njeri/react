import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TestimonialsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ Navbar */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-4 bg-white/80 shadow-md">
        <div className="text-2xl font-bold text-pink-600 flex items-center gap-2">
          <span>Serendate</span>
          <span className="text-red-500">❤️</span>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-pink-600">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/support">Support</Link></li>
        </ul>

        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-4 flex flex-col gap-4 md:hidden text-gray-700 font-medium">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/signup" onClick={() => setMenuOpen(false)}>Sign Up</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
            <li><Link to="/support" onClick={() => setMenuOpen(false)}>Support</Link></li>
          </ul>
        )}
      </nav>

      {/* ✅ Testimonials Content */}
      <section className="py-16 px-6 bg-pink-50 min-h-screen">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-8">💬 What Our Users Say</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic">
                “LoveConnect changed my life. I met my soulmate here. We just celebrated our 1st anniversary!”
              </p>
              <p className="mt-4 font-semibold text-pink-600">— Angela M.</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic">
                “I was skeptical, but the platform felt safe and fun. Now I'm happier than ever!”
              </p>
              <p className="mt-4 font-semibold text-pink-600">— Daniel K.</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic">
                “It's more than just a dating app. LoveConnect made it easy to find genuine connections.”
              </p>
              <p className="mt-4 font-semibold text-pink-600">— Grace N.</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic">
                “The design is clean, the people are real, and I feel totally secure using it every day.”
              </p>
              <p className="mt-4 font-semibold text-pink-600">— James W.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Footer */}
      <Footer />
    </>
  );
};

export default TestimonialsPage;
