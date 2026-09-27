import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="border-t py-12 transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b" style={{ borderColor: 'var(--border-color)' }}>
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="text-xl font-bold tracking-tight flex items-center gap-2.5" style={{ color: 'var(--text-primary)' }}>
              <span 
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
                style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
              >
                SM
              </span>
              <span className="font-extrabold">{personal.fullName}</span>
            </a>
            <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
              AI/ML Student • Ramachandra College of Engineering
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${personal.socials.email}`}
              className="text-xs font-semibold transition-colors flex items-center gap-1.5 hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold transition-colors flex items-center gap-1.5 hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold transition-colors flex items-center gap-1.5 hover:underline"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl border transition-colors shadow-2xs hover:scale-110 active:scale-95"
            style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
          <p>© 2026 {personal.fullName}. All rights reserved.</p>
          <p>Designed with minimal elegance for recruiters & technical teams.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
