const PartnerPlanning = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Corporate tie-up Services</h1>
          <p className="text-blue-100 max-w-3xl mx-auto text-xl leading-relaxed">
            Ready to take your business to the next level? Our corporate tie-up services offer customized solutions 
            tailored to your specific needs. Comprehensive tax and compliance solutions for businesses of all sizes.
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
          
          {/* Right Side - Information */}
          <div className="bg-white rounded-xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">💼</div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">Corporate Partnership Services</h4>
              <p className="text-gray-600">
                Comprehensive tax and compliance solutions tailored for businesses of all sizes.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">Our Services Include:</h5>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Comprehensive Tax Planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>GST Registration & Filing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>TDS/TCS Compliance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Business Advisory Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerPlanning; 