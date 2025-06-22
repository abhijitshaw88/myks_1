import nitishImg from '../../assets/nitish_sharma.jpg';
import amitImg from '../../assets/amit_jha.jpg';
import souravImg from '../../assets/sourav.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nitish Sharma',
      role: 'Tax Expert',
      image: nitishImg,
      description: 'Specialized in corporate tax planning and compliance with over 10 years of experience.'
    },
    {
      name: 'Amit Jha',
      role: 'GST Specialist',
      image: amitImg,
      description: 'Expert in GST compliance and filing with a track record of successful audits.'
    },
    {
      name: 'Sourav Kumar',
      role: 'Financial Advisor',
      image: souravImg,
      description: 'Certified financial planner helping businesses optimize their tax strategies.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expert Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet our team of experienced tax professionals dedicated to providing the best service.</p>
        </div>
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="w-full max-w-xs">
            <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-44">
              <ellipse cx="150" cy="150" rx="120" ry="20" fill="#E0E7FF"/>
              <circle cx="90" cy="90" r="36" fill="#6366F1"/>
              <circle cx="210" cy="90" r="36" fill="#6366F1"/>
              <circle cx="150" cy="70" r="40" fill="#A5B4FC"/>
              <rect x="110" y="110" width="80" height="24" rx="12" fill="#F59E42"/>
              <text x="150" y="128" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">Team</text>
            </svg>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition animate-fade-in">
              <div className="relative h-64">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x300?text=Team+Member";
                  }}
                />
              </div>
              <div className="px-8 py-6">
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 