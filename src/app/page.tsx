"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import AILabSection from "./components/AILabSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import ChatBot from "./components/ChatBot";

export default function Home() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <HeroSection activeNode={activeNode} setActiveNode={setActiveNode} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection activeNode={activeNode} />
      <AILabSection />
      <ExperienceSection />
      <ContactSection />
      <ChatBot />
    </main>
  );
}
