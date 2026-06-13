import { MessageSquare, Lightbulb, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Identify the bottleneck',
    body: 'Describe the manual tasks, data entry, or reports that take your team hours. I\'ll analyze the process.',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-800/30',
    glowColor: 'shadow-blue-500/10',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Map the workflow',
    body: 'In a brief discovery call, we map out the steps. I\'ll outline exactly where AI or automated APIs fit and estimate time saved.',
    color: 'from-purple-500 to-violet-500',
    borderColor: 'border-purple-800/30',
    glowColor: 'shadow-purple-500/10',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Integrate and deploy',
    body: 'I build the custom agents or scripts and connect them directly to your existing systems (WhatsApp, CRM, Email). No new software to learn.',
    color: 'from-emerald-500 to-teal-500',
    borderColor: 'border-emerald-800/30',
    glowColor: 'shadow-emerald-500/10',
  },
  {
    number: '04',
    icon: ShieldCheck,
    title: 'Support and iterate',
    body: 'You get a fully documented, operational system. I remain available for maintenance, system updates, and optimizations.',
    color: 'from-purple-500 to-blue-500',
    borderColor: 'border-purple-800/30',
    glowColor: 'shadow-purple-500/10',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4 border border-emerald-500/20 bg-emerald-500/5 rounded-full px-4 py-1.5">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            From problem to running system
            <br />
            <span className="text-gray-400 font-light">in days, not months.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            No jargon. Clean, structured delivery. Direct communication.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className={`group relative bg-black rounded-2xl border ${step.borderColor} p-7 hover:shadow-2xl ${step.glowColor} transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Number background */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none leading-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Step number pill */}
                <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3 block`}>
                  Step {step.number}
                </span>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.body}
                </p>

                {/* Connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Block */}
        <div className="max-w-3xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px] -mr-16 -mt-16 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-500/5 blur-[80px] -ml-16 -mb-16 pointer-events-none" />

          <div className="flex-1 text-center md:text-left relative z-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">Free consultation</p>
            <h3 className="text-2xl font-bold text-white mb-2">
              Not sure what can be automated?
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Describe your current manual tasks. I'll outline exactly what can be solved with AI or workflow automation — no obligation.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-3 relative z-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full px-7 py-3 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/20 text-sm whitespace-nowrap"
            >
              Start the conversation <ArrowRight className="h-4 w-4" />
            </a>
            <p className="text-gray-500 text-xs text-center">No technical knowledge needed.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
