import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Languages as GlobeIcon, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const About = () => {
  const { personal, areasOfInterest, languages } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="about" 
      className="py-20 border-y transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
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
            <Compass className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Profile & Academic Interests
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
        >
          
          {/* Main Biography Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col gap-6">
            <div 
              className="p-6 sm:p-8 rounded-2xl border shadow-2xs leading-relaxed space-y-4"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
            >
              <p className="text-base sm:text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
                {personal.bio}
              </p>
              <p className="text-sm sm:text-base">
                With a strong foundational Diploma in AI & ML (92%) and currently pursuing her B.Tech at Ramachandra College of Engineering, Sravani combines theoretical machine learning principles with practical Python application development.
              </p>
            </div>

            {/* Languages Spoken Card */}
            <div 
              className="p-6 rounded-2xl border shadow-2xs"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <GlobeIcon className="w-4 h-4" style={{ color: 'var(--text-primary)' }} />
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>
                  Languages Spoken
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {languages.map((lang, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl border flex items-center justify-between"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                  >
                    <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{lang.name}</span>
                    <span 
                      className="text-xs font-medium px-2 py-0.5 rounded border"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Areas of Interest */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <div 
              className="p-6 sm:p-8 rounded-2xl border shadow-2xs"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  Areas of Interest
                </h3>
              </div>

              <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
                Key fields of study and technological domains Sravani Medepalli is passionate about exploring:
              </p>

              <div className="grid grid-cols-1 gap-2.5">
                {areasOfInterest.map((interest, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="flex items-center justify-between p-3.5 rounded-xl border group transition-colors"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: 'var(--text-primary)' }} />
                      <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {interest}
                      </span>
                    </div>
                    <span 
                      className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded border"
                      style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}
                    >
                      Interest
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Status Note */}
              <div className="mt-8 pt-5 border-t flex items-start gap-3" style={{ borderColor: 'var(--border-color)' }}>
                <Sparkles className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'var(--text-muted)' }} />
                <p className="text-xs leading-normal" style={{ color: 'var(--text-secondary)' }}>
                  Actively seeking internship and placement opportunities in AI/ML engineering, software development, and prompt engineering roles.
                </p>
              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
