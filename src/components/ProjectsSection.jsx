import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Eye, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "FundMeNow",
      description: "A full-stack donation platform supporting profile-based and anonymous donations with secure payment processing and robust authentication.",
      longDescription: "Built a comprehensive donation platform that increased user retention by 25% and reduced transaction failure by 15%. Integrated Razorpay for secure payment processing and NextAuth for authentication, reducing unauthorized access by 30%.",
      image: "https://skillicons.dev/icons?i=nextjs,mongodb,tailwind,vercel&theme=dark&perline=2",
      technologies: ["Next.js", "Razorpay", "NextAuth", "MongoDB", "Tailwind CSS"],
      category: "fullstack",
      github: "https://github.com/harshcode1/FundMeNow",
      demo: "https://github.com/harshcode1/FundMeNow",
      metrics: [
        { label: "User Retention", value: "+25%", color: "text-green-400" },
        { label: "Transaction Success", value: "+15%", color: "text-blue-400" },
        { label: "Security Improvement", value: "+30%", color: "text-purple-400" }
      ],
      achievements: [
        "25% increase in user retention",
        "15% reduction in transaction failure", 
        "30% reduction in unauthorized access"
      ]
    },
    {
      id: 2,
      title: "QueryConnect",
      description: "A Q&A platform with authentication, posting, filtering, and statistics using Spring Boot REST APIs and JWT authentication.",
      longDescription: "Developed a comprehensive Q&A platform with Spring Boot backend and Angular 19 frontend. Improved content search by 35% and reduced load time by 20% through optimized APIs and responsive design.",
      image: "https://skillicons.dev/icons?i=spring,angular,mysql,java&theme=dark&perline=2",
      technologies: ["Spring Boot", "Angular 19", "MySQL", "JWT", "REST API"],
      category: "fullstack",
      github: "https://github.com/harshcode1/QueryConnect",
      demo: "https://github.com/harshcode1/QueryConnect",
      metrics: [
        { label: "Search Performance", value: "+35%", color: "text-green-400" },
        { label: "Load Time", value: "-20%", color: "text-blue-400" },
        { label: "User Experience", value: "Responsive", color: "text-purple-400" }
      ],
      achievements: [
        "35% improvement in content search",
        "20% reduction in load time",
        "Responsive UI design"
      ]
    },
    {
      id: 3,
      title: "Cryptonite",
      description: "A cryptocurrency dashboard with live prices, interactive charts, and detailed coin pages using Chart.js and CoinGecko API.",
      longDescription: "Created a modern crypto dashboard featuring real-time price tracking, interactive charts, and comprehensive coin information. Boosted performance by 20% using Next.js Image optimization and implemented responsive design with Tailwind CSS.",
      image: "https://skillicons.dev/icons?i=nextjs,react,tailwind,js&theme=dark&perline=2",
      technologies: ["Next.js", "Tailwind CSS", "Chart.js", "CoinGecko API", "React"],
      category: "frontend",
      github: "https://github.com/harshcode1/Cryptonite",
      demo: "https://github.com/harshcode1/Cryptonite",
      metrics: [
        { label: "Performance", value: "+20%", color: "text-green-400" },
        { label: "Image Optimization", value: "Next.js", color: "text-blue-400" },
        { label: "Design", value: "Responsive", color: "text-purple-400" }
      ],
      achievements: [
        "20% performance improvement",
        "Real-time price tracking",
        "Interactive chart visualization"
      ]
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            modern web technologies, and problem-solving abilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              variant={activeFilter === category.id ? "default" : "outline"}
              className={`${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'border-white/20 text-white/80 hover:bg-white/10'
              } transition-all duration-300`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-contain bg-gradient-to-br from-slate-800 to-slate-900 p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/90 hover:scale-110 transition-all duration-200 cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black/70 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/90 hover:scale-110 transition-all duration-200 cursor-pointer"
                      title="View Live Demo"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Performance Metrics */}
                  {project.metrics && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-purple-400 mb-2">Performance Impact:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5">
                            <div className="text-xs text-white/60">{metric.label}</div>
                            <div className={`text-sm font-semibold ${metric.color}`}>{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  <div className="mb-4 flex-grow">
                    <h4 className="text-sm font-medium text-purple-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/60 text-xs">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-white/90 text-xs px-2 py-1 rounded-md border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-white/60 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
            onClick={() => window.open('https://github.com/harshcode1?tab=repositories', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection

