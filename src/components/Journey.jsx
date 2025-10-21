// src/components/Journey.jsx
import React from 'react'
import './Journey.css'

const Journey = () => {
  return (
    <div className="section-panel">
      <h2 className="sec-title">My Journey</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Education</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div>
                <strong>2023 - 2027</strong>
                <div className="muted">UET, Lahore — BSc Computer Science (CGPA: 3.294)</div>
              </div>
            </div>
            <div className="timeline-item">
              <div>
                <strong>2021 - 2023</strong>
                <div className="muted">Punjab College, Kamoke — Intermediate in Computer Science (A+)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div>
                <strong>Sep 2024 - May 2025</strong>
                <div className="muted">Lead Teaching Assistant — UET, Lahore</div>
              </div>
            </div>
            <div className="timeline-item">
              <div>
                <strong>May 2024 - Present</strong>
                <div className="muted">Freelance Developer — 20+ projects completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journey