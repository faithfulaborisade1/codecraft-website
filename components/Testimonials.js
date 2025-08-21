export default function Testimonials() {
  const testimonials = [
   {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    role: "CEO",
    content: "CodeCraft delivered our e-commerce platform ahead of schedule and under budget. The ongoing maintenance has been flawless - our site has never been down. Highly recommended!",
    rating: 5
  },
    {
      name: "Mike Chen", 
      company: "Local Restaurant Group",
      role: "Operations Manager",
      content: "The mobile app CodeCraft built for us increased our online orders by 300%. The cross-platform approach meant we could reach both iOS and Android customers immediately.",
      rating: 5
    },
    {
      name: "Jennifer Davis",
      company: "Davis Consulting",
      role: "Founder",
      content: "Professional, responsive, and delivers exactly what's promised. The website redesign brought in 50% more leads in the first month. The maintenance plan gives me complete peace of mind.",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from satisfied clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-indigo-600 font-semibold">{testimonial.role}</div>
                <div className="text-gray-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}