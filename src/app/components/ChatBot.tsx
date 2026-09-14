"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minus, Sparkles, Folder, BarChart2, User, Mail, Paperclip } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', content: string}[]>([
    { role: "bot", content: "Hi! I'm Mangesh AI ✨\nI'm your personal AI assistant for Mangesh's portfolio. Ask me anything about his projects, skills, experience, or anything else!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const sendMessage = async (e?: React.FormEvent, customMessage?: string) => {
    e?.preventDefault();
    const userMsg = customMessage || input.trim();
    if (!userMsg) return;

    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setInput("");
    setLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const res = await axios.post(`${API_URL}/chat`, { message: userMsg });
      setMessages(prev => [...prev, { role: "bot", content: res.data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "bot", content: "Sorry, my backend is currently unreachable. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; display: block; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #00f0ff; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #00d2ff; }
      `}} />

      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 p-4 rounded-full bg-[#0a0f1c] border-2 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:scale-110 transition-all z-50 flex items-center justify-center gap-2"
          >
            <Sparkles size={24} className="animate-pulse" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-[90vw] sm:w-[400px] md:w-[450px] h-[600px] max-h-[85vh] rounded-3xl border border-[#00f0ff]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] z-50 flex flex-col overflow-hidden bg-[#030712]"
          >
            {/* Header */}
            <div className="px-6 pt-5 pb-3 flex flex-col gap-1 relative border-b border-[#1a2333]/50">
              <div className="flex justify-between items-center w-full">
                <div className="text-[26px] font-black flex items-center gap-1 tracking-tight">
                  <span className="text-[#00f0ff]">Mangesh</span>
                  <span className="text-[#b026ff]">AI</span>
                  <Sparkles size={20} className="text-[#b026ff] ml-1" />
                </div>
                <div className="flex gap-4 text-gray-400">
                  <button className="hover:text-white transition-colors"><Minus size={22} /></button>
                  <button onClick={() => setIsOpen(false)} className="hover:text-white transition-colors"><X size={22} /></button>
                </div>
              </div>
              <div className="text-center w-full mt-2">
                <span className="text-[10px] text-gray-300 tracking-[0.35em] font-semibold uppercase">YOUR PORTFOLIO AI ASSISTANT</span>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto min-h-0 flex flex-col gap-6 custom-scrollbar relative">
              {messages.map((msg, i) => (
                <div key={i} className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'} items-start gap-4`}>
                  
                  {/* Bot Avatar */}
                  {msg.role === 'bot' && (
                    <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white bg-[#030712] border-2 border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.4)] relative mt-1 text-lg">
                      MJ
                      <div className="absolute -bottom-2 -right-2 text-[#b026ff]">
                        <Sparkles size={16} fill="currentColor" />
                      </div>
                    </div>
                  )}
                  
                  <div className={`max-w-[85%] rounded-[24px] p-5 text-[15px] whitespace-pre-wrap leading-relaxed shadow-lg ${
                    msg.role === 'user' 
                      ? "bg-[#111827] text-gray-200 border border-gray-700 rounded-br-sm" 
                      : "bg-[#0a0f1c] text-gray-300 border border-[#b026ff]/30 shadow-[0_0_20px_rgba(176,38,255,0.05)] rounded-bl-sm"
                  }`}>
                    {/* Bot Message Header inside bubble for the first message only */}
                    {msg.role === 'bot' && i === 0 ? (
                       <div>
                         {msg.content.split('\n').map((line, idx) => (
                           <div key={idx} className={idx === 0 ? "font-bold text-[17px] mb-3 text-white" : ""}>
                             {idx === 0 ? (
                               <>Hi! I'm <span className="text-[#00f0ff]">Mangesh</span> <span className="text-[#b026ff]">AI</span> ✨</>
                             ) : line}
                           </div>
                         ))}
                       </div>
                    ) : (
                       msg.content
                    )}
                  </div>
                </div>
              ))}
              
              {/* Loading indicator */}
              {loading && (
                <div className="flex w-full justify-start items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-white bg-[#030712] border-2 border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.4)] mt-1 text-lg">MJ</div>
                  <div className="bg-[#0a0f1c] border border-[#b026ff]/30 shadow-lg rounded-[24px] rounded-bl-sm p-5 flex gap-1 items-center">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 bg-[#00f0ff] rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-[#00f0ff] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-[#00f0ff] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions (only show if no user messages sent yet, fixed below chat) */}
            {messages.length === 1 && (
              <div className="px-5 pb-2 pt-1 flex flex-wrap gap-2">
                <button onClick={() => sendMessage(undefined, "Show his projects")} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f0ff]/40 bg-[#0a0f1c] hover:bg-[#00f0ff]/10 text-gray-300 text-xs transition-colors shadow-sm">
                  <Folder size={14} className="text-[#00f0ff]" /> Show his projects
                </button>
                <button onClick={() => sendMessage(undefined, "What are his skills?")} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f0ff]/40 bg-[#0a0f1c] hover:bg-[#00f0ff]/10 text-gray-300 text-xs transition-colors shadow-sm">
                  <BarChart2 size={14} className="text-[#00f0ff]" /> What are his skills?
                </button>
                <button onClick={() => sendMessage(undefined, "Tell me about his experience")} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f0ff]/40 bg-[#0a0f1c] hover:bg-[#00f0ff]/10 text-gray-300 text-xs transition-colors shadow-sm">
                  <User size={14} className="text-[#00f0ff]" /> Tell me about his experience
                </button>
                <button onClick={() => sendMessage(undefined, "Contact details")} className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f0ff]/40 bg-[#0a0f1c] hover:bg-[#00f0ff]/10 text-gray-300 text-xs transition-colors shadow-sm">
                  <Mail size={14} className="text-[#00f0ff]" /> Contact details
                </button>
              </div>
            )}

            {/* Input Area */}
            <div className="p-5 pt-3 relative">
              <form onSubmit={sendMessage} className="relative flex items-center">
                <div className="absolute left-5 text-gray-400 hover:text-white cursor-pointer transition-colors z-10">
                  <Paperclip size={20} />
                </div>
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Mangesh AI..."
                  className="w-full bg-[#0a0f1c] border border-[#00f0ff]/20 rounded-full py-4 pl-14 pr-14 text-gray-200 text-[15px] focus:outline-none focus:border-[#00f0ff]/60 transition-colors shadow-inner placeholder-gray-500"
                />
                <button 
                  type="submit" 
                  disabled={!input.trim() || loading} 
                  className="absolute right-5 text-[#00f0ff] disabled:opacity-30 hover:scale-110 transition-transform z-10"
                >
                  <Send size={22} className="fill-current" />
                </button>
              </form>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
