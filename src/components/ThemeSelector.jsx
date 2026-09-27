import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

export const THEMES = [
  { id: 'light', name: 'Professional Light', colorBg: '#ffffff', colorBorder: '#e2e8f0', colorAccent: '#0f172a' },
  { id: 'midnight', name: 'Midnight', colorBg: '#0b0f17', colorBorder: '#1f2937', colorAccent: '#38bdf8' },
  { id: 'paper', name: 'Paper', colorBg: '#fbf9f5', colorBorder: '#e7e5e4', colorAccent: '#1c1917' },
  { id: 'monochrome', name: 'Monochrome', colorBg: '#000000', colorBorder: '#262626', colorAccent: '#ffffff' },
  { id: 'soft-slate', name: 'Soft Slate', colorBg: '#f1f5f9', colorBorder: '#cbd5e1', colorAccent: '#1e293b' },
];

const ThemeSelector = ({ currentTheme, onSelectTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Palette Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all focus:outline-none flex items-center gap-1.5 border border-slate-200/80 dark:border-slate-800/80"
        style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
        aria-label="Select Color Theme"
        title="Select Theme"
      >
        <Palette className="w-4.5 h-4.5" />
        <span className="hidden md:inline text-xs font-semibold capitalize">Theme</span>
      </button>

      {/* Theme Panel Popover */}
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-56 rounded-2xl shadow-2xl border p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ 
            backgroundColor: 'var(--bg-card)', 
            borderColor: 'var(--border-color)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
          }}
        >
          <div className="px-3 py-2 border-b mb-1 text-[11px] font-bold uppercase tracking-wider text-slate-400" style={{ borderColor: 'var(--border-color)', color: 'var(--text-muted)' }}>
            Choose Theme
          </div>

          <div className="space-y-1">
            {THEMES.map((theme) => {
              const isActive = currentTheme === theme.id;
              return (
                <button
                  key={theme.id}
                  onClick={() => {
                    onSelectTheme(theme.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive ? 'bg-slate-100 dark:bg-slate-800' : 'hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'var(--bg-elevated)' : undefined,
                    color: 'var(--text-primary)'
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    {/* Swatch circle */}
                    <span 
                      className="w-4 h-4 rounded-full border shadow-2xs shrink-0 flex items-center justify-center"
                      style={{ backgroundColor: theme.colorBg, borderColor: theme.colorBorder }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.colorAccent }}></span>
                    </span>
                    <span>{theme.name}</span>
                  </div>

                  {isActive && <Check className="w-3.5 h-3.5 text-slate-900 dark:text-white" style={{ color: 'var(--text-primary)' }} />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
