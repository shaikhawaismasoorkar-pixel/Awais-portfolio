import { useState } from 'react';
import { Search, Brain, Code2, Rocket, Wrench, ShieldAlert } from 'lucide-react';
import { PORTFOLIO_DATA } from '../types';
import { motion } from 'motion/react';

export default function Skills({ darkMode }: { darkMode: boolean }) {
  const { skills } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'ai-ml' | 'seo-marketing' | 'tools'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All', id: 'all', icon: Rocket },
    { label: 'Programming', id: 'programming', icon: Code2 },
    { label: 'AI & ML / Prompting', id: 'ai-ml', icon: Brain },
    { label: 'SEO & Growth Marketing', id: 'seo-marketing', icon: Rocket },
    { label: 'Platforms & Tools', id: 'tools', icon: Wrench }
  ];

  // Filter skills based on Category and Search Query
  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get corresponding category colors
  const getCategoryTheme = (category: string) => {
    switch (category) {
      case 'programming':
        return { color: 'text-indigo-400', bg: 'bg-indigo-500/10', bar: 'from-indigo-600 to-indigo-400' };
      case 'ai-ml':
        return { color: 'text-purple-400', bg: 'bg-purple-500/10', bar: 'from-purple-600 to-purple-400' };
      case 'seo-marketing':
        return { color: 'text-cyan-400', bg: 'bg-cyan-500/10', bar: 'from-cyan-600 to-cyan-400' };
      default:
        return { color: 'text-pink-400', bg: 'bg-pink-500/10', bar: 'from-pink-600 to-pink-400' };
    }
  };

  return (
    <section
      id="skills"
      className={`py-24 transition-colors ${
        darkMode ? 'bg-[#050816] text-white' : 'bg-slate-50 text-slate-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-indigo-500 uppercase">
            02 / CAPABILITIES
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight mt-2">
            Technical Stack
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide border cursor-pointer transition-all ${
                    activeCategory === cat.id
                      ? 'accent-gradient text-white border-transparent shadow-lg shadow-indigo-500/10'
                      : darkMode
                      ? 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 order-1 md:order-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Python, SEO)..."
              className={`w-full text-xs px-4 py-3 pl-10 rounded-xl border focus:outline-none focus:ring-1 ${
                darkMode
                  ? 'bg-white/5 border-white/10 text-white placeholder-slate-500 focus:ring-indigo-500 focus:bg-white/10'
                  : 'bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-indigo-500 focus:bg-slate-50'
              }`}
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-500" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSkills.map((skill, index) => {
            const theme = getCategoryTheme(skill.category);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className={`p-6 rounded-[24px] flex flex-col justify-between hover:-translate-y-1 transition-all group ${
                  darkMode ? 'glass' : 'glass-light shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-lg text-xs font-bold uppercase tracking-wider font-mono ${theme.bg} ${theme.color}`}>
                      {skill.category.toUpperCase().replace('-', ' ')}
                    </span>
                    <span className="font-sans font-bold text-sm tracking-tight text-white/95">
                      {skill.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-extrabold text-indigo-500">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className={`w-full h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`}
                  />
                </div>
              </motion.div>
            );
          })}

          {filteredSkills.length === 0 && (
            <div className="col-span-2 text-center py-16">
              <span className="font-mono text-sm text-slate-500 block">No skills matching your current search query.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
