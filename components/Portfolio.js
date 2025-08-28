export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Application", 
      description: "Full-featured online store with payment processing, inventory management, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Restaurant Mobile App",
      category: "Mobile App",
      description: "iOS and Android app for food ordering with real-time tracking and push notifications.",
      image: "🍕",
      technologies: ["React Native", "Firebase", "Push Notifications"],
      link: "#"
    },
    {
      title: "Corporate Website",
      category: "Website",
      description: "Professional business website with CMS, SEO optimization, and lead generation forms.",
      image: "/website.png",
      technologies: ["Next.js", "Tailwind", "CMS", "SEO"],
      link: "https://irishautomarket.ie"
    },
    {
      title: "Analytics Dashboard",
      category: "Web Application",
      description: "Custom dashboard for tracking business KPIs with real-time data visualization.",
      image: "/analytics.png",
      technologies: ["React", "D3.js", "API Integration"],
      link: null
    },
    {
      title: "Fitness Tracker App",
      category: "Mobile App", 
      description: "Cross-platform fitness app with workout tracking and social features.",
      image: "💪",
      technologies: ["Flutter", "Firebase", "Health APIs"],
      link: "#"
    },
    {
      title: "SaaS Platform",
      category: "Web Application",
      description: "Multi-tenant SaaS platform with subscription billing and user management.",
      image: "⚡",
      technologies: ["Next.js", "Prisma", "Stripe", "Auth"],
      link: "#"
    }
  ]

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here&apos;s a glimpse of the quality work delivered for clients across different industries
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden card-hover">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-6xl relative">
                {project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                ) : (
                  project.image
                )}
              </div>
              
              <div className="p-6">
                <div className="text-sm text-indigo-600 font-semibold mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link}
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}