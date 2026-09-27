import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ENABLE_INTRO_ANIMATION = true;

const LaunchScreen = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches || !ENABLE_INTRO_ANIMATION) {
      onComplete?.();
      return;
    }

    // Step 1: Monogram SM (0 - 700ms)
    // Step 2: Full Name (700ms - 1400ms)
    // Step 3: Role (1400ms - 2000ms)
    // Step 4: Progress Line (2000ms - 2500ms)
    // Step 5: Fade Up Out (2500ms - 3000ms)

    const timer1 = setTimeout(() => setStep(2), 700);
    const timer2 = setTimeout(() => setStep(3), 1400);
    const timer3 = setTimeout(() => {
      setStep(4);
      // Animate progress line from 0 to 100
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        if (currentProgress >= 100) {
          setProgress(100);
          clearInterval(interval);
        } else {
          setProgress(currentProgress);
        }
      }, 20);
    }, 2000);

    const timer4 = setTimeout(() => setStep(5), 2600);
    const timer5 = setTimeout(() => {
      onComplete?.();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 5 && (
        <motion.div
          key="launch-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -80, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-slate-950 text-slate-900 dark:text-white select-none pointer-events-auto"
          style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
          <div className="flex flex-col items-center justify-center max-w-md px-6 text-center">
            
            {/* STEP 1: Monogram SM */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-16 h-16 rounded-2xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 flex items-center justify-center text-xl font-black tracking-wider shadow-lg mb-6"
              style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
            >
              SM
            </motion.div>

            {/* STEP 2: Name Reveal */}
            {step >= 2 && (
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2"
              >
                Sravani Medepalli
              </motion.h1>
            )}

            {/* STEP 3: Role Reveal */}
            {step >= 3 && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8"
                style={{ color: 'var(--text-secondary)' }}
              >
                AI/ML Student
              </motion.p>
            )}

            {/* STEP 4: Progress Bar */}
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden"
                style={{ backgroundColor: 'var(--border-color)' }}
              >
                <motion.div
                  className="h-full bg-slate-900 dark:bg-slate-100 rounded-full"
                  style={{ 
                    width: `${progress}%`,
                    backgroundColor: 'var(--accent-primary)',
                    transition: 'width 0.2s ease-out'
                  }}
                />
              </motion.div>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchScreen;
