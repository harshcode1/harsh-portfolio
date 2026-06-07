import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle, Download, Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'

const initialForm = { name: '', email: '', subject: '', message: '' }

const contactLinks = [
  { label: 'Email', value: 'harsh9995soni@gmail.com', href: 'mailto:harsh9995soni@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 8950775755', href: 'tel:+918950775755', icon: Phone },
  { label: 'Location', value: 'Gurugram, India', href: 'https://maps.google.com/?q=Gurugram,India', icon: MapPin }
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/harshcode1', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/harsh-soni', icon: Linkedin },
  { label: 'Email', href: 'mailto:harsh9995soni@gmail.com', icon: Mail }
]

const requiredEmailConfig = [
  'VITE_EMAILJS_SERVICE_ID',
  'VITE_EMAILJS_TEMPLATE_ID',
  'VITE_EMAILJS_PUBLIC_KEY'
]

const ContactSection = ({ resumeUrl }) => {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const isEmailConfigured = requiredEmailConfig.every((key) => Boolean(import.meta.env[key]))

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((cur) => ({ ...cur, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!isEmailConfigured) { setSubmitStatus('missing-config'); return }

    setIsSubmitting(true)
    setSubmitStatus(null)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, to_name: 'Harsh Soni' },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      setFormData(initialForm)
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Have a role or collaboration in mind?</h2>
        <p>
          Send a message with context, timeline, and where I can help. Open to software engineering
          roles and meaningful full-stack product work.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.form
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span>Name</span>
              <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="you@example.com" required />
            </label>
          </div>
          <label>
            <span>Subject</span>
            <input name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What should we build or discuss?" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Share the useful details." rows={6} required />
          </label>

          <button type="submit" disabled={isSubmitting} className="primary-action w-full py-3.5 text-base">
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <Send className="size-4" />
                Send message
              </>
            )}
          </button>

          {submitStatus === 'success' && (
            <p className="form-alert success">
              <CheckCircle className="size-5 shrink-0" />
              Message sent. I will get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p className="form-alert error">
              <AlertCircle className="size-5 shrink-0" />
              Message failed to send. Please email me directly.
            </p>
          )}
          {submitStatus === 'missing-config' && (
            <p className="form-alert error">
              <AlertCircle className="size-5 shrink-0" />
              Email service not configured. Use direct email below.
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid gap-5 content-start"
        >
          <article className="feature-card">
            <h3>Direct channels</h3>
            <div className="mt-5 grid gap-3">
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="contact-link"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="skill-icon-wrap size-10 shrink-0">
                      <Icon className="size-4" />
                    </span>
                    <span>
                      <span className="block text-xs text-white/40">{link.label}</span>
                      <span className="block text-sm font-semibold text-white">{link.value}</span>
                    </span>
                  </a>
                )
              })}
            </div>
          </article>

          <article className="feature-card">
            <h3>Online</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="action-link"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="size-4" />
                    {link.label}
                  </a>
                )
              })}
            </div>
          </article>

          <article className="feature-card">
            <h3>Resume</h3>
            <p className="mt-3">
              Quick review of my background, experience, and projects — all in one place.
            </p>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="primary-action mt-5">
              <Download className="size-4" />
              Open resume PDF
            </a>
          </article>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
