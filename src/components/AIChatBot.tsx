import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot, ArrowRight, CornerDownLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AIChatBot({ darkMode }: { darkMode: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: "Hi! I'm Awais AI, a custom-engineered assistant. Ask me anything about Awais's technical experience, engineering skills, academic studies, or why he would be an outstanding hire for your team!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "What are your core skills?",
    "Tell me about your AI experience.",
    "Why should we hire you?",
    "How can I contact you?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setMessages((prev) => [...prev, { sender: 'user', text: textToSend }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await res.json();
      if (res.ok && data.reply) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        throw new Error(data.error || 'Invalid API response');
      }
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: "I experienced a minor connection lag with my Gemini server. However, I can confirm Shaikh Awais Sarfaraz is highly proficient in React, Python, and SEO! Reach out directly via shaikhawais.masoorkar@gmail.com or click 'Contact'!"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          id="ai-bot-toggle-btn"
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center text-white shadow-2xl cursor-pointer group shadow-indigo-500/30"
          aria-label="Toggle AI Chat"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                <MessageSquare className="w-6 h-6" />
                {/* Notification Badge */}
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 text-[10px] items-center justify-center font-bold text-white leading-none">1</span>
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Chat Window Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className={`fixed bottom-24 right-6 w-[360px] sm:w-[400px] h-[520px] rounded-[24px] shadow-2xl z-50 overflow-hidden flex flex-col border transition-colors ${
              darkMode
                ? 'glass text-white'
                : 'glass-light text-slate-800'
            }`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 p-4 flex items-center justify-between text-white border-b border-indigo-500/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <Sparkles className="w-5 h-5 text-cyan-300 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-sm tracking-wide leading-none">Awais AI</h3>
                  <span className="text-[10px] text-cyan-200 font-mono tracking-widest mt-1 block font-semibold">RECRUITER COPILOT</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message Pane */}
            <div className={`flex-1 p-4 overflow-y-auto space-y-4 ${darkMode ? 'bg-slate-950/20' : 'bg-slate-50/50'}`}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white'
                        : darkMode
                        ? 'bg-slate-800 text-cyan-400 border border-slate-700'
                        : 'bg-slate-100 text-indigo-600 border border-slate-200'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-indigo-600 text-white rounded-tr-none'
                        : darkMode
                        ? 'bg-white/5 border border-white/5 text-slate-100 rounded-tl-none'
                        : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-3 max-w-[80%]">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    darkMode ? 'bg-slate-800 text-cyan-400' : 'bg-slate-100 text-indigo-600'
                  }`}>
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className={`p-3 rounded-2xl text-xs rounded-tl-none flex items-center gap-1 shadow-sm ${
                    darkMode ? 'bg-white/5 border border-white/5' : 'bg-white border border-slate-100'
                  }`}>
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions Chips */}
            <div className={`px-4 py-2 border-t flex flex-wrap gap-2 ${
              darkMode ? 'border-white/5 bg-slate-900/60' : 'border-slate-100 bg-white'
            }`}>
              {quickQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  disabled={isLoading}
                  className={`text-[10px] font-medium px-2.5 py-1.5 rounded-full border transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 ${
                    darkMode
                      ? 'border-white/5 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className={`p-3 border-t flex gap-2 items-center ${
                darkMode ? 'border-white/5 bg-slate-900/60' : 'border-slate-100 bg-white'
              }`}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Awais's skills, experience..."
                disabled={isLoading}
                className={`flex-1 text-xs px-3 py-2.5 rounded-xl border focus:outline-none focus:ring-1 ${
                  darkMode
                    ? 'bg-slate-950/40 border-white/5 text-white placeholder-slate-500 focus:ring-indigo-500'
                    : 'bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400 focus:ring-indigo-500 focus:bg-white'
                }`}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl accent-gradient text-white transition-all shadow-md disabled:opacity-40 cursor-pointer flex items-center justify-center shrink-0"
                aria-label="Send Message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
