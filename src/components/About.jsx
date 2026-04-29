import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 overflow-hidden">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        {/* Image card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5 relative"
        >
          {/* Frame */}
          <div className="relative double-border p-2 bg-ink-800">
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80"
              alt="A vintage typewriter, the original content engine"
              className="w-full h-[480px] object-cover vintage-img"
            />
            {/* Caption — like a museum label */}
            <div className="absolute -bottom-6 -right-6 bg-cream-100 text-ink-900 px-5 py-3 rotate-3 shadow-2xl">
              <p className="font-heading text-2xl leading-none">Hand-crafted</p>
              <p className="text-[10px] tracking-[0.3em] uppercase mt-1 text-ink-700">since day one</p>
            </div>
          </div>

          {/* Floating ornament */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-8 -left-8 w-24 h-24 rounded-full border border-cream-400/30 flex items-center justify-center"
          >
            <span className="font-heading text-3xl text-gold-400">❦</span>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-gold-400 font-heading text-2xl">01</span>
            <span className="block w-10 h-px bg-cream-400/60" />
            <span className="eyebrow">About the studio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl mb-8"
          >
            A small studio with <em className="not-italic text-gold-400">big</em>{' '}
            ideas.
          </motion.h2>

          <div className="space-y-6 text-cream-200/85 text-lg leading-relaxed font-light max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Leezie was born from a simple belief — that great marketing should feel{' '}
              <span className="ink-underline">timeless</span>, even when it's powered by tomorrow's
              technology. We pair the patience of an old craftsman with the precision of a modern engine room.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.35 }}
            >
              From SEO that quietly wins to AI-powered video that stops the scroll, we build brand
              presence that compounds — never just campaigns that come and go.
            </motion.p>
          </div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-xl"
          >
            {[
              { num: '40+', label: 'Brands shaped' },
              { num: '12M', label: 'Impressions delivered' },
              { num: '4.9', label: 'Avg. client rating' },
            ].map((s) => (
              <div key={s.label} className="border-l border-cream-400/30 pl-4">
                <p className="font-heading text-5xl text-cream-100">{s.num}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-cream-400 mt-2">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Section divider */}
      <Divider />
    </section>
  )
}

function Divider() {
  return (
    <div className="container-x mt-32 flex items-center gap-6">
      <span className="block flex-1 h-px bg-cream-400/20" />
      <span className="text-gold-500 text-2xl">✦</span>
      <span className="text-cream-400 text-2xl">✦</span>
      <span className="text-gold-500 text-2xl">✦</span>
      <span className="block flex-1 h-px bg-cream-400/20" />
    </div>
  )
}
