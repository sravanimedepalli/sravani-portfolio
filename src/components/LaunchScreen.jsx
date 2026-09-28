import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LaunchScreen = ({ onComplete }) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    // Required Exact Sequence Timing:
    // STEP 1: SM Monogram (0.0s - 1.0s) -> fade/scale out
    // STEP 2: Sravani Medepalli (1.0s - 2.1s) -> fade/scale out
    // STEP 3: AI/ML Student (2.1s - 3.1s) -> fade out
    // STEP 4: Reveal Portfolio (3.1s - 3.6s) -> STOP

    const timer1 = setTimeout(() => {
      setStep(2);
    }, 1000);

    const timer2 = setTimeout(() => {
      setStep(3);
    }, 2100);

    const timer3 = setTimeout(() => {
      setStep(4);
    }, 3100);

    const timer4 = setTimeout(() => {
      onComplete?.();
    }, 3600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {step < 4 && (
        <motion.div
          key="launch-screen-overlay"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.5, ease: 'easeOut' } 
          }}
          className="fixed inset-0 z-[100] w-full h-full min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 select-none pointer-events-auto"
          style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        >
          <div className="w-full max-w-sm sm:max-w-md mx-auto flex flex-col items-center justify-center text-center px-2 min-h-[160px]">
            
            <AnimatePresence mode="wait">
              
              {/* STEP 1: SM Monogram */}
              {step === 1 && (
                <motion.div
                  key="step-sm"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-lg sm:text-2xl font-black tracking-wider shadow-lg shrink-0"
                  style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--accent-text)' }}
                >
                  SM
                </motion.div>
              )}

              {/* STEP 2: Name Reveal */}
              {step === 2 && (
                <motion.h1
                  key="step-name"
                  initial={{ opacity: 0, scale: 0.95, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-center max-w-full break-words leading-tight"
                  style={{ fontSize: 'clamp(1.35rem, 5vw, 2.25rem)' }}
                >
                  Sravani Medepalli
                </motion.h1>
              )}

              {/* STEP 3: Role Reveal */}
              {step === 3 && (
                <motion.div
                  key="step-role"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center w-full"
                >
                  <p 
                    className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-center"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    AI/ML Student
                  </p>
                </motion.div>
              )}

            </AnimatePresence>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LaunchScreen;
