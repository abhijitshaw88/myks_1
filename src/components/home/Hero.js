import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Your Trusted Partner in <span className="text-blue-600">Tax & Compliance</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We are a team of experienced tax professionals providing comprehensive tax solutions, GST services, and business compliance services. Our mission is to simplify tax and compliance for businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition shadow-md text-center"
              >
                Our Services
              </Link>
              <Link
                to="/contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition text-center"
              >
                Book Consultation
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-up">
            <div className="w-full max-w-md">
              <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-80">
                <rect x="40" y="60" width="320" height="200" rx="24" fill="#E0E7FF"/>
                <rect x="80" y="100" width="240" height="120" rx="16" fill="#6366F1"/>
                <rect x="120" y="140" width="160" height="40" rx="8" fill="#A5B4FC"/>
                <circle cx="320" cy="90" r="18" fill="#F59E42"/>
                <rect x="160" y="200" width="80" height="12" rx="6" fill="#F59E42"/>
                <text x="200" y="170" textAnchor="middle" fontSize="20" fill="#fff" fontWeight="bold">TAX</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 