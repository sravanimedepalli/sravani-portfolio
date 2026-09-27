import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import ThemeSelector from './ThemeSelector';

const Navbar = ({ currentTheme, setCurrentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll spy intersection observer
    const sections = ['home', 'about', 'skills', 'projects', 'education', 'hackathons', 'certifications', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Hackathons', href: '#hackathons', id: 'hackathons' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-header shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
      style={{
        backgroundColor: scrolled ? 'var(--glass-bg)' : 'transparent',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 text-lg sm:text-xl font-bold tracking-tight group"
            style={{ color: 'var(--text-primary)' }}
          >
            <span 
              className="w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
            >
              SM
            </span>
            <span className="font-extrabold tracking-tight">{portfolioData.personal.fullName}</span>
          </a>

          {/* Desktop Navigation Links with Active Spy Indicator */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive ? 'font-bold' : 'hover:bg-slate-100/50 dark:hover:bg-slate-800/50'
                  }`}
                  style={{
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                >
                  {link.name}

                  {/* Active Indicator Underline */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--accent-primary)' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Selector & Resume */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Selector Popover */}
            <ThemeSelector currentTheme={currentTheme} onSelectTheme={setCurrentTheme} />

            {/* Resume Button */}
            <a
              href={portfolioData.personal.resumeUrl}
              download="Sravani_Medepalli_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 xl:hidden">
            <ThemeSelector currentTheme={currentTheme} onSelectTheme={setCurrentTheme} />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl transition-colors"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="xl:hidden border-b px-4 pt-3 pb-6 mt-3 shadow-xl backdrop-blur-lg"
          style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 text-base font-medium rounded-xl transition-colors flex items-center justify-between"
                  style={{
                    backgroundColor: isActive ? 'var(--bg-elevated)' : 'transparent',
                    color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)'
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--accent-primary)' }}></span>}
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t flex flex-col gap-2" style={{ borderColor: 'var(--border-color)' }}>
              <a
                href={portfolioData.personal.resumeUrl}
                download="Sravani_Medepalli_Resume.pdf"
                className="flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold rounded-xl shadow-sm"
                style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
