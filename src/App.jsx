import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Activities from './components/Activities';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import LaunchScreen from './components/LaunchScreen';
import CustomCursor from './components/CustomCursor';

function App() {
  // Theme state: 'light' (Default), 'midnight', 'paper', 'monochrome', 'soft-slate'
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem('sravani_theme_mode');
    return saved || 'light';
  });

  // Launch screen state - runs ONCE on initial page load / refresh
  const [showIntro, setShowIntro] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  const handleLaunchComplete = useCallback(() => {
    setIntroDone(true);
    setShowIntro(false); // Unmount LaunchScreen completely
  }, []);

  useEffect(() => {
    // Apply theme data attribute to root <html>
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('sravani_theme_mode', currentTheme);

    // Sync dark class for Tailwind dark variant compatibility if theme is dark-based
    if (currentTheme === 'midnight' || currentTheme === 'monochrome') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentTheme]);

  return (
    <div className="min-h-screen transition-colors duration-500 relative">
      
      {/* 1. Cinematic Launch Screen - Unmounts permanently after single completion */}
      {showIntro && <LaunchScreen onComplete={handleLaunchComplete} />}

      {/* 2. Desktop Custom Cursor */}
      <CustomCursor />

      {/* 3. Navigation Header */}
      <Navbar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />

      {/* 4. Main Sections */}
      <main>
        <Hero introDone={introDone} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Activities />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* 5. Footer */}
      <Footer />

      {/* 6. Floating AI Assistant Widget */}
      <AIAssistant />

    </div>
  );
}

export default App;
