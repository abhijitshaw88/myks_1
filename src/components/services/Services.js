const Services = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Professional tax filing and compliance services tailored to your needs.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* ITR Filing */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
            <div className="px-8 py-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">ITR e-filing</h3>
              <p className="text-gray-600 mt-2">For individuals and businesses</p>
            </div>
            <div className="px-8 py-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Salary Income Filing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Business Income Filing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Capital Gains Filing</span>
                </li>
              </ul>
              <a href="#contact" className="mt-8 block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
            </div>
          </div>
          
          {/* GST Filing */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-600 transform scale-105 z-10">
            <div className="bg-blue-600 text-white text-center py-2">
              <p className="font-medium">Most Popular</p>
            </div>
            <div className="px-8 py-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">GST e-filing</h3>
              <p className="text-gray-600 mt-2">For businesses of all sizes</p>
            </div>
            <div className="px-8 py-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>GSTR-1 Filing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>GSTR-3B Filing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual Returns</span>
                </li>
              </ul>
              <a href="#contact" className="mt-8 block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
            </div>
          </div>
          
          {/* TDS Compliance */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition">
            <div className="px-8 py-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800">TDS Compliances</h3>
              <p className="text-gray-600 mt-2">For businesses and employers</p>
            </div>
            <div className="px-8 py-6">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Quarterly Returns</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Form 24Q Filing</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Annual Compliance</span>
                </li>
              </ul>
              <a href="#contact" className="mt-8 block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 