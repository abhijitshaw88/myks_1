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
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
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