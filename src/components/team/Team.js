import nitishImg from '../../assets/nitish_sharma.jpg';
import amitImg from '../../assets/amit_jha.jpg';
import souravImg from '../../assets/sourav.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nitish Kumar Sharma',
      role: 'Senior Tax Consultant & Compliance Advisor',
      image: nitishImg,
      expertise: [
        '10+ years of experience in direct tax advisory',
        'Specialist in tax planning for salaried individuals, professionals & corporates',
        'Expertise in handling income tax notices, assessments & strategic planning'
      ]
    },
    {
      name: 'Amit Jha',
      role: 'GST Specialist & Business Consultant',
      image: amitImg,
      expertise: [
        'Manages over 100+ GST clients with sector-specific strategies',
        'Strong command over GST return filing, reconciliation, audits & notices',
        'Provides consultation on business registration, invoicing & e-way bills'
      ]
    },
    {
      name: 'Sourav Kumar',
      role: 'Financial Planner & Investment Advisor',
      image: souravImg,
      expertise: [
        'Expert in tax-efficient investments, deduction maximization (80C, 80D, NPS, etc.)',
        'Supports salaried & HNIs in retirement planning and capital gains management',
        'Offers personalised advice based on financial goals and risk profile'
      ]
    }
  ];

  const achievements = [
    { icon: '✅', text: '10,000+ Income Tax Returns filed across ITR-1 to ITR-6' },
    { icon: '🛡', text: '200+ Income Tax notices successfully resolved with expert representation' },
    { icon: '💼', text: '100+ Active GST clients across various sectors, handling end-to-end compliance' },
    { icon: '📊', text: 'TDS & TCS Compliance for corporates, professionals, and startups' },
    { icon: '🧾', text: 'Assistance with Form 10-IA, 80DD, AIS/TIS reconciliation, Form 26AS mismatches' },
    { icon: '🏢', text: 'End-to-end support for corporate filings, registrations, and ROC compliance' }
  ];

  const whyChooseUs = [
    { icon: '🧠', title: 'Knowledge-Driven Team', text: 'Professionals who stay updated with the latest tax laws and compliance rules' },
    { icon: '🕒', title: 'Timely Delivery', text: 'On-time filing, fast refund processing, and proactive follow-ups' },
    { icon: '🔒', title: 'Data Privacy & Security', text: 'Your financial information is secure with bank-level encryption' },
    { icon: '📱', title: 'Multi-Channel Support', text: 'Assistance via WhatsApp, email, calls & online dashboards' },
    { icon: '💯', title: 'Client-Centric Approach', text: 'We believe in clear communication, transparency, and accountability' }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Expert Team at myKarSahayak</h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            At myKarSahayak, we take pride in being a trusted name in tax and financial services, backed by a highly qualified and dedicated team of professionals. Our team includes certified financial experts, committed to delivering reliable, accurate, and timely services tailored to individual and business needs.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Over the years, we've built a strong reputation through:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-2xl">{achievement.icon}</span>
                <span className="text-gray-700 font-medium">{achievement.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">👥 Our Core Team</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x300?text=Team+Member";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="px-8 py-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">👤 {member.name}</h4>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{member.role}</p>
                  <div className="space-y-3">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start space-x-2">
                        <span className="text-green-500 font-bold mt-1">✔</span>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">🚀 Why Choose Us?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 