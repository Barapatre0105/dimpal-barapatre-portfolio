"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, MessageSquare, Settings, FileText, HelpCircle, LogOut } from "lucide-react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

const mockTrendData = [
  { name: 'Sun', score: 0.5 },
  { name: 'Mon', score: 0.7 },
  { name: 'Tue', score: 0.6 },
  { name: 'Wed', score: 0.8 },
  { name: 'Thu', score: 0.65 },
  { name: 'Fri', score: 0.9 },
  { name: 'Sat', score: 0.78 },
];

export default function AILabSection() {
  const [activeTab, setActiveTab] = useState("sentiment");
  const [inputText, setInputText] = useState("");
  const [sentimentResult, setSentimentResult] = useState<{label: string, score: number} | null>(null);
  
  const [pdfUploadStatus, setPdfUploadStatus] = useState("");
  const [pdfQuestion, setPdfQuestion] = useState("");
  const [pdfAnswer, setPdfAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSentimentAnalysis = async () => {
    if (!inputText) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/sentiment`, { text: inputText });
      setSentimentResult(res.data);
    } catch (err) {
      setError("Backend is unreachable. Please ensure the FastAPI server is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setPdfUploadStatus("Uploading...");
    try {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const res = await axios.post(`${API_BASE_URL}/upload-pdf`, formData);
      setPdfUploadStatus(res.data.message);
    } catch (err) {
      setPdfUploadStatus("Upload failed (backend offline).");
    }
  };

  const handlePdfAsk = async () => {
    if (!pdfQuestion) return;
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(`${API_BASE_URL}/ask-pdf`, { message: pdfQuestion });
      setPdfAnswer(res.data.reply);
    } catch (err) {
      setError("Backend is unreachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 relative z-10 bg-transparent flex flex-col items-center">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-black text-white mb-2 tracking-tight flex items-center justify-center gap-4">
          AI LAB <span className="text-[#00f0ff] animate-pulse">🧠</span>
        </h2>
        <p className="text-[#00f0ff] text-xl font-mono tracking-widest drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">
          Exploring Intelligence & Innovations
        </p>
      </div>

      {/* Main Dashboard Container */}
      <div className="w-full max-w-6xl mx-auto glass-panel rounded-3xl overflow-hidden flex border border-[#b026ff]/30 shadow-[0_0_50px_rgba(176,38,255,0.15)] bg-[#050b14]/80 backdrop-blur-xl">
        
        {/* Sidebar */}
        <div className="w-20 border-r border-[#ffffff10] flex flex-col items-center py-6 gap-8 bg-[#02050a]/50">
          <div className="text-[#b026ff] animate-pulse"><Activity size={28} /></div>
          
          <div className="flex flex-col gap-6 mt-4">
            <button className="p-3 rounded-xl bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30"><MessageSquare size={20} /></button>
            <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors"><FileText size={20} /></button>
            <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors"><Settings size={20} /></button>
          </div>
          
          <div className="mt-auto flex flex-col gap-6">
            <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors"><HelpCircle size={20} /></button>
            <button className="p-3 rounded-xl text-gray-500 hover:text-white transition-colors"><LogOut size={20} /></button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 flex flex-col h-full">
          
          {/* Top Tabs */}
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => setActiveTab("sentiment")}
              className={`flex-1 py-3 rounded-xl border font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "sentiment" ? "border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.2)] bg-[#00f0ff]/5" : "border-gray-800 text-gray-500 hover:border-gray-600"
            }`}>
              <Activity size={18} /> SENTIMENT ANALYSIS
            </button>
            <button 
              onClick={() => setActiveTab("rag-pdf")}
              className={`flex-1 py-3 rounded-xl border font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
              activeTab === "rag-pdf" ? "border-[#b026ff] text-[#b026ff] shadow-[0_0_20px_rgba(176,38,255,0.2)] bg-[#b026ff]/5" : "border-gray-800 text-gray-500 hover:border-gray-600"
            }`}>
              <FileText size={18} /> DOCUMENT Q&A
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "sentiment" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col h-full gap-6">
              
              {/* Input Section */}
              <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0f1c]/50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00f0ff] to-transparent"></div>
                <h3 className="text-white font-bold mb-4 flex items-center gap-2"><Activity size={20} className="text-[#00f0ff]"/> LIVE SENTIMENT TRACKER</h3>
                <p className="text-gray-400 text-sm mb-4">Enter text for real-time analysis...</p>
                <div className="flex gap-4">
                  <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSentimentAnalysis()}
                    className="flex-1 bg-[#02050a] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#00f0ff] transition-colors"
                    placeholder="Analyze any tweet, review, or feedback..."
                  />
                  <button 
                    onClick={handleSentimentAnalysis}
                    disabled={loading}
                    className="px-8 bg-[#00f0ff]/10 text-[#00f0ff] font-bold rounded-xl border border-[#00f0ff]/30 hover:bg-[#00f0ff]/20 transition-colors"
                  >
                    {loading ? "..." : "Analyze"}
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Gauge */}
                <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0f1c]/50 flex flex-col items-center justify-center">
                  <h4 className="text-gray-300 font-semibold mb-1 w-full text-left">Overall Sentiment</h4>
                  <p className="text-[#00f0ff] text-sm mb-6 w-full text-left">{sentimentResult ? `(${sentimentResult.label})` : '(78% Positive)'}</p>
                  
                  {/* CSS Radial Gauge */}
                  <div className="relative w-32 h-32 rounded-full border-8 border-gray-800 border-t-[#00f0ff] border-r-[#00f0ff] transform -rotate-45 shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                    <div className="absolute inset-0 flex items-center justify-center transform rotate-45">
                       <span className="text-3xl font-bold text-white">
                         {sentimentResult ? `${(sentimentResult.score * 100).toFixed(0)}%` : '78%'}
                       </span>
                    </div>
                  </div>
                </div>

                {/* Trend Chart */}
                <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0f1c]/50">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-gray-300 font-semibold text-sm">Sentiment Trends (Last 7 Days)</h4>
                    <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-1 rounded text-xs">0.78</span>
                  </div>
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockTrendData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <YAxis hide domain={[0, 1]} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#111', borderColor: '#333' }}
                          itemStyle={{ color: '#00f0ff' }}
                        />
                        <Line type="monotone" dataKey="score" stroke="#00f0ff" strokeWidth={3} dot={{ fill: '#00f0ff', strokeWidth: 2 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Drivers */}
                <div className="border border-gray-800 rounded-2xl p-6 bg-[#0a0f1c]/50">
                  <h4 className="text-gray-300 font-semibold text-sm mb-4">Top Sentiment Drivers</h4>
                  
                  <div className="mb-4">
                    <div className="text-green-400 text-xs mb-1">Positive</div>
                    <div className="flex justify-between text-white text-sm mb-1"><span>Product Quality</span><span>42%</span></div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00f0ff] to-green-400 h-full w-[42%]"></div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-white text-sm mb-1"><span>Service</span><span>31%</span></div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#00f0ff] to-green-400 h-full w-[31%]"></div>
                    </div>
                  </div>

                  <div>
                    <div className="text-red-400 text-xs mb-1">Negative</div>
                    <div className="flex justify-between text-white text-sm mb-1"><span>Latency</span><span>15%</span></div>
                    <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-red-500 h-full w-[15%]"></div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === "rag-pdf" && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col h-full gap-6">
              <div className="border border-[#b026ff]/30 rounded-2xl p-6 bg-[#0a0f1c]/50 relative overflow-hidden flex-1 flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b026ff] to-transparent"></div>
                
                <FileText size={48} className="text-[#b026ff] mb-4 opacity-50" />
                <h3 className="text-white font-bold mb-2 text-xl">Private Document Q&A</h3>
                <p className="text-gray-400 text-sm mb-8 max-w-md text-center">
                  Upload a PDF document and leverage Retrieval-Augmented Generation to securely query its contents.
                </p>

                <div className="w-full max-w-lg mb-8 p-6 border-2 border-dashed border-[#b026ff]/40 rounded-xl bg-[#b026ff]/5 text-center cursor-pointer hover:bg-[#b026ff]/10 transition-colors">
                  <input type="file" id="pdf-upload" className="hidden" accept=".pdf" onChange={handlePdfUpload} />
                  <label htmlFor="pdf-upload" className="cursor-pointer text-[#b026ff] font-bold text-lg">
                    {pdfUploadStatus || "Click to browse or drag PDF here"}
                  </label>
                </div>

                <div className="w-full max-w-2xl flex gap-4">
                  <input 
                    type="text" 
                    className="flex-1 bg-[#02050a] border border-gray-700 rounded-xl p-4 text-white focus:outline-none focus:border-[#b026ff] transition-colors shadow-inner"
                    placeholder="Ask a question about the uploaded document..."
                    value={pdfQuestion}
                    onChange={(e) => setPdfQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handlePdfAsk()}
                  />
                  <button 
                    onClick={handlePdfAsk}
                    disabled={loading}
                    className="px-8 bg-[#b026ff]/20 text-[#b026ff] font-bold rounded-xl border border-[#b026ff]/50 hover:bg-[#b026ff]/40 transition-colors shadow-[0_0_15px_rgba(176,38,255,0.3)]"
                  >
                    {loading ? "Searching..." : "Ask"}
                  </button>
                </div>
                
                {pdfAnswer && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl mt-8 p-6 bg-[#02050a] border border-[#b026ff]/30 rounded-xl text-left">
                    <div className="text-xs text-[#b026ff] font-mono tracking-widest mb-3 flex items-center gap-2">
                       <span className="w-2 h-2 rounded-full bg-[#b026ff] animate-pulse"></span>
                       AI RESPONSE
                    </div>
                    <div className="text-gray-300 leading-relaxed text-sm">
                      {pdfAnswer}
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
