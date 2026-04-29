import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Voices', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-cream-400/15'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        {/* LOGO — replace src with your logo file */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Replace this image src with your real logo */}
            <img
              src="/logo.png"
              alt="Leezie"
              className="h-10 w-auto hidden"
              onLoad={(e) => e.currentTarget.classList.remove('hidden')}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className="font-heading text-4xl md:text-5xl text-cream-100 leading-none transition-colors group-hover:text-gold-400">
              Leezie
            </span>
          </div>
          <span className="hidden md:inline-block w-px h-6 bg-cream-400/30" />
          <span className="hidden md:inline-block eyebrow">Est. MMXXIV</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6 }}
              className="relative text-[11px] tracking-[0.32em] uppercase text-cream-300 hover:text-cream-100 transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            href="#contact"
            className="btn-vintage"
          >
            <span className="text-gold-400">✦</span> Connect
          </motion.a>
        </nav>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-cream-200 transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`w-6 h-px bg-cream-200 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-px bg-cream-200 transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="md:hidden overflow-hidden border-t border-cream-400/15 bg-ink-950/95"
      >
        <nav className="container-x py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.3em] uppercase text-cream-300 hover:text-cream-100"
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-vintage self-start">
            <span className="text-gold-400">✦</span> Connect
          </a>
        </nav>
      </motion.div>
    </motion.header>
  )
}
