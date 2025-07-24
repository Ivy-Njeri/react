import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-extrabold text-pink-700 mb-6">
          About LoveConnect 💖
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          LoveConnect is more than just a dating site—it's a journey toward meaningful connections. We believe love comes in many forms, and everyone deserves a safe, welcoming, and romantic space to find it.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Whether you're straight, LGBTQIA+, or still figuring things out, LoveConnect is built for you. Our platform is inclusive, respectful, and free from judgment. Here, you can meet like-minded people who are serious about love, laughter, and companionship.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We’re committed to creating a fun, safe, and modern environment where real stories begin. With advanced matching, interactive features, and community moderation, we help you connect with people who understand and appreciate you for who you are.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Let’s rewrite the love story—your story—with compassion, authenticity, and a little bit of magic ✨.
        </p>

        <a
          href="/signup"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
        >
          Join LoveConnect Now 💌
        </a>
      </div>
    </div>
  );
};

export default About;
