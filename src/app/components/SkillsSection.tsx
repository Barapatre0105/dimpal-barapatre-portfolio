"use client";

import { skills } from "../../../lib/skills";
import { motion } from "framer-motion";
import { BrainCircuit, BarChart3, Database, Code2, ExternalLink, Quote } from "lucide-react";

export default function SkillsSection() {
  const getIcon = (id: string) => {
    switch(id) {
      case "01": return <BrainCircuit className="text-[#00f0ff]" size={28} />;
      case "02": return <BarChart3 className="text-[#b026ff]" size={28} />;
      case "03": return <Database className="text-[#00f0ff]" size={28} />;
      default: return <Code2 className="text-[#00f0ff]" size={28} />;
    }
  };

  const getBorderColor = (id: string) => {
    switch(id) {
      case "01": return "group-hover:border-[#00f0ff]/50 shadow-[0_0_15px_rgba(0,240,255,0)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]";
      case "02": return "group-hover:border-[#b026ff]/50 shadow-[0_0_15px_rgba(176,38,255,0)] group-hover:shadow-[0_0_20px_rgba(176,38,255,0.2)]";
      case "03": return "group-hover:border-[#00f0ff]/50 shadow-[0_0_15px_rgba(0,240,255,0)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]";
      default: return "";
    }
  };

  const getGradientColor = (id: string) => {
    switch(id) {
      case "01": return "from-[#00f0ff]/20 to-transparent";
      case "02": return "from-[#b026ff]/20 to-transparent";
      case "03": return "from-[#00f0ff]/20 to-transparent";
      default: return "from-gray-500/20 to-transparent";
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-[#060b13] overflow-hidden font-sans">
      
      {/* Subtle Background Waves / Blur */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#b026ff]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative vertical list on far left */}
      <div className="hidden xl:flex flex-col absolute left-8 top-32 space-y-2 text-[10px] text-gray-500 font-mono tracking-[0.2em]">
        <div className="w-[1px] h-12 bg-gray-700 ml-1 mb-2"></div>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>AI</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>DATA</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-transparent"></div>INSIGHTS</span>
        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#b026ff]"></div>IMPACT</span>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-gradient-to-l from-gray-500 to-transparent"></div>
            <p className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">My Skills</p>
            <div className="h-[1px] w-12 bg-gradient-to-r from-gray-500 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Turning Skills into <span className="text-[#00f0ff]">Smarter</span> <span className="text-[#b026ff]">Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A focused set of technologies and skills I use to solve real-world problems in AI, data and analytics.
          </p>


        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${getGradientColor(category.id)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
              
              <div className={`relative h-full bg-[#0a111a] border border-[#1a2333] ${getBorderColor(category.id)} rounded-2xl p-6 lg:p-8 flex flex-col transition-all duration-300 z-10`}>
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#060b13] border border-gray-800 flex items-center justify-center shadow-inner">
                      {getIcon(category.id)}
                    </div>
                    <span className="text-[#00f0ff] font-mono font-bold text-xl">{category.id}</span>
                  </div>
                  <div className="flex gap-3 text-gray-500 group-hover:text-gray-300 transition-colors">
                    <Code2 size={18} />
                    <ExternalLink size={18} />
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-2xl font-bold text-white mb-3 leading-snug">
                  {category.category}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {category.description}
                </p>

                {/* Divider */}
                <div className="h-[1px] w-full bg-[#1a2333] mb-6 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-gray-600 group-hover:to-transparent transition-colors"></div>

                {/* Tags Grid */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-transparent border border-gray-700/80 rounded-full text-xs text-gray-300 hover:border-[#00f0ff]/50 hover:text-[#00f0ff] hover:bg-[#00f0ff]/5 cursor-default transition-all whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Link */}
                <div className="mt-auto pt-4 flex items-center gap-2 text-[#00f0ff] text-xs font-bold tracking-widest uppercase group-hover:gap-3 transition-all cursor-pointer">
                  EXPLORE SKILLS →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0a111a] via-[#111827] to-[#0a111a] border border-[#1a2333] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* Subtle glow in the banner */}
          <div className="absolute inset-0 bg-[#b026ff]/5 pointer-events-none" />
          
          <div className="flex items-center gap-4 relative z-10 w-full md:w-auto">
            <div className="w-10 h-10 rounded-xl bg-blue-900/30 border border-blue-800/50 flex items-center justify-center flex-shrink-0">
               <Quote className="text-[#00f0ff] opacity-80" size={18} fill="currentColor" />
            </div>
            <p className="text-gray-300 italic text-sm md:text-base">
              "Combining AI, data and analytics to solve real-world problems."
            </p>
          </div>
          
          <div className="text-gray-400 font-mono text-sm relative z-10 self-end md:self-center">
            — Mangesh Sambare
          </div>
        </motion.div>

      </div>
    </section>
  );
}
