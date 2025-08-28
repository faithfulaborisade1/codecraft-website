'use client'

import { useState } from 'react'

export default function MaintenancePlans() {
  const [loading, setLoading] = useState(false)

  const plans = [
    {
      name: "Essential Care",
      price: 25,
      priceId: "price_1S13NOHBKAenl9nMYEfFW9EZ", // Replace with actual Stripe price ID
      description: "Perfect for small websites that need basic protection and updates",
      features: [
        "Security updates & patches",
        "Software & plugin updates", 
        "Weekly automated backups",
        "Uptime monitoring",
        "Email support (48hr response)",
        "Monthly performance report"
      ],
      buttonStyle: "btn-secondary"
    },
    {
      name: "Professional",
      price: 49,
      priceId: "price_1S13O1HBKAenl9nMPURGOWmg", // Replace with actual Stripe price ID
      description: "Ideal for business websites with regular content updates",
      features: [
        "Everything in Essential Care",
        "Content updates (2 hours included)",
        "Performance optimization",
        "SEO monitoring", 
        "Priority support (24hr response)",
        "Quarterly strategy consultation",
        "Emergency hotline access"
      ],
      buttonStyle: "btn-primary",
      popular: true
    },
    {
      name: "Enterprise", 
      price: 99,
      priceId: "price_1S13OaHBKAenl9nM0rgMOvA0", // Replace with actual Stripe price ID
      description: "Complete peace of mind for mission-critical applications",
      features: [
        "Everything in Professional",
        "24/7 monitoring & alerts",
        "Unlimited emergency fixes",
        "Feature additions (4 hours included)",
        "Phone support & consultation", 
        "Advanced security scanning",
        "Database optimization",
        "Dedicated account manager"
      ],
      buttonStyle: "btn-primary"
    }
  ]

  const handleSubscribe = async (priceId, planName) => {
    setLoading(true)
    
    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          mode: 'subscription',
          successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/#maintenance`
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
    <section id="maintenance" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Protect Your Investment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your website or app is a valuable business asset. Keep it secure, fast, and up-to-date with our comprehensive maintenance plans. No surprises, no downtime, just peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white p-8 rounded-2xl shadow-lg card-hover relative ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  <span className="text-2xl">€</span>{plan.price}<span className="text-lg text-gray-600">/month</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="space-y-2">
                <button 
                  className={`${plan.buttonStyle} w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => handleSubscribe(plan.priceId, plan.name)}
                  disabled={loading}
                >
                  {loading ? 'Processing...' : `Subscribe - €${plan.price}/month`}
                </button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Secure payment with Stripe. Cancel anytime.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}