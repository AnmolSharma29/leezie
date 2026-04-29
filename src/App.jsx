import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-900 text-cream-200 overflow-x-hidden">
      {/* Global atmosphere */}
      <div className="grain" aria-hidden />
      <div className="vignette" aria-hidden />

      <Header />
      <main>
        <Banner />
        <About />
        <WhatWeDo />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
