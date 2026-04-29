import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    // Hook this up to your backend / form service.
    const subject = encodeURIComponent(`New enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:contact@leezie.in?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold-400 font-heading text-2xl">04</span>
              <span className="block w-10 h-px bg-cream-400/60" />
              <span className="eyebrow">Begin a project</span>
            </div>

            <h2 className="heading-display text-5xl md:text-7xl mb-8">
              Let's <em className="not-italic text-gold-400">make</em> something <br /> worth keeping.
            </h2>

            <p className="text-cream-200/85 text-lg leading-relaxed font-light max-w-md mb-10">
              Tell us what you're building, the noise you're trying to cut through, or just say hello.
              We answer every letter — usually within a working day.
            </p>

            {/* Direct details */}
            <ul className="space-y-5">
              <ContactRow
                label="Mail us"
                value="contact@leezie.in"
                href="mailto:contact@leezie.in"
              />
              <ContactRow
                label="Ring us"
                value="+91 93248 37154"
                href="tel:+919324837154"
              />
              <ContactRow
                label="Follow"
                value="@leezie"
                href="https://instagram.com/leezie"
              />
            </ul>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            onSubmit={submit}
            className="lg:col-span-7 vintage-card p-8 md:p-12 relative"
          >
            {/* Corner ornaments */}
            <CornerOrnament className="top-2 left-2" />
            <CornerOrnament className="top-2 right-2 rotate-90" />
            <CornerOrnament className="bottom-2 left-2 -rotate-90" />
            <CornerOrnament className="bottom-2 right-2 rotate-180" />

            <div className="text-center mb-8">
              <p className="font-heading text-4xl md:text-5xl text-cream-100">Drop us a line</p>
              <p className="text-xs tracking-[0.35em] uppercase text-cream-400 mt-3">
                ✦ ─── correspondence form ─── ✦
              </p>
            </div>

            <div className="space-y-6">
              <Field label="Your name" name="name" value={form.name} onChange={handle} required />
              <Field
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={handle}
                required
              />
              <Field
                label="Your message"
                name="message"
                value={form.message}
                onChange={handle}
                textarea
                required
              />
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-cream-400 italic">
                {sent ? 'Sealed & sent ✦ thank you' : 'Sealed with care.'}
              </p>
              <button type="submit" className="btn-vintage">
                <span className="text-gold-400">✦</span> Send letter
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactRow({ label, value, href }) {
  return (
    <li>
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="group flex items-center justify-between gap-6 py-4 border-b border-cream-400/15 hover:border-gold-400 transition-colors"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-cream-400 w-20">{label}</span>
        <span className="font-heading text-3xl md:text-4xl text-cream-100 group-hover:text-gold-400 transition-colors flex-1">
          {value}
        </span>
        <span className="text-cream-300 group-hover:translate-x-1 transition-transform">↗</span>
      </a>
    </li>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, textarea }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.35em] uppercase text-cream-400">{label}</span>
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        rows={textarea ? 5 : undefined}
        className="mt-2 w-full bg-transparent border-b border-cream-400/30 focus:border-gold-400 text-cream-100 font-body py-3 outline-none transition-colors placeholder:text-cream-400/40 resize-none"
        placeholder={textarea ? 'Tell us a little story…' : ''}
      />
    </label>
  )
}

function CornerOrnament({ className = '' }) {
  return (
    <svg
      className={`absolute w-10 h-10 text-cream-400/50 ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M2 2 L2 14 M2 2 L14 2" />
      <path d="M2 8 L8 8 L8 2" strokeDasharray="2 2" />
      <circle cx="11" cy="11" r="1.5" fill="currentColor" />
    </svg>
  )
}
