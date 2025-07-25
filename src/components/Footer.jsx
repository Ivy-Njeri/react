// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-700 py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} LoveConnect. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Your privacy is our priority. ❤️ Your data is safe with us.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
