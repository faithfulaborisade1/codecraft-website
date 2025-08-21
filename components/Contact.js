export default function Contact() {
  return (
    <section id="contact" className="py-24 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Let's discuss how CodeCraft can help bring your vision to life. Free consultation, no obligations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:hello@craftcode.codes" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
          >
            ✉️ Email Me
          </a>
          <a 
            href="tel:+353 834024657" 
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
          >
            📞 Call Now
          </a>
          <a 
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2U28IA7idGFoQwpl3DQWI8O0quGdPkQRIqaXFw2M68CPfDxywswgA4lmsLaQt2S89-ZJ0dzImc" 
            target="_blank"
            className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
          >
            📅 Schedule Call
          </a>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/20 text-white/70">
          <p>&copy; 2024 CodeCraft. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}