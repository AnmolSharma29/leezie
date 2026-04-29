import { motion } from 'framer-motion'

const services = [
  {
    no: 'I',
    title: 'Website SEO',
    desc: "Patient, technical, results-driven. We get you found — and remembered — by the people who matter.",
    keywords: ['Technical audit', 'On-page', 'Link strategy'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    no: 'II',
    title: 'Social Media',
    desc: "We run feeds that feel curated, not churned — turning followers into a community that actually shows up.",
    keywords: ['Strategy', 'Daily ops', 'Community'],
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
  },
  {
    no: 'III',
    title: 'AI Content',
    desc: "Long-form, short-form, ad copy, scripts — written by people, sharpened by machines, signed by your brand.",
    keywords: ['Editorial', 'Newsletters', 'Ad copy'],
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
  },
  {
    no: 'IV',
    title: 'AI Video',
    desc: "From talking-head reels to cinematic brand films, we make AI-assisted video that looks expensive — because it should.",
    keywords: ['Reels', 'Brand films', 'Motion'],
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
  },
  {
    no: 'V',
    title: 'Brand Strategy',
    desc: "Naming, positioning, voice. The unglamorous foundation that makes everything else feel inevitable.",
    keywords: ['Identity', 'Voice', 'Positioning'],
    img: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&q=80',
  },
  {
    no: 'VI',
    title: 'Performance Ads',
    desc: "Meta. Google. LinkedIn. We build creative that converts and dashboards you'll actually understand.",
    keywords: ['Meta', 'Google', 'Creative'],
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
  },
]

export default function WhatWeDo() {
  return (
    <section id="services" className="relative py-28 md:py-40 overflow-hidden">
      {/* Reverse marquee header */}
      <div className="border-y border-cream-400/15 py-3 mb-20 bg-ink-800/40 overflow-hidden">
        <div className="flex w-max animate-marquee-reverse">
          <HeaderRow />
          <HeaderRow />
        </div>
      </div>

      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-gold-400 font-heading text-2xl">02</span>
              <span className="block w-10 h-px bg-cream-400/60" />
              <span className="eyebrow">What we do</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="heading-display text-5xl md:text-7xl lg:text-8xl"
            >
              Six services. <br />
              <em className="not-italic text-gold-400">One</em> obsession.
            </motion.h2>
          </div>
          <p className="text-cream-200/80 max-w-md text-lg leading-relaxed font-light">
            Pick one, pick all — every craft below is delivered with the same standard:
            considered, consistent, and quietly proud.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="vintage-card group p-6 md:p-7 flex flex-col gap-5 hover:bg-ink-700/70 transition-all duration-700 hover:-translate-y-1"
            >
              {/* Top: number + title */}
              <header className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] tracking-[0.4em] uppercase text-cream-400">
                    Service № {s.no}
                  </span>
                  <h3 className="font-heading text-4xl md:text-5xl text-cream-100 mt-2 leading-none">
                    {s.title}
                  </h3>
                </div>
                <span className="font-heading text-3xl text-gold-400 opacity-50 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700">
                  →
                </span>
              </header>

              {/* Image */}
              <div className="overflow-hidden double-border bg-ink-900">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-44 object-cover vintage-img group-hover:scale-110 transition-transform duration-1000"
                />
              </div>

              {/* Body */}
              <p className="text-cream-200/80 text-[15px] leading-relaxed font-light">
                {s.desc}
              </p>

              {/* Tags */}
              <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-cream-400/15">
                {s.keywords.map((k) => (
                  <li
                    key={k}
                    className="text-[10px] tracking-[0.25em] uppercase text-cream-400 px-2.5 py-1 border border-cream-400/25 rounded-full"
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-cream-400/15"
        >
          <p className="text-cream-300 italic font-heading text-2xl">
            "Quality is never an accident."
          </p>
          <a href="#contact" className="btn-vintage">
            Brief us on your project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function HeaderRow() {
  const items = ['Craft', 'Strategy', 'Stories', 'Algorithms', 'Pixels', 'Words', 'Brands']
  return (
    <div className="flex shrink-0 gap-16 pr-16 items-center">
      {items.map((w, i) => (
        <span key={i} className="font-heading text-4xl md:text-6xl text-cream-100/40 whitespace-nowrap flex items-center gap-16">
          {w}
          <span className="text-gold-500 text-2xl">✦</span>
        </span>
      ))}
    </div>
  )
}
