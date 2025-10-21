// src/components/Projects.jsx
import React from 'react'
import './Projects.css'

const projectsData = [
  {
    badge: 'Python • NoSQL',
    title: 'KiteDB',
    desc: 'Educational NoSQL JSON DBMS with atomic transactions, role access, AES-CBC encryption and in-memory indices. Console + server interfaces.',
    actions: [{ label: 'View Code', href: '#' }]
  },
  {
    badge: 'Python • Flask',
    title: 'Indian Rummy',
    desc: 'Multiplayer card game with graph-based AI, custom data structures and a Flask server for multiplayer interactions.',
    actions: [{ label: 'View Code', href: '#' }]
  },
  {
    badge: 'HTML • CSS • JS',
    title: 'Xcell Digital Services',
    desc: 'Agency portfolio site with loading screen, interactive nav, smooth scrolling and contact form — fully responsive.',
    actions: [{ label: 'Live Visit', href: '#' }, { label: 'View Code', href: '#' }]
  },
  {
    badge: 'JS • Python',
    title: 'Xzamine',
    desc: 'Chrome extension that analyzes tweets using local & cloud AI models to check legality and produce reports.',
    actions: [{ label: 'View Code', href: '#' }]
  }
]

const Projects = () => {
  return (
    <div className="section-panel">
      <h2 className="sec-title">My Work</h2>
      <p className="muted">Selected projects with short descriptions and links.</p>
      <div className="projects">
        {projectsData.map((project, index) => (
          <article key={index} className="project">
            <span className="proj-badge">{project.badge}</span>
            <div className="proj-title">{project.title}</div>
            <div className="proj-desc">{project.desc}</div>
            <div className="proj-actions">
              {project.actions.map((action, aIndex) => (
                <a key={aIndex} className="link-btn" href={action.href} target="_blank" rel="noopener noreferrer">
                  {action.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects