import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div>
      <h2 className="page-title">Contact Us</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>Have questions about your fitness journey? We're here to help you reach your goals.</p>
          <div className="info-item">123 Fitness Ave, Health City, CA 90210</div>
          <div className="info-item">+1 (800) 555-FIT1</div>
          <div className="info-item">support@fittrack.com</div>
          <div className="info-item">Mon–Fri: 8am – 6pm PST</div>
        </div>

        <div style={{ background: '#fff6f9', borderRadius: '10px', padding: '28px', boxShadow: '0 2px 10px rgba(249,168,192,0.15)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <h3 style={{ color: '#6b3f6b', margin: '16px 0 8px' }}>Message Sent!</h3>
              <p style={{ color: '#666' }}>We'll get back to you within 24 hours.</p>
              <button className="btn" style={{ marginTop: '20px', width: 'auto', padding: '10px 24px' }}
                onClick={() => setSent(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="John Doe" required value={form.name} onChange={update('name')} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" required value={form.email} onChange={update('email')} />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="How can we help?" required value={form.subject} onChange={update('subject')} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Write your message..." required value={form.message} onChange={update('message')} />
              </div>
              <button className="btn" type="submit">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
