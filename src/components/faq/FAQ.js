import { useState } from 'react';

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'What documents do I need for ITR filing?',
      answer: 'You will need your PAN card, Aadhar card, Form 16 (if salaried), bank statements, investment proofs, and any other income-related documents. Our team will guide you through the complete list based on your specific case.'
    },
    {
      question: 'How long does GST registration take?',
      answer: 'GST registration typically takes 3-7 working days after submission of all required documents. We ensure a smooth and quick registration process by verifying all documents beforehand.'
    },
    {
      question: 'What are the benefits of hiring a tax consultant?',
      answer: 'A tax consultant helps you save time, avoid penalties, maximize tax savings, and ensure compliance with tax laws. They also provide expert advice on tax planning and keep you updated with changing tax regulations.'
    },
    {
      question: 'Do you provide services for startups?',
      answer: 'Yes, we specialize in providing tax and compliance services for startups. We help with company registration, GST registration, tax planning, and ongoing compliance requirements.'
    },
    {
      question: 'What is the process for filing ITR?',
      answer: 'Our ITR filing process involves document collection, income verification, tax calculation, form preparation, and e-filing. We handle the entire process and keep you informed at each step.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Find answers to common questions about our services and tax filing process.</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-blue-600 transform transition-transform ${
                    activeFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeFaq === index && (
                <div className="p-6 bg-gray-50 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 