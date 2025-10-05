import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Nagarro",
      location: "Gurugram",
      period: "January 2025 – Present",
      description: [
        "Enhanced iLease, a FinTech lending platform for Erste Bank, by developing robust Spring Boot microservices and multi-threaded processing modules, resulting in a 15% improvement in data processing efficiency.",
        "Developed and maintained core REST APIs in Spring Boot; contributed to the Angular frontend and cross-team feature development.",
        "Integrated CI/CD pipelines using Jenkins and SonarQube, ensuring 80%+ test coverage with JUnit and maintaining code quality across distributed Agile teams."
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "REST APIs", "Jenkins", "SonarQube", "JUnit", "Angular"],
      current: true
    },
    {
      id: 2,
      title: "Full Stack Intern",
      company: "TailorTalk",
      location: "Remote",
      period: "August 2024 – October 2024",
      description: [
        "Independently managed full-stack development lifecycle in a remote environment; revamped AI-based sales assistant, improving dashboard UI and backend, increasing user engagement by 25%.",
        "Integrated SEO practices and Lighthouse reports, boosting site speed by 30% and search rankings by 20%.",
        "Developed and optimized backend APIs, enhancing system performance and data processing efficiency by 40%."
      ],
      technologies: ["React", "Node.js", "AI/ML", "SEO", "Lighthouse", "Backend APIs"],
      current: false
    },
    {
      id: 3,
      title: "Amazon ML Summer School",
      company: "Amazon",
      location: "Remote",
      period: "September 2023 – October 2023",
      description: [
        "Selected from over 60,000+ applicants nationwide (5% acceptance rate) to participate in exclusive Amazon ML Summer School’23 program.",
        "Gained in-depth knowledge of probabilistic graphical models, reinforcement learning, deep neural networks, unsupervised learning, and supervised learning."
      ],
      technologies: ["Machine Learning", "Deep Learning", "Neural Networks", "Reinforcement Learning"],
      current: false
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 w-0.5 h-full bg-gradient-to-b from-purple-600 to-blue-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full top-6 z-10">
                {exp.current && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-ping"></div>
                )}
              </div>

              <div className="ml-16">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-lg text-purple-400 font-medium mb-3">{exp.company}</h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 text-white/70">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {exp.current && (
                      <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium self-start">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    {exp.description.map((desc, i) => (
                      <p key={i} className="text-white/80 leading-relaxed text-sm">
                        • {desc}
                      </p>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-white/90 text-xs px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

