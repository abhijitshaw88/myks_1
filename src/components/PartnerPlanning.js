const PartnerPlanning = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Partner Planning Services</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-xl leading-relaxed">
            Ready to take your business to the next level? Our partner planning services offer customized solutions 
            tailored to your specific needs. Get a personalized quote and start your journey towards financial success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Tailored Tax Solutions</h4>
                  <p className="text-blue-100">
                    We offer customized tax services designed to align with each client's unique financial needs and business objectives.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Strategic Planning</h4>
                  <p className="text-blue-100">
                    Comprehensive business planning including tax optimization, compliance strategies, 
                    and long-term financial roadmaps for sustainable growth.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">Ongoing Support</h4>
                  <p className="text-blue-100">
                    Continuous guidance and support throughout your business journey, ensuring you stay 
                    compliant and optimized at every stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Quote Request */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">💼</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Request Your Custom Quote</h4>
              <p className="text-gray-600">
                Tell us about your business needs and get a personalized quote within 24 hours.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">What's Included:</h5>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Free Initial Consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Customized Service Package</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Detailed Cost Breakdown</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Implementation Timeline</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <span className="mr-2">Get Your Quote</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <p className="text-sm text-gray-500 mt-3">
                  No commitment required • Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPlanning; 