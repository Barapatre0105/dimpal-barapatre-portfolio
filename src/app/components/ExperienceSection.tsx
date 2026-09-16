"use client";

import { experiences } from "../../../lib/experience";
import { motion } from "framer-motion";
import { GraduationCap, Users, BarChart, Calendar, MapPin, Quote } from "lucide-react";

export default function ExperienceSection() {
  const getThemeColor = (idx: number) => (idx % 2 === 0 ? "cyan" : "purple");

  const getIcon = (idx: number, colorStr: string) => {
    const color = colorStr === "cyan" ? "#00f0ff" : "#b026ff";
    if (idx === 0) return <GraduationCap color={color} size={32} />;
    if (idx === 1) return <Users color={color} size={32} />;
    return <BarChart color={color} size={32} />;
  };

  return (
    <section id="experience" className="py-32 relative z-10 bg-[#040810] overflow-hidden font-sans">
      
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00f0ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#b026ff]/5 rounded-full blur-[150px] pointer-events-none" />



      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 relative">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gray-600"></div>
            <p className="text-gray-400 font-mono text-sm tracking-[0.2em] uppercase">Experience</p>
            <div className="h-[1px] w-8 bg-gray-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#b026ff]">Timeline</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A journey of continuous learning, real-world problem solving, and building impactful AI & data solutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full max-w-5xl mx-auto mb-24">
          
          {/* Central Vertical Line (hidden on mobile, visible on desktop) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent -translate-x-[1px]"></div>

          {experiences.map((exp, idx) => {
            const theme = getThemeColor(idx);
            const isLeft = idx % 2 === 0;
            const themeHex = theme === "cyan" ? "#00f0ff" : "#b026ff";
            const borderClass = theme === "cyan" ? "border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]" : "border-[#b026ff]/30 shadow-[0_0_15px_rgba(176,38,255,0.1)]";
            const textClass = theme === "cyan" ? "text-[#00f0ff]" : "text-[#b026ff]";

            const TitleBlock = () => (
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 w-full ${!isLeft ? "md:justify-start" : "md:justify-end"}`}>
                
                {/* Icon Box */}
                <div className={`w-16 h-16 rounded-2xl border ${borderClass} bg-[#0a111a] flex flex-shrink-0 items-center justify-center shadow-lg group-hover:bg-[#0c1420] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(${theme === "cyan" ? "0,240,255" : "176,38,255"},0.3)] transition-all duration-300 ${isLeft ? "md:order-last" : ""}`}>
                  {getIcon(idx, theme)}
                </div>

                {/* Text Details */}
                <div className={`flex flex-col ${isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
                  <div className={`inline-block px-4 py-1 rounded-full border border-[${themeHex}]/50 text-[${themeHex}] text-xs font-mono mb-3 ${textClass} group-hover:bg-[${themeHex}]/10 transition-colors`}>
                    {exp.year}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[${themeHex}] transition-colors">{exp.role}</h3>
                  <div className={`text-lg mb-3 ${textClass}`}>{exp.company}</div>
                  
                  <div className={`flex items-center gap-4 text-gray-500 text-sm font-mono group-hover:text-gray-300 transition-colors flex-wrap ${isLeft ? "md:flex-row-reverse md:justify-start" : ""}`}>
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.year}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                  </div>
                  <div className={`mt-2 flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full w-fit ${textClass} bg-[${themeHex}]/10 border border-[${themeHex}]/20 group-hover:bg-[${themeHex}]/20 transition-colors ${isLeft ? "md:self-end" : "md:self-start"}`}>
                    {exp.type}
                  </div>
                </div>
              </div>
            );

            const DetailsBlock = () => (
              <div className={`w-full bg-[#0a111a] border ${borderClass} rounded-2xl p-6 lg:p-8 group-hover:bg-[#0c1420] group-hover:shadow-[0_0_25px_rgba(${theme === "cyan" ? "0,240,255" : "176,38,255"},0.15)] group-hover:-translate-y-1 transition-all duration-300 relative`}>
                <div className={`absolute top-0 left-8 w-1/2 h-[1px] bg-gradient-to-r from-[${themeHex}] to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                
                <h4 className={`text-xl font-bold mb-4 ${textClass}`}>{exp.detailsTitle}</h4>
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${theme === "cyan" ? "bg-[#00f0ff]" : "bg-[#b026ff]"} group-hover:shadow-[0_0_8px_${themeHex}] transition-shadow`}></div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

            return (
              <div key={exp.id} className="group relative flex flex-col md:flex-row items-center justify-between w-full mb-16 md:mb-24 pl-12 md:pl-0 cursor-pointer">
                
                {/* Central Dot on the line */}
                <div className={`absolute left-4 md:left-1/2 top-8 md:top-1/2 w-4 h-4 rounded-full -translate-x-1/2 md:-translate-y-1/2 z-20 transition-all duration-300 group-hover:scale-150 ${theme === "cyan" ? "bg-[#00f0ff] shadow-[0_0_15px_#00f0ff] group-hover:shadow-[0_0_25px_#00f0ff]" : "bg-[#b026ff] shadow-[0_0_15px_#b026ff] group-hover:shadow-[0_0_25px_#b026ff]"}`}></div>

                {/* Left Side (Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-[45%] mb-8 md:mb-0"
                >
                  {isLeft ? <TitleBlock /> : <DetailsBlock />}
                </motion.div>

                {/* Right Side (Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-[45%]"
                >
                  {isLeft ? <DetailsBlock /> : <TitleBlock />}
                </motion.div>

              </div>
            );
          })}
        </div>

        {/* Bottom Quote Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-[#0a111a] via-[#0c1420] to-[#0a111a] border border-[#1a2333] rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-[#00f0ff]/5 pointer-events-none" />
          
          <div className="flex items-center gap-6 relative z-10 w-full md:w-auto">
            <Quote className="text-[#00f0ff] opacity-80 flex-shrink-0" size={32} fill="currentColor" />
            <p className="text-gray-300 italic text-sm md:text-base font-medium">
              Each experience added a new skill, a deeper perspective, and a stronger purpose.
            </p>
          </div>
          
          <div className="text-gray-400 font-mono text-sm relative z-10 self-end md:self-center whitespace-nowrap">
            — Dimpal Barapatre
          </div>
        </motion.div>

      </div>
    </section>
  );
}
