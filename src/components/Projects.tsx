import { useState } from 'react';
import { ExternalLink, Github, Sparkles, Layout, BarChart, ChevronDown, Check, AppWindow } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Projects({ darkMode }: { darkMode: boolean }) {
  const { projects } = PORTFOLIO_DATA;
  const [filter, setFilter] = useState<'all' | 'web' | 'ai' | 'marketing'>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (proj) => filter === 'all' || proj.category === filter
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web':
        return <Layout className="w-4 h-4 text-indigo-400" />;
      case 'ai':
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      default:
        return <BarChart className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section
      id="projects"
      className={`py-24 transition-colors ${
        darkMode ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-indigo-500 uppercase">
            03 / PORTFOLIO
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight mt-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-12 flex-wrap">
          {(['all', 'web', 'ai', 'marketing'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase border cursor-pointer transition-all ${
                filter === cat
                  ? 'accent-gradient text-white border-transparent'
                  : darkMode
                  ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {cat === 'all' ? 'All projects' : cat === 'marketing' ? 'SEO & Ads' : cat.toUpperCase() + ' Solutions'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <motion.div
              key={proj.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`rounded-[24px] overflow-hidden flex flex-col justify-between group hover:border-indigo-500/20 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all ${
                darkMode ? 'glass' : 'glass-light shadow-sm'
              }`}
            >
              {/* Image Placeholder Visual Frame */}
              <div className={`relative aspect-video flex items-center justify-center border-b p-6 ${
                darkMode ? 'bg-slate-950/40 border-white/5' : 'bg-slate-50 border-slate-100'
              }`}>
                {/* Visual code layout representing the project type */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {proj.category === 'web' && (
                  <div className="w-full h-full rounded-xl border border-slate-800/80 bg-[#0B1220] p-3 flex flex-col justify-between shadow-lg">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="font-mono text-[9px] text-slate-500 font-semibold uppercase">WWW.CLIENTPORTAL.IO</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <AppWindow className="w-8 h-8 text-indigo-400 mb-2 animate-bounce" style={{ animationDuration: '3s' }} />
                      <span className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Fast-Loading UI Sandbox</span>
                    </div>
                  </div>
                )}

                {proj.category === 'ai' && (
                  <div className="w-full h-full rounded-xl border border-slate-800/80 bg-[#0B1220] p-4 flex flex-col gap-3 shadow-lg font-mono text-[9px]">
                    <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
                      <span className="text-slate-400 font-bold uppercase tracking-wider">AWAIS_AGENT.PY</span>
                    </div>
                    <div className="space-y-1.5 text-slate-400">
                      <div className="text-indigo-400">import google.genai as genai</div>
                      <div>ai = genai.Client()</div>
                      <div className="text-cyan-400">response = ai.models.generate_content()</div>
                    </div>
                  </div>
                )}

                {proj.category === 'marketing' && (
                  <div className="w-full h-full rounded-xl border border-slate-800/80 bg-[#0B1220] p-3 flex flex-col justify-between shadow-lg">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <span className="font-mono text-[9px] text-slate-500 font-bold">META CAMPAIGN ENGINE</span>
                      <span className="font-mono text-[9px] text-emerald-400 font-semibold tracking-wider">OPTIMAL CTR</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-3 items-center pt-2">
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-slate-500 font-bold uppercase">Meta Ads Spend</span>
                        <span className="font-sans font-extrabold text-base text-cyan-400">$3.2K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-[9px] text-slate-500 font-bold uppercase">Conversions</span>
                        <span className="font-sans font-extrabold text-base text-indigo-400">12.5%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Floating category icon */}
                <div className={`absolute top-4 right-4 p-2.5 rounded-xl border shadow-md backdrop-blur-md ${
                  darkMode ? 'bg-slate-900/90 border-white/10' : 'bg-white border-slate-200'
                }`}>
                  {getCategoryIcon(proj.category)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 className="font-sans font-extrabold text-lg tracking-tight mb-2 text-white/95 group-hover:text-indigo-400 transition-colors">
                    {proj.title}
                  </h3>
                  
                  {/* Short Description */}
                  <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {proj.description}
                  </p>

                  {/* Core Metrics Grid */}
                  {proj.stats && (
                    <div className={`grid grid-cols-3 gap-2 py-3 px-3 rounded-xl mb-4 border ${
                      darkMode ? 'bg-slate-950/40 border-white/5' : 'bg-slate-50 border-slate-100'
                    }`}>
                      {proj.stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <span className="font-mono text-[10px] text-slate-500 font-semibold uppercase">{stat.label}</span>
                          <span className="font-sans font-extrabold text-xs text-indigo-400 mt-1">{stat.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[9px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border ${
                          darkMode
                            ? 'border-white/5 bg-[#121B2D]/40 text-slate-300'
                            : 'border-slate-200 bg-slate-50 text-slate-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="border-t pt-4 flex items-center justify-between border-slate-800/40">
                  <div className="flex items-center gap-3">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-xl border cursor-pointer transition-colors ${
                        darkMode
                          ? 'border-white/5 bg-slate-950/40 text-slate-400 hover:text-white hover:border-white/20'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                      }`}
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-xl border cursor-pointer transition-colors ${
                          darkMode
                            ? 'border-white/5 bg-slate-950/40 text-slate-400 hover:text-white hover:border-white/20'
                            : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900'
                        }`}
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Expand / Details Toggle */}
                  <button
                    onClick={() => setExpandedProject(expandedProject === proj.id ? null : proj.id)}
                    className={`text-xs font-semibold flex items-center gap-1 hover:text-indigo-400 cursor-pointer transition-colors ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Details
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedProject === proj.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Expandable Panel Tray */}
              <AnimatePresence>
                {expandedProject === proj.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`border-t overflow-hidden ${
                      darkMode ? 'bg-[#050816]/60 border-slate-800' : 'bg-slate-50/50'
                    }`}
                  >
                    <div className="p-6 text-xs leading-relaxed space-y-4">
                      <span className="font-mono text-[9px] text-indigo-400 font-bold uppercase tracking-wider block">
                        PROJECT BRIEF
                      </span>
                      <p className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {proj.longDescription}
                      </p>
                      
                      <div className="space-y-2 pt-2">
                        <span className="font-mono text-[9px] text-purple-400 font-bold uppercase tracking-wider block">
                          OUTCOMES ACHIEVED
                        </span>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-400" />
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Optimized loading layout for mobile rendering.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-400" />
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Established highly targeting keyword mappings.</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-cyan-400" />
                            <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>Fully scalable and responsive component patterns.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
