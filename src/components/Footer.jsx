import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 bg-ink-950 border-t border-cream-400/15 overflow-hidden">
      {/* Glow */}
      <div className="glow-blob bg-amber-900/40 w-[800px] h-[800px] -top-40 left-1/2 -translate-x-1/2" />

      <div className="container-x relative">
        {/* Top: contact summary grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          <FooterCol label="Mail">
            <a href="mailto:contact@leezie.in" className="hover:text-gold-400 transition-colors">
              contact@leezie.in
            </a>
          </FooterCol>
          <FooterCol label="Ring">
            <a href="tel:+919324837154" className="hover:text-gold-400 transition-colors">
              +91 93248 37154
            </a>
          </FooterCol>
          <FooterCol label="Follow">
            <a
              href="https://instagram.com/leezie"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gold-400 transition-colors inline-flex items-center gap-3"
            >
              <InstagramIcon /> @leezie
            </a>
          </FooterCol>
        </div>

        {/* Big wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h3 className="heading-display text-[28vw] md:text-[18rem] leading-[0.85] text-cream-100/95">
            Leezie
          </h3>
          <p className="text-xs tracking-[0.5em] uppercase text-cream-400 -mt-4 md:-mt-8">
            ✦ marketing & brand studio ✦
          </p>
        </motion.div>

        {/* Bottom row */}
        <div className="mt-20 pt-8 border-t border-cream-400/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-400">
          <p>© {new Date().getFullYear()} Leezie. All ideas reserved.</p>
          <p className="font-heading text-xl text-cream-300 italic">Made with care in India ❦</p>
          <p className="tracking-[0.3em] uppercase">Volume 01 — Edition I</p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ label, children }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[10px] tracking-[0.4em] uppercase text-cream-400">{label}</span>
      <span className="font-heading text-3xl md:text-4xl text-cream-100">{children}</span>
    </div>
  )
}

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  )
}
