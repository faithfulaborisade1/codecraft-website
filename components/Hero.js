'use client'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen gradient-bg flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Solutions That Drive Results
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Turn any idea into reality - no matter how big or small. Fast delivery and ongoing maintenance included. 
            Custom websites, mobile apps, and web applications designed to grow your business.
          </p>
          
          <a 
            href="#contact" 
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  )
}