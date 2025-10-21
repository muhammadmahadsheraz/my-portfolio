// src/components/Skills.jsx
import React from 'react'
import './Skills.css'

const skillsData = [
  { key: 'Coding', value: 'C++, C#, Python, JavaScript, Node, React' },
  { key: 'Databases', value: 'MySQL, PostgreSQL, MongoDB, Custom NoSQL' },
  { key: 'Tools', value: 'Git, GitHub, GitLab, VS Code, Postman' },
  { key: 'Dev', value: 'REST APIs, Docker basics, CLI tools' },
  { key: 'Other', value: 'Overleaf, Canva, Visual Studio' }
]

const Skills = () => {
  return (
    <div className="section-panel">
      <h2 className="sec-title">My Skills</h2>
      <p className="muted">Core CS foundations and tools I work with.</p>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill">
            <span className="k">{skill.key}</span>
            {skill.value}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills