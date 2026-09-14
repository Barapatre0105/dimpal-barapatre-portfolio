"use client";

import dynamic from "next/dynamic";
import { profile } from "../../../lib/profile";
import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

// Dynamically import the 3D Neural Network scene
const NeuralNetwork3D = dynamic(() => import("./NeuralNetwork3D"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-[#00f0ff]">
      <div className="w-16 h-16 border-4 border-t-[#00f0ff] border-r-transparent border-b-[#b026ff] border-l-transparent rounded-full animate-spin mb-4"></div>
      <p className="font-mono tracking-widest animate-pulse text-sm">INITIALIZING AI CORE...</p>
    </div>
  )
});

interface Props {
  activeNode: string | null;
  setActiveNode: (node: string | null) => void;
}

export default function HeroSection({ activeNode, setActiveNode }: Props) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050b14]">
      {/* Background Star Particles / Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#00f0ff]/5 via-[#050b14] to-[#050b14] pointer-events-none" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="flex flex-col items-start text-left pointer-events-auto order-2 lg:order-1"
        >
          {/* Top Tagline */}
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} className="flex items-center gap-4 mb-6 mt-4">
            <div className="h-[2px] w-8 bg-[#00f0ff]"></div>
            <p className="text-[#00f0ff] font-mono text-xs tracking-[0.2em] uppercase font-bold">
              TURNING IDEAS INTO INTELLIGENT SOLUTIONS
            </p>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
            className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-black text-white mb-2 leading-[0.9] tracking-tighter"
          >
            Mangesh<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#3a7bd5]">
              Sambare
            </span>
          </motion.h1>
          
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} className="mt-6 mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              Data Science Trainer <span className="text-[#00f0ff]">→</span>
            </h2>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00f0ff]">
              GenAI & Agentic AI Developer
            </h2>
          </motion.div>

          {/* Skills List */}
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} className="flex flex-wrap items-center gap-x-3 gap-y-2 text-gray-300 font-sans text-sm md:text-base mb-6 max-w-xl font-medium">
            <span>LLMs</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>RAG</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>AI Agents</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>LangChain</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>LangGraph</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>NLP</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>Transformers</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>Machine Learning</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>Python</span> <span className="text-[#00f0ff] text-xl leading-none">•</span>
            <span>SQL</span>
          </motion.div>
          
          <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }} className="flex items-start gap-4 mb-10 max-w-xl">
             <div className="h-[2px] w-12 bg-[#00f0ff] mt-2.5"></div>
             <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
               Building intelligent AI systems with Generative AI, agentic workflows, and machine learning.
             </p>
          </motion.div>
          
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-wrap items-center justify-start gap-6"
          >
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#00f0ff] to-[#00a2ff] text-[#050b14] font-bold rounded-full transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.7)] flex items-center gap-3 text-sm tracking-wide"
            >
              VIEW PROJECTS <span className="text-lg leading-none">→</span>
            </motion.a>
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,240,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 border border-[#00f0ff] text-[#00f0ff] font-bold rounded-full transition-all hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center gap-3 text-sm tracking-wide"
            >
              LET'S CONNECT <span className="text-lg leading-none">→</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Neural Network (Small Size with Pulse Animation) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.1, 1] }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeOut" },
            scale: { duration: 4, ease: "easeInOut", repeat: Infinity }
          }}
          className="relative pointer-events-auto h-full w-full max-w-lg mx-auto flex items-center justify-center order-1 lg:order-2"
        >
          <NeuralNetwork3D />
        </motion.div>

      </div>
    </section>
  );
}
