import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Nagarro',
    location: 'Gurugram',
    period: 'Jan 2025 – Present',
    current: true,
    summary: 'Contributing to Phoenix OS — Nagarro Ventures Studios\' agentic framework for spec-driven development — while shipping Spring Boot services, React interfaces, and AI-driven DevOps automation at enterprise scale.',
    impact: [
      'Contributing to Phoenix OS (Nagarro Ventures Studios) — a multi-agent framework with 19 specialized agents and 21+ orchestration commands that makes AI copilots deterministic for enterprise code generation.',
      'Engineered the Context Retention System — Phoenix OS\'s Long-Term Memory (LTM) module — managing 62 accumulated pattern/standard files with automated TDD Quality Gates enforcing Red Phase compliance checks.',
      'Built the DevOps Orchestration Agent (DevXopsGuardian) generating 29–47 multi-cloud CI/CD config files (GitHub Actions, Azure DevOps, GitLab CI, Jenkins) with integrated DevSecOps safeguards — 2-day setup reduced to ~15 min.',
      'Built Atomic React.js components with reusable Tailwind design tokens; structured code reviews cut frontend handoff time by 85%.',
      'Enhanced iLease (Erste Bank FinTech) by optimising Spring Boot microservices and multi-threaded modules — 15% improvement in high-volume transaction throughput.'
    ],
    stack: ['Multi-agent Systems', 'LLM Orchestration', 'Java 8+', 'Spring Boot', 'React.js', 'TDD', 'JUnit', 'Mockito', 'Azure', 'AWS', 'GCP', 'Anthropic SDK']
  },
  {
    title: 'Full Stack Intern',
    company: 'TailorTalk',
    location: 'Remote',
    period: 'Aug 2024 – Oct 2024',
    current: false,
    summary: 'Led full-stack development in an Agile setup, revamping an AI assistant and improving engagement, site speed, and backend efficiency.',
    impact: [
      'Revamped AI assistant + optimised backend APIs via SEO and Lighthouse audits — boosted user engagement by 25%, site speed by 30%, data efficiency by 40%.',
      'Version-controlled features with Git in an Agile/Scrum workflow; collaborated on RESTful API integrations.',
      'Maintained clean, modular backend code following established Java-style best practices.'
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'Git', 'Agile/Scrum', 'SEO', 'Lighthouse']
  },
  {
    title: 'Amazon ML Summer School',
    company: 'Amazon',
    location: 'Remote',
    period: 'Sep 2023 – Oct 2023',
    current: false,
    summary: 'Selected from 60,000+ nationwide applicants (~5% acceptance) for Amazon\'s elite machine learning programme.',
    impact: [
      'Studied probabilistic graphical models, reinforcement learning, deep neural networks, unsupervised and supervised learning.',
      'ML fundamentals that directly inform AI-assisted application development and system design decisions.'
    ],
    stack: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'PGMs']
  }
]

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

export default function ExperienceSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 85%', 'end 30%'] })
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 })

  return (
    <section id="experience" ref={sectionRef} className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Engineering roles — AI systems to enterprise backends.</h2>
        <p>
          A timeline of positions where I contributed to agentic frameworks, shipped backend services,
          automated CI/CD pipelines, and built product interfaces — all with quantified impact.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* timeline */}
        <div className="tl-wrap">
          {/* animated fill line */}
          <div className="tl-line">
            <motion.div className="tl-line-fill h-full" style={{ scaleY, originY: 0 }} />
          </div>

          {experiences.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.title}`}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className={`tl-card ${exp.current ? 'tl-card-current' : ''}`}
            >
              {/* dot */}
              <span className={`tl-dot ${exp.current ? 'tl-dot-current' : ''}`} />

              {/* header */}
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base font-bold text-white">{exp.title}</h3>
                    {exp.current && (
                      <span className="status-pill">
                        <span className="avail-dot" style={{ width: 6, height: 6 }} />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-base font-semibold text-cyan-300">{exp.company}</p>
                </div>
              </div>

              {/* meta */}
              <div className="mt-2.5 flex flex-wrap gap-4 text-xs text-white/40">
                <span className="inline-flex items-center gap-1.5"><Calendar className="size-3.5" />{exp.period}</span>
                <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{exp.location}</span>
              </div>

              <p className="mt-3.5 text-sm text-white/58 leading-6">{exp.summary}</p>

              <ul className="mt-4 space-y-2.5">
                {exp.impact.map((item) => (
                  <li key={item} className="impact-item">{item}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {exp.stack.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
