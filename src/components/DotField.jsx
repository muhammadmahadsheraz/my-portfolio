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

  useEffect(() => {
    if (!dotFieldRef.current) return

    const H = document.body.clientHeight
    const W = document.body.clientWidth
    const NUM_COLUMNS = Math.floor(W / 12) // denser, better coverage
    const columns = []

    dotFieldRef.current.innerHTML = ''

    for (let i = 0; i < NUM_COLUMNS; i++) {
      const columnEl = document.createElement('div')
      columnEl.className = 'matrix-column'
      columnEl.style.position = 'absolute'
      columnEl.style.left = (i * 14 + Math.random() * 8) + 'px'
      columnEl.style.top = '0'
      columnEl.style.fontFamily = 'monospace'
      columnEl.style.fontSize = (10 + Math.random() * 8) + 'px'
      columnEl.style.lineHeight = '1.2'
      columnEl.style.userSelect = 'none'
      columnEl.style.pointerEvents = 'none'
      columnEl.style.whiteSpace = 'pre'

      const numChars = 8 + Math.floor(Math.random() * 10)
      const chars = Array.from({ length: numChars }, () =>
        Math.random() > 0.5 ? '1' : '0'
      )
      columnEl.innerHTML = chars.map(c => `<span>${c}</span>`).join('<br>')

      const y = Math.random() * H
      const opacity = 0.15 + Math.random() * 0.5

      columnEl.style.color = `rgba(47, 110, 24, ${opacity})`
      columnEl.style.textShadow = `0 0 5px rgba(58,255,58,${opacity * 0.8}),
                                   0 0 10px rgba(58,255,58,${opacity * 0.5})`

      dotFieldRef.current.appendChild(columnEl)

      columns.push({
        el: columnEl,
        x: parseFloat(columnEl.style.left),
        y,
        vy: -(20 + Math.random() * 40),
        chars,
        opacity
      })

      columnEl.style.transform = `translateY(${y}px)`
    }

    columnsRef.current = columns
    lastTimeRef.current = performance.now()

    const animate = (t) => {
      const dt = Math.min(40, t - lastTimeRef.current) / 1000
      lastTimeRef.current = t

      // Smoothly approach burst target
      const diff = targetBurstRef.current - smoothBurstRef.current
      smoothBurstRef.current += diff * dt * 5 // interpolation speed

      const burstFactor = smoothBurstRef.current
      const brightnessBoost = 0.5 + 0.5 * Math.min(1, (burstFactor - 1) / 10)

      const H2 = document.body.clientHeight
      const W2 = document.body.clientWidth

      for (const col of columnsRef.current) {
        col.y += col.vy * dt * burstFactor

        // reset when top passes
        if (col.y < -200) {
          col.y = H2 + Math.random() * 200
          col.x = Math.random() * W2
          col.el.style.left = col.x + 'px'

          const numChars = 8 + Math.floor(Math.random() * 10)
          col.chars = Array.from({ length: numChars }, () =>
            Math.random() > 0.5 ? '1' : '0'
          )
          col.el.innerHTML = col.chars.map(c => `<span>${c}</span>`).join('<br>')
        }

        // glowing head + fading tail
        const spans = col.el.querySelectorAll('span')
        spans.forEach((span, i) => {
          if (i >= spans.length - 2) {
            span.style.color = `rgba(${120 + 120 * brightnessBoost}, 255, ${120 + 120 * brightnessBoost}, 1)`
            span.style.textShadow = `
              0 0 ${8 * brightnessBoost}px rgba(120, 255, 120, 1),
              0 0 ${16 * brightnessBoost}px rgba(100, 255, 100, 0.8),
              0 0 ${24 * brightnessBoost}px rgba(80, 255, 80, 0.6)
            `
          } else {
            const fade = i / spans.length
            const alpha = (0.15 + 0.6 * (1 - fade)) * (1 + brightnessBoost * 0.4)
            span.style.color = `rgba(0,255,0,${alpha})`
            span.style.textShadow = `0 0 ${3 * (1 - fade)}px rgba(0,255,70,${0.3 * (1 - fade) * brightnessBoost})`
          }
        })

        col.el.style.transform = `translateY(${col.y}px)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      if (dotFieldRef.current) dotFieldRef.current.innerHTML = ''
    }
  }, [])

  // when burst changes, only update target
  useEffect(() => {
    targetBurstRef.current = burst ? 20 : 1
  }, [burst])

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
        willChange: 'transform, opacity', // GPU optimization
      }}
    />
  )
}

export default DotField
