// src/components/Contact.jsx
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
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
      const dataToSend={...formData,subject:'Project Enquiry'};
      await emailjs.send(
        'service_mo15u5f',
        'template_36byv3b',
        dataToSend,
        'EzwlyMzIQo0TlzFn9'
      )
      await emailjs.send(
        'service_mo15u5f',
        'template_duk5xhq',
        dataToSend,
        'EzwlyMzIQo0TlzFn9'
      )
        alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
      })
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
            <label htmlFor="name">Full Name *</label>
            <input
              id="name"
              name="name"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
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
              or email: <span style={{ color: 'var(--accent)' }}>mahadtoosey@gmail.com</span>
            </div>
          </div>
        </form>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Contact Info</h3>
          <div style={{ marginTop: '10px' }}>
            <div style={{ fontWeight: '700' }}>Email</div>
            <div className="muted">mahadtoosey@gmail.com</div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <div style={{ fontWeight: '700' }}>Location</div>
            <div className="muted">Lahore, Pakistan</div>
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