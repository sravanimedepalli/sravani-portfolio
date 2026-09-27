import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, Code2, Brain } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Hero = ({ introDone = true }) => {
  const { personal } = portfolioData;
  const [imageLoaded, setImageLoaded] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    // Subtle parallax effect on desktop
    if (window.innerWidth < 768) return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setMousePos({
      x: (clientX - centerX) / 45,
      y: (clientY - centerY) / 45
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      
      {/* Background Subtle Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-30" style={{ backgroundColor: 'var(--border-color)' }}></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: 'var(--border-color)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column with Staggered Entrance */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={introDone ? "visible" : "hidden"}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* 1. Availability Badge */}
            <motion.div variants={itemVariants}>
              <div 
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold shadow-2xs mb-6 backdrop-blur-sm"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Internships & Placements</span>
              </div>
            </motion.div>

            {/* 2 & 3. Headline & Name */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              Hi, I'm <br className="hidden sm:inline" />
              <span className="underline underline-offset-8" style={{ textDecorationColor: 'var(--border-hover)' }}>
                {personal.fullName}
              </span>
            </motion.h1>

            {/* 4 & 5. Subtitle & College Badge */}
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              <span>{personal.role}</span>
              <span className="hidden sm:inline" style={{ color: 'var(--text-muted)' }}>•</span>
              <span 
                className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-md border"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-secondary)'
                }}
              >
                Ramachandra College of Engineering
              </span>
            </motion.h2>

            {/* 6. Concise Intro Text */}
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg max-w-2xl leading-relaxed mb-8"
              style={{ color: 'var(--text-secondary)' }}
            >
              "{personal.tagline}"
            </motion.p>

            {/* 7. Action Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 group"
                style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href={personal.resumeUrl}
                download="Sravani_Medepalli_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold border rounded-xl shadow-2xs hover:shadow transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                <FileText className="w-4.5 h-4.5" style={{ color: 'var(--text-secondary)' }} />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* 8. Social Links Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-4 pt-4 border-t w-full"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                Connect:
              </span>

              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${personal.socials.email}`}
                  className="p-2.5 rounded-xl border transition-all hover:scale-110 active:scale-95"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  aria-label="Email Sravani Medepalli"
                  title={`Email: ${personal.socials.email}`}
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border transition-all hover:scale-110 active:scale-95"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border transition-all hover:scale-110 active:scale-95"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-primary)'
                  }}
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* 9. Profile Photo Card with Parallax & Motion */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={introDone ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 40, scale: 0.96 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            style={{
              x: mousePos.x,
              y: mousePos.y,
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96">
              
              {/* Outer Geometric Frame */}
              <div 
                className="absolute -top-3 -left-3 w-full h-full border-2 rounded-2xl transform -rotate-2 transition-transform duration-300 hover:rotate-0"
                style={{ borderColor: 'var(--border-color)' }}
              ></div>
              <div 
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl transform rotate-2 opacity-60"
                style={{ backgroundColor: 'var(--bg-elevated)' }}
              ></div>

              {/* Main Photo Card Container */}
              <div 
                className="relative w-full h-full border rounded-2xl shadow-xl overflow-hidden p-2.5 flex flex-col justify-between group transition-shadow duration-300"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                
                {/* Header */}
                <div 
                  className="flex items-center justify-between px-2 pt-1 pb-2 border-b text-xs font-mono"
                  style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                >
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    sravani_medepalli.png
                  </span>
                  <span>AI/ML</span>
                </div>

                {/* Photo Display */}
                <div 
                  className="relative flex-1 my-2 rounded-xl overflow-hidden flex items-center justify-center border"
                  style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                >
                  {imageLoaded ? (
                    <img 
                      src={personal.profilePhoto} 
                      alt={personal.fullName}
                      onError={() => setImageLoaded(false)}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center">
                      <Brain className="w-12 h-12 mb-2" style={{ color: 'var(--text-primary)' }} />
                      <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {personal.fullName}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-2 px-1 pt-1">
                  <div 
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border"
                    style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                  >
                    <Code2 className="w-3 h-3" style={{ color: 'var(--text-muted)' }} />
                    <span>Python & Machine Learning</span>
                  </div>
                  <div 
                    className="px-2 py-1 rounded-md text-[10px] font-mono font-bold"
                    style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
                  >
                    2025–2028
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
