// src/App.jsx
import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Nav'
import DotField from './components/DotField'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Contact from './components/Contact'
import PerformanceMonitor from './components/PerformanceMonitor'
import './App.css' // if needed, but empty for now

const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [burst, setBurst] = useState(false)
  const sectionsRef = useRef({})

  const sections = [
    { id: 'home', component: <Hero /> },
    { id: 'services', component: <Services /> },
    { id: 'projects', component: <Projects /> },
    { id: 'journey', component: <Journey /> },
    { id: 'skills', component: <Skills /> },
    { id: 'contact', component: <Contact /> }
  ]

  useEffect(() => {
    sectionsRef.current = sections.reduce((acc, { id }) => {
      acc[id] = document.getElementById(id)
      return acc
    }, {})

    // Scroll spy
    const handleScroll = () => {
      const offset = window.innerHeight * 0.25
      let current = 'home'
      for (const id of Object.keys(sectionsRef.current)) {
        const el = sectionsRef.current[id]
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= offset && rect.bottom > offset) {
            current = id
            break
          }
        }
      }
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    const el = sectionsRef.current[id]
    if (!el) return
    setBurst(true)
    setTimeout(() => {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 18 - 80, // adjust for nav and padding
        behavior: 'smooth'
      })
    }, 1000)
    setTimeout(() => setBurst(false), 1500)
  }

  return (
    <div className="wrap">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <DotField burst={burst} />
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <main id="main-content" role="main">
        {sections.map(({ id, component }) => (
          <section key={id} id={id} aria-labelledby={`${id}-title`}>
            {component}
          </section>
        ))}
        <div className="section-panel" style={{ maxWidth: '80%', margin: '0 10% 0 10%' }}>
          <div style={{ fontWeight: '700' }}>Quick info</div>
          <div className="muted" style={{ marginTop: '8px' }}>Karachi, Pakistan • Freelance Developer</div>
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontWeight: '700' }}>Email</div>
            <div className="muted">abdul.rehman@example.com</div>
          </div>
        </div>
      </main>
      <footer className="site-foot" role="contentinfo">
        Copyright © 2025 by Mahad Sheraz | All Rights Reserved.
      </footer>
      {import.meta.env.DEV && <PerformanceMonitor />}
    </div>
  )
}

export default App