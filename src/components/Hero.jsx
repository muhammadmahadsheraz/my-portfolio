// src/components/Hero.jsx
import React, { useState, useEffect, useRef } from 'react'
import './Hero.css'

const FULL_NAME = "Mahad Sheraz"

const Hero = () => {
  const [name, setName] = useState('')
  const [showSubtitle, setShowSubtitle] = useState(false)
  const inputRef = useRef(null)

  // Typing animation for name
  useEffect(() => {
    let isCancelled = false
    const typeName = async () => {
      setName('')
      for (let i = 0; i < FULL_NAME.length; i++) {
        if (isCancelled) return
        await new Promise(resolve => setTimeout(resolve, 120))
        setName(prev => prev + FULL_NAME[i])
      }
      if (isCancelled) return
      setTimeout(() => {
        setShowSubtitle(true)
      }, 300)
    }
    setTimeout(typeName, 500)
    return () => { isCancelled = true }
  }, [])

  return (
    <header id="home" className="hero">
      <div className="hero-column">
        <div className="hero-head">
          <div className="hero-left">
            <div className="label-wrap"></div>
            <h1>
              Hi, I'm{' '}
              <span className="typing-wrapper">
                <span style = {{color:'#2f6e18'}} ref={inputRef}>{name}</span>
                <span className="caret" style={{ display: name === FULL_NAME ? 'none' : 'inline-block' }}></span>
              </span>
            </h1>
            <h2 className={showSubtitle ? 'subtitle-visible' : 'subtitle-hidden'}>
              — Full Stack Developer
            </h2>
            <p className="lead muted">
            I create dependable, high-performance software solutions that solve real-world problems — building everything from dynamic web and desktop applications to seamless API integrations.            </p>
            <div className="hero-actions">
              <a className="cta" href="/CV.pdf" download aria-label="Download CV">Download CV</a>
              <a className="cta" href="#contact">Contact me</a>
              <a className="cta" href="https://github.com/muhammadmahadsheraz" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div style={{ minWidth: '240px', maxWidth: '320px' }}></div>
        </div>
        <div className="hero-img">
          <img src="/man_1.png" alt="Mahad Sheraz - Full Stack Developer" loading="eager" />
        </div>
      </div>
      <div style={{ marginTop: '22px', zIndex: 8, position: 'relative' }}>
        <div className="section-panel">
          <h2 className="sec-title">About Me</h2>
          <p className="muted">
          I embarked on my computer science journey in 2023 with an insatiable curiosity for how software shapes the world. What started as basic coding quickly evolved into creating full-scale solutions — from web and desktop applications to APIs and beyond. I’m passionate about crafting efficient, dependable systems and staying at the forefront of emerging technologies.          </p>
        </div>
      </div>
    </header>
  )
}

export default Hero