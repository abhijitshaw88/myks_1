import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4 animate-bounce">404</div>
          <div className="text-6xl mb-4">😕</div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, we're here to help you find what you need.
        </p>

        {/* Popular Links */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Popular Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              to="/" 
              className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200"
            >
              <div className="text-2xl mr-3">🏠</div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Home</div>
                <div className="text-sm text-gray-600">Back to homepage</div>
              </div>
            </Link>
            
            <Link 
              to="/tax-calculator" 
              className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200"
            >
              <div className="text-2xl mr-3">💰</div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Tax Calculator</div>
                <div className="text-sm text-gray-600">Calculate your taxes</div>
              </div>
            </Link>
            
            <Link 
              to="/services/itr" 
              className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200"
            >
              <div className="text-2xl mr-3">📄</div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">ITR Services</div>
                <div className="text-sm text-gray-600">Income tax filing</div>
              </div>
            </Link>
            
            <Link 
              to="/contact" 
              className="flex items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200"
            >
              <div className="text-2xl mr-3">📞</div>
              <div className="text-left">
                <div className="font-semibold text-gray-800">Contact Us</div>
                <div className="text-sm text-gray-600">Get in touch</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go to Homepage
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Go Back
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-4">
            If you're looking for something specific, our team is here to help.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
          >
            <span>Contact Support</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 