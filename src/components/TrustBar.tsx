const metrics = [
  { value: '6', label: 'Live Products' },
  { value: '100K+', label: 'Lines Shipped' },
  { value: '3', label: 'Continents' },
  { value: '2', label: 'Healthcare Platforms' },
  { value: '80%', label: 'Avg. Manual Work Saved' },
  { value: '48 hrs', label: 'Fastest Delivery' },
];

const geoFlags = [
  { flag: '🇬🇭', country: 'Ghana' },
  { flag: '🇬🇧', country: 'United Kingdom' },
  { flag: '🇳🇱', country: 'Netherlands' },
  { flag: '🇺🇸', country: 'United States' },
  { flag: '🇧🇪', country: 'Belgium' },
  { flag: '🇩🇪', country: 'Germany' },
];

const TrustBar = () => {
  return (
    <section className="py-10 bg-zinc-950 border-t border-b border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Geo Row */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mr-2">
            Deployed across
          </span>
          {geoFlags.map((g, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 hover:border-white/20 hover:text-gray-300 transition-all duration-200 cursor-default"
            >
              <span className="text-base leading-none">{g.flag}</span>
              {g.country}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-6" />

        {/* Metrics Row — scrolling on mobile */}
        <div className="flex items-center justify-center gap-8 flex-wrap">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <span className="text-2xl font-black text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {m.value}
              </span>
              <span className="text-xs text-gray-500 mt-0.5 font-medium">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
