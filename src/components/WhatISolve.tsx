import { useState } from 'react';
import { ArrowRight, CheckCircle, Zap, Clock, ArrowUpRight, ArrowDown } from 'lucide-react';

interface WorkflowStep {
  label: string;
  sub?: string;
  type: 'input' | 'ai' | 'output';
}

interface Industry {
  id: string;
  emoji: string;
  name: string;
  tagline: string;
  painPoint: string;
  solution: string;
  result: string;
  resultMetric: string;
  automationType: 'AI Agent' | 'Workflow' | 'AI + Workflow';
  accentColor: 'blue' | 'purple' | 'emerald';
  workflow: WorkflowStep[];
  cta?: string;
  ctaUrl?: string;
}

const industries: Industry[] = [
  {
    id: 'healthcare',
    emoji: '🏥',
    name: 'Clinics & Healthcare',
    tagline: 'Clinical Documentation',
    painPoint: '"My staff spends 3 hours writing patient reports every single day."',
    solution: 'A voice-to-text system transcribes doctor-patient consultations, matches the text with medical guidelines, and drafts structured clinical notes instantly.',
    result: 'Reports done',
    resultMetric: 'Hours → 5 min',
    automationType: 'AI Agent',
    accentColor: 'blue',
    workflow: [
      { label: 'Doctor speaks', sub: 'Voice consultation', type: 'input' },
      { label: 'AI transcribes & analyses', sub: 'Gemini + Whisper', type: 'ai' },
      { label: 'Full clinical report', sub: 'PDF ready in minutes', type: 'output' },
    ],
    cta: 'See Sono Health Live',
    ctaUrl: 'https://sonohealth.vercel.app',
  },
  {
    id: 'recruiting',
    emoji: '🏢',
    name: 'HR & Recruiting',
    tagline: 'Candidate Shortlisting',
    painPoint: '"We spend 3 weeks just to build a shortlist of 10 candidates for one role."',
    solution: 'An AI agent scans job boards and LinkedIn, scores candidate profiles against your criteria, and outputs a ranked shortlist with clear reasoning.',
    result: 'Shortlisting time',
    resultMetric: 'Weeks → Minutes',
    automationType: 'AI Agent',
    accentColor: 'purple',
    workflow: [
      { label: 'Post job brief', sub: 'Role + requirements', type: 'input' },
      { label: 'Agent searches & scores', sub: 'Multi-source web research', type: 'ai' },
      { label: 'Ranked shortlist', sub: 'With fit reasoning', type: 'output' },
    ],
    cta: 'See UmukoziHR Live',
    ctaUrl: 'https://recruit.umukozihr.com',
  },
  {
    id: 'realestate',
    emoji: '🏠',
    name: 'Real Estate',
    tagline: 'Property Deal Analysis',
    painPoint: '"I lose deals because I can\'t respond to every lead or run the numbers fast enough."',
    solution: 'An automated tool parses property listings to calculate cash flow, ROI, and cap rates in seconds, while an auto-responder instantly follows up with new leads.',
    result: 'Property analysis',
    resultMetric: 'Hours → 30 sec',
    automationType: 'AI + Workflow',
    accentColor: 'emerald',
    workflow: [
      { label: 'Enter property address', sub: 'Any listing URL or address', type: 'input' },
      { label: 'AI runs financial model', sub: 'ROI, cap rate, IRR', type: 'ai' },
      { label: 'Full investment report', sub: 'Plus auto-follow-up to lead', type: 'output' },
    ],
    cta: 'See Dwello Live',
    ctaUrl: 'https://dwello-indol.vercel.app/how-it-works',
  },
  {
    id: 'food',
    emoji: '🍽️',
    name: 'Restaurants & Food',
    tagline: 'Ordering & Review Flows',
    painPoint: '"We miss orders, forget to follow up on reviews, and our WhatsApp is chaotic."',
    solution: 'A WhatsApp integration that routes orders directly to the kitchen, sends auto-updates to customers, and requests a Google review 24 hours after delivery.',
    result: 'Staff hours saved',
    resultMetric: '~15 hrs/week',
    automationType: 'Workflow',
    accentColor: 'blue',
    workflow: [
      { label: 'WhatsApp / website order', sub: 'Customer places order', type: 'input' },
      { label: 'Auto-confirm & route', sub: 'Kitchen notified instantly', type: 'ai' },
      { label: 'Review request sent', sub: '24 hrs later, automatically', type: 'output' },
    ],
  },
  {
    id: 'salon',
    emoji: '💅',
    name: 'Salons & Beauty',
    tagline: 'Booking & Reminders',
    painPoint: '"I spend an hour every morning confirming appointments and chasing no-shows."',
    solution: 'A calendar workflow that triggers automated booking confirmations, SMS/WhatsApp reminders 24 hours before, and follow-ups after appointments.',
    result: 'No-show rate',
    resultMetric: 'Reduced by 60%',
    automationType: 'Workflow',
    accentColor: 'purple',
    workflow: [
      { label: 'Client books online', sub: 'Any booking platform', type: 'input' },
      { label: 'Auto-confirm + reminder', sub: '24 hr SMS / WhatsApp', type: 'ai' },
      { label: 'Post-visit follow-up', sub: '"How was your experience?"', type: 'output' },
    ],
  },
  {
    id: 'law',
    emoji: '⚖️',
    name: 'Law Firms',
    tagline: 'Contract Review',
    painPoint: '"Our paralegals spend days on document review that should take hours."',
    solution: 'An AI system analyzes uploaded legal documents, flags non-standard clauses, and draft-summarizes contract risks for review.',
    result: 'Document review time',
    resultMetric: 'Days → 2 hours',
    automationType: 'AI Agent',
    accentColor: 'blue',
    workflow: [
      { label: 'Upload contract / brief', sub: 'PDF, DOCX, any format', type: 'input' },
      { label: 'AI flags risks & precedents', sub: 'Clause-by-clause analysis', type: 'ai' },
      { label: 'Structured legal summary', sub: 'Ready for partner review', type: 'output' },
    ],
  },
  {
    id: 'construction',
    emoji: '🏗️',
    name: 'Construction & Engineering',
    tagline: 'Subcontractor Tracking',
    painPoint: '"Chasing subcontractors for updates and compiling compliance docs is a full-time job."',
    solution: 'Automated check-ins text subcontractors for progress daily, centralizing updates on a single dashboard and highlighting delays automatically.',
    result: 'Project admin time',
    resultMetric: 'Cut by 70%',
    automationType: 'Workflow',
    accentColor: 'emerald',
    workflow: [
      { label: 'Milestone due date', sub: 'Project schedule trigger', type: 'input' },
      { label: 'Auto check-in to subs', sub: 'WhatsApp / Email / SMS', type: 'ai' },
      { label: 'Live dashboard update', sub: 'Flags delays instantly', type: 'output' },
    ],
  },
  {
    id: 'education',
    emoji: '📚',
    name: 'Tutors & Educators',
    tagline: 'Lesson Preparation',
    painPoint: '"I spend 4 hours designing new slides for every lecture. There has to be a better way."',
    solution: 'An AI assistant turns lecture notes or topic outlines into formatted slide decks, generates quizzes, and creates study guides automatically.',
    result: 'Lesson prep time',
    resultMetric: '4 hrs → 5 min',
    automationType: 'AI Agent',
    accentColor: 'purple',
    workflow: [
      { label: 'Paste topic & bullet notes', sub: 'Any subject, any level', type: 'input' },
      { label: 'AI generates full lesson', sub: 'Slides + quiz + guide', type: 'ai' },
      { label: 'Export & teach', sub: 'PowerPoint or Google Slides', type: 'output' },
    ],
  },
  {
    id: 'creative',
    emoji: '🎨',
    name: 'Creatives & Designers',
    tagline: 'Content Delivery & Invoicing',
    painPoint: '"I take on a children\'s book project and spend more time on admin and formatting than on the actual story."',
    solution: 'An automation pipeline that structures content projects, coordinates review links with clients, and triggers invoices automatically upon approval.',
    result: 'Story-to-delivery',
    resultMetric: 'Weeks → 3 days',
    automationType: 'AI + Workflow',
    accentColor: 'purple',
    workflow: [
      { label: 'Submit story brief', sub: 'Characters, theme, age group', type: 'input' },
      { label: 'AI generates pages & art', sub: 'Consistent illustrated style', type: 'ai' },
      { label: 'Formatted PDF + invoice', sub: 'Client link for revisions', type: 'output' },
    ],
  },
  {
    id: 'ecommerce',
    emoji: '🛍️',
    name: 'E-Commerce & Retail',
    tagline: 'Customer Support Handling',
    painPoint: '"Customer support DMs are killing me. Same 10 questions every single day."',
    solution: 'An AI assistant answers common customer questions, checks tracking numbers, handles basic returns, and flags complex issues for human review.',
    result: 'Support tickets handled',
    resultMetric: '80% automated',
    automationType: 'AI + Workflow',
    accentColor: 'emerald',
    workflow: [
      { label: 'Customer DM / email', sub: 'Any support channel', type: 'input' },
      { label: 'AI classifies & responds', sub: 'FAQ, order status, returns', type: 'ai' },
      { label: 'Complex ones escalated', sub: 'Only what needs you', type: 'output' },
    ],
  },
];

const typeColors: Record<string, string> = {
  'AI Agent': 'bg-purple-500/10 text-purple-300 border border-purple-500/20',
  'Workflow': 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
  'AI + Workflow': 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-indigo-300 border border-indigo-500/20',
};

const WorkflowDiagram = ({ steps, accentColor }: { steps: WorkflowStep[]; accentColor: 'blue' | 'purple' | 'emerald' }) => {
  const getNodeClass = (type: 'input' | 'ai' | 'output') => {
    if (type === 'input') return 'bg-zinc-900 border-zinc-800';
    if (type === 'output') return 'bg-emerald-950/40 border-emerald-800/30';
    if (accentColor === 'blue') return 'bg-blue-950/40 border-blue-800/30';
    if (accentColor === 'emerald') return 'bg-emerald-950/40 border-emerald-800/30';
    return 'bg-purple-950/40 border-purple-800/30';
  };

  const getDotClass = (type: 'input' | 'ai' | 'output') => {
    if (type === 'input') return 'bg-zinc-500';
    if (type === 'output') return 'bg-emerald-400';
    if (accentColor === 'blue') return 'bg-blue-400';
    if (accentColor === 'emerald') return 'bg-emerald-400';
    return 'bg-purple-400';
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 py-4">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col md:flex-row items-center gap-4 md:gap-2 w-full md:flex-1">
          <div className={`w-full md:flex-1 rounded-xl border p-4 md:p-3 text-center ${getNodeClass(step.type)} transition-all duration-300`}>
            <div className={`w-2 h-2 rounded-full mx-auto mb-2 ${getDotClass(step.type)} animate-pulse`} />
            <p className="text-white text-xs font-semibold leading-tight">{step.label}</p>
            {step.sub && <p className="text-gray-400 text-[10px] mt-1 leading-tight">{step.sub}</p>}
          </div>
          {i < steps.length - 1 && (
            <div className="shrink-0 flex md:flex-col items-center gap-1 my-1 md:my-0">
              <div className="w-px h-4 bg-zinc-800 md:hidden" />
              <ArrowDown className="h-4 w-4 text-zinc-600 md:hidden" />
              <div className="w-4 h-px bg-zinc-800 hidden md:block" />
              <ArrowRight className="h-3 w-3 text-zinc-600 -mt-1 hidden md:block" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const WhatISolve = () => {
  const [activeId, setActiveId] = useState<string>('healthcare');
  const active = industries.find(i => i.id === activeId) ?? industries[0];

  const getStepNumberClass = (type: 'input' | 'ai' | 'output', accentColor: 'blue' | 'purple' | 'emerald') => {
    if (type === 'input') return 'bg-zinc-800 text-zinc-400 border border-zinc-700';
    if (type === 'output') return 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40';
    if (accentColor === 'blue') return 'bg-blue-950/60 text-blue-400 border border-blue-800/40';
    if (accentColor === 'emerald') return 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40';
    return 'bg-purple-950/60 text-purple-400 border border-purple-800/40';
  };

  return (
    <section className="py-20 bg-black border-t border-zinc-900">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4 border border-purple-500/20 bg-purple-500/5 rounded-full px-4 py-1.5">
            Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Don't know what you can do
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              with AI or a workflow?
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Select an industry below to see simple, real-world examples of how automation works.
          </p>
        </div>

        {/* Industry Tiles Grid / Carousel */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 snap-x md:grid md:grid-cols-5 md:overflow-x-visible md:pb-0 scrollbar-none">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActiveId(ind.id)}
              className={`snap-start shrink-0 w-[140px] md:w-auto flex flex-col items-center gap-2 p-3 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                activeId === ind.id
                  ? `border-white/20 bg-white/5 scale-[1.03] shadow-lg`
                  : 'border-zinc-800 bg-zinc-950/50 hover:border-zinc-600 hover:bg-zinc-900/50'
              }`}
            >
              <span className="text-2xl">{ind.emoji}</span>
              <span className={`text-xs font-semibold leading-tight ${activeId === ind.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                {ind.name}
              </span>
              {activeId === ind.id && (
                <div className="w-1 h-1 rounded-full bg-purple-400" />
              )}
            </button>
          ))}
        </div>

        {/* Active Industry Detail Panel */}
        <div
          key={active.id}
          className="relative rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 sm:p-8 md:p-10 transition-all duration-500 overflow-hidden backdrop-blur-md animate-fade-in"
          style={{ animation: 'fadeIn 0.3s ease both' }}
        >
          {/* Subtle background glow */}
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[120px] -mr-20 -mt-20 opacity-15 pointer-events-none transition-all duration-500 ${
            active.accentColor === 'blue' ? 'bg-blue-500' :
            active.accentColor === 'purple' ? 'bg-purple-500' :
            'bg-emerald-500'
          }`} />

          <div className="grid md:grid-cols-2 gap-8 items-start relative z-10">

            {/* Left: Problem & Solution */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl shrink-0">{active.emoji}</span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-0.5">
                      {active.tagline}
                    </p>
                    <h3 className="text-2xl font-bold text-white leading-tight">{active.name}</h3>
                  </div>
                </div>
                <div className="self-start sm:self-center">
                  <span className={`inline-block text-xs font-semibold rounded-full px-3 py-1 whitespace-nowrap ${typeColors[active.automationType]}`}>
                    {active.automationType}
                  </span>
                </div>
              </div>

              {/* Pain Point */}
              <div className="bg-black/30 rounded-xl p-5 border border-white/5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">The pain point</p>
                <p className="text-gray-200 text-lg leading-relaxed italic">
                  {active.painPoint}
                </p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">What gets built</p>
                <p className="text-gray-300 leading-relaxed text-base">
                  {active.solution}
                </p>
              </div>

              {/* Result metric */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-emerald-950/60 border border-emerald-800/40 rounded-xl px-5 py-3 text-center min-w-[140px]">
                  <p className="text-emerald-400 font-bold text-xl">{active.resultMetric}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{active.result}</p>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="h-5 w-5 shrink-0" />
                  <span className="text-sm font-medium text-gray-300">Delivered and documented</span>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                {active.cta && active.ctaUrl ? (
                  <a
                    href={active.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
                  >
                    {active.cta} <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
                >
                  Build this for me <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right: Workflow Diagram */}
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3 flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-yellow-400" />
                  How it runs
                </p>
                <div className="bg-black/40 rounded-xl border border-white/5 p-4">
                  <WorkflowDiagram steps={active.workflow} accentColor={active.accentColor} />
                </div>
              </div>

              {/* Visual Process Breakdown */}
              <div className="bg-black/30 rounded-xl border border-white/5 p-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Step by step</p>
                {active.workflow.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${getStepNumberClass(step.type, active.accentColor)}`}>
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{step.label}</p>
                      {step.sub && <p className="text-gray-400 text-xs mt-0.5">{step.sub}</p>}
                    </div>
                  </div>
                ))}

                <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-gray-400 text-xs">
                  <Clock className="h-3.5 w-3.5" />
                  <span>Set up in days. Connects to your existing apps.</span>
                </div>
              </div>

              {/* Type legend */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  AI Agent = autonomous decisions
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  Workflow = api automation
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Don't see your industry?{' '}
            <a href="#contact" className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
              Tell me your problem
            </a>{' '}
            and I'll explain what can be automated.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default WhatISolve;
