export interface ChatResponse {
  keywords: string[];
  reply: string;
  terminalLogs: string[];
  suggestions?: string[];
}

export const chatbotKnowledge: ChatResponse[] = [
  {
    keywords: ["lead", "find", "sales", "scrape", "client", "customer", "prospect", "b2b", "marketing"],
    reply: "I build autonomous **B2B Lead Generation Agents** and **Sales Workflow Automations**.\n\n### Core Capabilities:\n1. **Scraping**: Automated scraping of targeted data (LinkedIn, Google Maps, local registries) using Playwright.\n2. **Enrichment**: Cleaning and profiling leads using Gemini or Claude to identify business size and pain points.\n3. **CRM Integration**: Routing leads directly to Monday.com, HubSpot, or custom databases.\n4. **Outreach**: Generating personalized draft emails sent automatically via Gmail or SendGrid APIs.\n\n*Would you like to build an automated lead generation flow? Let's chat on WhatsApp!*",
    terminalLogs: [
      "Initializing LeadGenAgent...",
      "Connecting to Playwright browser cluster...",
      "Scraping prospect data from directories...",
      "Analyzing company profiles with Claude-3.5-Sonnet...",
      "Generating personalized value propositions...",
      "Filing 47 verified leads to CRM board."
    ],
    suggestions: ["How to automate my website?", "What projects have you built?", "Get in touch"]
  },
  {
    keywords: ["automate", "website", "automation", "workflow", "process", "n8n", "zapier", "make", "integration"],
    reply: "I build workflow automation pipelines that eliminate manual work, primarily using **n8n** and custom Python scripts. My work covers:\n\n- **App Integrations**: Connecting tools like Monday.com, Gmail, Jotform, Airtable, HubSpot, and Stripe.\n- **Browser Automation**: Playwright scripts that automate logins, file downloads, and data entries.\n- **AI Steps**: Integrating LLM classification or summarization steps in the middle of standard API pipelines.\n- **Data Pipelines**: Secure, automated data syncing between databases (PostgreSQL/Supabase) and external platforms.\n\n*What manual process in your business takes up the most time?*",
    terminalLogs: [
      "Spawning WorkflowOrchestrator...",
      "Polling webhook triggers...",
      "Extracting payload from form ingestion...",
      "Executing step-3 (AI-based document classification)...",
      "Injecting cleaned data into database via API...",
      "Automation successfully executed (Time saved: 2.5 hours)."
    ],
    suggestions: ["What projects have you built?", "What is your tech stack?", "Healthcare automation"]
  },
  {
    keywords: ["stack", "tech", "languages", "skills", "libraries", "tools", "python", "typescript", "react"],
    reply: "Here is my production-grade engineering stack:\n\n- **AI & LLM Ops**: Google Gemini, OpenAI API, Claude API, LangChain, crewAI, LlamaIndex, Vector DBs (pgvector, Pinecone).\n- **Backend**: Python, FastAPI, Node.js, Express, PostgreSQL, Supabase, Redis, n8n.\n- **Frontend**: React, Next.js, Vite, TypeScript, Tailwind CSS.\n- **Infra & Cloud**: AWS (EC2, Lambda, RDS), Docker, GitHub Actions, Vercel.\n\n*All my custom builds are fully typed, Dockerized, and integrated with modern monitoring.*",
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
    keywords: ["project", "portfolio", "built", "work", "examples", "live", "demos", "showcase"],
    reply: "Here are my active production projects:\n\n1. **Sono Health**: Clinical AI documentation platform. Dictate naturally to generate clinical reports. Live at [sonohealth.app](https://sonohealth.app).\n2. **Sono-Agent**: Conversational AI patient onboarding flow. Live at [sono-agent.vercel.app](https://sono-agent.vercel.app/onboarding).\n3. **UmukoziHR**: Multi-agent talent acquisition system matching candidates automatically. Live at [recruit.umukozihr.com](https://recruit.umukozihr.com).\n4. **Dwello**: Real-estate deal analyzer with interactive cash-flow and cap rate forecasting. Live at [dwello-indol.vercel.app](https://dwello-indol.vercel.app/how-it-works).\n5. **iUnlockSIM**: Carrier unlocking e-commerce portal with automated API fulfillment. Live at [iunlocksim.vercel.app](https://iunlocksim.vercel.app).\n6. **News AI**: Real-time news aggregator and semantic summarizer. Live at [newsai-app.vercel.app](https://newsai-app.vercel.app).",
    terminalLogs: [
      "Fetching active project manifest...",
      "Retrieving status logs from vercel.com...",
      "Checking health check endpoints...",
      "6/6 projects reporting status: Healthy (200 OK)."
    ],
    suggestions: ["Sono Health info", "UmukoziHR info", "Get in touch"]
  },
  {
    keywords: ["sono health", "medical", "clinical", "doctor", "healthcare", "clinic", "hospital"],
    reply: "**Sono Health** is an AI-first clinical documentation platform designed to reduce medical administrative overhead.\n\n- **Speech to Text**: Voice-to-Narrative pipeline using Whisper to transcribe consultations.\n- **Semantic Search**: Real-time PubMed queries to find supporting literature and ground medical suggestions.\n- **EHR Integration**: Structured output formatted to match EHR schemas securely.\n\n*Check out the live platform at [sonohealth.app](https://sonohealth.app).*",
    terminalLogs: [
      "Connecting to PubMed API...",
      "Initializing Whisper audio transcription pipeline...",
      "Generating clinical narrative report (PDF)...",
      "Validating FHIR level-1 compliance schema..."
    ],
    suggestions: ["Sono-Agent info", "UmukoziHR info", "What projects have you built?"]
  },
  {
    keywords: ["sono-agent", "intake", "onboarding", "patient"],
    reply: "**Sono-Agent** is an autonomous conversational agent designed for clinical onboarding and patient intake flows.\n\n- **Conversational Intake**: Replaces boring paper forms with an interactive text chat.\n- **Symptom Collection**: Gathers patient history and symptoms dynamically before the doctor visit.\n- **Sync**: Automatically pipes patient briefs to clinic dashboards (e.g. Monday.com or Notion).\n\n*Try the live demo at [sono-agent.vercel.app/onboarding](https://sono-agent.vercel.app/onboarding).*",
    terminalLogs: [
      "Loading patient onboarding session...",
      "Parsing symptom timeline inputs...",
      "Drafting EHR medical history summary...",
      "Updating Monday.com intake ticket..."
    ],
    suggestions: ["Sono Health info", "What projects have you built?", "Get in touch"]
  },
  {
    keywords: ["umukozi", "hr", "recruiting", "recruit", "candidate", "shortlist", "hiring"],
    reply: "**UmukoziHR** is a multi-agent talent acquisition system that compresses weeks of candidate sourcing and shortlisting into minutes.\n\n- **Multi-Agent Orchestration**: Research, Aggregation, and Analysis agents run in parallel.\n- **Live Scoring**: Uses an LLM-as-a-judge model to score candidates against job briefs with clear reason logs.\n- **Web Scrapers**: Searches online portfolios and LinkedIn to score passive talent.\n\n*See the live recruitment app: [recruit.umukozihr.com](https://recruit.umukozihr.com).*",
    terminalLogs: [
      "Loading candidate search parameters...",
      "Spawning ResearchAgent & WebScraper...",
      "Consolidating candidate records...",
      "Analyzing profiles with Supervisor LLM judge...",
      "Generating candidate shortlists..."
    ],
    suggestions: ["What projects have you built?", "Experience details", "Get in touch"]
  },
  {
    keywords: ["dwello", "realestate", "property", "deal", "cashflow", "landlord", "agent"],
    reply: "**Dwello** is a real-estate deal analyzer built for investors and agents to run financial models instantly.\n\n- **Instant Parsing**: Paste any property address or listing URL.\n- **Financial Models**: Calculates cap rate, ROI, cash flow, and net operating income.\n- **Lead Auto-Response**: Automatically texts follow-ups to incoming listing leads.\n\n*Try the live app at [dwello-indol.vercel.app/how-it-works](https://dwello-indol.vercel.app/how-it-works).*",
    terminalLogs: [
      "Parsing property listing data...",
      "Calculating cap rate and IRR forecast...",
      "Generating property sheet summary...",
      "Sending automated lead follow-up SMS..."
    ],
    suggestions: ["What projects have you built?", "How to automate my website?", "Get in touch"]
  },
  {
    keywords: ["iunlocksim", "unlock", "carrier", "sim", "telecom"],
    reply: "**iUnlockSIM** is a carrier unlocking e-commerce portal.\n\n- **E-Commerce**: Custom frontend built on React/Vite.\n- **Automated Fulfillment**: Pipes order IMEI numbers directly to carrier unlocking APIs via automated webhooks, processing unlocks without human intervention.\n\n*See the site: [iunlocksim.vercel.app](https://iunlocksim.vercel.app).*",
    terminalLogs: [
      "Listening for Stripe payment webhook...",
      "Payment captured. Extracting IMEI from order...",
      "Routing carrier unlock request to API gateway...",
      "Unlock successful. E-mailing customer confirmation."
    ],
    suggestions: ["What projects have you built?", "Contact details"]
  },
  {
    keywords: ["news ai", "newsai", "aggregator", "semantic", "articles"],
    reply: "**News AI** is a real-time semantic news aggregator.\n\n- **Ingestion**: Scrapes global news feeds every hour.\n- **Semantic Grouping**: Vector embeddings cluster similar articles by topic rather than keywords.\n- **AI Summarization**: Generates brief bullet-point summaries of trending stories.\n\n*Check the app at [newsai-app.vercel.app](https://newsai-app.vercel.app).*",
    terminalLogs: [
      "Fetching global RSS feeds...",
      "Calculating article vector embeddings...",
      "Clustering matching nodes (DBSCAN)...",
      "Generating trending topic summaries with Gemini."
    ],
    suggestions: ["What projects have you built?", "What is your tech stack?"]
  },
  {
    keywords: ["experience", "work", "history", "job", "career", "consultant", "freelance", "background", "cv", "resume"],
    reply: "I am a Senior AI & Backend Engineer with 5+ years of experience:\n\n1. **AI Engineering Consultant (Freelance, 2023 - Present)**: Architected Sono Health, Sono-Agent, Dwello, and various client workflow integrations across Europe and Africa.\n2. **AI & Backend Developer (Ideation Axis, 2024 - Present)**: Engineered ML models for pest detection and scaled database APIs.\n3. **Full-Stack Developer (Independent, 2022 - Present)**: Deployed iUnlockSIM, News AI, and custom e-commerce systems.\n4. **Consulting Advisor**: Spent 2.5 years helping non-technical executives and startup founders implement AI solutions without wasting budget.\n\n*I focus on shipping production-grade, maintainable code.*",
    terminalLogs: [
      "Accessing journey database...",
      "Retrieving professional references...",
      "Verifying client contract logs...",
      "Resume validation: Complete."
    ],
    suggestions: ["What projects have you built?", "What is your tech stack?", "Hire Archilles"]
  },
  {
    keywords: ["contact", "hire", "email", "mail", "linkedin", "upwork", "github", "meeting", "phone", "whatsapp", "number"],
    reply: "Let's connect and build something great! You can reach me instantly via:\n\n- **WhatsApp**: [+233248802586](https://wa.me/233248802586) (Direct text)\n- **Email**: [jakingsarchly@gmail.com](mailto:jakingsarchly@gmail.com)\n- **LinkedIn**: [Archilles Jacob](https://linkedin.com/in/archilles-jacob-705695169)\n- **GitHub**: [@Archillesjakins](https://github.com/Archillesjakins)\n\n*I am located in Accra, Ghana, and consult for clients worldwide.*",
    terminalLogs: [
      "Opening communications handshake...",
      "Generating WhatsApp redirect link...",
      "Routing contact card info...",
      "Handshake: Success. Ready for connections."
    ],
    suggestions: ["What is your tech stack?", "What projects have you built?", "How to automate my website?"]
  },
  {
    keywords: ["healthcare", "clinic", "doctor", "medical report"],
    reply: "For **Clinics & Healthcare**, I build voice-to-text documentation flows that transcribe consultations, search medical literature, and draft clinical notes, saving hours of paperwork. (See my **Sono Health** project).",
    terminalLogs: ["EHR pipeline online.", "FHIR schemas active."],
    suggestions: ["Sono Health info", "What projects have you built?"]
  },
  {
    keywords: ["recruiting", "hr", "shortlist", "job brief"],
    reply: "For **HR & Recruiting**, I build multi-agent sourcing systems that scrape candidate portfolios and LinkedIn, scoring profiles against job briefs to output ranked shortlists. (See my **UmukoziHR** project).",
    terminalLogs: ["Sourcing agents active.", "Shortlist scoring complete."],
    suggestions: ["UmukoziHR info", "What projects have you built?"]
  },
  {
    keywords: ["real estate", "property listing", "cap rate", "roi"],
    reply: "For **Real Estate**, I build property parsers that compute cap rates, ROI, and cash flows instantly, paired with lead auto-responders. (See my **Dwello** project).",
    terminalLogs: ["Deal valuation engine active.", "SMS responder active."],
    suggestions: ["Dwello info", "What projects have you built?"]
  },
  {
    keywords: ["restaurant", "food", "whatsapp order", "menu"],
    reply: "For **Restaurants & Food**, I build WhatsApp ordering integrations that route orders directly to the kitchen, send tracking alerts, and request Google reviews 24h later.",
    terminalLogs: ["WhatsApp webhook active.", "Order queue synced."],
    suggestions: ["How to automate my website?", "What projects have you built?"]
  },
  {
    keywords: ["salon", "beauty", "hair", "booking", "reminder"],
    reply: "For **Salons & Beauty**, I set up automated calendar workflows that send booking confirmations, WhatsApp/SMS reminders 24h prior, and automated client follow-ups.",
    terminalLogs: ["Calendar webhook active.", "Reminder cron scheduled."],
    suggestions: ["How to automate my website?", "What projects have you built?"]
  },
  {
    keywords: ["law", "legal", "firm", "contract", "risk", "clause"],
    reply: "For **Law Firms**, I build AI contract review systems that scan uploaded legal documents, flag non-standard risk clauses, and draft structured summaries for partner review.",
    terminalLogs: ["Analyzing PDF contract...", "Flagging liability clauses."],
    suggestions: ["What projects have you built?", "Get in touch"]
  },
  {
    keywords: ["construction", "subcontractor", "milestone", "dashboard"],
    reply: "For **Construction & Engineering**, I automate subcontractor check-ins via SMS/WhatsApp, compiling status updates into a live dashboard and flagging delayed milestones.",
    terminalLogs: ["Subcontractor check-in cron active.", "Dashboard sync complete."],
    suggestions: ["How to automate my website?", "What projects have you built?"]
  },
  {
    keywords: ["tutor", "education", "lecture", "slide", "quiz", "deck"],
    reply: "For **Tutors & Educators**, I build AI slide generators that turn lecture notes or topics into formatted slide decks, study guides, and quizzes in minutes.",
    terminalLogs: ["Parsing outlines...", "Generating slide deck output."],
    suggestions: ["What projects have you built?", "Get in touch"]
  },
  {
    keywords: ["creative", "design", "artist", "storybook", "art", "invoice"],
    reply: "For **Creatives & Designers**, I automate client proofing links, project review rounds, and auto-invoice triggers upon client approval.",
    terminalLogs: ["Review link generated.", "Invoice hook armed."],
    suggestions: ["What projects have you built?", "Get in touch"]
  },
  {
    keywords: ["ecommerce", "retail", "store", "shop", "refund", "dm"],
    reply: "For **E-Commerce & Retail**, I build support agents that answer repeat client inquiries, verify tracking numbers, and process simple returns automatically.",
    terminalLogs: ["Shopify API connected.", "Support chatbot online."],
    suggestions: ["iUnlockSIM info", "What projects have you built?"]
  },
  {
    keywords: [
      "joke", "poem", "story", "music", "song", "weather", "sport", "game", "president", 
      "country", "news", "movie", "food", "who are you", "hello", "hi", "hey", "how are you",
      "meaning of life", "chatgpt", "openai", "claude", "gemini", "ai", "bot"
    ],
    reply: "I am Archilles Jacob's professional AI Copilot. I focus exclusively on his software engineering portfolio, automation services, and project histories.\n\nWhile I don't write poems or answer general knowledge questions, I can tell you about how Archilles builds **AI lead scrapers**, **automated n8n integrations**, or **Full-Stack SaaS web apps**.\n\n*Would you like to explore what Archilles can automate for your business?*",
    terminalLogs: [
      "Interpreting request context...",
      "Classification: Irrelevant or Out of Scope.",
      "Executing pivot strategy...",
      "Suggesting professional capabilities..."
    ],
    suggestions: ["What projects has he built?", "What is his tech stack?", "Get in touch"]
  }
];

export const fallbackResponse: ChatResponse = {
  keywords: [],
  reply: "I am Archilles' professional AI Copilot. I couldn't find a direct keyword match for your message, but I can assist you with his skills, projects, lead generation, or scheduling.\n\nTry asking about:\n- **'What projects has he built?'**\n- **'How can he automate my website?'**\n- **'Get in touch with Archilles'**",
  terminalLogs: [
    "Searching knowledge base...",
    "Query: No direct keyword match found.",
    "Applying semantic nearest-neighbor search fallback...",
    "Rendering help guide..."
  ],
  suggestions: ["What projects has he built?", "How to automate my website?", "Get in touch"]
};

export const rotatingTypewriterPrompts = [
  "How to automate my website?",
  "What projects has Archilles built?",
  "What is his core tech stack?",
  "How can I hire Archilles for a project?",
  "Explain Sono Health's architecture...",
  "Can you automate lead scraping?"
];
