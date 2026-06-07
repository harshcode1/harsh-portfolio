import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, Layers3 } from 'lucide-react'

const projects = [
  {
    title: 'TaskForge',
    type: 'Full Stack',
    description:
      'Self-hosted Jira-style tracker with 5-tier RBAC, drag-and-drop Kanban, Swagger API docs, Docker deployment, and automated email reminders.',
    gradient: 'from-cyan-500/25 via-blue-500/15 to-indigo-600/25',
    icon: '⚡',
    stack: ['Spring Boot 3', 'Next.js 14', 'MySQL', 'JWT', 'JUnit', 'Docker'],
    proof: [
      '5-tier RBAC via Spring Security + JWT; REST API docs via Swagger.',
      'Docker + docker-compose one-command spin-up; Spring Scheduler reminders — improved on-time closure by 40%.',
      'Drag-and-drop Kanban with sub-100ms transitions for 500+ concurrent users.',
    ],
    github: 'https://github.com/harshcode1/TaskForge-Backend',
    demo: '',
    featured: true
  },
  {
    title: 'BetterMind',
    type: 'Full Stack',
    description:
      'Mental health platform connecting users with qualified therapists — mood tracking, appointment scheduling, secure messaging, and mental health assessments.',
    gradient: 'from-violet-500/25 via-purple-500/15 to-pink-600/25',
    icon: '🧠',
    stack: ['Next.js 14', 'MongoDB', 'Google OAuth', 'Google Calendar API', 'JWT', 'Tailwind CSS'],
    proof: [
      'Therapist discovery + scheduling via Google Calendar API integration.',
      'Secure messaging and mental health assessments with role-based access.',
      'Google OAuth authentication; session-safe JWT token management.',
    ],
    github: 'https://github.com/harshcode1/BetterMind',
    demo: '',
    featured: true
  },
  {
    title: 'Instant-Connect',
    type: 'Full Stack',
    description:
      'WhatsApp-style real-time group chat — one-on-one and group messaging, typing indicators, online/offline presence, and message read receipts.',
    gradient: 'from-emerald-500/25 via-teal-500/15 to-cyan-600/25',
    icon: '💬',
    stack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB', 'Chakra UI'],
    proof: [
      'Real-time bidirectional messaging via Socket.IO with typing indicators and read receipts.',
      'Group management with online/offline presence tracking.',
      'Full MERN stack; chat search and message history persistence.',
    ],
    github: 'https://github.com/harshcode1/Instant-Connect',
    demo: '',
    featured: true
  },
  {
    title: 'Cryptonite',
    type: 'Frontend',
    description:
      'PWA crypto-trading simulator with offline INR wallet, live coin data via CoinGecko, CSV portfolio export, and high-performance React rendering.',
    gradient: 'from-orange-500/25 via-amber-400/15 to-yellow-600/25',
    icon: '📈',
    stack: ['Next.js 14', 'React 18', 'CoinGecko API', 'Recharts', 'PWA'],
    proof: [
      'Multi-layer caching reduced CoinGecko API calls by 80%.',
      'react-window optimisation cut 10,000-row table draw time by 65%.',
      'Charts load under 200ms; offline INR wallet + CSV export.',
    ],
    github: 'https://github.com/harshcode1/Cryptonite',
    demo: '',
    featured: false
  },
  {
    title: 'QueryConnect',
    type: 'Full Stack',
    description:
      'Community-driven Q&A platform — question posting, answers, comments, search, and role-based access control across frontend and Spring Boot backend.',
    gradient: 'from-blue-500/25 via-indigo-500/15 to-violet-600/25',
    icon: '❓',
    stack: ['Next.js', 'Spring Boot', 'MySQL', 'JWT', 'Tailwind CSS'],
    proof: [
      'Full-stack RBAC: Spring Boot REST backend + React frontend.',
      'Search, community stats, question/answer/comment flows.',
      'JWT-secured API with Spring Security; MySQL persistence layer.',
    ],
    github: 'https://github.com/harshcode1/QueryConnect',
    demo: '',
    featured: false
  },
  {
    title: 'FundMeNow',
    type: 'Frontend',
    description:
      'Creator donation platform — no login required for donors, creator profiles, and Razorpay payment gateway integration for seamless transactions.',
    gradient: 'from-rose-500/25 via-pink-500/15 to-fuchsia-600/25',
    icon: '💸',
    stack: ['Next.js', 'Tailwind CSS', 'Razorpay API', 'PostCSS'],
    proof: [
      'Razorpay payment integration — donors can contribute without an account.',
      'Creator profile pages with customisable funding goals.',
      'Optimised Lighthouse score; responsive across all breakpoints.',
    ],
    github: 'https://github.com/harshcode1/FundMeNow',
    demo: '',
    featured: false
  }
]

const filters = ['Featured', 'Full Stack', 'Frontend', 'All']

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }
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
          Six projects spanning full-stack SaaS, real-time apps, payments, crypto, and FinTech —
          each built around production concerns: auth, latency, deployment, and measurable wins.
        </p>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* filter tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-white text-[#080c14] shadow-[0_0_18px_rgba(255,255,255,0.18)]'
                  : 'border border-white/10 bg-white/4 text-white/55 hover:border-white/20 hover:bg-white/8 hover:text-white'
              }`}
            >
              {filter}
              {filter === 'All' && <span className="ml-1.5 opacity-50 text-xs">{projects.length}</span>}
              {filter === 'Featured' && <span className="ml-1.5 opacity-50 text-xs">{projects.filter(p => p.featured).length}</span>}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3"
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
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04), transparent 65%)' }} />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <span className="text-4xl">{project.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/15 rounded-full px-2.5 py-0.5">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* body */}
                <div className="project-body">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                        <Layers3 className="size-3" />
                        {project.type}
                      </p>
                      <h3 className="mt-1 text-lg font-bold">{project.title}</h3>
                    </div>
                    {project.featured && (
                      <span className="status-pill shrink-0 text-[10px]">Featured</span>
                    )}
                  </div>

                  <p className="mt-2.5 text-white/55 text-xs leading-relaxed">{project.description}</p>

                  <ul className="mt-3.5 space-y-2">
                    {project.proof.map((item) => (
                      <li key={item} className="impact-item text-xs">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {project.github && (
                      <a className="action-link py-1.5 px-3 text-xs" href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3.5" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a className="action-link py-1.5 px-3 text-xs" href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ArrowUpRight className="size-3.5" />
                        Live
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
