import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Nagarro',
    location: 'Gurugram',
    period: 'January 2025 – Present',
    current: true,
    summary:
      'Building Spring Boot service layers, React components, TDD compliance systems, and multi-cloud DevOps automation on enterprise-scale platforms.',
    impact: [
      'Developed Spring Boot service layers in the Phoenix OS platform using Java 8+ (streams, lambdas, Optional); authored JUnit + Mockito test suites as part of mandatory TDD compliance gates.',
      'Engineered a Context Retention System with strict TDD quality gates — enforced mandatory interface definitions and Red Phase failing tests before implementation via automated compliance checks.',
      'Built atomic React.js components from design specs using reusable Tailwind design token patterns; structured code reviews and clean code principles cut frontend handoff time by 85%.',
      'Developed a DevOps Orchestration Agent automating multi-cloud CI/CD setup (Azure / AWS / GCP) for existing infrastructure — generates 30+ configuration files with integrated DevSecOps safeguards.',
      'Enhanced iLease (Erste Bank FinTech platform) by optimizing Spring Boot microservices and multi-threaded modules, achieving 15% improvement in data throughput for high-volume transactions.'
    ],
    stack: ['Java 8+', 'Spring Boot', 'Spring Security', 'React.js', 'Tailwind CSS', 'JUnit', 'Mockito', 'Azure', 'AWS', 'GCP', 'DevSecOps', 'TDD']
  },
  {
    title: 'Full Stack Intern',
    company: 'TailorTalk',
    location: 'Remote',
    period: 'August 2024 – October 2024',
    current: false,
    summary:
      'Led full-stack development in an Agile setup, revamping an AI assistant and improving product engagement, performance, and backend efficiency.',
    impact: [
      'Revamped AI assistant and optimized backend APIs through SEO and Lighthouse audits — boosted user engagement by 25%, site speed by 30%, and data efficiency by 40%.',
      'Version-controlled features with Git in an Agile/Scrum workflow; collaborated on RESTful API integrations and maintained clean, modular Java-style backend code.',
      'Maintained clean, modular backend code following established best practices throughout the project lifecycle.'
    ],
    stack: ['React', 'Node.js', 'REST APIs', 'Git', 'Agile/Scrum', 'SEO', 'Lighthouse']
  },
  {
    title: 'Amazon ML Summer School',
    company: 'Amazon',
    location: 'Remote',
    period: 'September 2023 – October 2023',
    current: false,
    summary:
      'Selected from 60,000+ applicants nationwide (~5% acceptance) for Amazon\'s elite machine learning programme.',
    impact: [
      'Gained expertise in probabilistic graphical models, reinforcement learning, deep neural networks, unsupervised learning, and supervised learning.',
      'Strengthened ML fundamentals that directly inform AI-assisted application development and system design thinking.'
    ],
    stack: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Reinforcement Learning', 'PGMs']
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}
const itemVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } }
}

const ExperienceSection = () => (
  <section id="experience" className="section-shell">
    <div className="section-heading">
      <p className="eyebrow">Experience</p>
      <h2>Engineering roles with measurable outcomes.</h2>
      <p>
        A timeline of positions where I shipped backend services, product interfaces, performance
        improvements, and quality automation — all with real metrics.
      </p>
    </div>

    <div className="mx-auto max-w-5xl">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative border-l border-white/[0.09] pl-8 sm:pl-12"
      >
        {experiences.map((exp) => (
          <motion.article
            key={`${exp.company}-${exp.title}`}
            variants={itemVariants}
            className={`timeline-card ${exp.current ? 'timeline-card-current' : ''}`}
          >
            {/* timeline dot */}
            <span className={`timeline-dot ${exp.current ? 'timeline-dot-current' : ''}`} />

            {/* header */}
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3>{exp.title}</h3>
                  {exp.current && (
                    <span className="status-pill">
                      <span
                        className="size-1.5 rounded-full bg-emerald-400"
                        style={{ animation: 'pulse-dot 1.8s ease-out infinite' }}
                      />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-1 text-lg font-semibold text-cyan-300">{exp.company}</p>
              </div>
            </div>

            {/* meta */}
            <div className="mt-3 flex flex-wrap gap-5 text-sm text-white/50">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                {exp.period}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                {exp.location}
              </span>
            </div>

            <p className="mt-5 text-white/65">{exp.summary}</p>

            <ul className="mt-5 space-y-3">
              {exp.impact.map((item) => (
                <li key={item} className="impact-item">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  </section>
)

export default ExperienceSection
