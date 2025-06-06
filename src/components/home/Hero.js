import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
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
          <div className="md:w-1/2">
            <img 
              src="/images/tax-consulting.jpg" 
              alt="Tax Consulting Services" 
              className="rounded-xl shadow-xl w-full"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 