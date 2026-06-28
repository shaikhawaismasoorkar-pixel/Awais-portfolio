import { Heart, Github, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';

export default function Footer({ darkMode }: { darkMode: boolean }) {
  const { personal } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      darkMode ? 'bg-[#050816] border-slate-900 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Developer attribution */}
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          <span>Designed & Developed by</span>
          <span className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Shaikh Awais Sarfaraz</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse ml-0.5" />
        </div>

        {/* copyright and year */}
        <div className="text-center md:text-right flex flex-col md:flex-row items-center gap-4 text-[11px] font-mono font-medium text-slate-500">
          <span>© {currentYear} ALL RIGHTS RESERVED</span>
          
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Back to Top trigger */}
          <button
            onClick={scrollToTop}
            className={`p-2 rounded-xl border flex items-center justify-center cursor-pointer hover:scale-105 transition-all ${
              darkMode ? 'bg-[#0B1220] border-slate-800 hover:border-slate-700 text-slate-300' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
