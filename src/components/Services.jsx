// src/components/Services.jsx
import React from 'react'
import './Services.css'

const servicesData = [
  {
    title: 'Full-Stack Web Application Development',
    desc: 'Auth, dashboards, API integrations, and scalable backend + frontend solutions optimized for performance.'
  },
  {
    title: 'Desktop Application Development',
    desc: 'C# (.NET) and Python desktop apps with responsive UI, secure backend logic, and DB integrations.'
  },
  {
    title: 'Database Design & Integration',
    desc: 'SQL / NoSQL schema design, indexing, queries and integration to make apps fast and reliable.'
  },
  {
    title: 'API Development & Integration',
    desc: 'Secure REST APIs and third-party integration (payments, emails, 3rd-party services).'
  },
  {
    title: 'Debugging & Performance',
    desc: 'Bug hunting, profiling and optimization across frontend & backend stacks.'
  },
  {
    title: 'Responsive Frontend',
    desc: 'Accessible, responsive UIs with clean, optimized code for great UX on all devices.'
  }
]

const Services = () => {
  return (
    <div className="section-panel">
      <h2 className="sec-title">My Services</h2>
      <p className="muted">What I build — practical, optimized, and ready for production.</p>
      <div className="services">
        {servicesData.map((service, index) => (
          <div key={index} className="service">
            <div className="s-title">{service.title}</div>
            <div className="s-desc">{service.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services