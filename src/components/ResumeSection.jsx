import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const ResumeSection = () => {
  const { personal } = portfolioData;

  return (
    <section 
      id="resume-section" 
      className="py-20 border-y transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 border shadow-lg overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 transition-colors"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl pointer-events-none opacity-30" style={{ backgroundColor: 'var(--border-color)' }}></div>

          <div className="flex-1 text-center md:text-left z-10">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider mb-4 border"
              style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
              Want to know more about my experience?
            </h2>

            <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Download Sravani Medepalli's actual resume PDF for recruiter records, internship evaluations, or team placement opportunities.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold" style={{ color: 'var(--text-muted)' }}>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Actual Resume Document
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                Sravani_Medepalli_Resume.pdf
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center gap-3.5 w-full md:w-auto z-10">
            {/* Download Resume Button */}
            <a
              href={personal.resumeUrl}
              download="Sravani_Medepalli_Resume.pdf"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 group"
              style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
            >
              <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
            </a>

            {/* View Resume Button */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold border rounded-xl transition-all active:scale-95 group"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
            >
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View Resume</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default ResumeSection;
