'use client'

export default function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Custom Websites",
      description: "Professional websites that represent your brand perfectly. Fast, responsive, and built to convert visitors into customers.",
      features: [
        "Responsive design for all devices",
        "SEO optimized",
        "Fast loading times",
        "Content management system",
        "Professional design"
      ]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Cross-platform mobile apps that work seamlessly on both iOS and Android. One codebase, maximum reach.",
      features: [
        "iOS & Android compatible",
        "Native performance",
        "App store deployment",
        "Push notifications",
        "Offline functionality"
      ]
    },
    {
      icon: "⚡",
      title: "Web Applications",
      description: "Powerful web applications that streamline your business processes. Custom features built exactly how you need them.",
      features: [
        "Custom functionality",
        "Database integration",
        "User authentication",
        "Real-time features",
        "Scalable architecture"
      ]
    }
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services That Deliver</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className="btn-primary w-full"
                onClick={scrollToContact}
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}