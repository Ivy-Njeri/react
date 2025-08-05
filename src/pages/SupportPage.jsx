import { useState } from 'react';
import { Link } from "react-router-dom";
import { FaUserCircle, FaChevronDown } from "react-icons/fa";
import logo from "../assets/loveconnect.png";

const SupportCard = ({ icon, title, description, items }) => {
  return (
    <div className="bg-white/80 p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-pink-200">
      <h3 className="flex items-center gap-3 text-xl text-pink-700 mb-4">
        <span className="text-3xl">{icon}</span>
        {title}
      </h3>
      <p className="text-pink-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index}
            className={`text-pink-700 py-2 hover:text-pink-900 hover:pl-3 transition-all duration-300 cursor-pointer ${
              index < items.length - 1 ? 'border-b border-pink-100' : ''
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContactButton = ({ icon, title, subtitle, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-full text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-3"
    >
      {icon} {title}
      <small className="text-xs opacity-80">({subtitle})</small>
    </button>
  );
};

export default function SerendateSupport() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("isLoggedIn") === "true");
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  const handleSafetyReport = () => {
    // Handle safety report
    console.log('Opening safety report');
  };

  const supportCategories = [
    {
      icon: '🌱',
      title: 'Getting Started',
      description: 'New to our soulful community? Let us guide you through creating an authentic presence.',
      items: [
        'Creating your heart-centered profile',
        'Understanding our Moments feed',
        'Community values & etiquette',
        'Your first meaningful conversation',
        'Privacy settings that feel right'
      ]
    },
    {
      icon: '💭',
      title: 'Moments & Expression',
      description: 'Share your inner world through our unique Moments feature - thoughts, art, music, and authentic glimpses of you.',
      items: [
        'How to post a Moment',
        'Creative expression guidelines',
        'Photo & art sharing tips',
        'Writing prompts for authenticity',
        'Managing Moment visibility'
      ]
    },
    {
      icon: '💌',
      title: 'Meaningful Connections',
      description: 'Moving beyond small talk to create the deep, intentional connections you\'re seeking.',
      items: [
        'Conversation starters that matter',
        'Reading between the lines',
        'When to move from app to real life',
        'Setting healthy boundaries',
        'Handling rejection with grace'
      ]
    },
    {
      icon: '🔧',
      title: 'Account & Technical',
      description: 'Practical help to keep your Serendate experience smooth and worry-free.',
      items: [
        'Account settings & preferences',
        'Subscription management',
        'Notification controls',
        'Technical troubleshooting',
        'Deleting or pausing your account'
      ]
    },
    {
      icon: '🛡️',
      title: 'Safety & Wellbeing',
      description: 'Creating a space where vulnerability is safe and respect is non-negotiable.',
      items: [
        'Recognizing red flags',
        'Reporting inappropriate behavior',
        'Blocking & filtering options',
        'Emotional self-care while dating',
        'When to take a break'
      ]
    },
    {
      icon: '💝',
      title: 'Community Guidelines',
      description: 'Understanding what makes our community special and how to be part of something beautiful.',
      items: [
        'Our values in action',
        'Authentic vs performative sharing',
        'Kindness in rejection',
        'Supporting others\' journeys',
        'What we don\'t allow'
      ]
    }
  ];

  const contactOptions = [
    {
      icon: '💬',
      title: 'Live Chat',
      subtitle: 'Usually under 5 min',
      onClick: () => {
        // Example: Navigate to a live chat page or open a chat modal
        window.open('/support/chat', '_blank', 'noopener');
      }
    },
    {
      icon: '📧',
      title: 'Send Us Your Story',
      subtitle: '24hr response',
      onClick: () => {
        window.location.href = 'mailto:support@serendate.com?subject=Serendate%20Support%20Request&body=Hi%20Serendate%20Team%2C%5Cn%5CnI%20need%20help%20with...';
      }
    },
    {
      icon: '🤝',
      title: 'Connection Coaching',
      subtitle: 'Premium feature',
      onClick: () => {
        // Example: Navigate to a coaching info page or open a modal
        window.open('/support/coaching', '_blank', 'noopener');
      }
    }
  ];

  // Navbar handler
  const handleNavClick = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  return (
    <div className="font-sans bg-gradient-to-br from-pink-50 to-pink-200 text-pink-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full px-2 py-4 flex justify-between items-center">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center space-x-2 pl-2">
            <img src={logo} alt="Love Connect Logo" className="h-10 w-auto" />
            <span className="text-3xl font-extrabold text-pink-600">Serendate</span>
          </div>
          {/* Right Side - Navigation and Actions */}
          <div className="flex items-center space-x-6 pr-4">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-pink-600 text-3xl focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition" onClick={handleNavClick}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition" onClick={handleNavClick}>About</Link>
              <Link to="/support" className="text-pink-600 font-semibold">Support</Link>
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
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg border z-50">
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
                        className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 cursor-pointer"
                      >
                        Logout
                      </span>
                    </div>
                  )}
                </div>
              )}
              {!isLoggedIn && (
                <Link to="/login" onClick={handleNavClick}>
                  <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition w-full md:w-auto text-base md:text-lg">Login</button>
                </Link>
              )}
            </nav>
          </div>
          {/* Mobile Nav */}
          {menuOpen && (
            <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl py-4 z-40 flex flex-col items-center animate-fade-in">
              <Link to="/" className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center" onClick={handleNavClick}>Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-pink-600 transition py-2 w-full text-center" onClick={handleNavClick}>About</Link>
              <Link to="/support" className="text-pink-600 font-semibold py-2 w-full text-center" onClick={handleNavClick}>Support</Link>
              {isLoggedIn && (
                <>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center"
                    onClick={handleNavClick}
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/chats"
                    className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center"
                    onClick={handleNavClick}
                  >
                    Chats
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm hover:bg-pink-100 text-gray-700 w-full text-center"
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
                </>
              )}
              {!isLoggedIn && (
                <Link to="/login" className="w-full" onClick={handleNavClick}>
                  <button className="w-full bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600 transition my-2 text-base md:text-lg">Login</button>
                </Link>
              )}
            </nav>
          )}
        </div>
      </nav>
      <main className="flex-1 w-full">
        <div className="max-w-6xl mx-auto px-5">
          {/* Hero Section */}
          <section className="text-center mb-16 bg-white/60 p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-light text-pink-900 mb-6">
              How can we help you bloom?
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-pink-700 mb-8">
              Whether you're learning to share your authentic self, navigating deeper conversations, 
              or need guidance on our mindful features, we're here with gentle support every step of the way.
            </p>
          </section>
          {/* Safety Banner */}
          <section className="bg-pink-500 text-white p-8 rounded-3xl text-center mb-16 shadow-xl">
            <h3 className="text-2xl mb-4">🛡️ Your Safety is Sacred to Us</h3>
            <p className="text-lg mb-6">
              If you're experiencing harassment, feel unsafe, or need immediate help, please don't hesitate to reach out. 
              We respond to safety concerns within 2 hours, 24/7.
            </p>
            <button 
              onClick={handleSafetyReport}
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              Report Safety Concern
            </button>
          </section>
          {/* Support Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportCategories.map((category, index) => (
              <SupportCard 
                key={index}
                icon={category.icon}
                title={category.title}
                description={category.description}
                items={category.items}
              />
            ))}
          </section>
          {/* Contact Section */}
          <section className="bg-pink-100 p-12 rounded-3xl text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-pink-700 mb-6">
              Still need a gentle hand?
            </h2>
            <p className="text-lg text-pink-600 max-w-3xl mx-auto mb-8">
              Sometimes the heart needs more than an FAQ. We're real humans who understand that dating 
              can be vulnerable, scary, and beautiful all at once.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              {contactOptions.map((option, index) => (
                <ContactButton 
                  key={index}
                  icon={option.icon}
                  title={option.title}
                  subtitle={option.subtitle}
                  onClick={option.onClick}
                />
              ))}
            </div>
            <p className="italic opacity-80 text-pink-600">
              "Every message matters. Every story is heard. Every heart deserves support."
            </p>
          </section>
        </div>
      </main>
      <footer className="bg-white/80 text-center py-6 text-pink-600 text-sm border-t mt-10 shadow-inner">
        © {new Date().getFullYear()} <strong>Serendate</strong> — Where hearts align 💫
      </footer>
    </div>
  );
}