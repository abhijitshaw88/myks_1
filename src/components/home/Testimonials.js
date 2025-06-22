const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      content: 'The team at myKarSahayak has been instrumental in streamlining our tax processes. Their expertise in GST filing has saved us countless hours and helped us avoid penalties.',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Freelance Professional',
      content: 'As a freelancer, tax filing was always a headache. Thanks to myKarSahayak, I can focus on my work while they handle all the tax-related matters efficiently.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Startup Founder',
      content: 'Their proactive approach to tax planning has helped us optimize our tax structure. The team is always available to answer our queries and provide guidance.',
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <svg
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. Here's what our clients have to say about our services.</p>
        </div>
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="w-full max-w-xs">
            <svg viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-44">
              <ellipse cx="150" cy="90" rx="140" ry="70" fill="#E0E7FF"/>
              <circle cx="90" cy="90" r="36" fill="#6366F1"/>
              <circle cx="210" cy="90" r="36" fill="#6366F1"/>
              <ellipse cx="90" cy="100" rx="16" ry="8" fill="#fff"/>
              <ellipse cx="210" cy="100" rx="16" ry="8" fill="#fff"/>
              <rect x="120" y="120" width="60" height="16" rx="8" fill="#F59E42"/>
              <text x="150" y="135" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">Feedback</text>
            </svg>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition animate-fade-in">
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-blue-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 