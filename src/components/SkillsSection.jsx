import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, Cloud, Code2, Database, GitBranch, ShieldCheck } from 'lucide-react'

const skillGroups = [
  {
    title: 'Backend Engineering',
    icon: Code2,
    color: 'cyan',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'Hibernate', 'REST APIs', 'JUnit', 'Mockito']
  },
  {
    title: 'Frontend Product Work',
    icon: Brain,
    color: 'purple',
    skills: ['React.js', 'Next.js 14', 'JavaScript ES6+', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js']
  },
  {
    title: 'Data & Persistence',
    icon: Database,
    color: 'blue',
    skills: ['MySQL', 'MongoDB', 'SQL', 'Schema Design', 'Query Optimisation', 'JWT', 'OAuth 2.0']
  },
  {
    title: 'Delivery & Quality',
    icon: GitBranch,
    color: 'emerald',
    skills: ['Git', 'Docker', 'Jenkins', 'SonarQube', 'GitHub Actions', 'CI/CD', 'TDD']
  },
  {
    title: 'Cloud & Platforms',
    icon: Cloud,
    color: 'indigo',
    skills: ['Azure', 'AWS', 'GCP', 'DevSecOps', 'Postman', 'IntelliJ IDEA']
  },
  {
    title: 'CS Foundations',
    icon: ShieldCheck,
    color: 'violet',
    skills: ['System Design', 'Microservices', 'OOP', 'DSA', 'Operating Systems', 'DBMS', 'Distributed Systems', 'Computer Networks']
  }
]

const COUNTERS = [
  { end: 60000, suffix: '+', label: 'ML Summer School\napplicants screened from', prefix: '' },
  { end: 500, suffix: '+', label: 'DSA problems\nsolved on major platforms', prefix: '' },
  { end: 1600, suffix: '+', label: 'Codeforces rating\n(Specialist rank, top 15%)', prefix: '' },
  { end: 85, suffix: '%', label: 'reduction in frontend\nhandoff time at Nagarro', prefix: '' }
]

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const startedRef = useRef(false)

  useEffect(() => {
    if (!isInView || startedRef.current) return
    startedRef.current = true

    const steps = 72
    const increment = end / steps
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {count >= 1000 ? (count / 1000).toFixed(count % 1000 === 0 ? 0 : 1) + 'K' : count.toLocaleString()}
      {suffix}
    </span>
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
}
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const SkillsSection = () => (
  <section id="skills" className="section-shell">
    <div className="section-heading">
      <p className="eyebrow">Skills</p>
      <h2>A stack shaped around reliable product delivery.</h2>
      <p>
        The real story isn't percentage bars — it's the combination of backend depth, frontend
        execution, deployment awareness, and algorithmic problem-solving.
      </p>
    </div>

    {/* skill groups grid */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {skillGroups.map((group) => {
        const Icon = group.icon
        return (
          <motion.article key={group.title} variants={cardVariants} className="feature-card">
            <div className="mb-5 flex items-center gap-3">
              <span className="skill-icon-wrap">
                <Icon className="size-5" />
              </span>
              <h3 className="text-base">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        )
      })}
    </motion.div>

    {/* animated counters */}
    <div className="mx-auto mt-12 max-w-7xl">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-6 text-center"
      >
        By the numbers
      </motion.p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
      >
        {COUNTERS.map((c) => (
          <motion.div key={c.label} variants={cardVariants} className="counter-card">
            <div className="counter-value">
              <AnimatedCounter end={c.end} suffix={c.suffix} />
            </div>
            <p className="counter-label whitespace-pre-line">{c.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* certifications */}
    <div className="mx-auto mt-8 grid max-w-7xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="feature-card"
      >
        <h3>Competitive programming</h3>
        <p className="mt-3">
          I use competitive programming to keep fundamentals sharp: decomposition, complexity
          analysis, edge cases, and pressure-tested implementation. Codeforces Specialist (top 15%
          globally) with 1600+ rating across 500+ problems.
        </p>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="feature-card"
      >
        <h3>Certifications & recognition</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            'Amazon ML Summer School \'23 — selected from 60,000+ applicants (~5% acceptance)',
            'Codeforces Specialist rank — top 15% globally, 1600+ rating',
            'AWS Academy Cloud Developing — certified cloud developer',
            'AWS Academy Cloud Foundations — AWS core services certified'
          ].map((item) => (
            <p key={item} className="impact-item text-sm">
              {item}
            </p>
          ))}
        </div>
      </motion.article>
    </div>
  </section>
)

export default SkillsSection
