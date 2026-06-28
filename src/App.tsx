import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loaderLog, setLoaderLog] = useState("Initializing core scripts...");

  // Custom Cursor state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // SEO & Structured Data Schema Initialization
  useEffect(() => {
    // Dynamic page title optimization
    document.title = "Shaikh Awais Sarfaraz | AI & ML Engineer & Full-Stack Developer";

    // Inject Search Engine Structured Schema (JSON-LD) for rich Google indexing
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Shaikh Awais Sarfaraz",
      "alternateName": "Awais Sarfaraz",
      "jobTitle": "Artificial Intelligence Specialist, Web Developer & SEO Specialist",
      "url": window.location.origin,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kalyan",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      },
      "email": "shaikhawais.masoorkar@gmail.com",
      "telephone": "+918928196697",
      "sameAs": [
        "https://github.com/shaikhawaismasoorkar-pixel"
      ]
    };

    const scriptId = "json-ld-portfolio-schema";
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.innerHTML = JSON.stringify(schema);
  }, []);

  // Custom Cursor trigger
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setCursorVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Bootup Loader Progression
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 6;
        const next = prev + step;
        return next > 100 ? 100 : next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  // Active status logs for loading bar
  useEffect(() => {
    if (progress < 25) {
      setLoaderLog("[OK] COMPILING WEB-INSPECTOR GRAPHICS ENGINE...");
    } else if (progress < 50) {
      setLoaderLog("[OK] INJECTING PORTFOLIO BIOGRAPHY SCHEMA...");
    } else if (progress < 75) {
      setLoaderLog("[OK] SYNCHRONIZING SERVER-SIDE GEMINI ENGINES...");
    } else {
      setLoaderLog("[OK] DEPLOYING ORGANIC TECHNICAL SEO DATA...");
    }
  }, [progress]);

  return (
    <div className={`min-h-screen transition-colors duration-300 select-none ${
      darkMode ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-800'
    }`}>
      
      {/* Custom Mouse Follower Glow (Only visible on desktop) */}
      {cursorVisible && (
        <>
          {/* Main glowing pointer dot */}
          <div
            className="hidden md:block fixed w-3 h-3 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
          />
          {/* Larger soft orbital aura */}
          <div
            className="hidden md:block fixed w-10 h-10 border border-indigo-500/40 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out bg-indigo-500/5 backdrop-blur-[0.5px]"
            style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
          />
        </>
      )}

      {/* High-Tech Cinematic Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            id="boot-loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050816] z-[9999] flex flex-col items-center justify-center p-6 text-white font-mono"
          >
            <div className="max-w-md w-full space-y-6">
              {/* Spinning Logo Graphic */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 flex items-center justify-center shadow-2xl shadow-indigo-500/20">
                  <Terminal className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="font-sans font-black text-xl tracking-wider block leading-none">AWAIS</span>
                  <span className="text-[10px] text-cyan-400 tracking-widest font-semibold">RECRUITER PORTAL</span>
                </div>
              </div>

              {/* Loader percentage track */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>BOOT ENVIRONMENT</span>
                  <span className="text-cyan-400 font-bold">{progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Status Action logs */}
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-[10px] text-slate-500 space-y-1 h-14 overflow-hidden">
                <div className="text-cyan-400/90 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-indigo-400 animate-spin" />
                  {loaderLog}
                </div>
                <div className="text-slate-600 text-[9px] font-semibold">LOAD: localhost:3000 // production container ingress ready</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col min-h-screen"
        >
          {/* Glass Navbar */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Interactive Hero Column */}
          <Hero darkMode={darkMode} />

          {/* Biography, timelines, and credentials */}
          <About darkMode={darkMode} />

          {/* Skill lists with dynamic search filters */}
          <Skills darkMode={darkMode} />

          {/* Creative layout for featured projects */}
          <Projects darkMode={darkMode} />

          {/* Secure interactive forms & contact items */}
          <Contact darkMode={darkMode} />

          {/* Footer attribution */}
          <Footer darkMode={darkMode} />

          {/* Recruiter Floating AI Assistant */}
          <AIChatBot darkMode={darkMode} />
        </motion.div>
      )}

    </div>
  );
}
