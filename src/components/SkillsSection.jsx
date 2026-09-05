import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Bot, Brain, Code2, Database, GitBranch, ShieldCheck } from 'lucide-react'

const skillGroups = [
  {
    title: 'AI & Agentic Systems',
    icon: Bot,
    skills: ['Multi-agent Orchestration', 'LLM Integration', 'Agentic Workflows', 'Prompt Engineering', 'Anthropic SDK', 'Phoenix OS', 'Deterministic AI']
  },
  {
    title: 'Backend Engineering',
    icon: Code2,
    skills: ['Java 8+', 'Spring Boot 3', 'Spring Security', 'Hibernate', 'REST APIs', 'JUnit', 'Mockito']
  },
  {
    title: 'Frontend',
    icon: Brain,
    skills: ['React.js', 'Next.js 14', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js']
  },
  {
    title: 'Data & Persistence',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'SQL', 'Schema Design', 'JWT', 'OAuth 2.0']
  },
  {
    title: 'DevOps & Cloud',
    icon: GitBranch,
    skills: ['Docker', 'GitHub Actions', 'Jenkins', 'SonarQube', 'Azure', 'AWS', 'GCP', 'CI/CD', 'DevSecOps', 'TDD']
  },
  {
    title: 'CS Foundations',
    icon: ShieldCheck,
    skills: ['System Design', 'Microservices', 'OOP', 'DSA', 'Operating Systems', 'DBMS', 'Distributed Systems']
  }
]

/* Two marquee rows with different speeds + directions */
const ROW_1 = ['Multi-agent AI', 'Phoenix OS', 'LLM Orchestration', 'Java', 'Spring Boot', 'React.js', 'Next.js 14', 'TypeScript', 'Node.js', 'Docker', 'AWS', 'Azure', 'GCP', 'Anthropic SDK', 'Spring Security']
const ROW_2 = ['Agentic Workflows', 'Prompt Engineering', 'TDD', 'JUnit', 'Mockito', 'CI/CD', 'GitHub Actions', 'SonarQube', 'System Design', 'Microservices', 'DSA', 'Tailwind CSS', 'DevSecOps', 'Hibernate']

const COUNTERS = [
  { end: 24,   suffix: '',  label: 'Phoenix OS\nspecialized agents' },
  { end: 85,   suffix: '%',  label: 'frontend handoff\ntime cut' },
  { end: 1600, suffix: '+',  label: 'Codeforces\nrating' },
  { end: 500,  suffix: '+',  label: 'DSA problems\nsolved' }
]

function Counter({ end, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const steps = 60
    const step = end / steps
    const interval = duration / steps
    let cur = 0
    const t = setInterval(() => {
      cur += step
      if (cur >= end) { setCount(end); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, interval)
    return () => clearInterval(t)
  }, [inView, end, duration])

  const display = end >= 10000 ? `${Math.round(count / 1000)}K` : count

  return <span ref={ref}>{display}{suffix}</span>
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.48, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <span className="section-index">04 / 05</span>
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>AI-native stack built for production delivery.</h2>
        <p>
          Multi-agent orchestration, backend depth, frontend execution, and cloud deployment —
          combined into a stack that ships AI systems and software that actually works.
        </p>
      </div>

      {/* skill group cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {skillGroups.map((group, i) => {
          const Icon = group.icon
          return (
            <motion.div key={group.title} custom={i} variants={cardVariants} className="card card-pad">
              <div className="mb-4 flex items-center gap-3">
                <span className="skill-icon"><Icon className="size-4" /></span>
                <h3 className="text-sm font-bold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map(s => <span key={s} className="tech-pill">{s}</span>)}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* marquee rows */}
      <div className="mx-auto mt-10 max-w-6xl space-y-3 overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...ROW_1, ...ROW_1].map((s, i) => (
              <span key={i} className="marquee-tag">{s}</span>
            ))}
          </div>
        </div>
        <div className="marquee-wrap">
          <div className="marquee-track marquee-track-rev">
            {[...ROW_2, ...ROW_2].map((s, i) => (
              <span key={i} className="marquee-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* animated counters */}
      <div className="mx-auto mt-12 max-w-6xl">
        <p className="eyebrow mb-5 text-center">By the numbers</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {COUNTERS.map((c, i) => (
            <motion.div key={c.label} custom={i} variants={cardVariants} className="counter-card">
              <div className="counter-num">
                <Counter end={c.end} suffix={c.suffix} />
              </div>
              <p className="counter-label whitespace-pre-line">{c.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* certs */}
      <div className="mx-auto mt-8 grid max-w-6xl gap-4 lg:grid-cols-2">
        {[
          {
            title: 'Phoenix OS & Agentic AI',
            body: 'Core-team engineer on Phoenix OS — an agentic, spec-driven SDLC framework featuring 24 specialized agents, a 126-file memory layer, and deterministic AI output via frozen artifact cascades, tool-agnostic across Claude Code, Copilot, Codex, and Cursor. Hands-on with multi-agent orchestration, MCP tool-calling, and enterprise-grade prompt pipelines.'
          },
          {
            title: 'Achievements & Certifications',
            bullets: [
              'Amazon ML Summer School \'23 — selected from 60,000+ applicants (~5% acceptance)',
              'AWS Academy Cloud Developing',
              'AWS Academy Cloud Foundations',
              'Codeforces Specialist (top 15% globally) — 1600+ rating, 500+ problems solved'
            ]
          }
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.48, delay: i * 0.08 }}
            className="card card-pad"
          >
            <h3 className="text-sm font-bold">{item.title}</h3>
            {item.body && <p className="mt-2.5 text-sm leading-6">{item.body}</p>}
            {item.bullets && (
              <ul className="mt-3 space-y-2">
                {item.bullets.map(b => <li key={b} className="impact-item">{b}</li>)}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
