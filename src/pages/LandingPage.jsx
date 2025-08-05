import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Play, Users, Target, CheckCircle } from "lucide-react";
import {
FaHeart,
FaUserFriends,
FaComments,
FaUserCircle,
FaChevronDown,
FaBars,
FaTimes,
} from "react-icons/fa";
import logo from "../assets/loveconnect.png";

const LandingPage = () => {
const [activeCard, setActiveCard] = useState(0);
const [showDropdown, setShowDropdown] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(
() => localStorage.getItem("isLoggedIn") === "true"
);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
const handleStorage = () => {
setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
};
window.addEventListener("storage", handleStorage);
return () => window.removeEventListener("storage", handleStorage);
}, []);

const handleNavClick = () => {
setMenuOpen(false);
setShowDropdown(false);
};

const profiles = [
{
name: "Taylor",
age: 23,
match: "88% match",
image: "/images/Taylor.jpg",
interests: ["Music", "Reading", "Travel"],
bio: "Adventurer at heart | Dog mom | Big on sunsets | Let's share stories & find joy in the little things.",
verified: true,
},
{
name: "Alex",
age: 29,
match: "96% match",
image: "/images/alex.jpg",
interests: ["Reading", "Travel"],
bio: "Swimmer | Music lover | Coffee enthusiast | Love to share my moments",
verified: true,
},
{
name: "Jordan",
age: 27,
match: "90% match",
image: "/images/jordan.jpg",
interests: ["Travel"],
bio: "Bringing light to the world | Looking for connection",
verified: false,
},
];

return (
<div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
{/* Navigation */}
<header className="bg-white shadow-md sticky top-0 z-50">
<div className="w-full px-2 py-4 flex justify-between items-center">
{/* Left Side - Logo and Brand */}
<div className="flex items-center space-x-2 pl-2">
<img src={logo} alt="loveconnect.png" className="h-10 w-auto" />
<motion.h1
className="text-3xl font-extrabold text-pink-600"
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 1 }}
>
Serendate
</motion.h1>
</div>

{/* Right Side - Navigation and Actions */}
<div className="flex items-center space-x-6 pr-4">
{/* Mobile Menu Button */}
<button
className="md:hidden text-pink-600 text-3xl focus:outline-none"
onClick={() => setMenuOpen(!menuOpen)}
aria-label={menuOpen ? "Close menu" : "Open menu"}
>
{menuOpen ? <FaTimes /> : <FaBars />}
</button>

{/* Desktop Navigation */}
<nav className="hidden md:flex items-center space-x-6">
<Link
to="/"
className="text-gray-700 hover:text-pink-600 transition"
onClick={handleNavClick}
>
Home
</Link>
<Link
to="/about"
className="text-gray-700 hover:text-pink-600 transition"
onClick={handleNavClick}
>
About
</Link>
<Link
to="/support"
className="text-gray-700 hover:text-pink-600 transition"
onClick={handleNavClick}
>
Support
</Link>
{!isLoggedIn && (
<>
<Link to="/login" onClick={handleNavClick}>
<button className="bg-pink-500 text-white px-5 py-2 rounded-full
hover:bg-pink-600 transition w-full md:w-auto text-base md:text-lg">
Login
</button>
</Link>
<Link to="/signup" onClick={handleNavClick}>
<button className="bg-pink-500 text-white px-5 py-2 rounded-full
hover:bg-pink-600 transition w-full md:w-auto text-base md:text-lg">
Join Now
</button>
</Link>
</>
)}
{isLoggedIn && (
<div className="relative">
<button
className="flex items-center text-gray-700 hover:text-pink-600 transition"
onClick={() => setShowDropdown(!showDropdown)}
>
<FaUserCircle className="text-2xl mr-1" />
<FaChevronDown className="text-sm" />
</button>
{showDropdown && (
<div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg
border z-50">
<Link
to="/profile"
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
onClick={handleNavClick}
>
My Profile
</Link>
<Link
to="/chats"
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
onClick={handleNavClick}
>
Chats
</Link>
<Link
to="/settings"
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700"
onClick={handleNavClick}
>
Settings
</Link>
<span
onClick={() => {
localStorage.removeItem("isLoggedIn");
setIsLoggedIn(false);
setShowDropdown(false);
setMenuOpen(false);
}}
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700
cursor-pointer"
>
Logout
</span>
</div>
)}
</div>
)}
</nav>
</div>

{menuOpen && (
<nav className="md:hidden absolute top-full left-0 w-full bg-white
shadow-lg rounded-b-xl py-4 z-40 flex flex-col items-center
animate-fade-in">
<Link
to="/"
className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center"
onClick={handleNavClick}
>
Home
</Link>
<Link
to="/about"
className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center"
onClick={handleNavClick}
>
About
</Link>
<Link
to="/support"
className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center"
onClick={handleNavClick}
>
Support
</Link>
{!isLoggedIn && (
<>
<Link to="/login" className="w-full" onClick={handleNavClick}>
<button className="w-full bg-pink-500 text-white px-5 py-2
rounded-full hover:bg-pink-600 transition my-2 text-base md:text-lg">
Login
</button>
</Link>
<Link
to="/signup"
className="w-full"
onClick={handleNavClick}
>
<button className="w-full bg-pink-500 text-white px-5 py-2
rounded-full hover:bg-pink-600 transition my-2 text-base md:text-lg">
Join Now
</button>
</Link>
</>
)}
{isLoggedIn && (
<div className="w-full flex flex-col items-center">
<Link
to="/profile"
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700
w-full text-center"
onClick={handleNavClick}
>
My Profile
</Link>
<Link
to="/chats"
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700
w-full text-center"
onClick={handleNavClick}
>
Chats
</Link>
<Link
to="/settings"
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700
w-full text-center"
onClick={handleNavClick}
>
Settings
</Link>
<span
onClick={() => {
localStorage.removeItem("isLoggedIn");
setIsLoggedIn(false);
setMenuOpen(false);
}}
className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 cursor-pointer w-full text-center"
>
Logout
</span>
</div>
)}
</nav>
)}
</div>
</header>

{/* Hero Section */}
<div className="px-6 py-16">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
{/* Left Content */}
<div className="space-y-8">
{/* Testimonial */}
<div className="flex items-center space-x-3 text-sm text-gray-600">
<img
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
alt="Casey T"
className="w-8 h-8 rounded-full"
/>
<span>
"Met my partner in under a week - it just knew." — Casey T,
Age 36
</span>
</div>

{/* Main Heading */}
<div className="space-y-4">
<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
Healing era unlocked. We don’t do toxic here.
</h1>
<h2 className="text-5xl lg:text-4xl font-bold bg-gradient-to-r
from-pink-600 to-purple-600 bg-clip-text text-transparent">
You're too hot to be healing from the same person twice. Let's find someone who won’t waste your time.
</h2>
</div>

{/* Description */}
<p className="text-lg text-gray-600 leading-relaxed max-w-lg">
💖 <strong>PSA to the beautiful disaster reading this:</strong>

You are stunning, soft, spicy, and a little emotionally unavailable — but we love that for you.
And guess what? Someone’s out there looking for exactly that. Let’s go find them.


</p>

{/* CTA Buttons */}
<div className="flex items-center space-x-4 flex-wrap mt-4">
<button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all flex items-center space-x-2 text-base md:text-lg w-full sm:w-auto mb-2 sm:mb-0">
<Heart className="w-5 h-5" />
<span>Try again, but healthier</span>
</button>
<button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 w-full sm:w-auto bg-gray-100 rounded-full px-6 py-2 text-base md:text-lg mb-2 sm:mb-0">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
<Play className="w-4 h-4 ml-0.5" />
</div>
<span>See how it works</span>
</button>
</div>
</div>

{/* Right Content - Profile Cards */}
<div className="relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
{profiles.map((profile, index) => (
<div
key={index}
className="w-full transition-all duration-500 hover:scale-105"
>
<div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
{/* Match Badge */}
<div className="absolute top-4 right-4 z-10">
<div className="bg-gradient-to-r from-yellow-400 to-orange-500
text-white px-3 py-1 rounded-full text-sm font-medium flex
items-center space-x-1">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span>{profile.match}</span>
</div>
</div>

{/* Profile Image */}
<div className="relative h-64">
<img
src={profile.image}
alt={profile.name}
className="w-full h-full object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20
to-transparent"></div>
</div>

{/* Profile Info */}
<div className="p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<h3 className="text-lg font-bold text-gray-900">
{profile.name}, {profile.age}
</h3>
{profile.verified && (
<CheckCircle className="w-4 h-4 text-blue-500" />
)}
</div>
</div>

{/* Interests */}
<div className="flex flex-wrap gap-1">
{profile.interests.map((interest, idx) => (
<span
key={idx}
className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
>
{interest}
</span>
))}
</div>

{/* Bio */}
<p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
{profile.bio}
</p>

{/* Action Buttons */}
<div className="flex space-x-2 pt-2">
<button className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-full
hover:bg-gray-200 transition-colors flex items-center justify-center
space-x-1 text-xs">
<span>✕</span>
<span>Pass</span>
</button>
<button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600
text-white py-2 rounded-full hover:from-pink-600 hover:to-purple-700
transition-all flex items-center justify-center space-x-1 text-xs">
<Heart className="w-3 h-3" />
<span>Like</span>
</button>
</div>
</div>
</div>
</div>
))}
</div>
</div>
</div>
</div>
</div>

{/* Stats Section */}
<div className="px-6 py-16 bg-white/50">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-3 gap-12">
{/* Daily Matches */}
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-gradient-to-br from-pink-500
to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
<Heart className="w-8 h-8 text-white" />
</div>
<div>
<div className="text-3xl font-bold text-gray-900">
15k+ daily
</div>
<div className="text-lg font-medium text-gray-600">matches</div>
</div>
<p className="text-gray-600 leading-relaxed">
Every day, 15,000+ meaningful connections are made through
HeartSync's smart, AI-powered matchmaking engine.
</p>
</div>

{/* Million Users */}
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-gradient-to-br from-pink-500
to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
<Users className="w-8 h-8 text-white" />
</div>
<div>
<div className="text-3xl font-bold text-gray-900">
3 million
</div>
<div className="text-lg font-medium text-gray-600">users</div>
</div>
<p className="text-gray-600 leading-relaxed">
Join a growing community of 3,000,000+ singles using smarter
tech to meet real people — not just profiles.
</p>
</div>

{/* Match Accuracy */}
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-gradient-to-br from-pink-500
to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
<Target className="w-8 h-8 text-white" />
</div>
<div>
<div className="text-3xl font-bold text-gray-900">
91% match
</div>
<div className="text-lg font-medium text-gray-600">
accuracy
</div>
</div>
<p className="text-gray-600 leading-relaxed">
Our proprietary algorithm delivers matches that align with your
values — with a 91% satisfaction rate from users.
</p>
</div>
</div>
</div>
</div>

{/* Why Choose Us */}
<section className="py-16 px-4 md:px-20 bg-white">
<h3 className="text-3xl font-bold text-center text-pink-600 mb-10">
Why Choose Serendate?
</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10
text-center">
<div>
<FaHeart className="text-pink-500 text-5xl mx-auto mb-4" />
<h4 className="font-bold text-xl mb-2">Genuine Connections</h4>
<p>
Meet people who share your values and vibe with you authentically.
</p>
</div>
<div>
<FaUserFriends className="text-pink-500 text-5xl mx-auto mb-4" />
<h4 className="font-bold text-xl mb-2">Inclusive & Safe</h4>
<p>Everyone is welcome. Gender-neutral. No judgment. Just love.</p>
</div>
<div>
<FaComments className="text-pink-500 text-5xl mx-auto mb-4" />
<h4 className="font-bold text-xl mb-2">Moments Feature</h4>
<p>Share photos, thoughts, and feelings through daily Moments.</p>
</div>
</div>
</section>

{/* How It Works */}
<section className="py-16 bg-pink-50 text-center px-4 md:px-24">
<h3 className="text-3xl font-bold text-pink-600 mb-8">How It Works</h3>
<p className="mb-6 text-gray-700 text-base sm:text-lg">
Create your profile, explore matches, chat, share moments, and
discover love—naturally.
</p>
<div className="flex justify-center">
<video
width="100%"
className="rounded-lg shadow-lg max-w-md sm:max-w-xl"
controls
>
<source src="/assets/how-it-works.mp4" type="video/mp4" />
Your browser does not support the video tag.
</video>
</div>
</section>

{/* Footer */}
<footer className="bg-white border-t text-center p-6 mt-10 text-sm
text-gray-500">
© {new Date().getFullYear()} Serendate — Where Stars Align ✨
</footer>
</div>
);
};

export default LandingPage;

