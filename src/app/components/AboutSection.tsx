"use client";

import { profile } from "../../../lib/profile";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Send, GraduationCap, Code2, Users } from "lucide-react";

const stats = [
  {
    icon: <GraduationCap size={28} />,
    value: "2.8+",
    label: "Years Experience",
    sub: "Training & Projects",
    color: "#00f0ff",
  },
  {
    icon: <Code2 size={28} />,
    value: "15+",
    label: "Projects Completed",
    sub: "ML | NLP | GenAI",
    color: "#b026ff",
  },
  {
    icon: <Users size={28} />,
    value: "1000+",
    label: "Students Mentored",
    sub: "Online & Offline",
    color: "#b026ff",
  },
  {
    icon: <span className="text-2xl font-black">∞</span>,
    value: "∞",
    label: "Passion to Innovate",
    sub: "AI for a Better Tomorrow",
    color: "#b026ff",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative z-10 bg-[#040810]">
      {/* Background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00f0ff]/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#b026ff]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-8 items-stretch"
        >
          {/* ── LEFT CARD ─────────────────────────────── */}
          <div className="w-full lg:w-[280px] flex-shrink-0 bg-[#0a0f1c] border border-[#1a2333] rounded-2xl p-6 flex flex-col items-center gap-5 shadow-[0_0_30px_rgba(0,240,255,0.05)]">
            {/* Status badge */}
            <div className="flex items-center gap-2 bg-[#0d1a12] border border-green-500/30 rounded-full px-4 py-1.5 text-xs text-green-400 font-semibold self-start">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Open to Opportunities
            </div>

            {/* Profile photo */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#1a2333] shadow-[0_0_25px_rgba(0,240,255,0.3)]">
              <Image
                src="/profile.jpg"
                alt="Mangesh Sambare"
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>

            {/* Name */}
            <div className="text-center">
              <h3 className="text-xl font-bold">
                <span className="text-white">Mangesh </span>
                <span className="text-[#00f0ff]">Sambare</span>
              </h3>
              <p className="text-gray-400 text-sm mt-1">Data Science Trainer &amp; Junior Data Scientist</p>
              <p className="text-[#b026ff] text-xs mt-1">Aspiring GenAI &amp; Agentic AI Developer</p>
            </div>

            {/* Social icons — all inline SVG, no lucide */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0e76a8]/20 border border-[#0e76a8]/40 flex items-center justify-center text-[#0e76a8] hover:bg-[#0e76a8]/30 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-gray-300 hover:bg-white/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@LearnCode_Mangesh" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 hover:bg-red-600/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* Email */}
              <a href={`mailto:${profile.email}`}
                className="w-9 h-9 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-colors">
                <Mail size={15} />
              </a>
            </div>

            {/* Quote */}
            <div className="text-center mt-2 px-2">
              <p className="text-gray-400 text-sm italic leading-relaxed font-light">
                &ldquo;Turning data into intelligence<br />and ideas into real-world solutions.&rdquo;
              </p>
            </div>
          </div>

          {/* ── RIGHT CONTENT ─────────────────────────── */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#00f0ff] font-bold text-xl font-mono">01.</span>
                <div className="h-[2px] w-10 bg-[#00f0ff]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                About <span className="text-[#b026ff]">Me</span>
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {["DATA", "ML", "NLP", "GENAI", "AI AGENTS"].map((tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    <span className="text-gray-300 text-xs font-bold tracking-[0.2em]">{tag}</span>
                    {i < 4 && <span className="text-[#00f0ff] text-sm">•</span>}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Data Scientist &amp; Data Science Trainer with <span className="text-[#00f0ff] font-bold">2.8+ years</span> of experience in Machine Learning, Deep Learning, NLP, and Data Analytics. Skilled in Python, SQL, Transformers, LLMs, RAG, LangChain, LangGraph, AI Agents, and Generative AI, with hands-on experience building real-world AI solutions and end-to-end projects.
              </p>
              <p className="text-gray-300 leading-relaxed text-[15px]">
                Mentored <span className="text-[#00f0ff] font-bold">1000+ students</span> and professionals through practical, project-based learning. Currently focused on building <span className="text-[#b026ff] font-semibold">GenAI</span> and <span className="text-[#b026ff] font-semibold">Agentic AI</span> applications using modern LLM frameworks and AI technologies.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#0a0f1c] border border-[#1a2333] rounded-xl p-4 flex flex-col items-center gap-2 text-center hover:border-[#00f0ff]/30 hover:shadow-[0_0_15px_rgba(0,240,255,0.08)] transition-all group"
                >
                  <div style={{ color: i === 0 ? "#00f0ff" : "#b026ff" }} className="group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div style={{ color: i === 0 ? "#00f0ff" : "#b026ff" }} className="text-2xl font-black">
                    {stat.value}
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">{stat.label}</div>
                    <div className="text-gray-500 text-[10px] mt-0.5">{stat.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0a0f1c] border border-[#00f0ff]/40 text-[#00f0ff] font-bold text-sm hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:scale-105 transition-all"
              >
                <Send size={16} /> Let&apos;s Connect →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
