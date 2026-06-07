import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, Download, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const initialForm = { name: '', email: '', subject: '', message: '' }

const contactLinks = [
  { label: 'Email',    value: 'harsh9995soni@gmail.com', href: 'mailto:harsh9995soni@gmail.com', icon: Mail },
  { label: 'Phone',    value: '+91 8950775755',           href: 'tel:+918950775755',              icon: Phone },
  { label: 'Location', value: 'Gurugram, India',          href: 'https://maps.google.com/?q=Gurugram,India', icon: MapPin }
]

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/harshcode1',     icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harsh-soni', icon: Linkedin },
  { label: 'Email',    href: 'mailto:harsh9995soni@gmail.com',      icon: Mail }
]

const REQUIRED_ENV = ['VITE_EMAILJS_SERVICE_ID', 'VITE_EMAILJS_TEMPLATE_ID', 'VITE_EMAILJS_PUBLIC_KEY']

export default function ContactSection({ resumeUrl }) {
  const [form, setForm]       = useState(initialForm)
  const [sending, setSending] = useState(false)
  const [status, setStatus]   = useState(null)

  const configured = REQUIRED_ENV.every(k => Boolean(import.meta.env[k]))

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    if (!configured) { setStatus('missing'); return }
    setSending(true); setStatus(null)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message, to_name: 'Harsh Soni' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success'); setForm(initialForm)
    } catch { setStatus('error') }
    finally { setSending(false) }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Have a role or project in mind?</h2>
        <p>
          Send a message with context and timeline. Open to software engineering roles and
          meaningful full-stack product work.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">

        {/* form */}
        <motion.form
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          onSubmit={onSubmit}
          className="contact-form"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="form-label-text">Name</span>
              <input name="name" value={form.name} onChange={onChange} placeholder="Your name" required className="form-input" />
            </label>
            <label>
              <span className="form-label-text">Email</span>
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="you@example.com" required className="form-input" />
            </label>
          </div>
          <label>
            <span className="form-label-text">Subject</span>
            <input name="subject" value={form.subject} onChange={onChange} placeholder="What should we build or discuss?" required className="form-input" />
          </label>
          <label>
            <span className="form-label-text">Message</span>
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Share the useful details." rows={6} required className="form-input" />
          </label>

          <button type="submit" disabled={sending} className="btn-primary w-full justify-center py-3">
            {sending ? 'Sending…' : <><Send className="size-4" /> Send message</>}
          </button>

          {status === 'success' && <p className="form-alert success"><CheckCircle className="size-4 shrink-0" />Message sent — I'll get back to you soon.</p>}
          {status === 'error'   && <p className="form-alert error"><AlertCircle className="size-4 shrink-0" />Failed to send. Please email me directly.</p>}
          {status === 'missing' && <p className="form-alert error"><AlertCircle className="size-4 shrink-0" />Email service not configured — use direct email.</p>}
        </motion.form>

        {/* sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid gap-4 content-start"
        >
          <div className="card card-pad">
            <h3 className="text-sm font-bold">Direct channels</h3>
            <div className="mt-4 space-y-2.5">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label} href={href} className="contact-link"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="skill-icon size-9 shrink-0"><Icon className="size-4" /></span>
                  <span>
                    <span className="block text-[11px] text-white/35">{label}</span>
                    <span className="block text-sm font-semibold text-white">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="card card-pad">
            <h3 className="text-sm font-bold">Online</h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label} href={href} className="action-link"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <Icon className="size-3.5" />{label}
                </a>
              ))}
            </div>
          </div>

          <div className="card card-pad">
            <h3 className="text-sm font-bold">Resume</h3>
            <p className="mt-2 text-sm leading-6">Quick overview of my background, experience, and projects.</p>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-sm py-2.5 px-4">
              <Download className="size-3.5" /> Open PDF
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
