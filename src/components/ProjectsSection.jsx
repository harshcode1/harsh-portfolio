import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    title: 'TaskForge',
    type: 'Full Stack',
    problem: 'Self-hostable Jira alternatives usually skip the parts that are actually hard — real authorization, live multi-user sync, a test suite, a deployment story.',
    approach: 'A Spring Boot REST + WebSocket API with JWT auth and role-based authorization enforced at the service layer (not just the route), broadcasting task changes live over STOMP with a deliberately thin, broadcast-only payload — paired with a Next.js Kanban frontend, an AI task assistant with real graceful degradation, and a test suite on both sides.',
    outcome: '25 endpoints, live collaboration over WebSocket, 93 tests, one Docker command to run the whole stack.',
    stack: ['Spring Boot 3.5.3', 'Spring Security 6', 'WebSocket/STOMP', 'Next.js 14', 'MySQL', 'JWT', 'OpenAI', 'Docker'],
    github: 'https://github.com/harshcode1/TaskForge',
    demo: '',
    featured: true
  },
  {
    title: 'BetterMind',
    type: 'Full Stack',
    problem: 'Mental-health apps often bolt on auth as an afterthought — a platform handling clinical assessment data can\'t.',
    approach: 'Custom JWT layer gating a TOTP 2FA challenge before token issuance, AES-encrypted sensitive fields, a reusable per-route rate limiter, and a guest mode that\'s structurally incapable of writing to the database.',
    outcome: '2FA-gated auth, AES encryption at rest, zero-risk guest demo mode.',
    stack: ['Next.js 14', 'MongoDB', 'OpenAI', 'JWT + TOTP 2FA', 'Tailwind CSS'],
    github: 'https://github.com/harshcode1/BetterMind',
    demo: 'https://better-mind-mauve.vercel.app/',
    featured: true
  },
  {
    title: 'QueryConnect',
    type: 'Full Stack',
    problem: 'Most "full-stack" portfolios only ever show one frontend framework — wanted to prove Spring Boot fluency pairs with more than just React.',
    approach: 'A layered Spring Boot API (controller / service / repository / DTO) behind a JWT filter chain, paired with an Angular 19 standalone-component frontend using the modern functional-interceptor pattern.',
    outcome: 'Two frameworks, one auth model, containerized end-to-end.',
    stack: ['Spring Boot 3.4.5', 'Angular 19', 'MySQL', 'Docker'],
    github: 'https://github.com/harshcode1/QueryConnect',
    demo: '',
    featured: true
  },
  {
    title: 'ai-video-pipeline',
    type: 'AI / Backend',
    problem: 'AI image-generation providers keep dying mid-project — free tiers vanish, response shapes change without notice.',
    approach: 'An abstract provider interface so switching APIs is a one-line config change, not a rewrite — plus HTTP failure classification so deterministic errors fail fast instead of burning retries on an unattended multi-hour render.',
    outcome: 'Survived two live provider outages in production, zero rewrites.',
    stack: ['Python', 'edge-tts', 'fal.ai (FLUX.2)', 'ffmpeg'],
    github: 'https://github.com/harshcode1/ai-video-pipeline',
    demo: '',
    featured: true
  },
  {
    title: 'Cryptonite',
    type: 'Frontend',
    problem: 'Free-tier crypto APIs rate-limit aggressively — most weekend projects just show a spinner or crash when that happens.',
    approach: 'Every CoinGecko call proxied through server-side routes behind a 4-layer fallback chain (fresh cache → live API → stale cache → static JSON → hardcoded defaults), so the UI never goes empty.',
    outcome: 'Installable offline PWA that survives rate limits and dead connections alike.',
    stack: ['Next.js 14', 'React 18', 'CoinGecko API', 'Recharts'],
    github: 'https://github.com/harshcode1/Cryptonite',
    demo: 'https://cryptonite-seven-phi.vercel.app/',
    featured: false
  }
]

const filters = ['Featured', 'Full Stack', 'AI / Backend', 'Frontend', 'All']

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.44, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const rafId = useRef(null)
  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const { clientX, clientY } = e
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--mx', `${((clientX - rect.left) / rect.width) * 100}%`)
      el.style.setProperty('--my', `${((clientY - rect.top) / rect.height) * 100}%`)
    })
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMouseMove}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="project-card group"
    >
      <div className="project-body">
        <div className="flex items-start justify-between gap-3">
          <span className="project-index">{String(index + 1).padStart(2, '0')} / {project.type}</span>
          {project.featured && <span className="status-pill">Featured</span>}
        </div>

        <h3 className="mt-2.5 text-lg font-bold" style={{ fontFamily: 'var(--font-mono)', color: 'var(--ink-paper)' }}>
          {project.title}
        </h3>

        <div className="spec-row">
          <span className="spec-label">Problem</span>
          <p className="spec-value">{project.problem}</p>
        </div>

        <div className="spec-row">
          <span className="spec-label">Approach</span>
          <p className="spec-value">{project.approach}</p>
        </div>

        <div className="spec-row">
          <span className="spec-label">Outcome</span>
          <p className="outcome-headline">{project.outcome}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>

        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.github && (
            <a className="action-link py-1.5 px-3 text-xs" href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="size-3.5" />
              Source
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
  )
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
      <span className="section-index" aria-hidden="true">03 / 05</span>
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Case studies, not a wall of tech logos.</h2>
        <p>
          Five projects, each broken down the way I'd explain it in an interview —
          the problem, the approach, and what it actually shipped.
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
              aria-pressed={activeFilter === filter}
              className={`rounded-md px-4 py-1.5 font-mono text-xs font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'text-[#14100a]'
                  : 'border text-white/50 hover:text-white'
              }`}
              style={
                activeFilter === filter
                  ? { background: '#ffb020' }
                  : { borderColor: 'var(--ink-line-strong)' }
              }
            >
              {filter}
              {filter === 'All' && <span className="ml-1.5 opacity-50">{projects.length}</span>}
              {filter === 'Featured' && <span className="ml-1.5 opacity-50">{projects.filter(p => p.featured).length}</span>}
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
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ProjectsSection
