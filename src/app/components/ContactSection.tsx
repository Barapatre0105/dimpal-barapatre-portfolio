"use client";

import { useState } from "react";
import { Mail, Globe, Code, Phone, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="glass-panel rounded-3xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 relative overflow-hidden">
          {/* Accent glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00f0ff]/10 rounded-full blur-[80px]" />

          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always open to discussing data science, AI architecture, or new opportunities. Drop a message!
            </p>
            
            <div className="space-y-4">
              <a href="mailto:sambaremangesh123@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors">
                <div className="p-3 bg-[#111] rounded-full border border-gray-700"><Mail size={20} /></div>
                <span>sambaremangesh123@gmail.com</span>
              </a>
              <a href="tel:+917219548968" className="flex items-center gap-4 text-gray-300 hover:text-[#00f0ff] transition-colors">
                <div className="p-3 bg-[#111] rounded-full border border-gray-700"><Phone size={20} /></div>
                <span>+91 7219548968</span>
              </a>
              <a href="https://www.linkedin.com/in/mangesh-n-sambare-526ab91b5" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-[#b026ff] transition-colors">
                <div className="p-3 bg-[#111] rounded-full border border-gray-700"><Globe size={20} /></div>
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/mangeshsam" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="p-3 bg-[#111] rounded-full border border-gray-700"><Code size={20} /></div>
                <span>github.com/mangeshsam</span>
              </a>
              <a href="https://www.youtube.com/@LearnCode_Mangesh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-red-500 transition-colors">
                <div className="p-3 bg-[#111] rounded-full border border-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span>@LearnCode_Mangesh</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#00f0ff] transition-colors disabled:opacity-50"
                  disabled={status === "loading"}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#b026ff] transition-colors disabled:opacity-50"
                  disabled={status === "loading"}
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-[#111] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#00f0ff] transition-colors disabled:opacity-50"
                  disabled={status === "loading"}
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
              )}
              {status === "success" && (
                <p className="text-[#00f0ff] text-sm mt-2 font-bold">Message Sent Successfully!</p>
              )}

              <button 
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full py-4 bg-gradient-to-r from-[#00f0ff] to-[#b026ff] text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {status === "loading" && <Loader2 className="animate-spin" size={20} />}
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
