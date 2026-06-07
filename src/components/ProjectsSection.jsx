import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Layers3 } from 'lucide-react'

const projects = [
  {
    title: 'TaskForge',
    type: 'Full Stack',
    description:
      'A self-hosted Jira-style project tracker with 5-tier RBAC, drag-and-drop Kanban, Swagger API docs, Docker deployment, and automated email reminders.',
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-blue-600/20',
    accentColor: 'rgba(34, 211, 238, 0.6)',
    icon: '⚡',
    stack: ['Spring Boot 3', 'Next.js 14', 'MySQL', 'JWT', 'JUnit', 'Docker'],
    proof: [
      'Shipped 5-tier RBAC using Spring Security + JWT with comprehensive REST API docs via Swagger.',
      'Containerized with Docker + docker-compose for one-command spin-up; integrated Spring Scheduler email reminders improving on-time task closure by 40%.',
      'Engineered drag-and-drop Kanban delivering sub-100ms transitions for 500+ concurrent users.',
      'Implemented JUnit coverage for critical service-layer business logic.'
    ],
    github: 'https://github.com/harshcode1/TaskForge-Backend',
    demo: '',
    featured: true
  },
  {
    title: 'Cryptonite',
    type: 'Frontend',
    description:
      'A PWA crypto-trading simulator with offline INR wallet, live coin data via CoinGecko, CSV portfolio export, and high-performance React rendering.',
    gradient: 'from-orange-500/20 via-amber-400/10 to-purple-600/20',
    accentColor: 'rgba(251, 146, 60, 0.6)',
    icon: '📈',
    stack: ['Next.js 14', 'React 18', 'CoinGecko API', 'Recharts', 'PWA'],
    proof: [
      'Architected multi-layer caching reducing CoinGecko API calls by 80%.',
      'Optimized React rendering with react-window, cutting 10,000-row table draw time by 65%.',
      'Delivered charts loading under 200ms with smart caching; full offline INR wallet + CSV export.'
    ],
    github: 'https://github.com/harshcode1/Cryptonite',
    demo: '',
    featured: true
  }
]

const filters = ['Featured', 'Full Stack', 'Frontend', 'All']

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('Featured')

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Featured') return p.featured
    return p.type === activeFilter
  })

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work — scope, tradeoffs, impact.</h2>
        <p>
          These projects tackle production-shaped concerns: authentication, dashboards, API design,
          latency optimisation, containerisation, and measurable performance wins.
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* filter tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-white text-[#080c14] shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                  : 'border border-white/10 bg-white/4 text-white/60 hover:border-white/20 hover:bg-white/8 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid gap-6 lg:grid-cols-2"
          >
            {filtered.map((project, index) => (
              <motion.article
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="project-card group"
              >
                {/* visual area */}
                <div className="project-visual">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${project.accentColor.replace('0.6', '0.08')}, transparent 65%)`
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <span className="text-5xl">{project.icon}</span>
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border"
                      style={{
                        borderColor: project.accentColor.replace('0.6', '0.3'),
                        color: project.accentColor.replace('0.6', '1').replace('rgba', 'rgba').replace(')', ', 1)')
                      }}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* body */}
                <div className="project-body">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                        <Layers3 className="size-3.5" />
                        {project.type}
                      </p>
                      <h3 className="mt-2 text-xl">{project.title}</h3>
                    </div>
                    {project.featured && (
                      <span className="status-pill shrink-0">Featured</span>
                    )}
                  </div>

                  <p className="mt-3 text-white/62 text-sm leading-relaxed">{project.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {project.proof.map((item) => (
                      <li key={item} className="impact-item">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      className="action-link"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-4" />
                      Repository
                    </a>
                    {project.demo && (
                      <a
                        className="action-link"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ArrowUpRight className="size-4" />
                        Live demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection
