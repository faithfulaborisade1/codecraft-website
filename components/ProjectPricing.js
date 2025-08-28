'use client'

import { useState } from 'react'

export default function ProjectPricing() {
  const [loading, setLoading] = useState(false)

  const projects = [
    {
      name: "Basic Website",
      price: 499,
      depositPrice: 249.50,
      priceId: "price_1S13zXHBKAenl9nMJFAMqs4F", // Replace with actual Stripe price ID
      description: "Perfect for small businesses and personal brands",
      features: [
        "Up to 5 pages",
        "Mobile responsive design",
        "Contact form",
        "Basic SEO setup",
        "1 month free maintenance",
        "Social media integration"
      ],
      deliveryTime: "7-10 days"
    },
    {
      name: "Professional Website",
      price: 999,
      depositPrice: 499.50,
      priceId: "price_1S140MHBKAenl9nM3KXDTaIY", // Replace with actual Stripe price ID
      description: "Full-featured business website with advanced functionality",
      features: [
        "Up to 15 pages",
        "Custom design & branding",
        "CMS integration",
        "Advanced SEO optimization",
        "Analytics setup",
        "Blog functionality",
        "3 months free maintenance"
      ],
      deliveryTime: "14-21 days",
      popular: true
    },
    {
      name: "Web Application",
      price: 2499,
      depositPrice: 1249.50,
      priceId: "price_1S141GHBKAenl9nMPE1dr8Jk", // Replace with actual Stripe price ID
      description: "Custom web application tailored to your business needs",
      features: [
        "Custom functionality",
        "User authentication",
        "Database integration",
        "API development",
        "Admin dashboard",
        "Payment integration",
        "6 months free maintenance"
      ],
      deliveryTime: "4-6 weeks"
    }
  ]

  const handlePayment = async (priceId, projectName) => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          mode: 'payment',
          successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/#pricing`
        }),
      })

      const { url } = await response.json()
      
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No checkout URL received')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Payment failed. Please try again or contact support.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for all your digital needs. Pay once, own forever. All projects include source code and documentation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg card-hover relative border ${project.popular ? 'border-indigo-200 scale-105' : 'border-gray-200'}`}>
              {project.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <span className="text-2xl">€</span>{project.price.toLocaleString()}
                  <div className="text-lg text-gray-600 font-normal">
                    Deposit: €{project.depositPrice}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="text-sm text-indigo-600 font-semibold">
                  🚀 {project.deliveryTime}
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-blue-800 text-center">
                  💡 <strong>Recommended:</strong> Schedule a free consultation call before payment to discuss your specific needs and ensure this package is perfect for you.
                </p>
              </div>

              <div className="space-y-2">
                <a 
                  href="#contact"
                  className="btn-secondary w-full text-center inline-block mb-2"
                >
                  Schedule Free Consultation
                </a>
                <button 
                  className={`btn-primary w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => handlePayment(project.priceId, project.name)}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : `Pay Deposit - €${project.depositPrice}`}
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Pay 50% deposit to start. Remaining €{(project.price - project.depositPrice).toFixed(2)} due upon completion.
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something custom? Let&apos;s talk about your specific requirements.
          </p>
          <a 
            href="#contact"
            className="btn-secondary"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  )
}