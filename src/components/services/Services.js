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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 