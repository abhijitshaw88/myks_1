import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MyksLogo from '../../assets/myks-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

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
    <header className="sticky top-0 z-50 bg-white shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2 rounded-lg mr-3">
              <img src={MyksLogo} alt="Myks Logo" className="h-8 w-auto" />
            </div>
            <Link to="/" className="text-xl font-bold text-gray-800">myKar<span className="text-blue-600">Sahayak</span></Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-blue-600 font-medium hover:underline underline-offset-4 transition">Home</Link>
            <div className="relative group">
              <button className="text-gray-600 hover:text-blue-600 font-medium transition flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/services/itr" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">ITR Filing</Link>
                  <Link to="/services/gst" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">GST Services</Link>
                  <Link to="/services/tds" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">TDS/TCS Compliance</Link>
                  <Link to="/services/notice" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Notice Handling</Link>
                </div>
              </div>
            </div>
            <Link to="/resources" className="text-gray-600 hover:text-blue-600 font-medium transition">Resources</Link>
            <Link to="/tax-calculator" className="text-gray-600 hover:text-blue-600 font-medium transition">Tax Calculator</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition">Contact</Link>
            <Link 
              to="/partner-planning" 
              className="text-gray-600 hover:text-blue-600 font-medium transition"
            >
              Corporate tie-up
            </Link>
          </nav>
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
                  onClick={() => handleNavigation('/services/itr')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Services
                </button>
                <button 
                  onClick={() => handleNavigation('/resources')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Resources
                </button>
                <button 
                  onClick={() => handleNavigation('/tax-calculator')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Tax Calculator
                </button>
                <button 
                  onClick={() => handleNavigation('/contact')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Contact
                </button>
                <button 
                  onClick={() => handleNavigation('/partner-planning')} 
                  className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                >
                  Corporate tie-up
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 