import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const word = 'Leezie'

const letterVariants = {
  hidden: { y: '110%', opacity: 0, rotate: 4 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Banner() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const ornamentRotate = useTransform(scrollYProgress, [0, 1], [0, 180])

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Warm radial glow */}
      <div className="glow-blob bg-amber-700/40 w-[600px] h-[600px] -top-48 -left-32" />
      <div className="glow-blob bg-amber-900/40 w-[500px] h-[500px] -bottom-40 -right-32" />

      {/* Decorative concentric circles */}
      <motion.div
        style={{ rotate: ornamentRotate }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden
      >
        <svg width="900" height="900" viewBox="0 0 900 900" className="opacity-[0.07]">
          <circle cx="450" cy="450" r="440" fill="none" stroke="#e8d5b7" strokeWidth="1" />
          <circle cx="450" cy="450" r="380" fill="none" stroke="#e8d5b7" strokeWidth="1" strokeDasharray="2 8" />
          <circle cx="450" cy="450" r="320" fill="none" stroke="#e8d5b7" strokeWidth="1" />
          <circle cx="450" cy="450" r="240" fill="none" stroke="#e8d5b7" strokeWidth="1" strokeDasharray="4 12" />
        </svg>
      </motion.div>

      {/* Slowly rotating star ornament */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-32 right-12 md:right-24 opacity-30 pointer-events-none"
        aria-hidden
      >
        <Sunburst />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-32 left-8 md:left-20 opacity-25 pointer-events-none"
        aria-hidden
      >
        <Sunburst />
      </motion.div>

      {/* Top eyebrow */}
      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="container-x relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="block w-12 h-px bg-cream-400/60" />
          <span className="eyebrow text-cream-300">A Marketing & Brand Studio</span>
          <span className="block w-12 h-px bg-cream-400/60" />
        </motion.div>

        {/* Title — staggered letters */}
        <h1 className="heading-display text-[20vw] md:text-[16rem] leading-[0.85] relative">
          <span className="sr-only">Leezie</span>
          <span className="flex justify-center" aria-hidden>
            {word.split('').map((char, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <motion.span
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ display: 'inline-block' }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-10 max-w-2xl text-lg md:text-xl text-cream-200/90 font-body font-light leading-relaxed"
        >
          Where <em className="font-heading not-italic text-gold-400 text-2xl">yesterday's</em> craft
          meets <em className="font-heading not-italic text-gold-400 text-2xl">tomorrow's</em> algorithm —
          we build brands worth remembering in a world that won't stop scrolling.
        </motion.p>

        {/* CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-5 justify-center"
        >
          <a href="#services" className="btn-vintage">
            <span className="text-gold-400">✦</span> Our craft
          </a>
          <a href="#contact" className="btn-vintage bg-cream-100 text-ink-900 hover:bg-gold-400">
            Start a project →
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-cream-400">Scroll</span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="block w-px h-10 bg-gradient-to-b from-cream-400 to-transparent"
          />
        </motion.div>
      </motion.div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-cream-400/15 bg-ink-950/40 backdrop-blur-sm py-4 overflow-hidden">
        <Marquee />
      </div>
    </section>
  )
}

function Sunburst() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
      <g stroke="#e8d5b7" strokeLinecap="round">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 16
          const x1 = 60 + Math.cos(angle) * 30
          const y1 = 60 + Math.sin(angle) * 30
          const x2 = 60 + Math.cos(angle) * 56
          const y2 = 60 + Math.sin(angle) * 56
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="1.2" />
        })}
      </g>
      <circle cx="60" cy="60" r="22" fill="none" stroke="#e8d5b7" strokeWidth="1" />
      <circle cx="60" cy="60" r="3" fill="#c9a559" />
    </svg>
  )
}

function Marquee() {
  const items = [
    'SEO',
    'SOCIAL MEDIA',
    'AI CONTENT',
    'AI VIDEO',
    'BRAND STRATEGY',
    'PERFORMANCE ADS',
    'CONTENT STUDIO',
    'WEB DESIGN',
  ]
  const row = (
    <div className="flex shrink-0 gap-12 pr-12">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-12 text-sm tracking-[0.35em] uppercase text-cream-300">
          {item}
          <span className="text-gold-500">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className="flex w-max animate-marquee">
      {row}
      {row}
    </div>
  )
}
