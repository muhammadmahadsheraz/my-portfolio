// src/components/DotField.jsx
import React, { useEffect, useRef } from 'react'
import './DotField.css'

const DotField = ({ burst }) => {
  const dotFieldRef = useRef(null)
  const columnsRef = useRef([])
  const animationFrameRef = useRef(null)
  const lastTimeRef = useRef(performance.now())
  const smoothBurstRef = useRef(1)
  const targetBurstRef = useRef(1)
  const frameCountRef = useRef(0)
  const resizeTriggerRef = useRef(0)
  const isLowPerformance = useRef(false) // Track performance

  const initializeDotField = () => {
    if (!dotFieldRef.current) return

    const H = document.body.clientHeight
    const W = document.body.clientWidth
    
    // Responsive column calculation - fewer columns on mobile for better performance
    const isMobile = W <= 768
    const isTablet = W <= 1024 && W > 768
    const columnSpacing = isMobile ? 16 : isTablet ? 14 : 12 // Reduced spacing for better coverage
    const NUM_COLUMNS = Math.floor(W / columnSpacing)
    
    // Reduce number of columns for better performance while maintaining coverage
    const maxColumns = isMobile ? Math.min(NUM_COLUMNS, 35) : isTablet ? Math.min(NUM_COLUMNS, 50) : Math.min(NUM_COLUMNS, 70)
    
    const columns = []

    dotFieldRef.current.innerHTML = ''

    for (let i = 0; i < maxColumns; i++) {
      const columnEl = document.createElement('div')
      columnEl.className = 'matrix-column'
      
      // Responsive font sizes
      const baseFontSize = isMobile ? 9 : isTablet ? 11 : 12
      const fontSize = baseFontSize + Math.random() * (isMobile ? 4 : isTablet ? 5 : 6)
      
      columnEl.style.cssText = `
        position: absolute;
        left: ${(i * W) / maxColumns + Math.random() * (isMobile ? 3 : 5)}px;
        top: 0;
        font-family: monospace;
        font-size: ${fontSize}px;
        line-height: 1.1;
        user-select: none;
        pointer-events: none;
        white-space: pre;
        will-change: transform;
      `

      // Reduce character count on mobile for better performance
      const baseChars = isMobile ? 5 : isTablet ? 6 : 7
      const numChars = baseChars + Math.floor(Math.random() * (isMobile ? 4 : isTablet ? 6 : 8))
      const chars = Array.from({ length: numChars }, () =>
        Math.random() > 0.5 ? '1' : '0'
      )
      columnEl.innerHTML = chars.map(c => `<span>${c}</span>`).join('<br>')

      const y = Math.random() * H
      const opacity = 0.15 + Math.random() * 0.4

      columnEl.style.color = `rgba(47, 110, 24, ${opacity})`
      columnEl.style.textShadow = `0 0 4px rgba(58,255,58,${opacity * 0.6}),
                                   0 0 8px rgba(58,255,58,${opacity * 0.3})`

      dotFieldRef.current.appendChild(columnEl)

      const spans = columnEl.querySelectorAll('span')
      columns.push({
        el: columnEl,
        x: parseFloat(columnEl.style.left),
        y,
        vy: -(15 + Math.random() * 30), // Slower movement for better performance
        chars,
        opacity,
        spans: spans,
        spanCount: spans.length
      })

      columnEl.style.transform = `translateY(${y}px)`
    }

    columnsRef.current = columns
    lastTimeRef.current = performance.now()
  }

  const animate = (t) => {
    const dt = Math.min(40, t - lastTimeRef.current) / 1000
    lastTimeRef.current = t
    frameCountRef.current++

    // Performance monitoring - reduce quality if frame rate drops
    if (frameCountRef.current % 120 === 0) {
      const frameDelta = t - (lastTimeRef.current - 120 * 16.67) // Expected time for 120 frames
      isLowPerformance.current = frameDelta > 120 * 20 // If taking longer than 20ms per frame
    }

    // Smoothly approach burst target
    const diff = targetBurstRef.current - smoothBurstRef.current
    smoothBurstRef.current += diff * dt * 5

    const burstFactor = smoothBurstRef.current
    const brightnessBoost = 0.5 + 0.5 * Math.min(1, (burstFactor - 1) / 10)

    const H2 = document.body.clientHeight
    const W2 = document.body.clientWidth
    const isMobile = W2 <= 768

    // Reduce update frequency based on performance and device
    const updateInterval = isLowPerformance.current ? 8 : isMobile ? 4 : 2
    const updateGlow = frameCountRef.current % updateInterval === 0

    for (let c = 0; c < columnsRef.current.length; c++) {
      const col = columnsRef.current[c]
      col.y += col.vy * dt * burstFactor

      // reset when top passes
      if (col.y < -150) {
        col.y = H2 + Math.random() * 150
        col.x = Math.random() * W2
        col.el.style.left = col.x + 'px'

        const baseChars = isMobile ? 4 : 6 // Reduced further
        const numChars = baseChars + Math.floor(Math.random() * (isMobile ? 3 : 5))
        col.chars = Array.from({ length: numChars }, () =>
          Math.random() > 0.5 ? '1' : '0'
        )
        col.el.innerHTML = col.chars.map(c => `<span>${c}</span>`).join('<br>')
        col.spans = col.el.querySelectorAll('span')
        col.spanCount = col.spans.length
      }

      // Always update position (smooth movement)
      col.el.style.transform = `translateY(${col.y}px)`

      // Skip glow updates on low performance devices
      if (updateGlow && !isLowPerformance.current) {
        const spans = col.spans
        const len = col.spanCount
        
        // Simplified glow calculation
        const glowIntensity = isMobile ? 0.5 : 1
        const r = Math.floor(100 + 50 * brightnessBoost * glowIntensity)
        const b = Math.floor(100 + 50 * brightnessBoost * glowIntensity)

        for (let i = 0; i < len; i++) {
          const span = spans[i]
          if (i >= len - 1) { // Only brighten last character
            span.style.color = `rgba(${r}, 255, ${b}, 1)`
            if (!isMobile) {
              span.style.textShadow = `0 0 4px rgba(120, 255, 120, 0.8)`
            }
          } else {
            const fade = i / len
            const alpha = (0.1 + 0.3 * (1 - fade)) * (1 + brightnessBoost * 0.2)
            span.style.color = `rgba(0,255,0,${alpha})`
            span.style.textShadow = 'none' // Remove shadow for non-bright chars
          }
        }
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    initializeDotField()
    
    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      if (dotFieldRef.current) dotFieldRef.current.innerHTML = ''
    }
  }, [resizeTriggerRef.current])

  // when burst changes, only update target
  useEffect(() => {
    targetBurstRef.current = burst ? 20 : 1
  }, [burst])

  // Handle window resize for responsive updates
  useEffect(() => {
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        // Trigger reinitialization by updating the resize trigger
        resizeTriggerRef.current += 1
      }, 200) // Debounce resize events
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
  }, [])

  return (
    <div
      ref={dotFieldRef}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
        borderRadius: '18px',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    />
  )
}

export default DotField