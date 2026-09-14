"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ["about", "skills", "projects", "ai-lab", "experience", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Skills", "Projects", "AI Lab", "Experience", "Contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel py-3 bg-[#000a1f]/70' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-wider flex items-center gap-2 group">
          <span className="text-[#00f0ff] group-hover:animate-pulse">&lt;</span>
          Mangesh
          <span className="text-[#b026ff] group-hover:animate-pulse">/&gt;</span>
        </a>
        <div className="hidden md:flex gap-2">
          {links.map((link) => {
            const linkId = link.toLowerCase().replace(' ', '-');
            const isActive = activeSection === linkId;
            return (
              <a 
                key={link} 
                href={`#${linkId}`}
                className={`relative px-4 py-2 text-sm uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/5 rounded-md border border-[#00f0ff]/30 z-[-1]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
