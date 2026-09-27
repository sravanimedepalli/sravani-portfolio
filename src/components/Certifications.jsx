import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Info, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Certifications = () => {
  const { certifications } = portfolioData;
  const [toast, setToast] = useState(null);

  const handleCertClick = (cert) => {
    setToast(`Certificate link for "${cert.title}" can be attached here.`);
    setTimeout(() => setToast(null), 3500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="certifications" className="py-20 relative transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Toast Alert */}
      {toast && (
        <div 
          className="fixed bottom-24 right-6 z-50 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border text-sm animate-bounce"
          style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)', borderColor: 'var(--border-color)' }}
        >
          <Info className="w-4 h-4 shrink-0" />
          <span>{toast}</span>
        </div>
      )}

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
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Workshops & Certifications
          </h2>
          <p className="text-sm mt-2 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Verified course accomplishments, industry certifications, and technical workshops completed by Sravani Medepalli.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-6 rounded-2xl border shadow-2xs flex flex-col justify-between transition-colors"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div 
                    className="p-3 rounded-xl border shadow-2xs"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  >
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span 
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                  >
                    {cert.issuer}
                  </span>
                </div>

                <h3 className="text-base font-bold leading-snug mb-1" style={{ color: 'var(--text-primary)' }}>
                  {cert.title}
                </h3>
                
                <p className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                  {cert.type}
                </p>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 mt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-[11px] font-mono" style={{ color: 'var(--text-muted)' }}>
                  Verified Completion
                </span>

                <button
                  onClick={() => handleCertClick(cert)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-lg hover:border-slate-400 transition-all"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  title="Attach Certificate File"
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </button>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
