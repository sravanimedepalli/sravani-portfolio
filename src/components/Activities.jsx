import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Building, Sparkles, Layers, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Activities = () => {
  const { hackathons } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="hackathons" 
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
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Hackathon Participation
          </h2>
        </motion.div>

        {/* Narrative Summary Box */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl border shadow-2xs mb-8 transition-colors"
          style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
        >
          <div className="flex items-start gap-4">
            <div 
              className="p-3 rounded-xl shrink-0 hidden sm:block border"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
            >
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Hackathons & Practical Innovation
              </h3>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {hackathons.summary}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Hackathon Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {hackathons.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="p-6 sm:p-7 rounded-2xl border shadow-2xs transition-all hover:shadow-md flex flex-col justify-between"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span 
                    className="px-3 py-1 text-xs font-bold rounded-lg"
                    style={{ backgroundColor: 'var(--accent-badge-bg)', color: 'var(--accent-badge-text)' }}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono font-medium" style={{ color: 'var(--text-muted)' }}>
                    College & External
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>

                <p className="text-xs font-semibold flex items-center gap-1.5 mb-3" style={{ color: 'var(--text-secondary)' }}>
                  <Building className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />
                  <span>{item.organization}</span>
                </p>

                <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>

                {item.projectPresented && (
                  <div 
                    className="p-3 rounded-xl border text-xs font-semibold flex items-center gap-2"
                    style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                  >
                    <Award className="w-4 h-4 shrink-0" style={{ color: 'var(--text-primary)' }} />
                    <span>Project Featured: {item.projectPresented}</span>
                  </div>
                )}
              </div>

            </motion.div>
          ))}

          {/* Placeholder Card for Future Submissions */}
          <div 
            className="p-6 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center text-center min-h-[180px]"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
          >
            <Layers className="w-6 h-6 mb-2" style={{ color: 'var(--text-muted)' }} />
            <h4 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
              Future Hackathon Records
            </h4>
            <p className="text-xs mt-1 max-w-xs" style={{ color: 'var(--text-muted)' }}>
              Configurable entries ready for upcoming hackathon names, dates, certificates, and achievements.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Activities;
