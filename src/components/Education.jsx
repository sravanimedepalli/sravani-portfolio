import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  const { education } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-20 transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Education Timeline
          </h2>
        </motion.div>

        {/* Education Timeline Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative border-l-2 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {education.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline Bullet */}
              <span 
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-4 shadow-2xs group-hover:scale-125 transition-transform duration-200"
                style={{ backgroundColor: 'var(--accent-primary)', borderColor: 'var(--bg-primary)' }}
              ></span>

              <div 
                className="p-6 sm:p-8 rounded-2xl border shadow-2xs transition-all hover:shadow-md"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span 
                      className="inline-block px-2.5 py-0.5 mb-2 text-xs font-semibold rounded"
                      style={{ backgroundColor: 'var(--accent-badge-bg)', color: 'var(--accent-badge-text)' }}
                    >
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
                      {item.degree}
                    </h3>
                    <p className="text-base font-semibold mt-1" style={{ color: 'var(--text-secondary)' }}>
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    <span 
                      className="flex items-center gap-1.5 px-3 py-1 rounded-md border"
                      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>

                    {item.subText && (
                      <span 
                        className="px-3 py-1 rounded-md font-semibold mt-1 border"
                        style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                      >
                        {item.subText}
                      </span>
                    )}

                    {item.percentage && (
                      <span 
                        className="flex items-center gap-1.5 px-3 py-1 rounded-md border font-bold mt-1"
                        style={{ backgroundColor: 'var(--bg-elevated)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Percentage: {item.percentage}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t space-y-1.5" style={{ borderColor: 'var(--border-color)' }}>
                  {item.highlights.map((hl, hIdx) => (
                    <p key={hIdx} className="text-xs flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: 'var(--text-muted)' }}></span>
                      <span>{hl}</span>
                    </p>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
