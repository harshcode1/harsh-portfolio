import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, BriefcaseBusiness, Download,
  Github, Linkedin, Mail, MapPin, Menu, X
} from 'lucide-react'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection  from './components/ProjectsSection.jsx'
import SkillsSection    from './components/SkillsSection.jsx'
import ContactSection   from './components/ContactSection.jsx'
import './App.css'

const RESUME_URL = '/Harsh-Soni-Resume.pdf'

const navItems = [
  { id: 'home',       label: 'Home' },
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'skills',     label: 'Skills' },
  { id: 'contact',    label: 'Contact' }
]

const ROLES = [
  'AI Systems Engineer',
  'Agentic Framework Builder',
  'Full Stack Developer',
  'Java · Spring Boot Dev'
]

/* ─── Typewriter hook ──────────────────────────────────────────────────── */
function useTypewriter(words) {
  const [text, setText] = useState('')
  const timer = useRef(null)

  useEffect(() => {
    let wIdx = 0, cIdx = 0, del = false
    const tick = () => {
      const word = words[wIdx]
      if (!del) {
        cIdx++
        setText(word.slice(0, cIdx))
        if (cIdx === word.length) { del = true; timer.current = setTimeout(tick, 2200); return }
        timer.current = setTimeout(tick, 78)
      } else {
        cIdx--
        setText(word.slice(0, cIdx))
        if (cIdx === 0) { del = false; wIdx = (wIdx + 1) % words.length; timer.current = setTimeout(tick, 380); return }
        timer.current = setTimeout(tick, 42)
      }
    }
    timer.current = setTimeout(tick, 900)
    return () => clearTimeout(timer.current)
  }, [words])

  return text
}

/* ─── Hero stat card ───────────────────────────────────────────────────── */
function StatCard({ value, label }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2.5 text-center backdrop-blur-sm">
      <p className="text-sm font-bold text-white">{value}</p>
      <p className="mt-0.5 text-[11px] text-white/40 leading-tight">{label}</p>
    </div>
  )
}

/* ─── About card ───────────────────────────────────────────────────────── */
function AboutCard({ children, className = '' }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.52, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`card card-pad ${className}`}
    >
      {children}
    </motion.article>
  )
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled]   = useState(false)
  const [mouse, setMouse]         = useState({ x: -999, y: -999 })
  const [spotOn, setSpotOn]       = useState(false)
  const heroRef = useRef(null)
  const role    = useTypewriter(ROLES)

  /* dark mode */
  useEffect(() => { document.documentElement.classList.add('dark') }, [])

  /* scroll tracking */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const pos = window.scrollY + 120
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (!el) continue
        if (pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* mouse spotlight */
  const onMouseMove = useCallback((e) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setSpotOn(true)
  }, [])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }, [])

  const stats = useMemo(() => [
    { value: '19+',      label: 'AI agents · Phoenix OS' },
    { value: '1600+',    label: 'Codeforces rating' },
    { value: 'Top 5%',   label: 'Amazon ML School \'23' }
  ], [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#09091a] text-white">

      {/* grain texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-[#09091a]/90 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,.45)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">

          <button type="button" onClick={() => scrollTo('home')} className="flex items-center gap-2.5" aria-label="Home">
            <span
              className="grid size-9 place-items-center rounded-lg text-sm font-bold text-cyan-300"
              style={{ background: 'linear-gradient(135deg,rgba(34,211,238,.14),rgba(139,92,246,.14))', border: '1px solid rgba(34,211,238,.28)' }}
            >
              HS
            </span>
            <span className="hidden text-sm font-semibold text-white sm:block">Harsh Soni</span>
          </button>

          {/* desktop nav */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map(({ id, label }) => (
              <button
                key={id} type="button"
                onClick={() => scrollTo(id)}
                className={`nav-link ${activeSection === id ? 'nav-link-active' : ''}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* mobile hamburger */}
          <button
            type="button"
            className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/4 md:hidden"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/[0.07] bg-[#09091a]/95 backdrop-blur-2xl px-4 py-2 md:hidden"
          >
            {navItems.map(({ id, label }) => (
              <button
                key={id} type="button"
                onClick={() => scrollTo(id)}
                className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium ${activeSection === id ? 'bg-white/10 text-white' : 'text-white/55'}`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      <main>
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section
          id="home"
          ref={heroRef}
          onMouseMove={onMouseMove}
          onMouseLeave={() => setSpotOn(false)}
          className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-20 sm:px-6 lg:px-8"
        >
          {/* background layers */}
          <div className="hero-grid absolute inset-0 -z-20" />
          <div className="hero-glow  absolute -z-10" style={{ top: '5%',  left: '-5%' }} />
          <div className="hero-glow-2 absolute -z-10" style={{ top: '30%', right: '-8%' }} />

          {/* mouse spotlight */}
          <div
            className="hero-spotlight pointer-events-none absolute -z-10"
            style={{ left: mouse.x, top: mouse.y, opacity: spotOn ? 1 : 0 }}
          />

          <div className="mx-auto w-full max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">

              {/* ── Left: text content ── */}
              <div className="max-w-2xl">

                {/* badge */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/7 px-3.5 py-1.5 text-xs font-semibold text-emerald-200"
                >
                  <span className="avail-dot" />
                  <BriefcaseBusiness className="size-3.5" />
                  Software Engineer · Nagarro · Jan 2025 – Present
                </motion.div>

                {/* name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08 }}
                >
                  <p className="mb-1 text-lg font-medium text-white/45 sm:text-xl">Hi, I'm</p>
                  <h1
                    className="font-black tracking-tight text-white"
                    style={{ fontSize: 'clamp(2.8rem,6.5vw,4.8rem)', lineHeight: 1.05, letterSpacing: '-.03em' }}
                  >
                    Harsh <span className="text-gradient">Soni</span>
                    <span style={{ color: '#22d3ee' }}>.</span>
                  </h1>
                </motion.div>

                {/* typewriter */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.22 }}
                  className="mt-3 mb-5 flex items-center gap-2 text-base font-medium text-white/55 sm:text-lg"
                >
                  <span className="text-gradient-cyan font-semibold">{role}</span>
                  <span className="tw-cursor" />
                </motion.div>

                {/* bio */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.3 }}
                  className="mb-8 max-w-lg text-base leading-7 text-white/52"
                >
                  CS grad contributing to Phoenix OS — a Nagarro Ventures Studios agentic framework that makes
                  AI copilots deterministic for enterprise code generation. I ship multi-agent systems,
                  Spring Boot services, and React interfaces that teams rely on in production.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.38 }}
                  className="mb-7 flex flex-wrap gap-3"
                >
                  <button type="button" onClick={() => scrollTo('projects')} className="btn-primary">
                    View my work <ArrowDown className="size-4" />
                  </button>
                  <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                    <Download className="size-4" /> Resume
                  </a>
                </motion.div>

                {/* socials + location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <a className="social-btn" href="https://github.com/harshcode1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="size-4" />
                  </a>
                  <a className="social-btn" href="https://linkedin.com/in/harsh-soni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="size-4" />
                  </a>
                  <a className="social-btn" href="mailto:harsh9995soni@gmail.com" aria-label="Email">
                    <Mail className="size-4" />
                  </a>
                  <span className="flex items-center gap-1.5 text-xs text-white/35">
                    <MapPin className="size-3.5" />
                    Gurugram, India
                  </span>
                </motion.div>
              </div>

              {/* ── Right: circular photo + mini stats ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-col items-center gap-5 lg:items-start"
              >
                {/* photo */}
                <div className="profile-ring mx-auto lg:mx-0">
                  <div className="profile-ring-inner">
                    <img src="/profile.jpg" alt="Harsh Soni" />
                  </div>
                </div>

                {/* stat chips */}
                <div className="grid w-full max-w-[190px] gap-2 lg:w-auto">
                  {stats.map(s => <StatCard key={s.label} {...s} />)}
                </div>
              </motion.div>

            </div>

            {/* scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="mt-16 hidden justify-center md:flex"
            >
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="flex flex-col items-center gap-2 text-white/25 transition hover:text-white/50"
                aria-label="Scroll down"
              >
                <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowDown className="size-4" />
                </motion.div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────────────────── */}
        <section id="about" className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>A practical engineer with product instincts.</h2>
            <p>
              I like work that sits close to real users and real systems — APIs that stay reliable,
              dashboards that make decisions easier, and CI/CD pipelines that help teams ship fast.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
            <AboutCard className="lg:col-span-2">
              <div className="skill-icon mb-4"><BriefcaseBusiness className="size-4" /></div>
              <h3>What I bring</h3>
              <p className="mt-2.5 text-sm leading-7">
                Part of the team building Phoenix OS — a Nagarro Ventures Studios agentic framework
                making AI copilots deterministic for enterprise code generation. At Nagarro I work on
                multi-agent orchestration, AI-driven DevOps automation, Spring Boot service layers,
                and React interfaces. Amazon ML Summer School alum (top 5% from 60K+ applicants).
              </p>
            </AboutCard>

            <AboutCard>
              <h3>Education</h3>
              <div className="mt-3 space-y-1">
                <p className="text-sm font-semibold text-white/85">B.Tech Computer Science</p>
                <p className="text-sm text-white/45">The NorthCap University, Gurugram · 2021–2025</p>
              </div>
            </AboutCard>

            <AboutCard>
              <h3>Recognition</h3>
              <p className="mt-2.5 text-sm leading-7">
                Amazon ML Summer School '23 (selected from 60,000+), AWS Cloud Developing &
                Foundations certified. Codeforces Specialist (top 15%) with 1600+ rating.
              </p>
            </AboutCard>

            <AboutCard className="lg:col-span-2">
              <h3>How I work</h3>
              <p className="mt-2.5 text-sm leading-7">
                AI-native development where agents are deterministic, not probabilistic. Readable code,
                measurable outcomes, and systems that can be explained and improved. TDD compliance gates,
                frozen artifact cascades, and clean APIs — non-negotiable in everything I ship.
              </p>
            </AboutCard>
          </div>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection resumeUrl={RESUME_URL} />
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] px-4 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-white/28">
            © 2026 Harsh Soni · Built with React, Vite & Framer Motion
          </p>
          <div className="flex items-center gap-2.5">
            <a className="social-btn" href="https://github.com/harshcode1"    target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github className="size-3.5" /></a>
            <a className="social-btn" href="https://linkedin.com/in/harsh-soni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin className="size-3.5" /></a>
            <a className="social-btn" href="mailto:harsh9995soni@gmail.com" aria-label="Email"><Mail className="size-3.5" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
