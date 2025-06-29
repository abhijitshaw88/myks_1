const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-float" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Professional
                <span className="text-blue-600 block">Tax Filing Services</span>
                <span className="text-2xl text-gray-600 block mt-4">ITR • GST • TDS • Tax Planning</span>
              </h1>
            </div>
            
            <div>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert <strong>income tax return filing</strong>, <strong>GST registration & compliance</strong>, and <strong>TDS filing services</strong> in India. 
                Get your taxes filed accurately by certified professionals with years of experience in tax compliance.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ✓ Online ITR Filing • ✓ GST Registration & Returns • ✓ TDS/TCS Compliance • ✓ Tax Planning • ✓ Notice Handling
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Tax Services
              </a>
              <a 
                href="/tax-calculator" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                💰 Tax Calculator
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">ITR Returns Filed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">200+</div>
                <div className="text-gray-600">Tax Notices Resolved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">100+</div>
                <div className="text-gray-600">GST Clients Served</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Image/Animation */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Container */}
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-8xl mb-4">💼</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Tax Services</h3>
                  <p className="text-gray-600 mb-6">
                    Expert guidance for all your tax and compliance needs
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl">📊</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl">✅</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 