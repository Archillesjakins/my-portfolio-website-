import React, { useState, useEffect, useRef } from 'react';
import { 
  Send, Bot, Terminal, ChevronDown, Sparkles, RefreshCw, Layers, CornerDownLeft 
} from 'lucide-react';
import { 
  chatbotKnowledge, fallbackResponse, 
  rotatingTypewriterPrompts 
} from '@/data/chatbot';

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
      return <h4 key={i} className="text-white font-semibold mt-4 mb-2 text-sm tracking-wide">{line.slice(4)}</h4>;
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
        <div key={i} className="pl-4 py-1 text-sm text-gray-300 flex items-start">
          <span className="text-purple-400 mr-2 flex-shrink-0">•</span>
          <span>{formattedContent}</span>
        </div>
      );
    }
    
    if (line.trim() === '') {
      return <div key={i} className="h-2" />;
    }
    
    return <p key={i} className="text-sm text-gray-300 leading-relaxed mb-2">{formattedContent}</p>;
  });
};

const HeroAgentConsole = () => {
  const [inputVal, setInputVal] = useState('');
  const [selectedModel, setSelectedModel] = useState('Claude 3.5 Sonnet');
  const [isModelDropdownOpen, setIsModelDropdownOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentLogs, setCurrentLogs] = useState<string[]>([]);
  const [response, setResponse] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  
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

  const handleRunAgent = (query: string) => {
    if (!query.trim()) return;

    setIsProcessing(true);
    setShowResult(false);
    setResponse(null);
    setCurrentLogs([]);

    const cleanText = query.toLowerCase();
    let matched = chatbotKnowledge.find(entry => 
      entry.keywords.some(keyword => cleanText.includes(keyword))
    );

    if (!matched) {
      matched = fallbackResponse;
    }

    const logs = matched.terminalLogs;
    const replyText = matched.reply;

    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setCurrentLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(false);
          setResponse(replyText);
          setShowResult(true);
        }, 500);
      }
    }, 200);
  };

  const handleReset = () => {
    setInputVal('');
    setResponse(null);
    setShowResult(false);
    setCurrentLogs([]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 text-left animate-fade-in relative z-20">
      
      {/* Container Card */}
      <div className="bg-zinc-950/70 border border-zinc-800 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-zinc-700/80 backdrop-blur-md">
        
        {/* Card Header resembling copilot / terminal */}
        <div className="px-5 py-3.5 border-b border-zinc-900 flex items-center justify-between bg-zinc-950/40">
          <div className="flex items-center space-x-2.5">
            <div className="flex space-x-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center text-[8px] text-red-500 font-mono"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-[8px] text-yellow-500 font-mono"></span>
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-[8px] text-emerald-500 font-mono"></span>
            </div>
            <span className="text-zinc-600 font-mono text-xs select-none">|</span>
            <div className="flex items-center space-x-2 text-zinc-400 font-mono text-xs">
              <Terminal className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
              <span>archilles-agent-shell.sh</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Online</span>
          </div>
        </div>

        {/* Dynamic Display Area (Terminal or Output Response) */}
        {(isProcessing || showResult) && (
          <div className="p-6 bg-black/45 border-b border-zinc-900 font-mono text-xs max-h-[300px] overflow-y-auto space-y-4 shadow-inner">
            
            {/* Terminal log logs */}
            {isProcessing && (
              <div className="space-y-2 text-emerald-400">
                <div className="text-zinc-500 border-b border-zinc-900 pb-1 mb-2 tracking-wider uppercase text-[10px] flex justify-between items-center">
                  <span>Running Agent Pipeline</span>
                  <RefreshCw className="h-3 w-3 animate-spin text-purple-400" />
                </div>
                {currentLogs.map((log, i) => (
                  <div key={i} className="flex items-start">
                    <span className="text-zinc-600 mr-2 select-none">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
                <div className="flex items-center text-zinc-500 animate-pulse pt-1">
                  <span className="text-zinc-600 mr-2 select-none">&gt;</span>
                  <span>Executing core inference...</span>
                </div>
              </div>
            )}

            {/* Results display */}
            {showResult && response && (
              <div className="font-sans text-sm animate-fade-in text-gray-200">
                <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-2 text-[10px] text-zinc-500 font-mono">
                  <span className="flex items-center space-x-1.5 text-purple-400">
                    <Bot className="h-3.5 w-3.5" />
                    <span>AGENT OUTING SUCCESS ({selectedModel})</span>
                  </span>
                  <button 
                    onClick={handleReset}
                    className="hover:text-white transition-colors bg-zinc-900 hover:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-800"
                  >
                    Clear Console
                  </button>
                </div>
                <div className="space-y-3 prose prose-invert prose-xs max-w-none">
                  {parseMarkdown(response)}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Input Formulation Panel */}
        <div className="p-5">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleRunAgent(inputVal);
            }}
            className="space-y-4"
          >
            {/* Command Line Input container */}
            <div className="relative flex items-center bg-zinc-900/40 border border-zinc-800 focus-within:border-purple-500/50 rounded-xl px-4 py-3.5 transition-all">
              <span className="text-purple-400 font-mono text-sm mr-2.5 select-none font-bold">$</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={placeholderText}
                disabled={isProcessing}
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none pr-12 font-medium"
              />
              
              <div className="absolute right-3.5 flex items-center space-x-2 text-zinc-500">
                <button
                  type="submit"
                  disabled={isProcessing || !inputVal.trim()}
                  className="bg-purple-600 hover:bg-purple-500 text-white disabled:bg-zinc-800 disabled:text-zinc-600 transition-colors p-2 rounded-lg"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Quick Action prompts */}
            {!isProcessing && !showResult && (
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setInputVal("Find me the next new leads");
                    handleRunAgent("Find me the next new leads");
                  }}
                  className="text-xs px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 hover:border-purple-500/30 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-lg transition-all"
                >
                  Find me the next new leads
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputVal("Want to automate your website based on your profile and leads");
                    handleRunAgent("Want to automate your website based on your profile and leads");
                  }}
                  className="text-xs px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 hover:border-emerald-500/30 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-lg transition-all"
                >
                  Want to automate your website...
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setInputVal("What is your tech stack?");
                    handleRunAgent("What is your tech stack?");
                  }}
                  className="text-xs px-3.5 py-1.5 bg-zinc-950 border border-zinc-900 hover:border-blue-500/30 hover:bg-zinc-900 text-zinc-400 hover:text-white rounded-lg transition-all"
                >
                  Core Tech Stack
                </button>
              </div>
            )}

            {/* Selector Bottom Bar */}
            <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-900/60">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsModelDropdownOpen(!isModelDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors"
                >
                  <Layers className="h-3.5 w-3.5 text-purple-400" />
                  <span className="font-mono text-xs">{selectedModel}</span>
                  <ChevronDown className="h-3 w-3 text-zinc-500" />
                </button>

                {isModelDropdownOpen && (
                  <div className="absolute bottom-10 left-0 w-40 bg-zinc-950 border border-zinc-850 rounded-lg shadow-2xl overflow-hidden z-30">
                    {models.map((model) => (
                      <button
                        key={model}
                        type="button"
                        onClick={() => {
                          setSelectedModel(model);
                          setIsModelDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 font-mono text-xs hover:bg-zinc-900 transition-colors ${
                          selectedModel === model ? 'text-purple-400 font-semibold bg-zinc-900/40' : 'text-zinc-400'
                        }`}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-1.5 text-zinc-600 font-mono text-[10px]">
                <CornerDownLeft className="h-3 w-3" />
                <span>Enter to Exec</span>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default HeroAgentConsole;
