"use client";

import { projects } from "../../../lib/projects";
import { motion } from "framer-motion";
import { Code, ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

interface Props {
  activeNode: string | null;
}

export default function ProjectsSection({ activeNode }: Props) {
  const filteredProjects = useMemo(() => {
    if (!activeNode) return projects;
    
    // Map activeNode ID to a filter string or logic
    // AI Nodes are: llm, rag, cv, ml, dl, agents
    const filterMap: Record<string, string[]> = {
      "llm": ["LLM", "Prompt Engineering"],
      "rag": ["RAG", "LangChain", "Vector"],
      "cv": ["Computer Vision", "CNN", "Image"],
      "ml": ["Machine Learning", "XGBoost", "Random Forest", "Regression", "Clustering"],
      "dl": ["Deep Learning", "TensorFlow", "Keras", "ANN", "Transformers"],
      "agents": ["Agents", "Autonomous"]
    };
    
    const relevantTechs = filterMap[activeNode] || [];
    
    return projects.filter(p => {
      // Check if project category matches the node ID loosely, or if technologies overlap
      const techMatch = p.technologies.some(tech => 
        relevantTechs.some(rt => tech.toLowerCase().includes(rt.toLowerCase()))
      );
      const categoryMatch = p.category.toLowerCase().includes(activeNode.toLowerCase()) || 
        relevantTechs.some(rt => p.category.toLowerCase().includes(rt.toLowerCase()));
      
      return techMatch || categoryMatch;
    });
  }, [activeNode]);

  return (
    <section id="projects" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:text-center">
          <h2 className="text-3xl font-bold text-white mb-4 flex items-center md:justify-center gap-4">
            <span className="text-[#00f0ff] font-mono text-xl">03.</span> Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] md:mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            {activeNode 
              ? `Showing projects relevant to selected AI Core node: ${activeNode.toUpperCase()}`
              : "Filter capability connects to the AI Core nodes in the Hero section."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-12 border border-dashed border-gray-700 rounded-2xl">
              No specific projects listed for this technology yet, but the AI core is always learning.
            </div>
          )}
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, idx }: { project: any, idx: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-panel p-6 rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(176,38,255,0.2)]"
    >
      {/* Spotlight effect */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 240, 255, 0.08), transparent 40%)`
        }}
      />
      
      {/* Existing Card Content */}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="p-3 bg-[#050b14] rounded-xl border border-[#00f0ff]/30 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)] group-hover:bg-[#00f0ff] group-hover:text-black transition-colors duration-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        </div>
        <div className="flex gap-3 text-gray-500">
          <a href={project.githubUrl} className="hover:text-[#00f0ff] hover:scale-110 transition-all"><Code size={20} /></a>
          <a href={project.demoUrl} className="hover:text-[#b026ff] hover:scale-110 transition-all"><ExternalLink size={20} /></a>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-[#00f0ff] transition-colors">{project.title}</h3>
      <p className="text-sm text-[#b026ff] mb-4 font-mono relative z-10 uppercase tracking-widest font-semibold">{project.category}</p>
      <p className="text-gray-400 text-sm mb-8 flex-grow relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {project.technologies.map((tech: string) => (
          <span key={tech} className="px-3 py-1 bg-[#111] border border-gray-800 rounded-full text-xs text-gray-400 font-mono group-hover:border-[#b026ff]/50 group-hover:text-gray-200 transition-colors">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
