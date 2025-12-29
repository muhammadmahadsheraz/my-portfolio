// src/components/Navbar.jsx
import React, { useState } from 'react'
import './Nav.css'

const Navbar = ({ activeSection, onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#projects', label: 'Projects' },
    { href: '#journey', label: 'Journey' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ]

  const handleNavClick = (section) => {
    onNavClick(section)
    setIsMenuOpen(false) // Close menu after clicking
  }

  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="brand">
          <div className="logo">MS</div>
          <div className="name">Mahad Sheraz</div>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`nav-link ${activeSection === href.slice(1) ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(href.slice(1))
              }}
            >
              {label}
            </a>
          ))}
          <a 
            className="cta" 
            href="#contact" 
            onClick={(e) => { 
              e.preventDefault(); 
              handleNavClick('contact'); 
            }}
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar