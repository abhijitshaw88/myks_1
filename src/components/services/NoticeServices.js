import React from 'react';
import { ServiceSelector } from './TDSServices';

const NoticeServices = () => {
  const noticeTypes = [
    {
      title: "Income Tax Notices",
      description: "Scrutiny (Section 143), Defective Return (139(9)), Refund Adjustment (245), Non-filing, etc.",
      icon: "📤"
    },
    {
      title: "GST Notices",
      description: "GSTR mismatch, Late Filing, Non-filing, Show Cause Notices (SCN), RCM discrepancies, Audit inquiries, etc.",
      icon: "🧾"
    },
    {
      title: "TDS/TCS Notices",
      description: "Defaults in filing, short deduction, non-payment, or interest levied.",
      icon: "💼"
    },
    {
      title: "Compliance & Regulatory Notices",
      description: "PAN-Aadhaar mismatch, KYC-related issues, or MCA/ROC reminders for businesses.",
      icon: "📚"
    }
  ];

  const serviceSteps = [
    {
      title: "Notice Analysis & Classification",
      description: "We begin by thoroughly reviewing the notice and identifying its category—whether it's related to Income Tax, GST, TDS/TCS, compliance defaults, or document requisitions.",
      icon: "📩"
    },
    {
      title: "Documentation & Representation",
      description: "We assist in gathering required documents and drafting professional responses or submissions. Our experts ensure that every response is complete, accurate, and filed within the deadline.",
      icon: "🧾"
    },
    {
      title: "Liaison with Authorities",
      description: "Where required, we coordinate with the concerned tax departments on your behalf—online or offline—to ensure seamless communication and timely resolution.",
      icon: "🏛"
    },
    {
      title: "Resolution & Compliance",
      description: "We guide you through corrective actions, additional filings (if any), and long-term measures to prevent future notices.",
      icon: "✅"
    }
  ];

  const faqData = [
    {
      question: "What types of notices do you handle?",
      answer: "We handle all types of tax-related notices including Income Tax, GST, TDS, and other compliance notices from various government departments."
    },
    {
      question: "How quickly can you respond to a notice?",
      answer: "Our basic service responds within 48-72 hours, while premium service provides same-day or next-day response depending on notice urgency."
    },
    {
      question: "Do you provide representation at hearings?",
      answer: "Yes, our premium plans include representation support at hearings and assessments. We have experienced professionals who can represent you."
    },
    {
      question: "What documents do I need to provide?",
      answer: "You'll need to provide the original notice, relevant financial documents, and any supporting evidence. We'll guide you through the complete document checklist."
    },
    {
      question: "Can you help with appeal filing?",
      answer: "Yes, if an appeal is required, we provide complete support including appeal drafting, filing, and representation throughout the appeal process."
    },
    {
      question: "What if I miss the notice deadline?",
      answer: "We can help with late responses and penalty minimization strategies. However, it's always better to respond within the stipulated timeframe."
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <ServiceSelector />
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">⚖ Notice Handling Services</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Expert Assistance for All Types of Tax & Compliance Notices</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Receiving a notice from the Income Tax Department, GST authorities, or any other regulatory body can be overwhelming. 
            At MyKS – myKarSahayak, we provide end-to-end support to help you understand, respond, and resolve tax and 
            compliance-related notices professionally and efficiently.
          </p>
        </div>

        {/* Service Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">🔍 Our Notice Services Include:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {serviceSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Types of Notices */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">📌 Types of Notices We Handle:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {noticeTypes.map((type, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{type.icon}</span>
                  <h4 className="text-lg font-semibold text-gray-800">{type.title}</h4>
                </div>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">💬 Get a Personalized Quotation</h3>
          <p className="text-lg mb-6">
            Each notice is unique, and our pricing is customized based on complexity, urgency, and required level of representation.
          </p>
          <h4 className="text-xl font-semibold mb-4">📩 Request a Free Evaluation of Your Notice Today</h4>
          <p className="text-lg mb-6">
            Get a personalized quote and resolution timeline from our experts within 24 hours.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Evaluation
          </a>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Notice Handling Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team of tax experts and legal professionals ensures accurate and timely response to all notices.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Timely Response</h3>
              <p className="text-gray-600">
                We understand the importance of meeting deadlines and ensure all responses are filed within stipulated timeframes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Comprehensive Support</h3>
              <p className="text-gray-600">
                From notice analysis to final resolution, we provide end-to-end support for all your notice-related concerns.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Peace of Mind</h3>
              <p className="text-gray-600">
                Let our experts handle your notices while you focus on your business. We ensure compliance and protect your interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeServices; 