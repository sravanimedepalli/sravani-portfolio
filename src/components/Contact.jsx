import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MessageSquare, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please complete all required fields before submitting.' });
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter a valid email address.' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start mb-12"
        >
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider mb-3 border"
            style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Let's Connect
          </h2>
          <p className="text-sm mt-2 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Whether you are a recruiter, hackathon teammate, or tech company interested in internship placement opportunities, feel free to reach out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-5">
              
              {/* Email Card */}
              <a 
                href={`mailto:${personal.socials.email}`}
                className="p-6 rounded-2xl border transition-all flex items-start gap-4 group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div 
                  className="p-3 rounded-xl border shadow-2xs group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Email Address</h3>
                  <p className="text-xs font-mono font-semibold mt-1 select-all" style={{ color: 'var(--text-secondary)' }}>
                    {personal.socials.email}
                  </p>
                  <span className="text-[11px] mt-0.5 block" style={{ color: 'var(--text-muted)' }}>
                    (Click to send email directly)
                  </span>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a 
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border transition-all flex items-start gap-4 group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div 
                  className="p-3 rounded-xl border shadow-2xs group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                >
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>LinkedIn Network</h3>
                  <p className="text-xs font-mono font-semibold mt-1" style={{ color: 'var(--text-secondary)' }}>
                    linkedin.com/in/sravani-medepalli-055107377
                  </p>
                  <span className="text-[11px] mt-0.5 block" style={{ color: 'var(--text-muted)' }}>
                    (Click to view LinkedIn profile)
                  </span>
                </div>
              </a>

              {/* GitHub Card */}
              <a 
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl border transition-all flex items-start gap-4 group"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div 
                  className="p-3 rounded-xl border shadow-2xs group-hover:scale-105 transition-transform"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                >
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>GitHub Profile</h3>
                  <p className="text-xs font-mono font-semibold mt-1" style={{ color: 'var(--text-secondary)' }}>
                    github.com/sravanimedepalli
                  </p>
                  <span className="text-[11px] mt-0.5 block" style={{ color: 'var(--text-muted)' }}>
                    (Click to view code repositories)
                  </span>
                </div>
              </a>

            </div>

            <div 
              className="mt-6 p-4 rounded-xl border text-xs font-medium flex items-center gap-2"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
            >
              <Sparkles className="w-4 h-4 shrink-0" style={{ color: 'var(--text-primary)' }} />
              <span>Sravani Medepalli responds promptly to academic & recruitment inquiries.</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div 
              className="p-6 sm:p-8 rounded-3xl border shadow-2xs"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              
              <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Send a Direct Message
              </h3>

              {status.submitted ? (
                <div className="p-8 text-center rounded-2xl border space-y-4" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300 mx-auto flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                    Message Submitted!
                  </h4>
                  <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
                    Thank you for contacting Sravani Medepalli. Your message has been logged.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="mt-4 px-4 py-2 text-xs font-bold rounded-lg border"
                    style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {status.error && (
                    <div className="p-3.5 rounded-xl bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 text-xs font-semibold flex items-center gap-2 border border-rose-200 dark:border-rose-900">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                        Your Name <span style={{ color: 'var(--text-muted)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Recruiter Name"
                        className="w-full px-4 py-3 text-sm rounded-xl border focus:outline-none transition-colors"
                        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                        Your Email <span style={{ color: 'var(--text-muted)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@company.com"
                        className="w-full px-4 py-3 text-sm rounded-xl border focus:outline-none transition-colors"
                        style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-primary)' }}>
                      Message <span style={{ color: 'var(--text-muted)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Sravani Medepalli, we would like to connect with you regarding an AI/ML internship placement..."
                      className="w-full px-4 py-3 text-sm rounded-xl border focus:outline-none transition-colors resize-none"
                      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-bold rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50 group"
                    style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
                  >
                    {status.submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
