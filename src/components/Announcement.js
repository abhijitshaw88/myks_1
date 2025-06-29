import React, { useState, useEffect } from 'react';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      icon: "📢",
      text: "ITR Filing Deadline Extended!",
      subtext: "The CBDT has extended the ITR filing due date for AY 2025–26 from July 31 to September 15, 2025."
    },
    {
      icon: "📅",
      text: "e-Filing Now Open!",
      subtext: "ITR-1 (SAHAJ) & ITR-4 (SUGAM) is now open for FY 2024-25. File early, file accurately!"
    },
    {
      icon: "⚡",
      text: "Avoid Last-Minute Rush!",
      subtext: "Get your ITR filed before the deadline. Professional assistance available 24/7."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 shadow-lg overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white opacity-5 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-white opacity-5 rounded-full animate-spin"></div>
      </div>

      {/* Moving gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center space-x-4 animate-slide-in">
              <div className="flex items-center space-x-3">
                <span className="text-2xl animate-bounce">{announcements[currentIndex].icon}</span>
                <div className="overflow-hidden">
                  <div className="animate-slide-up">
                    <span className="font-bold text-sm md:text-base block">
                      {announcements[currentIndex].text}
                    </span>
                    <span className="text-xs md:text-sm opacity-90 block mt-1">
                      {announcements[currentIndex].subtext}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action button */}
          <div className="flex items-center space-x-4">
            <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 animate-pulse">
              File Now
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors duration-300 transform hover:scale-110"
              aria-label="Close announcement"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-3 space-x-2">
          {announcements.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse"></div>
    </div>
  );
};

export default Announcement; 