import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, X, Send, Bot, Terminal, ChevronDown, 
  Sparkles, User, RefreshCw, Layers 
} from 'lucide-react';
import { 
  chatbotKnowledge, fallbackResponse, 
  rotatingTypewriterPrompts, ChatResponse 
} from '@/data/chatbot';

interface Message {
  sender: 'user' | 'agent';
  text: string;
  isTerminal?: boolean;
}

const parseBold = (text: string): React.ReactNode => {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<strong key={match.index} className="text-white font-semibold">{match[1]}</strong>);
    lastIndex = boldRegex.lastIndex;
  }
  
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  return parts.length > 0 ? parts : text;
};

const parseMarkdown = (text: string): React.ReactNode[] => {
  const lines = text.split('\n');
  return lines.map((line, i) => {
    let content: React.ReactNode = line;
    
    if (line.startsWith('### ')) {
      return <h4 key={i} className="text-white font-semibold mt-3 mb-1 text-sm">{line.slice(4)}</h4>;
    }
    
    // Parse links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    
    const textToParse = line.startsWith('- ') ? line.slice(2) : line;
    
    while ((match = linkRegex.exec(textToParse)) !== null) {
      if (match.index > lastIndex) {
        parts.push(parseBold(textToParse.slice(lastIndex, match.index)));
      }
      parts.push(
        <a 
          key={match.index} 
          href={match[2]} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors"
        >
          {match[1]}
        </a>
      );
      lastIndex = linkRegex.lastIndex;
    }
    
    if (lastIndex < textToParse.length) {
      parts.push(parseBold(textToParse.slice(lastIndex)));
    }
    
    const formattedContent = parts.length > 0 ? parts : parseBold(textToParse);
    
    if (line.startsWith('- ')) {
      return (
        <div key={i} className="pl-4 py-0.5 text-xs text-gray-300 flex items-start">
          <span className="text-purple-400 mr-2 flex-shrink-0">•</span>
          <span>{formattedContent}</span>
        </div>
      );
    }
    
    if (line.trim() === '') {
      return <div key={i} className="h-2" />;
    }
    
    return <p key={i} className="text-xs text-gray-300 leading-relaxed mb-1.5">{formattedContent}</p>;
  });
};

const ResumeChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      sender: 'agent', 
      text: "Hello! I am Archilles' autonomous portfolio agent. Ask me about custom web scraper loops, RAG, database structures, or how I can automate leads and CRM syncs for your business!" 
    }
  ]);
  
  const [selectedModel, setSelectedModel] = useState('Claude 3.5 Sonnet');
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [currentLogs, setCurrentLogs] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([
    "Find me the next new leads",
    "How to automate my website?",
    "What projects have you built?",
    "Get in touch"
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const models = ['Claude 3.5 Sonnet', 'Gemini 3.5 Flash', 'DeepSeek R1', 'GPT-4o Agent'];

  // Typewriter effect for input placeholder
  const [placeholderText, setPlaceholderText] = useState("");
  const [promptIndex, setPromptIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPrompt = rotatingTypewriterPrompts[promptIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setPlaceholderText(currentPrompt.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 30);
    } else {
      timer = setTimeout(() => {
        setPlaceholderText(currentPrompt.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 60);
    }

    if (!isDeleting && charIndex === currentPrompt.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 3000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPromptIndex(prev => (prev + 1) % rotatingTypewriterPrompts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, promptIndex]);

  // Scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isProcessing, currentLogs]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    // 1. Add user message
    setMessages(prev => [...prev, { sender: 'user', text: textToSend }]);
    setInputVal('');
    setIsProcessing(true);
    setCurrentLogs([]);

    // 2. Find matching response
    const cleanText = textToSend.toLowerCase();
    let matched = chatbotKnowledge.find(entry => 
      entry.keywords.some(keyword => cleanText.includes(keyword))
    );

    if (!matched) {
      matched = fallbackResponse;
    }

    // 3. Set up terminal logs simulation
    setTerminalLogs(matched.terminalLogs);
    const logs = matched.terminalLogs;
    const finalMatched = matched;

    // Simulate logs printing
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setCurrentLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        // Wait a tiny bit then print actual response
        setTimeout(() => {
          setIsProcessing(false);
          setMessages(prev => [...prev, { sender: 'agent', text: finalMatched.reply }]);
          if (finalMatched.suggestions) {
            setSuggestions(finalMatched.suggestions);
          }
        }, 400);
      }
    }, 200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500 p-[2px] shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300"
        >
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
            {/* Pulsing indicator */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
            <span className="text-white font-mono font-bold text-lg tracking-wider group-hover:scale-110 transition-transform duration-300 relative z-10">AJ</span>
          </div>
          {/* Unread dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black animate-bounce"></div>
          {/* Tooltip hint */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 border border-gray-800 text-white text-xs py-2 px-4 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl">
            Ask Archilles' Copilot Agent
          </div>
        </button>
      )}

      {/* Main Chat Interface */}
      {isOpen && (
        <div className="w-[380px] sm:w-[420px] h-[580px] bg-black/95 backdrop-blur-md rounded-2xl border border-gray-800 flex flex-col shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-hidden animate-fade-in relative">
          
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between bg-zinc-950/60 backdrop-blur-sm z-10">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-lg relative">
                <Terminal className="h-4 w-4 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white tracking-wide flex items-center">
                  Archilles Copilot
                </h3>
                <span className="text-[10px] text-gray-500 font-mono">Status: Agentic Mode Active</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-1 hover:bg-gray-800/50 rounded-lg transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
              >
                <div className={`flex items-start space-x-2.5 max-w-[85%]`}>
                  {msg.sender === 'agent' && (
                    <div className="p-1.5 bg-zinc-900 border border-gray-800 rounded-lg shrink-0 mt-0.5">
                      <Bot className="h-3.5 w-3.5 text-blue-400" />
                    </div>
                  )}
                  <div className={`rounded-xl p-3.5 text-xs leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600/90 text-white font-medium rounded-tr-none' 
                      : 'bg-zinc-900/80 border border-zinc-800/80 text-gray-300 rounded-tl-none'
                  }`}>
                    {msg.sender === 'user' ? msg.text : parseMarkdown(msg.text)}
                  </div>
                </div>
              </div>
            ))}

            {/* Simulated Agent Execution Terminal */}
            {isProcessing && (
              <div className="flex justify-start animate-fade-in">
                <div className="flex items-start space-x-2.5 w-[85%]">
                  <div className="p-1.5 bg-zinc-900 border border-gray-800 rounded-lg shrink-0 mt-0.5">
                    <Terminal className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
                  </div>
                  <div className="w-full bg-zinc-950/80 border border-zinc-800/90 rounded-xl rounded-tl-none p-3.5 font-mono text-[10px] text-emerald-400 space-y-1.5 shadow-inner">
                    <div className="text-gray-500 mb-1 tracking-wider border-b border-zinc-800 pb-1 flex justify-between">
                      <span>AGENT SHELL LOG</span>
                      <RefreshCw className="h-2.5 w-2.5 animate-spin" />
                    </div>
                    {currentLogs.map((log, i) => (
                      <div key={i} className="flex items-start">
                        <span className="text-zinc-600 mr-1.5 select-none">&gt;</span>
                        <span className="animate-pulse">{log}</span>
                      </div>
                    ))}
                    <div className="flex items-center text-zinc-500 animate-pulse pt-1">
                      <span className="text-zinc-600 mr-1.5 select-none">&gt;</span>
                      <span>Thinking...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          {!isProcessing && suggestions.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-900 bg-zinc-950/20 backdrop-blur-sm z-10 flex flex-wrap gap-1.5 max-h-[72px] overflow-y-auto">
              {suggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(suggestion)}
                  className="text-[10px] px-2.5 py-1 bg-zinc-900 border border-zinc-800 hover:border-blue-500/40 text-gray-400 hover:text-white rounded-full transition-all duration-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Form Input Footer */}
          <div className="p-4 border-t border-gray-900 bg-zinc-950 z-10">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
              }}
              className="flex flex-col space-y-3"
            >
              {/* Text Input Container */}
              <div className="relative flex items-center bg-zinc-900/60 border border-zinc-800 focus-within:border-purple-500/50 rounded-xl px-3.5 py-2 transition-all">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={placeholderText}
                  disabled={isProcessing}
                  className="w-full bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none pr-8 font-medium"
                />
                <button
                  type="submit"
                  disabled={isProcessing || !inputVal.trim()}
                  className="absolute right-2.5 text-gray-500 hover:text-purple-400 disabled:text-gray-700 disabled:hover:text-gray-700 transition-colors p-1"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Model Selector and Status Indicators */}
              <div className="flex items-center justify-between text-[10px]">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                    className="flex items-center space-x-1.5 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-gray-700 text-gray-400 hover:text-white transition-colors"
                  >
                    <Layers className="h-3 w-3 text-purple-400" />
                    <span className="font-medium font-mono">{selectedModel}</span>
                    <ChevronDown className="h-2.5 w-2.5" />
                  </button>

                  {/* Dropdown Options */}
                  {isModelDropdownOpen && (
                    <div className="absolute bottom-8 left-0 w-36 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden z-20">
                      {models.map((model) => (
                        <button
                          key={model}
                          type="button"
                          onClick={() => {
                            setSelectedModel(model);
                            setIsModelDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 font-mono text-[10px] hover:bg-zinc-800 transition-colors ${
                            selectedModel === model ? 'text-purple-400 font-semibold bg-zinc-950/40' : 'text-gray-400'
                          }`}
                        >
                          {model}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-zinc-600 flex items-center space-x-1 select-none">
                  <Terminal className="h-2.5 w-2.5" />
                  <span className="font-mono">v2.4-client</span>
                </div>
              </div>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};

export default ResumeChatbot;
