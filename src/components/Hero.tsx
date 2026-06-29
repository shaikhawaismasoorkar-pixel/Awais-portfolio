import { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Code, Cpu, LineChart, ShieldCheck, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { PORTFOLIO_DATA } from '../types';

export default function Hero({ darkMode }: { darkMode: boolean }) {
  const titles = [
    "Artificial Intelligence Student",
    "Full-Stack Web Developer",
    "Technical SEO Specialist",
    "Certified Prompt Engineer",
    "Digital Marketing Enthusiast"
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = titles[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % titles.length);
        } else {
          timer = setTimeout(handleType, typingSpeed);
        }
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTextIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Trigger print/save of resume
  const handleDownloadResume = () => {
    window.print();
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center overflow-hidden pt-28 pb-16 transition-colors ${
        darkMode ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-800'
      }`}
    >
      {/* Animated Glowing Orbs Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 ${
              darkMode ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-indigo-50 border-indigo-200 text-indigo-600'
            }`}
          >
            <div className="glow-dot animate-pulse shrink-0" />
            <span className="font-mono text-[10px] font-bold tracking-wider uppercase">AI ENGINEER & WEB ARCHITECT</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] mb-6"
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-gradient-text font-display">
              SHAIKH AWAIS SARFARAZ
            </span>
          </motion.h1>

          {/* Typing Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-10 mb-8"
          >
            <span className={`font-mono text-lg sm:text-xl font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              I am a{' '}
              <span className="text-indigo-500 font-bold border-r-2 border-indigo-500 pr-1 animate-blink">
                {currentText}
              </span>
            </span>
          </motion.div>

          {/* Intro Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-sm sm:text-base leading-relaxed max-w-xl mb-8 ${
              darkMode ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            Engineering scalable digital infrastructures and AI integrations. I bridge full-stack development, prompt engineering, and organic SEO growth to turn cutting-edge ideas into high-conversion digital experiences.
          </motion.p>

          {/* Button CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10 w-full"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3.5 rounded-xl accent-gradient text-white font-bold text-sm transition-all shadow-lg shadow-indigo-500/20 cursor-pointer flex items-center gap-2 group hover:scale-[1.02]"
            >
              Contact Me 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className={`px-6 py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer border flex items-center gap-2 ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                  : 'bg-white border-slate-200 hover:bg-slate-100 text-slate-700'
              }`}
            >
              View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className={`px-5 py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer border flex items-center gap-2 ${
                darkMode
                  ? 'bg-transparent border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10'
                  : 'bg-transparent border-indigo-200 text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <Download className="w-4 h-4" /> Download CV / Print
            </button>
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-3.5 rounded-xl font-bold text-sm transition-all cursor-pointer border flex items-center gap-2 hover:scale-[1.02] ${
                darkMode
                  ? 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-200'
                  : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <Github className="w-4 h-4 text-cyan-400" /> GitHub Profile
            </a>
          </motion.div>

          {/* Info Accreditations / Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 border-t pt-8 w-full max-w-lg border-slate-800/60"
          >
            <div className="flex flex-col items-start">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-indigo-500">ARKP</span>
              <span className={`text-[10px] uppercase font-mono tracking-wider mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>AIML Specialty</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-purple-500">40%+</span>
              <span className={`text-[10px] uppercase font-mono tracking-wider mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Speed Gains</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="font-sans font-extrabold text-2xl tracking-tight text-cyan-500">100%</span>
              <span className={`text-[10px] uppercase font-mono tracking-wider mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>SEO Ready</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side Visual Portrait Frame */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Accent bubble directly aligned with the theme style */}
          <div className="absolute -top-10 -right-10 w-48 h-48 accent-gradient blur-[90px] opacity-25" />

          {/* Glassmorphism card framing a futuristic tech-canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className={`relative w-full max-w-[340px] aspect-[3/4] p-4 shadow-2xl overflow-hidden flex flex-col group ${
              darkMode ? 'glass' : 'glass-light'
            }`}
          >
            {/* Tech Scan Line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 animate-scan z-20 opacity-70" />

            {/* Glowing Ring Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-cyan-500/5 z-0 rounded-3xl transition-opacity group-hover:opacity-100" />

            {/* Core Interactive Mesh Container */}
            <div className={`relative flex-1 rounded-2xl overflow-hidden flex flex-col items-center justify-center border z-10 ${
              darkMode ? 'bg-slate-950/40 border-white/5' : 'bg-slate-100/50 border-slate-200'
            }`}>
              {/* Profile Graphic/Illustration with glowing circles */}
              <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-indigo-500/10 via-purple-500/20 to-cyan-400/10 flex items-center justify-center border border-indigo-500/30 shadow-inner group-hover:scale-105 transition-all">
                {/* SVG Silhouette representation representing Human AI */}
                <svg
                  viewBox="0 0 100 100"
                  className="w-32 h-32 text-indigo-400/80 filter drop-shadow-lg"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {/* Outer Tech rings */}
                  <circle cx="50" cy="50" r="48" strokeDasharray="3,3" className="animate-spin" style={{ animationDuration: '40s' }} />
                  <circle cx="50" cy="50" r="42" className="text-cyan-400/30" />
                  
                  {/* Nodes & Connections on profile representation */}
                  <path
                    d="M50 20 C42 20, 35 28, 35 38 C35 50, 42 55, 50 55 C58 55, 65 50, 65 38 C65 28, 58 20, 50 20 Z"
                    className="text-indigo-500/40"
                    fill="currentColor"
                  />
                  <path
                    d="M25 80 C25 66, 36 60, 50 60 C64 60, 75 66, 75 80"
                    strokeLinecap="round"
                    className="text-cyan-500/40"
                  />

                  {/* Neural Graph overlays */}
                  <circle cx="50" cy="28" r="3" fill="#4F46E5" />
                  <circle cx="42" cy="40" r="3.5" fill="#06B6D4" />
                  <circle cx="58" cy="40" r="3.5" fill="#7C3AED" />
                  <circle cx="50" cy="65" r="4" fill="#4F46E5" />
                  
                  <line x1="50" y1="28" x2="42" y2="40" stroke="#4F46E5" strokeWidth="1" />
                  <line x1="50" y1="28" x2="58" y2="40" stroke="#7C3AED" strokeWidth="1" />
                  <line x1="42" y1="40" x2="50" y2="65" stroke="#06B6D4" strokeWidth="1" />
                  <line x1="58" y1="40" x2="50" y2="65" stroke="#7C3AED" strokeWidth="1" />
                </svg>

                {/* Pulsing focal point */}
                <span className="absolute flex h-3 w-3 top-12 left-1/2 -translate-x-1/2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                </span>
              </div>

              {/* Status Box overlay inside the portrait card */}
              <div className={`mt-6 px-4 py-2 rounded-xl border flex items-center gap-2.5 shadow-sm ${
                darkMode ? 'bg-slate-900/80 border-white/5' : 'bg-white border-slate-200'
              }`}>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
                </span>
                <span className="font-mono text-[10px] tracking-widest font-semibold uppercase text-cyan-400">
                  SYSTEM STATUS: LIVE
                </span>
              </div>
            </div>

            {/* floating interactive indicators outside card */}
            <div className={`absolute -right-4 top-10 p-3 rounded-2xl border flex items-center gap-2 shadow-lg backdrop-blur-md hover:-translate-y-1 transition-transform z-20 ${
              darkMode ? 'bg-slate-900/90 border-white/10' : 'bg-white border-slate-200'
            }`}>
              <Code className="w-4 h-4 text-cyan-400" />
              <span className="font-mono text-[10px] font-bold tracking-wider">React Dev</span>
            </div>
            
            <div className={`absolute -left-6 bottom-16 p-3 rounded-2xl border flex items-center gap-2 shadow-lg backdrop-blur-md hover:translate-y-1 transition-transform z-20 ${
              darkMode ? 'bg-slate-900/90 border-white/10' : 'bg-white border-slate-200'
            }`}>
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="font-mono text-[10px] font-bold tracking-wider">Prompt Eng.</span>
            </div>

            <div className={`absolute right-12 -bottom-4 p-2 px-3 rounded-2xl border flex items-center gap-2 shadow-lg backdrop-blur-md hover:-translate-y-1 transition-transform z-20 ${
              darkMode ? 'bg-slate-900/90 border-white/10' : 'bg-white border-slate-200'
            }`}>
              <LineChart className="w-3.5 h-3.5 text-indigo-400" />
              <span className="font-mono text-[10px] font-bold tracking-wider">SEO Core</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
