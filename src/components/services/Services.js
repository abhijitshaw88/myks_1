import { ServiceSelector } from './TDSServices';

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our comprehensive range of tax, compliance, and business services designed to meet all your financial needs.
          </p>
        </div>
        
        <div className="animate-fade-in-up stagger-1">
          <ServiceSelector />
        </div>
        
        {/* Core Services Section */}
        <div className="py-20">
          <div className="text-center mb-16 animate-fade-in-up stagger-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Core Services</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our flagship services that form the backbone of our expertise. We specialize in comprehensive tax solutions, 
              compliance management, and strategic financial planning to ensure your business thrives in today's complex regulatory environment.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 animate-scale-in">
            <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Services</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors hover-scale">
                <span className="text-blue-600 font-bold">⿡</span>
                <span className="font-medium text-gray-800">ITR Filing</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors hover-scale">
                <span className="text-green-600 font-bold">⿢</span>
                <span className="font-medium text-gray-800">Tax Planning</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors hover-scale">
                <span className="text-purple-600 font-bold">⿣</span>
                <span className="font-medium text-gray-800">GST Services</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors hover-scale">
                <span className="text-orange-600 font-bold">⿤</span>
                <span className="font-medium text-gray-800">TDS/TCS Compliance</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors hover-scale">
                <span className="text-red-600 font-bold">⿥</span>
                <span className="font-medium text-gray-800">Notice Handling</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors hover-scale">
                <span className="text-indigo-600 font-bold">⿦</span>
                <span className="font-medium text-gray-800">Corporate Tie-Up Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="py-20 bg-gray-50 animate-fade-in-up">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Additional Business Services</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Beyond tax and compliance, we offer comprehensive business solutions to help you establish, 
                grow, and maintain your business operations with complete peace of mind.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up stagger-1">
                <div className="p-8">
                  <div className="text-4xl mb-4 animate-bounce-in">🏢</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Company Registration</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-4">₹6,999</div>
                  <p className="text-gray-600 mb-6">
                    Start your business journey with our comprehensive company registration service. 
                    We handle everything from name approval to post-registration compliance, ensuring 
                    a smooth and hassle-free incorporation process.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Name Approval & Reservation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>DSC & DIN Application</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>MOA & AOA Drafting</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Company Incorporation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Post Registration Compliance</span>
                    </li>
                  </ul>
                  <a href="#contact" className="ripple block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center hover-glow">Get Started</a>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up stagger-2">
                <div className="p-8">
                  <div className="text-4xl mb-4 animate-bounce-in" style={{animationDelay: '0.2s'}}>📈</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Business Advisory</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-4">₹4,999</div>
                  <p className="text-gray-600 mb-6">
                    Transform your business with strategic guidance from our expert advisors. 
                    We provide comprehensive business planning, financial strategy, and growth 
                    consulting to help you achieve your business objectives.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Strategic Business Planning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Financial Strategy Development</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Compliance Review & Optimization</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Growth Consulting & Scaling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Risk Assessment & Mitigation</span>
                    </li>
                  </ul>
                  <a href="#contact" className="ripple block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center hover-glow">Get Started</a>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up stagger-3">
                <div className="p-8">
                  <div className="text-4xl mb-4 animate-bounce-in" style={{animationDelay: '0.4s'}}>🔍</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Audit Services</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-4">₹7,999</div>
                  <p className="text-gray-600 mb-6">
                    Ensure transparency and compliance with our comprehensive audit services. 
                    Our experienced auditors provide thorough examination of your financial 
                    records, helping you maintain credibility and meet regulatory requirements.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Internal Audit & Controls</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Statutory Audit Compliance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Tax Audit & Assessment</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Compliance Audit Review</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span>Risk Management Audit</span>
                    </li>
                  </ul>
                  <a href="#contact" className="ripple block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center hover-glow">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 