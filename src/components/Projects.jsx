// src/components/Projects.jsx
import React from 'react'
import './Projects.css'

const projectsData = [
  {
    badge: 'MERN • E-Commerce',
    title: 'Palang',
    desc: 'Full-stack furniture eCommerce website built with MongoDB, Express, React, and Node.js — featuring product management, cart, authentication, and order tracking.',
    actions: [
      { label: 'Live Visit', href: '#' },
      { label: 'View Code', href: '#' }
    ]
  },
{
  badge: 'C# • WinForms',
  title: 'Solitaire',
  desc: 'A pixel-styled Solitaire game built in C# WinForms with custom animations, card logic, and a polished retro UI.',
  actions: [{ label: 'View Code', href: 'https://github.com/muhammadmahadsheraz/Solitaire-WinForms' }]
},
  {
    badge: 'C# • .NET Framework',
    title: 'Witch Hunt',
    desc: '2D adventure game built with C# and .NET Framework — includes AI-driven enemies, dynamic level progression, and inventory mechanics.',
    actions: [{ label: 'View Code', href: '#' }]
  },
  {
    badge: 'C++ • React',
    title: 'Custom DBMS',
    desc: 'High-performance DBMS with B+ Tree indexing, custom storage engine, and a SQL-like parser. C++ backend with a React frontend.',
    actions: [{ label: 'View Code', href: 'https://github.com/AmirHashmi017/DBMS-From-Scratch' }]
  },
  {
    badge: 'Python • AI/NLP',
    title: 'Bycatch - AI Phishing Email Parser',
    desc: 'Email ingestion and parsing pipeline with ML classification to detect phishing attempts. Python backend service exposing a simple API.',
    actions: [{ label: 'View Code', href: 'https://github.com/muhammadmahadsheraz/Phishing-Email-Parser' },{label: 'View Live', href: 'https://bycatch.vercel.app'}]
  }
  ,
  {
    badge: 'MERN • Saas',
    title: 'WeavoAI - AI booking Saas platform',
    desc: 'An AI booking platform that simplifies scheduling by automating appointments, availability management, confirmations, and customer communication.',
    actions: [{ label: 'View Site', href: 'https://weavoai.vercel.app' }]
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