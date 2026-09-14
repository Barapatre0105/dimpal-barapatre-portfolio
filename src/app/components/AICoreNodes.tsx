"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Network, Cpu, Code, Layers, MessageSquare, LineChart } from "lucide-react";

interface Props {
  activeNode: string | null;
  setActiveNode: (node: string | null) => void;
  isMobile?: boolean;
}

const aiNodes = [
  { id: "llm", label: "LLM", icon: MessageSquare, description: "Large Language Models & Prompt Engineering", position: { top: "calc(50% - 220px)", left: "70%" } },
  { id: "rag", label: "RAG", icon: Database, description: "Retrieval-Augmented Generation Pipelines", position: { top: "calc(50% - 110px)", left: "calc(70% + 190px)" } },
  { id: "cv", label: "Computer Vision", icon: BrainCircuit, description: "Image Classification & Object Detection", position: { top: "calc(50% + 110px)", left: "calc(70% + 190px)" } },
  { id: "ml", label: "Machine Learning", icon: LineChart, description: "Predictive Modeling & Statistical Analysis", position: { top: "calc(50% + 220px)", left: "70%" } },
  { id: "dl", label: "Deep Learning", icon: Network, description: "Neural Networks, CNNs, and RNNs", position: { top: "calc(50% + 110px)", left: "calc(70% - 190px)" } },
  { id: "agents", label: "AI Agents", icon: Cpu, description: "Autonomous Task-Solving Systems", position: { top: "calc(50% - 110px)", left: "calc(70% - 190px)" } },
];

export default function AICoreNodes({ activeNode, setActiveNode, isMobile = false }: Props) {
  if (isMobile) {
    return (
      <div className="flex gap-4">
        {aiNodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(isActive ? null : node.id)}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                isActive 
                  ? "bg-[#00f0ff]/20 border-[#00f0ff] text-white shadow-[0_0_10px_#00f0ff]" 
                  : "bg-[#050505]/80 border-gray-700 text-gray-400 hover:text-white"
              }`}
            >
              <Icon size={16} className={isActive ? "text-[#00f0ff]" : ""} />
              <span className="text-sm font-medium">{node.label}</span>
            </button>
          );
        })}
      </div>
    );
  }

  // Desktop circular layout
  return (
    <>
      {aiNodes.map((node) => {
        const Icon = node.icon;
        const isActive = activeNode === node.id;
        return (
          <div
            key={node.id}
            className="absolute pointer-events-auto group transform -translate-x-1/2 -translate-y-1/2"
            style={{ top: node.position.top, left: node.position.left }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveNode(isActive ? null : node.id)}
              className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                isActive 
                  ? "bg-[#00f0ff]/20 border-[#00f0ff] shadow-[0_0_15px_#00f0ff]" 
                  : "bg-[#050505]/80 border-gray-600 group-hover:border-[#00f0ff] glass-panel"
              }`}
            >
              <Icon size={20} className={isActive ? "text-[#00f0ff]" : "text-gray-300 group-hover:text-[#00f0ff]"} />
            </motion.button>
            
            {/* Permanent Label */}
            <div className={`absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all duration-300 pointer-events-none ${
              isActive ? "opacity-0" : "opacity-100"
            }`}>
              <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider group-hover:text-[#00f0ff] transition-colors">{node.label}</span>
            </div>
            
            {/* Tooltip / Panel */}
            <div className={`absolute left-1/2 -translate-x-1/2 mt-4 w-48 p-3 glass-panel rounded-lg border border-gray-700 transition-all duration-300 origin-top pointer-events-none ${
              isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#111] border-l border-t border-gray-700 rotate-45" />
              <h4 className="text-[#00f0ff] text-sm font-bold mb-1 relative z-10">{node.label}</h4>
              <p className="text-gray-300 text-xs relative z-10 leading-snug">{node.description}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
