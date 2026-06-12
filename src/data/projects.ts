import { Globe, Brain, ShoppingCart, Newspaper, Leaf, Home, Unlock, LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  problem: string;
  whatIBuilt: string;
  techUsed: string;
  result: string;
  icon: LucideIcon;
  gradient: string;
  category: string;
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Sono Health — Clinical AI Documentation Platform",
    problem: "Healthcare professionals spending hours per patient writing clinical reports, researching diagnoses, and manually documenting findings — time taken away from patient care.",
    whatIBuilt: "An AI-first clinical documentation platform with a Voice-to-Narrative pipeline: clinicians speak their findings, the system transcribes, extracts structured measurements, searches peer-reviewed medical literature in real time, and generates a complete formatted report automatically.",
    techUsed: "FastAPI · Google Gemini · FHIR Level 1 · HL7 · PubMed API · Voice AI (Whisper) · LaTeX PDF generation · PostgreSQL · AWS",
    result: "Clinical documentation reduced from hours to minutes per patient. Live in production.",
    category: "Healthcare AI",
    gradient: "from-blue-500 to-cyan-600",
    icon: Globe,
    image: "/projects/sonohealth.png",
    demoUrl: "https://sonohealth.app",
  },
  {
    title: "Sono-Agent — Clinical Intake & Onboarding Agent",
    problem: "Patient onboarding and clinical intake require manual form-filling, leading to errors, missing patient history, and friction before consultations.",
    whatIBuilt: "An autonomous conversational agent that guides patients through an intuitive onboarding and intake flow, dynamically gathering medical history and symptoms, structured for integration into EHR systems.",
    techUsed: "Next.js · React · Voice AI · Tailwind CSS · Supabase · Monday.com API",
    result: "Streamlined the intake process, achieving 90% completion rates and error-free EHR records. Live platform.",
    category: "Healthcare AI",
    gradient: "from-cyan-500 to-teal-600",
    icon: Brain,
    image: "/projects/sono-agent.png",
    demoUrl: "https://sono-agent.vercel.app/onboarding",
  },
  {
    title: "News AI — Real-time AI News Summarizer & Analyst",
    problem: "Information overload from hundreds of tech news sources makes it impossible for professionals to extract relevant trends and high-impact updates efficiently.",
    whatIBuilt: "A real-time news aggregator and AI summarizer that scrapes top tech news, clusters related articles using semantic embeddings, and generates structured daily briefings.",
    techUsed: "Next.js · React · FastAPI · OpenAI API · Tailwind CSS · Supabase · Vercel",
    result: "Aggregates and distills 500+ news articles daily into 5-minute curated summaries. Production-grade live site.",
    category: "AI Engineering",
    gradient: "from-purple-500 to-indigo-600",
    icon: Newspaper,
    image: "/projects/news-ai.png",
    demoUrl: "https://newsai-app.vercel.app/",
  },
  {
    title: "Dwello — AI-Powered Real Estate Deal Analyzer & CRM",
    problem: "Real estate investors spend hours manually calculating property cash flows, mortgage payments, and ROI forecasts, often missing high-yield investment opportunities.",
    whatIBuilt: "An interactive property evaluation engine and CRM portal. Allows investors to calculate key financial metrics (Cap Rate, Cash-on-Cash Return, IRR) in real time and manage prospective properties in a unified dashboard.",
    techUsed: "React · TypeScript · Tailwind CSS · Node.js · Express · PostgreSQL · Vercel",
    result: "Accelerates property assessment from hours to seconds with precise cash flow modeling and interactive visualizations.",
    category: "Full-Stack Web",
    gradient: "from-emerald-500 to-teal-600",
    icon: Home,
    image: "/projects/dwello.png",
    demoUrl: "https://dwello-indol.vercel.app/how-it-works",
  },
  {
    title: "iUnlockSIM — Carrier Unlock Automation Portal",
    problem: "IMEI phone carrier unlocking is traditionally a manual, slow, and error-prone broker service involving insecure communications and high markups.",
    whatIBuilt: "A fully automated e-commerce web application for device carrier unlocking. Features instant IMEI validity checks, API integrations with major carrier unlock databases, automated billing, and email status updates.",
    techUsed: "React · Vite · TypeScript · Tailwind CSS · Supabase · Stripe API · Carrier APIs · Vercel",
    result: "Completely automated the fulfillment chain from order ingestion to carrier unlocking, reducing delivery times by 80%.",
    category: "E-Commerce",
    gradient: "from-amber-500 to-orange-600",
    icon: Unlock,
    image: "/projects/iunlocksim.png",
    demoUrl: "https://iunlocksim.vercel.app",
  },
  {
    title: "UmukoziHR — Autonomous Recruiting Agent System",
    problem: "Recruiting teams spending weeks manually researching candidates, cross-referencing profiles, and building shortlists for each open role — a process that didn't scale.",
    whatIBuilt: "A multi-agent talent acquisition system: a SupervisorAgent delegates to a ResearchAgent (live web search), AggregationAgent (consolidates results), and AnalysisAgent (scores and ranks candidates by fit).",
    techUsed: "FastAPI · Python · PostgreSQL · Redis · Multi-agent orchestration · AWS · Docker · Circuit breakers · LLM tool-calling",
    result: "Candidate shortlisting reduced from weeks to minutes. 100K+ lines of production code shipped. Live platform.",
    category: "AI Engineering",
    gradient: "from-pink-500 to-rose-600",
    icon: Brain,
    image: "/projects/umukozihr-recruit.png",
    demoUrl: "https://recruit.umukozihr.com",
  },
  {
    title: "Client Onboarding Automation — Healthcare Operations",
    problem: "A healthcare services business running a 12-step manual client onboarding process across Gmail, a clinical management platform, digital forms, and a project management CRM.",
    whatIBuilt: "An AI agent pipeline using n8n + Claude that monitors Gmail for inquiries, sends templated onboarding emails, automates data entry into the clinical platform via browser automation, and updates the CRM.",
    techUsed: "n8n · Claude via AWS Bedrock · Playwright browser automation · Gmail API · Monday.com API · Jotform",
    result: "12-step manual process replaced by a fully automated pipeline. Staff time per onboarding reduced from hours to near-zero.",
    category: "Workflow Automation",
    gradient: "from-emerald-500 to-teal-600",
    icon: ShoppingCart,
  },
  {
    title: "Spanish RAG Chatbot MVP — Document Q&A System",
    problem: "A business needed customers to get accurate answers from internal documents in Spanish — without a support team manually answering every query.",
    whatIBuilt: "A full RAG system: admin panel for uploading PDF, DOCX, CSV, TXT, and XLSX files, a parsing and chunking pipeline storing content in SQLite, and a Spanish-language chat interface.",
    techUsed: "FastAPI · React · SQLite · OpenAI API · RAG pipeline · Spanish NLP · Admin auth panel",
    result: "Delivered in 48 hours. Accurate document-grounded responses in Spanish with zero hallucination on out-of-scope questions.",
    category: "RAG Systems",
    gradient: "from-orange-500 to-red-600",
    icon: Newspaper,
  }
];
