import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  BriefcaseBusiness,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  X
} from 'lucide-react'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import './App.css'

const RESUME_URL = '/Harsh-Soni-Resume.pdf'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
]

const ROLES = [
  'Full Stack Engineer',
  'Java & Spring Boot Dev',
  'React & Next.js Builder',
  'DevOps Automation Expert'
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    let wordIdx = 0
    let charIdx = 0
    let deleting = false

    const tick = () => {
      const word = words[wordIdx]
      if (!deleting) {
        charIdx++
        setText(word.slice(0, charIdx))
        if (charIdx === word.length) {
          deleting = true
          timerRef.current = setTimeout(tick, 2400)
          return
        }
        timerRef.current = setTimeout(tick, 82)
      } else {
        charIdx--
        setText(word.slice(0, charIdx))
        if (charIdx === 0) {
          deleting = false
          wordIdx = (wordIdx + 1) % words.length
          timerRef.current = setTimeout(tick, 420)
          return
        }
        timerRef.current = setTimeout(tick, 44)
      }
    }

    timerRef.current = setTimeout(tick, 900)
    return () => clearTimeout(timerRef.current)
  }, [words])

  return text
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const role = useTypewriter(ROLES)

  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollPosition = window.scrollY + 120
      for (const item of navItems) {
        const element = document.getElementById(item.id)
        if (!element) continue
        const top = element.offsetTop
        const bottom = top + element.offsetHeight
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(item.id)
          break
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const highlights = useMemo(
    () => [
      { label: 'Current role', value: 'Software Engineer · Nagarro' },
      { label: 'Competitive', value: 'Codeforces Specialist · 1600+ rating' },
      { label: 'Stack', value: 'Java · Spring · React · Next.js · DevOps' }
    ],
    []
  )

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080c14] text-white">

      {/* ── Navbar ── */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.07] bg-[#080c14]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <span
              style={{
                background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(139,92,246,0.15))',
                border: '1px solid rgba(34,211,238,0.3)'
              }}
              className="grid size-10 place-items-center rounded-xl text-sm font-bold text-cyan-300"
            >
              HS
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-wide text-white">Harsh Soni</span>
              <span className="block text-xs text-white/50">Full Stack Software Engineer</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-white text-[#080c14]'
                    : 'text-white/60 hover:bg-white/8 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/4 text-white md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/8 bg-[#080c14]/95 backdrop-blur-2xl px-4 py-3 md:hidden"
          >
            {navItems.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full rounded-lg px-3 py-3 text-left text-sm font-medium ${
                  activeSection === item.id ? 'bg-white/10 text-white' : 'text-white/65'
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      <main>
        {/* ── Hero ── */}
        <section id="home" className="relative isolate min-h-screen px-4 pt-24 sm:px-6 lg:px-8 overflow-hidden">
          {/* background grid */}
          <div className="hero-grid absolute inset-0 -z-10" />

          {/* floating orbs */}
          <div className="hero-orb hero-orb-cyan absolute -z-10" style={{ top: '-8%', left: '-8%' }} />
          <div className="hero-orb hero-orb-purple absolute -z-10" style={{ top: '20%', right: '-10%' }} />
          <div className="hero-orb hero-orb-indigo absolute -z-10" style={{ bottom: '5%', left: '25%' }} />

          <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-14 py-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-3xl"
            >
              {/* badge */}
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-2 text-sm font-medium text-emerald-200"
              >
                <span className="size-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-dot 1.8s ease-out infinite' }} />
                <BriefcaseBusiness className="size-4" />
                Software Engineer · Nagarro · Jan 2025 – Present
              </motion.p>

              {/* name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="mb-4 text-6xl font-black leading-[1.0] tracking-tight sm:text-7xl lg:text-8xl"
              >
                <span className="block text-white/90">Hi, I'm</span>
                <span className="text-gradient block">Harsh Soni</span>
              </motion.h1>

              {/* typewriter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mb-6 flex items-center text-xl font-semibold text-white/70 sm:text-2xl"
              >
                <span className="text-gradient-cyan">{role}</span>
                <span className="typewriter-cursor" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.4 }}
                className="mb-10 max-w-xl text-lg leading-8 text-white/58"
              >
                Computer science grad building Java Spring Boot services, React interfaces,
                multi-cloud CI/CD automation, and products where performance and reliability matter.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-8 flex flex-col gap-3 sm:flex-row"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection('projects')}
                  className="primary-action inline-flex items-center px-6 py-3.5 text-base"
                >
                  View my work
                  <ArrowDown className="ml-2 size-4" />
                </button>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link px-6 py-3.5 text-base"
                >
                  <Download className="size-4" />
                  Resume
                </a>
              </motion.div>

              {/* socials */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="flex items-center gap-3"
              >
                <a className="social-link" href="https://github.com/harshcode1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="size-5" />
                </a>
                <a className="social-link" href="https://linkedin.com/in/harsh-soni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="size-5" />
                </a>
                <a className="social-link" href="mailto:harsh9995soni@gmail.com" aria-label="Email">
                  <Mail className="size-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* profile + stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="profile-panel">
                <img src="/profile.jpg" alt="Harsh Soni" className="h-full w-full object-cover" />
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
                    className="rounded-xl border border-white/8 bg-white/[0.04] p-4 backdrop-blur-sm"
                    style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)' }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40">{h.label}</p>
                    <p className="mt-2 text-sm font-semibold leading-5 text-white/85">{h.value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2 className="text-gradient">A practical engineer with product instincts.</h2>
            <p>
              I like work that sits close to real users and real systems: APIs that stay reliable,
              dashboards that make decisions easier, and delivery pipelines that help teams ship
              with confidence.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55 }}
              className="feature-card lg:col-span-2"
            >
              <div className="skill-icon-wrap mb-5">
                <BriefcaseBusiness className="size-5" />
              </div>
              <h3>What I bring</h3>
              <p className="mt-3">
                My background combines Java backend development, full-stack product building, and
                competitive programming. At Nagarro, I work on Spring Boot service layers, React
                components, TDD compliance systems, and DevOps automation — shipping to production
                across Azure, AWS, and GCP. In side projects, I've built productivity tools and crypto
                simulators with modern Java and Next.js stacks.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="feature-card"
            >
              <h3>Education</h3>
              <p className="mt-3">
                B.Tech Computer Science<br />
                <span className="font-semibold text-white/85">The NorthCap University</span>, Gurugram<br />
                2021 – 2025 · CGPA <span className="font-bold text-cyan-300">8.53</span>
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="feature-card"
            >
              <h3>Recognition</h3>
              <p className="mt-3">
                Amazon ML Summer School '23 (selected from 60,000+ applicants), AWS Academy Cloud
                Foundations, and AWS Academy Cloud Developing.
              </p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="feature-card lg:col-span-2"
            >
              <h3>How I work</h3>
              <p className="mt-3">
                I care about readable code, measurable outcomes, and interfaces that don't make users
                think harder than they need to. I prefer simple systems that can be explained, tested,
                and improved over clever complexity. TDD, clean APIs, and proper documentation aren't
                optional extras — they're how I ship.
              </p>
            </motion.article>
          </div>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection resumeUrl={RESUME_URL} />
      </main>

      <footer className="border-t border-white/[0.07] px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/35">
            © 2026 Harsh Soni — Built with React, Vite & Framer Motion
          </p>
          <div className="flex items-center gap-3">
            <a className="social-link" href="https://github.com/harshcode1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="size-4" />
            </a>
            <a className="social-link" href="https://linkedin.com/in/harsh-soni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="size-4" />
            </a>
            <a className="social-link" href="mailto:harsh9995soni@gmail.com" aria-label="Email">
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
