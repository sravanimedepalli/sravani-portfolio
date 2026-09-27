import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, Sparkles, X, CheckCircle2, Layers, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Projects = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const handlePlaceholderClick = (type, url) => {
    if (!url || url === "#") {
      setToastMessage(`${type} link will be configured once the repository / demo is published.`);
      setTimeout(() => setToastMessage(null), 3500);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] } }
  };

  return (
    <section id="projects" className="py-20 relative transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div 
          className="fixed bottom-24 right-6 z-50 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border text-sm animate-bounce"
          style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)', borderColor: 'var(--border-color)' }}
        >
          <Info className="w-4 h-4 shrink-0" />
          <span>{toastMessage}</span>
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Featured Projects
          </h2>
          <p className="text-sm mt-2 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Key Artificial Intelligence, Machine Learning, and Python software projects built by Sravani Medepalli.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-10"
        >
          {projects.map((project) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group rounded-3xl border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 ${
                  isFeatured ? 'lg:grid-cols-12 ring-1 ring-slate-900/10 dark:ring-white/10' : 'md:grid-cols-12'
                }`}
                style={{ 
                  backgroundColor: 'var(--bg-card)', 
                  borderColor: isFeatured ? 'var(--text-primary)' : 'var(--border-color)' 
                }}
              >
                {/* Image Preview Column */}
                <div className={`${
                  isFeatured ? 'lg:col-span-5' : 'md:col-span-5'
                } relative h-64 ${isFeatured ? 'lg:h-auto' : 'md:h-auto'} min-h-[260px] overflow-hidden`} style={{ backgroundColor: 'var(--bg-secondary)' }}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70"></div>
                  
                  {/* Status Overlay Badge */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-sm backdrop-blur-md"
                    style={{ backgroundColor: 'var(--glass-bg)', color: 'var(--text-primary)' }}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`${
                  isFeatured ? 'lg:col-span-7' : 'md:col-span-7'
                } p-6 sm:p-8 flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        {project.category}
                      </span>
                      {isFeatured && (
                        <span 
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide"
                          style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
                        >
                          <Sparkles className="w-3 h-3" /> Flagship
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>

                    <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-secondary)' }}>
                      {project.tagline}
                    </p>

                    <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 mb-6">
                      {project.keyFeatures.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs" style={{ color: 'var(--text-secondary)' }}>
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: 'var(--text-primary)' }} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs font-medium rounded-md border"
                          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl shadow-2xs hover:shadow transition-all active:scale-95 group/btn"
                      style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handlePlaceholderClick("GitHub", project.githubUrl)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold border rounded-xl transition-all hover:border-slate-400"
                      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </button>

                    <button
                      onClick={() => handlePlaceholderClick("Live Demo", project.liveDemoUrl)}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold border rounded-xl transition-all hover:border-slate-400"
                      style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 opacity-60" />
                      <span>Live Demo</span>
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Future Expansion Card */}
        <div 
          className="mt-10 p-6 rounded-2xl border-2 border-dashed text-center flex flex-col items-center justify-center"
          style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
        >
          <Layers className="w-7 h-7 mb-2" style={{ color: 'var(--text-muted)' }} />
          <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
            More Projects Coming Soon
          </h4>
          <p className="text-xs mt-1 max-w-md" style={{ color: 'var(--text-muted)' }}>
            Sravani Medepalli is continuously working on new AI models, prompt engineering tools, and software solutions.
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-2xl rounded-2xl shadow-2xl border overflow-hidden max-h-[90vh] flex flex-col"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
            >
              <div className="flex items-center justify-between p-5 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="text-lg font-bold">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-52 object-cover rounded-xl border"
                  style={{ borderColor: 'var(--border-color)' }}
                />
                <h4 className="text-base font-bold">
                  {selectedProject.tagline}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selectedProject.description}
                </p>

                <div className="pt-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Key Features</h5>
                  <ul className="space-y-1.5">
                    {selectedProject.keyFeatures.map((f, i) => (
                      <li key={i} className="text-xs flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: 'var(--text-primary)' }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-4 border-t flex justify-end" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-bold rounded-lg border"
                  style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Projects;
