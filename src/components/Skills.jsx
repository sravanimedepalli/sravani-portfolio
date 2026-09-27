import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Layout, Wrench, Sparkles, Terminal, Coffee, Cpu, GitBranch, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap = {
  Code2, Coffee, Terminal, Brain, Cpu, Layout, Sparkles, GitBranch, Laptop
};

const Skills = () => {
  const { skills } = portfolioData;

  const categories = [
    { title: "Programming Languages", icon: Code2, items: skills.programming },
    { title: "AI & Machine Learning", icon: Brain, items: skills.aiMl },
    { title: "Web Development", icon: Layout, items: skills.webDev },
    { title: "Additional Expertise", icon: Sparkles, items: skills.additional },
    { title: "Tools & Environment", icon: Wrench, items: skills.tools },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section 
      id="skills" 
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Skills & Competencies
          </h2>
          <p className="text-sm mt-2 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Clean category layout representing Sravani Medepalli's technical abilities without artificial progress percentages.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="p-6 rounded-2xl border shadow-2xs flex flex-col justify-between transition-colors"
                style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <div 
                      className="p-2.5 rounded-xl"
                      style={{ backgroundColor: 'var(--bg-elevated)', color: 'var(--text-primary)' }}
                    >
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold" style={{ color: 'var(--text-primary)' }}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Items */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {category.items.map((skill) => {
                      const IconComp = iconMap[skill.icon] || Code2;
                      return (
                        <div 
                          key={skill.name}
                          className="flex items-center justify-between p-3 rounded-xl border group transition-all"
                          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
                        >
                          <div className="flex items-center gap-2.5">
                            <IconComp className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: 'var(--text-primary)' }} />
                            <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                            Verified
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
