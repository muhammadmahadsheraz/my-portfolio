// src/components/PerformanceMonitor.jsx
import React, { useEffect, useState } from 'react'

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let frameCount = 0
    let lastTime = performance.now()
    let animationId

    const measureFPS = (currentTime) => {
      frameCount++
      
      if (currentTime - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (currentTime - lastTime)))
        frameCount = 0
        lastTime = currentTime
      }
      
      animationId = requestAnimationFrame(measureFPS)
    }

    animationId = requestAnimationFrame(measureFPS)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Toggle visibility with Ctrl+Shift+P
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.8)',
      color: 'white',
      padding: '8px 12px',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
      border: '1px solid #2f6e18'
    }}>
      FPS: {fps}
      <br />
      Status: {fps > 50 ? 'Good' : fps > 30 ? 'Fair' : 'Poor'}
    </div>
  )
}

export default PerformanceMonitor
