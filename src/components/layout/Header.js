import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const serviceOptions = [
  {
    label: 'Income Tax (ITR)',
    path: '/services/itr',
    icon: (
      <span className="inline-block text-blue-500"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></span>
    )
  },
  {
    label: 'GST',
    path: '/services/gst',
    icon: (
      <span className="inline-block text-green-500"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3-3-1.343-3-3zm0 0c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z" /></svg></span>
    )
  },
  {
    label: 'TDS',
    path: '/services/tds',
    icon: (
      <span className="inline-block text-yellow-500"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span>
    )
  },
  {
    label: 'Other Services',
    path: '/services/other',
    icon: (
      <span className="inline-block text-purple-500"><svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg></span>
    )
  }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
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

  // Dropdown hover/click logic
  const handleDropdownEnter = () => {
    setIsDropdownHovered(true);
    setIsServicesOpen(true);
  };
  const handleDropdownLeave = () => {
    setIsDropdownHovered(false);
    setTimeout(() => {
      if (!isDropdownHovered) setIsServicesOpen(false);
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <Link to="/" className="text-xl font-bold text-gray-800">myKar<span className="text-blue-600">Sahayak</span></Link>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-blue-600 font-medium hover:underline underline-offset-4 transition">Home</Link>
            <div
              className="relative group"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              ref={dropdownRef}
            >
              <button
                ref={buttonRef}
                className="text-gray-600 hover:text-blue-600 font-medium flex items-center transition focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                onClick={() => setIsServicesOpen((v) => !v)}
                type="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIsServicesOpen(v => !v); }}
              >
                Services
                <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 transition-all duration-300 origin-top z-50 ${isServicesOpen ? 'pointer-events-auto opacity-100 scale-100' : 'pointer-events-none opacity-0 scale-95'}`}
              >
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.path}
                    onClick={() => handleNavigation(opt.path)}
                    className="w-full text-left px-6 py-3 hover:bg-blue-50 transition flex items-center gap-3 text-base font-medium"
                    tabIndex={0}
                  >
                    {opt.icon} {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <Link to="/team" className="text-gray-600 hover:text-blue-600 font-medium transition">Team</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition">Contact</Link>
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
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen((v) => !v)}
                    className="text-left px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium flex items-center w-full transition"
                    aria-expanded={isServicesOpen}
                    aria-controls="mobile-services-dropdown"
                  >
                    Services
                    <svg className={`ml-1 h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    id="mobile-services-dropdown"
                    className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 opacity-100 scale-100' : 'max-h-0 opacity-0 scale-95'} bg-white rounded-xl shadow-lg border border-gray-100 mt-2`}
                    style={{ willChange: 'opacity, transform', pointerEvents: isServicesOpen ? 'auto' : 'none' }}
                  >
                    {serviceOptions.map((opt) => (
                      <button
                        key={opt.path}
                        onClick={() => { handleNavigation(opt.path); setIsServicesOpen(false); }}
                        className={`w-full text-left px-6 py-3 flex items-center gap-3 text-base font-medium transition hover:bg-blue-50 rounded-lg ${window.location.pathname === opt.path ? 'bg-blue-100 text-blue-700' : ''}`}
                        tabIndex={isServicesOpen ? 0 : -1}
                      >
                        {opt.icon} {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
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
      </div>
    </header>
  );
};

export default Header; 