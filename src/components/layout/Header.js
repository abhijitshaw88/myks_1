import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyksLogo from '../../assets/myks-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Theme selector logic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    }
    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-navy shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white p-2 rounded-lg mr-3">
              <img src={MyksLogo} alt="Myks Logo" className="h-8 w-auto" />
            </div>
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">myKar<span className="text-gold">Sahayak</span></Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-blue-600 dark:text-gold font-medium hover:underline underline-offset-4 transition">Home</Link>
            <Link to="/services" className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-gold font-medium transition">Services</Link>
            <Link to="/team" className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-gold font-medium transition">Team</Link>
            <Link to="/contact" className="text-gray-600 dark:text-white hover:text-blue-600 dark:hover:text-gold font-medium transition">Contact</Link>
          </nav>
          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-navy border border-gray-200 dark:border-gold shadow transition-colors duration-300 focus:outline-none"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="h-6 w-6 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
            )}
          </button>
          <button 
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex justify-end">
            <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm transition-opacity animate-fade-in" onClick={toggleMenu}></div>
            <div className="relative mt-0 bg-white rounded-l-2xl shadow-2xl p-6 w-4/5 max-w-xs h-full animate-slide-in-right flex flex-col">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => handleNavigation('/')} 
                  className="text-left px-4 py-2 text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition"
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavigation('/services')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Services
                </button>
                <button 
                  onClick={() => handleNavigation('/team')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Team
                </button>
                <button 
                  onClick={() => handleNavigation('/contact')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        )}

        {/* Add moving banner above the header */}
        <div className="w-full bg-gradient-to-r from-gold to-yellow-400 dark:from-gold dark:to-yellow-500 text-navy dark:text-navy py-2 overflow-hidden shadow animate-fade-in">
          <div className="whitespace-nowrap animate-marquee text-center font-semibold text-sm banner-text-shadow hover:paused">
            📅 Get ready to file your ITR quickly and accurately! File your return for the financial year ending 31st March 2025 (Assessment Year 2025–26). e-Filing will be available soon
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 