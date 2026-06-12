export interface ChatResponse {
  keywords: string[];
  reply: string;
  terminalLogs: string[];
  suggestions?: string[];
}

export const chatbotKnowledge: ChatResponse[] = [
  {
    keywords: ["lead", "find", "sales", "scrape", "client", "customer"],
    reply: "I build fully autonomous **B2B Lead Generation Agents** and **Sales Workflow Automations**.\n\n### How it works:\n1. **Extraction**: A Playwright-based scraper searches targets (LinkedIn, Google Maps, Crunchbase, etc.) on autopilot.\n2. **Enrichment**: The data is fed into an LLM (Claude/Gemini) to extract business profile, sizing, and key pain points.\n3. **CRM Integration**: Leads are pushed directly to Monday.com, Hubspot, or PostgreSQL databases.\n4. **Outreach**: Cold-outreach emails are drafted personalized to each lead's profile and sent via Gmail/SendGrid APIs.\n\n*Would you like to build something similar for your sales pipeline? Let's connect!*",
    terminalLogs: [
      "Initializing LeadGenAgent...",
      "Connecting to Playwright browser cluster...",
      "Scraping prospect data from target directories...",
      "Analyzing company profiles with Claude-3.5-Sonnet...",
      "Generating personalized value propositions...",
      "Filing 47 verified leads to monday.com board."
    ],
    suggestions: ["How to automate my website?", "What projects have you built?", "Get in touch"]
  },
  {
    keywords: ["automate", "website", "automation", "workflow", "process", "n8n"],
    reply: "I turn slow, manual tasks into automated pipelines that run without supervision. I specialize in:\n\n- **Database/CRM Syncing**: Moving data between custom DBs (PostgreSQL/Supabase) and tools like Monday.com, Jotform, or Airtable.\n- **Browser Automation**: Automating logins, data entry, and PDF exports using **Playwright** and **Selenium**.\n- **LLM Operations**: Inserting AI steps (summarization, categorization, classification) in the middle of standard n8n workflows.\n- **Healthcare Integrations**: Secure HIPAA-compliant automation pipelines with FHIR and HL7 data formatting.\n\n*What manual workflow in your team takes the most time? Let's automate it.*",
    terminalLogs: [
      "Spawning WorkflowOrchestrator...",
      "Polling webhook triggers...",
      "Extracting payload from form ingestion...",
      "Executing step-3 (AI-based document classification)...",
      "Injecting cleaned data into clinical database via API...",
      "Automation successfully executed (Time saved: 2.5 hours)."
    ],
    suggestions: ["Find me the next new leads", "What is your tech stack?", "Sono Health info"]
  },
  {
    keywords: ["stack", "tech", "languages", "skills", "libraries", "tools"],
    reply: "Here is my production-grade engineering stack:\n\n- **AI & Agents**: Google Gemini, OpenAI, Claude, LangChain, crewAI, LlamaIndex, Vector DBs (pgvector, Pinecone).\n- **Backend**: Python, FastAPI, Node.js, Express, PostgreSQL, Supabase, Redis, n8n.\n- **Frontend**: React, Next.js, Vite, TypeScript, Tailwind CSS.\n- **Infra/Cloud**: AWS (EC2, Lambda, RDS), Docker, GitHub Actions, Vercel.",
    terminalLogs: [
      "Scanning dependency trees...",
      "Verifying Python and Node runtimes...",
      "Loading LangChain agent configurations...",
      "Connected to Supabase PostgreSQL cluster...",
      "Rendering skills matrix..."
    ],
    suggestions: ["What projects have you built?", "Experience details", "Hire Archilles"]
  },
  {
    keywords: ["project", "portfolio", "built", "sono", "dwello", "news", "unlock"],
    reply: "Here are some of my active production deployments:\n\n1. **Sono Health**: Clinical AI documentation platform. Clinicians speak, it transcribes and automatically generates HL7-compliant reports. Live at [sonohealth.app](https://sonohealth.app).\n2. **Sono-Agent**: Conversational patient onboarding and intake flow. Live at [sono-agent.vercel.app](https://sono-agent.vercel.app/onboarding).\n3. **UmukoziHR**: Multi-agent talent acquisition system matching candidates automatically. Live at [recruit.umukozihr.com](https://recruit.umukozihr.com).\n4. **Dwello**: Real-estate deal analyzer with interactive cash-flow and Cap Rate forecasting. Live at [dwello-indol.vercel.app](https://dwello-indol.vercel.app/how-it-works).\n5. **iUnlockSIM**: Carrier unlocking e-commerce portal with automated API fulfillment. Live at [iunlocksim.vercel.app](https://iunlocksim.vercel.app).\n6. **News AI**: Real-time news aggregator and semantic summarizer. Live at [newsai-app.vercel.app](https://newsai-app.vercel.app).",
    terminalLogs: [
      "Fetching active project manifest...",
      "Retrieving status logs from vercel.com...",
      "Checking health check endpoints...",
      "6/6 projects reporting status: Healthy (200 OK)."
    ],
    suggestions: ["Sono Health info", "UmukoziHR info", "Get in touch"]
  },
  {
    keywords: ["sono health", "medical", "clinical", "doctor", "health"],
    reply: "**Sono Health** is an AI-first clinical documentation platform. It solves the massive administrative overhead doctors face writing medical reports.\n\n- **Speech to Text**: Features a Voice-to-Narrative pipeline where clinicians dictate findings naturally.\n- **RAG & Search**: Performs real-time PubMed database searches to ground diagnostic suggestions.\n- **Backends**: FastAPI and AWS cluster formatting PDF templates and sending data securely to EHR software.\n\n*Check out the live platform at [sonohealth.app](https://sonohealth.app).*",
    terminalLogs: [
      "Connecting to PubMed API...",
      "Initializing Whisper audio transcription pipeline...",
      "Generating clinical narrative report (PDF)...",
      "Validating FHIR level-1 compliance schema..."
    ],
    suggestions: ["Sono-Agent info", "UmukoziHR info", "What projects have you built?"]
  },
  {
    keywords: ["sono-agent", "intake", "onboarding"],
    reply: "**Sono-Agent** is an autonomous conversational agent designed for clinical onboarding and intake flows.\n\n- **Interactive Forms**: Replaces tedious static PDF intake sheets with an conversational chatbot.\n- **Dynamic Context**: Tailors questions based on previous answers, gathering symptoms and history in detail.\n- **Integrations**: Syncs directly with medical office CRMs and Monday.com boards.\n\n*Try the onboarding demo at [sono-agent.vercel.app/onboarding](https://sono-agent.vercel.app/onboarding).*",
    terminalLogs: [
      "Loading patient onboarding session...",
      "Parsing symptom timeline inputs...",
      "Drafting EHR medical history summary...",
      "Updating Monday.com intake ticket..."
    ],
    suggestions: ["Sono Health info", "What projects have you built?", "How to automate my website?"]
  },
  {
    keywords: ["umukozi", "hr", "recruiting", "recruit"],
    reply: "**UmukoziHR** is an autonomous multi-agent talent acquisition system. It replaces weeks of candidate research with minutes of agent execution.\n\n- **Supervised Orchestration**: A SupervisorAgent manages specialist sub-agents (Research, Aggregation, and Analysis).\n- **Live Web Research**: Scrapes and analyzes profiles from multiple platforms on demand.\n- **Scoring**: Ranks candidates with custom LLM-as-a-judge scoring against job requirements.\n\n*See the live platform: [recruit.umukozihr.com](https://recruit.umukozihr.com).*",
    terminalLogs: [
      "Loading candidate search parameters...",
      "Spawning ResearchAgent & WebScraper...",
      "Consolidating candidate records...",
      "Analyzing profiles with Supervisor LLM judge...",
      "Generating candidate shortlists..."
    ],
    suggestions: ["What projects have you built?", "Find me the next new leads", "Experience details"]
  },
  {
    keywords: ["experience", "work", "history", "job", "career", "consultant", "freelance"],
    reply: "My professional journey is focused on high-impact backend & AI engineering:\n\n1. **AI Engineering Consultant (Freelance, 2023 - Present)**: Architected Sono Health, Sono-Agent, and Dwello real-estate analyzer.\n2. **AI & Backend Developer (Ideation Axis, 2024 - Present)**: Deployed pest-detection ML models and scaled database endpoints.\n3. **Full-Stack Developer (Independent Projects, 2022 - Present)**: Launched iUnlockSIM e-commerce, News AI app, and multiple client systems.",
    terminalLogs: [
      "Accessing journey database...",
      "Retrieving professional references...",
      "Verifying client contract logs...",
      "Resume validation: Complete."
    ],
    suggestions: ["What projects have you built?", "What is your tech stack?", "Hire Archilles"]
  },
  {
    keywords: ["contact", "hire", "email", "mail", "linkedin", "upwork", "github", "meeting"],
    reply: "Let's build some intelligent automations together! You can reach me here:\n\n- **Email**: [jakingsarchly@gmail.com](mailto:jakingsarchly@gmail.com)\n- **LinkedIn**: [Archilles Jacob](https://linkedin.com/in/archilles-jacob-705695169)\n- **GitHub**: [@Archillesjakins](https://github.com/Archillesjakins)\n\n*I am currently available for freelance consulting, full-stack contracting, and technical advisor roles.*",
    terminalLogs: [
      "Opening communications handshake...",
      "Generating mailto headers for jakingsarchly@gmail.com...",
      "Routing contact card info...",
      "Handshake: Success. Ready for connections."
    ],
    suggestions: ["What is your tech stack?", "What projects have you built?", "How to automate my website?"]
  }
];

export const fallbackResponse: ChatResponse = {
  keywords: [],
  reply: "I am trained on Archilles' portfolio, resume, and project stack. I couldn't find a direct match for your question, but I can help you with leads, automations, skills, projects, and contact info!\n\nTry asking about:\n- **'Find me the next new leads'**\n- **'How to automate my website'**\n- **'What projects have you built?'**",
  terminalLogs: [
    "Searching knowledge base...",
    "Query: No direct keyword match found.",
    "Applying semantic nearest-neighbor search fallback...",
    "Rendering help guide..."
  ],
  suggestions: ["Find me the next new leads", "How to automate my website?", "What projects have you built?", "Get in touch"]
};

export const rotatingTypewriterPrompts = [
  "Find me the next new leads...",
  "Want to automate your website based on your profile and leads...",
  "What projects has Archilles built?",
  "What is his core tech stack?",
  "How can I hire Archilles for a project?",
  "Explain Sono Health's architecture..."
];
