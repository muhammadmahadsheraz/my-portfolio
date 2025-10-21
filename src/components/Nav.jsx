// src/components/Navbar.jsx
import React from 'react'
import './Nav.css'

const Navbar = ({ activeSection, onNavClick }) => {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' }, // Note: no about section, but in HTML
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#journey', label: 'Journey' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <nav className="top-nav">
      <div className="brand">
        <div className="logo">MS</div>
        <div className="name">Mahad Sheraz</div>
      </div>
      <div className="nav-links">
        {navItems.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              onNavClick(href.slice(1))
            }}
          >
            {label}
          </a>
        ))}
      </div>
      <a className="cta" href="#contact" onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}>Hire me</a>
    </nav>
  )
}

export default Navbar