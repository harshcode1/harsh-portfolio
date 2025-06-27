import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, Download, ExternalLink, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 particle-bg">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 glass-card">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-2xl font-bold text-white cursor-pointer hover-lift"
                    onClick={() => scrollToSection('home')}
                  >
                    <span className="gradient-text">Harsh Soni</span>
                  </motion.div>

                  {/* Desktop Navigation */}
                  <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-white/80 hover:text-white transition-colors relative hover-lift ${
                          activeSection === item.id ? 'text-purple-400' : ''
                        }`}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <motion.div
                            layoutId="activeSection"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Mobile Menu */}
                  <div className="flex items-center space-x-4">
                    {/* Theme toggle disabled - dark mode only */}
                    {/* <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleDarkMode}
                      className="text-white hover:bg-white/10 hover-lift"
                    >
                      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </Button> */}

                    <Button
                      variant="ghost"
                      size="icon"
                      className="md:hidden text-white hover:bg-white/10 hover-lift"
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                      {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                  </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden py-4 border-t border-white/10"
                  >
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left py-2 text-white/80 hover:text-white transition-colors hover-lift ${
                          activeSection === item.id ? 'text-purple-400' : ''
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <img
                      src="/profile.jpg"
                      alt="Harsh Soni"
                      className="relative w-32 h-32 mx-auto rounded-full border-4 border-purple-500/50 float-animation object-cover"
                    />
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-white">
                    Hi, I'm{' '}
                    <span className="gradient-text">
                      Harsh Soni
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto">
                    Full Stack Developer & Software Engineer
                  </p>

                  <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
                    Passionate about creating innovative web applications with modern technologies. 
                    Experienced in Java, React, Next.js, and cloud technologies.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                    <Button
                      onClick={() => scrollToSection('contact')}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full text-lg hover-lift glow-animation"
                    >
                      Get In Touch
                    </Button>

                    <Button
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg hover-lift"
                      onClick={() => window.open('https://drive.google.com/file/d/1y-E6tCk_HBt3mWfU-k93Eycxk7crkUdm/view', '_blank')}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Button>
                  </div>

                  <div className="flex justify-center space-x-6 pt-8">
                    <a
                      href="https://github.com/harshcode1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors hover-lift cursor-pointer"
                      title="GitHub Profile"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                    <a
                      href="https://linkedin.com/in/harsh-soni-885651221"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors hover-lift cursor-pointer"
                      title="LinkedIn Profile"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a
                      href="mailto:harsh9995soni@gmail.com"
                      className="text-white/60 hover:text-white transition-colors hover-lift cursor-pointer"
                      title="Send Email"
                    >
                      <Mail className="h-6 w-6" />
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <ChevronDown 
                    className="h-8 w-8 text-white/60 animate-bounce cursor-pointer hover-lift" 
                    onClick={() => scrollToSection('about')} 
                  />
                </motion.div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="glass-card glass-card-hover rounded-2xl p-8">
                      <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                      <p className="text-white/80 leading-relaxed mb-4">
                        I'm a Computer Science graduate from The NorthCap University with a CGPA of 8.5, 
                        passionate about full-stack development and software engineering.
                      </p>
                      <p className="text-white/80 leading-relaxed mb-4">
                        Currently working as a Software Engineer Intern at Nagarro, where I develop 
                        Java applications using Spring Boot and implement CI/CD pipelines.
                      </p>
                      <p className="text-white/80 leading-relaxed">
                        I've achieved Specialist rank on CodeForces and solved 500+ DSA problems, 
                        demonstrating my strong algorithmic thinking and problem-solving skills.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="glass-card glass-card-hover rounded-2xl p-8">
                      <h3 className="text-2xl font-semibold text-white mb-6">Education & Achievements</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-medium text-purple-400">The NorthCap University</h4>
                          <p className="text-white/80">B.Tech Computer Science (2021-2025) - Graduated</p>
                          <p className="text-white/60">CGPA: 8.5</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-purple-400">Amazon ML Summer School</h4>
                          <p className="text-white/80">Selected from thousands of applicants</p>
                          <p className="text-white/60">Advanced ML training program</p>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-purple-400">Certifications</h4>
                          <p className="text-white/80">AWS Academy Cloud Developing</p>
                          <p className="text-white/80">AWS Academy Cloud Foundations</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <ExperienceSection />

            {/* Projects Section */}
            <ProjectsSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Contact Section */}
            <ContactSection />

            {/* Footer */}
            <footer className="py-8 px-4 border-t border-white/10">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-white/60">
                  © 2025 Harsh Soni. Built with React, Tailwind CSS, and Framer Motion.
                </p>
              </div>
            </footer>
          </div>
        </>
      )}
    </>
  )
}

export default App

