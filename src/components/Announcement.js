import React, { useState, useEffect } from 'react';

const Announcement = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      icon: "📢",
      text: "ITR Filing Deadline Extended!",
      subtext: "CBDT extends due date for FY 2024–25 (AY 2025–26) from July 31 to September 15, 2025. File now to avoid penalties!"
    },
    {
      icon: "🔔",
      text: "Important Update for Taxpayers – FY 2024–25",
      subtext: "✅ ITR-1 (Sahaj), ITR-4 (Sugam), ITR-2 & ITR-3 now open for filing on the Income Tax Portal."
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
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 overflow-hidden">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{announcements[currentIndex].icon}</span>
                <div className="overflow-hidden">
                  <div className="transition-all duration-500 ease-in-out">
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
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/80 hover:text-white transition-colors duration-300"
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
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcement; 