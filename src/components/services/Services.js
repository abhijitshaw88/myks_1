import React, { useState, useRef, useEffect } from 'react';
import ITRServices from './ITRServices';
import GSTServices from './GSTServices';
import TDSServices from './TDSServices';
import Team from '../team/Team';
import Testimonials from '../home/Testimonials';

const TABS = [
  { key: 'itr', label: 'Income Tax (ITR)' },
  { key: 'gst', label: 'GST' },
  { key: 'tds', label: 'TDS' },
  { key: 'other', label: 'Other Services' }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('itr');
  const tabRefs = useRef({});
  const pillRef = useRef(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [ripple, setRipple] = useState({ show: false, x: 0, y: 0 });
  const [bounceKey, setBounceKey] = useState(0);

  useEffect(() => {
    // Animate pill position and width
    const node = tabRefs.current[activeTab];
    if (node) {
      setPillStyle({ left: node.offsetLeft, width: node.offsetWidth });
      setBounceKey(prev => prev + 1); // trigger bounce
    }
  }, [activeTab]);

  const handleTabClick = (tabKey, e) => {
    // Ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ show: true, x, y, tabKey });
    setTimeout(() => setRipple({ show: false, x: 0, y: 0 }), 400);
    setActiveTab(tabKey);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'itr':
        return <div key="itr" className="animate-fade-in-up"><ITRServices /></div>;
      case 'gst':
        return <div key="gst" className="animate-fade-in-up"><GSTServices /></div>;
      case 'tds':
        return <div key="tds" className="animate-fade-in-up"><TDSServices /></div>;
      case 'other':
        return (
          <div className="py-20 bg-gray-50 animate-fade-in-up">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Other Services</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Additional business and compliance services to help you grow and stay compliant.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Company Registration</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">₹6,999</div>
                  <ul className="space-y-3 mb-6">
                    <li>Name Approval</li>
                    <li>DSC & DIN Application</li>
                    <li>MOA & AOA Drafting</li>
                    <li>Company Incorporation</li>
                    <li>Post Registration Compliance</li>
                  </ul>
                  <a href="#contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Advisory</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">₹4,999</div>
                  <ul className="space-y-3 mb-6">
                    <li>Business Planning</li>
                    <li>Financial Strategy</li>
                    <li>Compliance Review</li>
                    <li>Growth Consulting</li>
                  </ul>
                  <a href="#contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Audit Services</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-4">₹7,999</div>
                  <ul className="space-y-3 mb-6">
                    <li>Internal Audit</li>
                    <li>Statutory Audit</li>
                    <li>Tax Audit</li>
                    <li>Compliance Audit</li>
                  </ul>
                  <a href="#contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition text-center">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        );
      case 'team':
        return <div key="team" className="animate-fade-in-up"><Team /></div>;
      case 'testimonials':
        return <div key="testimonials" className="animate-fade-in-up"><Testimonials /></div>;
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-2 tracking-tight">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our full range of tax, compliance, and business services. Select a category below.
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <div className="relative inline-flex rounded-xl bg-white shadow-md overflow-hidden border border-gray-200 animate-fade-in-up">
            {/* Animated pill/slider with bounce */}
            <span
              ref={pillRef}
              key={bounceKey}
              className="absolute top-0 left-0 h-full bg-blue-600 rounded-xl z-0 transition-all duration-300 animate-bounce-x"
              style={{ left: pillStyle.left, width: pillStyle.width, transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)' }}
              aria-hidden="true"
            />
            {TABS.map((tab) => (
              <button
                key={tab.key}
                ref={el => tabRefs.current[tab.key] = el}
                onClick={e => handleTabClick(tab.key, e)}
                className={`relative px-6 py-3 font-semibold text-lg focus:outline-none transition-all duration-200 z-10 overflow-hidden ${
                  activeTab === tab.key
                    ? 'text-white' // text on pill
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
                style={{ minWidth: 150 }}
                tabIndex={0}
                aria-selected={activeTab === tab.key}
                aria-controls={`tab-panel-${tab.key}`}
              >
                {tab.label}
                {/* Ripple effect */}
                {ripple.show && ripple.tabKey === tab.key && (
                  <span
                    className="absolute pointer-events-none rounded-full bg-blue-200 opacity-60 animate-ripple"
                    style={{
                      left: ripple.x - 60,
                      top: ripple.y - 60,
                      width: 120,
                      height: 120,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="relative min-h-[400px] transition-all duration-500" id={`tab-panel-${activeTab}`}> 
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default Services; 