import { Briefcase, GraduationCap, Globe, Lightbulb, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';
import { motion } from 'motion/react';

export default function About({ darkMode }: { darkMode: boolean }) {
  const { personal, experiences, education } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className={`py-24 transition-colors ${
        darkMode ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-indigo-500 uppercase">
            01 / BIOGRAPHY
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight mt-2">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Narrative & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className={`font-sans font-bold text-xl sm:text-2xl leading-tight ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
              Bridging the Gap Between Advanced Machine Intelligence & Strategic Digital Systems
            </h3>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Hello! I am <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Shaikh Awais Sarfaraz</strong>, a highly motivated Artificial Intelligence and Machine Learning student based in Kalyan, Maharashtra. My engineering philosophy revolves around a simple truth: technology alone doesn't solve business problems; the strategic implementation of technology does.
            </p>
            <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Whether optimizing loading speeds as an engineering intern, architecting custom on-page technical SEO for local business partners, or engineering bespoke LLM prompt-flows, I focus on delivering tangible return on investment. I combine modern stack development (React, Python) with lead-generation strategies to help businesses thrive.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Core Values / Stats cards */}
            <div className={`p-5 rounded-[24px] ${darkMode ? 'glass' : 'glass-light shadow-sm'}`}>
              <Lightbulb className="w-6 h-6 text-indigo-500 mb-3" />
              <h4 className="font-sans font-bold text-sm tracking-wide mb-1 text-white/95">Fast Learner</h4>
              <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Rapidly assimilate complex AIML modules and apply them to full-stack products.
              </p>
            </div>

            <div className={`p-5 rounded-[24px] ${darkMode ? 'glass' : 'glass-light shadow-sm'}`}>
              <Globe className="w-6 h-6 text-cyan-400 mb-3" />
              <h4 className="font-sans font-bold text-sm tracking-wide mb-1 text-white/95">ROI Focused</h4>
              <p className={`text-[11px] leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Unify engineering specs with advertising funnels for maximum organic search conversions.
              </p>
            </div>

            <div className={`col-span-2 p-5 rounded-[24px] flex flex-col gap-3 justify-center ${darkMode ? 'glass' : 'glass-light shadow-sm'}`}>
              <span className="font-mono text-[10px] text-indigo-400 font-bold tracking-widest uppercase">
                Core Competence
              </span>
              <div className="flex flex-wrap gap-2">
                {personal.softSkills.slice(0, 6).map((skill, i) => (
                  <span
                    key={i}
                    className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                      darkMode ? 'border-white/5 bg-[#121B2D]/40 text-slate-300' : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline (Experience & Education) */}
        <div id="experience" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Experience Timeline */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl tracking-tight">Professional Experience</h3>
            </div>

            <div className="relative border-l-2 pl-6 ml-4 border-slate-800/60 flex flex-col gap-10">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative">
                  {/* Point Indicator */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 rounded-full border-2 bg-[#050816] border-indigo-500" />
                  
                  {/* Date Badge */}
                  <span className="font-mono text-[11px] text-cyan-400 font-bold tracking-wider uppercase">
                    {exp.period}
                  </span>
                  
                  {/* Content Card */}
                  <div className={`mt-3 p-5 rounded-[24px] hover:border-indigo-500/30 transition-colors ${
                    darkMode ? 'glass' : 'glass-light shadow-sm'
                  }`}>
                    <h4 className="font-sans font-bold text-base tracking-tight text-white/95">
                      {exp.role}
                    </h4>
                    <span className="font-sans text-xs text-indigo-400 font-semibold block mt-1">
                      {exp.company} — <span className="text-slate-500 font-normal">{exp.location}</span>
                    </span>
                    <ul className="mt-4 space-y-2.5 text-xs text-slate-400 leading-relaxed list-none pl-0">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-500 font-bold text-sm mt-[-2px]">•</span>
                          <span className={darkMode ? 'text-slate-400' : 'text-slate-600'}>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div id="education" className="flex flex-col gap-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl tracking-tight">Academic History</h3>
            </div>

            <div className="relative border-l-2 pl-6 ml-4 border-slate-800/60 flex flex-col gap-10">
              {education.map((edu, idx) => (
                <div key={edu.id} className="relative">
                  {/* Point Indicator */}
                  <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 rounded-full border-2 bg-[#050816] border-purple-500" />
                  
                  {/* Date Badge */}
                  <span className="font-mono text-[11px] text-purple-400 font-bold tracking-wider uppercase">
                    {edu.period}
                  </span>
                  
                  {/* Content Card */}
                  <div className={`mt-3 p-5 rounded-[24px] hover:border-purple-500/30 transition-colors ${
                    darkMode ? 'glass' : 'glass-light shadow-sm'
                  }`}>
                    <h4 className="font-sans font-bold text-base tracking-tight text-white/95">
                      {edu.degree}
                    </h4>
                    <span className="font-sans text-xs text-purple-400 font-semibold block mt-1">
                      {edu.institution}
                    </span>
                    <p className={`mt-3 text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}

              {/* Native Languages Grid */}
              <div className="relative mt-4">
                <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 rounded-full border-2 bg-[#050816] border-cyan-400" />
                <span className="font-mono text-[11px] text-cyan-400 font-bold tracking-wider uppercase block mb-3">
                  LANGUAGES
                </span>
                <div className={`p-5 rounded-[24px] grid grid-cols-3 gap-4 ${
                  darkMode ? 'glass' : 'glass-light shadow-sm'
                }`}>
                  {personal.languages.map((lang, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <span className="font-sans font-bold text-xs text-white/95">{lang}</span>
                      <span className="font-mono text-[9px] uppercase text-slate-500 mt-1 font-semibold">Fluent</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
