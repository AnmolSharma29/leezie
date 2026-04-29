import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      "Leezie didn't just run our socials — they figured out what our brand actually sounded like. Three months in, our engagement tripled and we finally felt proud of our feed.",
    name: 'Anaya Mehra',
    role: 'Founder, Maitri & Co.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
    rotate: '-2deg',
  },
  {
    quote:
      "The AI video work is something else. We launched a campaign in two weeks that would've taken us six months and a film crew. The results were quiet, then loud.",
    name: 'Rohan Iyer',
    role: 'CMO, Northwind Studio',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
    rotate: '1.5deg',
  },
  {
    quote:
      "Working with Leezie feels less like hiring an agency and more like adopting a partner who actually cares. Our SEO finally moved — and stayed moved.",
    name: 'Priya Shah',
    role: 'Head of Growth, Verba',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
    rotate: '-1deg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-40 overflow-hidden">
      {/* Soft warm glow */}
      <div className="glow-blob bg-amber-800/30 w-[700px] h-[700px] top-1/4 left-1/2 -translate-x-1/2" />

      <div className="container-x relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="text-gold-400 font-heading text-2xl">03</span>
            <span className="block w-10 h-px bg-cream-400/60" />
            <span className="eyebrow">Voices from the desk</span>
            <span className="block w-10 h-px bg-cream-400/60" />
            <span className="text-gold-400 font-heading text-2xl">03</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="heading-display text-5xl md:text-7xl lg:text-8xl"
          >
            Letters from <em className="not-italic text-gold-400">happy</em> clients.
          </motion.h2>
        </div>

        {/* Postcards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 60, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: t.rotate.replace('deg', '') / 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, y: -8, transition: { duration: 0.5 } }}
              className="relative bg-cream-100 text-ink-900 p-7 md:p-8 shadow-2xl"
              style={{ boxShadow: '0 25px 50px -10px rgba(0,0,0,0.5)' }}
            >
              {/* Tape */}
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-gold-400/40 backdrop-blur-sm rotate-2" />

              {/* Stamp corner */}
              <div className="absolute top-3 right-3 border border-ink-700/40 px-2 py-1.5 text-[8px] tracking-[0.3em] uppercase text-ink-700/70 rotate-3">
                ✦ Leezie ✦
              </div>

              {/* Quote */}
              <span className="font-heading text-7xl text-gold-600/40 leading-none block mb-2">
                "
              </span>
              <blockquote className="text-[15px] leading-relaxed text-ink-800 font-light">
                {t.quote}
              </blockquote>

              {/* Footer */}
              <figcaption className="mt-6 pt-5 border-t border-dashed border-ink-700/30 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover vintage-img border-2 border-ink-700/30"
                />
                <div>
                  <p className="font-heading text-2xl text-ink-900 leading-none">{t.name}</p>
                  <p className="text-[10px] tracking-[0.25em] uppercase text-ink-700/70 mt-1">
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
