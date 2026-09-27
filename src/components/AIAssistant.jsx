import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageSquare, X, Send, Sparkles, RefreshCw, User, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hi! I'm Sravani's AI Assistant 🤖. Ask me anything about her skills, projects (like Crop Scan), education, hackathons, or experience!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Suggested prompt chips
  const suggestedPrompts = [
    "What projects has Sravani worked on?",
    "What are her key skills in AI & ML?",
    "Where does Sravani study?",
    "Tell me about Crop Scan.",
    "How can I contact her for an internship?"
  ];

  // Logic to process user query using knowledge base or future API handler
  const processQuery = (userText) => {
    const textLower = userText.toLowerCase();

    // 1. Check knowledge base in portfolio.js
    const match = portfolioData.aiKnowledgeBase.find(item =>
      item.keywords.some(kw => textLower.includes(kw))
    );

    if (match) {
      return match.response;
    }

    // 2. Specific Crop Scan fallback
    if (textLower.includes("crop") || textLower.includes("scan")) {
      return "Sravani worked on Crop Scan, an AI-powered crop health analysis project designed to identify crop/leaf health conditions and provide agricultural guidance.";
    }

    // 3. Skills fallback
    if (textLower.includes("python") || textLower.includes("java") || textLower.includes("code")) {
      return "Sravani is proficient in Python (Intermediate), Java & C (Familiar), HTML/CSS web technologies, and AI/ML model foundations.";
    }

    // Default polite response
    return "Sravani is an AI/ML student at Ramachandra College of Engineering interested in AI, ML, and software development. She built Crop Scan and actively participates in hackathons. Feel free to check out her Projects or Contact sections for more details!";
  };

  const handleSend = (textToSend) => {
    const text = textToSend || inputQuery;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputQuery('');
    setIsTyping(true);

    setTimeout(() => {
      const botAnswer = processQuery(text);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Action Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 px-4 py-3.5 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-full shadow-2xl hover:shadow-slate-900/20 font-semibold text-sm transition-all border border-slate-700 dark:border-slate-300"
          aria-label="Ask AI Assistant"
        >
          <Bot className="w-5 h-5" />
          <span className="hidden sm:inline">Ask My AI Assistant 🤖</span>
        </motion.button>
      </div>

      {/* Chat Window Modal / Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[520px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-4 px-5 bg-slate-900 text-white dark:bg-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800 dark:bg-slate-700 flex items-center justify-center border border-slate-700 dark:border-slate-600">
                  <Bot className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold flex items-center gap-1.5">
                    <span>Sravani's AI Bot</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Instant Portfolio Q&A
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages([{
                    id: 'welcome',
                    sender: 'bot',
                    text: "Hi! I'm Sravani's AI Assistant 🤖. Ask me anything about her skills, projects, or background!",
                    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  }])}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  title="Reset Chat"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-950/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs ${
                    msg.sender === 'user' 
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' 
                      : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-tr-none font-medium'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 rounded-tl-none shadow-2xs'
                  }`}>
                    <p>{msg.text}</p>
                    <span className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-slate-300 dark:text-slate-600' : 'text-slate-400 dark:text-slate-500'
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <Bot className="w-4 h-4 text-emerald-500 animate-bounce" />
                  <span>AI Assistant is writing...</span>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="px-3 py-2 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {suggestedPrompts.map((prompt, pIdx) => (
                <button
                  key={pIdx}
                  onClick={() => handleSend(prompt)}
                  className="shrink-0 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask about Crop Scan, skills..."
                className="flex-1 px-3.5 py-2 text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-slate-100"
              />
              <button
                type="submit"
                className="p-2 bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 rounded-xl hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
