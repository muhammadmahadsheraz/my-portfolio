// src/components/Contact.jsx
import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.fullname.trim()) {
      newErrors.fullname = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const { fullname, email, message, subject = 'Project Inquiry' } = formData
      const body = `Name: ${fullname}%0D%0AEmail: ${email}%0D%0AMobile: ${formData.mobile}%0D%0A%0D%0A${message}`
      const mailto = `mailto:abdul.rehman@example.com?subject=${encodeURIComponent(subject)}&body=${body}`
      window.location.href = mailto
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section-panel">
      <h2 className="sec-title">Contact Me!</h2>
      <p className="muted">Have an idea or need help? Send a message — I'll respond as soon as possible.</p>
      <div className="contact-grid">
        <form className="card" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="fullname">Full Name *</label>
            <input
              id="fullname"
              name="fullname"
              required
              placeholder="Your full name"
              value={formData.fullname}
              onChange={handleChange}
              aria-describedby={errors.fullname ? 'fullname-error' : undefined}
              className={errors.fullname ? 'error' : ''}
            />
            {errors.fullname && <span id="fullname-error" className="error-message">{errors.fullname}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="+92 3xx xxxxxxx"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Email Subject</label>
            <input
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
          </div>

          <div style={{ marginTop: '10px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button 
              className="send" 
              type="submit" 
              disabled={isSubmitting}
              aria-describedby="submit-help"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <div className="muted" style={{ fontSize: '13px' }} id="submit-help">
              or email: <span style={{ color: 'var(--accent)' }}>abdul.rehman@example.com</span>
            </div>
          </div>
        </form>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Contact Info</h3>
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontWeight: '700' }}>Email</div>
            <div className="muted">abdul.rehman@example.com</div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <div style={{ fontWeight: '700' }}>Location</div>
            <div className="muted">Karachi, Pakistan</div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <div style={{ fontWeight: '700' }}>Availability</div>
            <div className="muted">Freelance / Open to opportunities</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact