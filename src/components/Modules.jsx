
export default function Modules() {
  const items = [
    "Signal Processor",
    "Memory Parser",
    "Mood Router",
    "Intent Mapper"
  ];
  return (
    <section className="py-20 text-center" id="modules" data-aos="fade-up">
      <h2 className="text-3xl font-semibold mb-6">Modules</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {items.map((name, i) => (
          <div key={i} className="border border-white/10 backdrop-blur-sm bg-white/5 rounded-xl py-6 px-4 hover:scale-105 transition-transform">
            <div className="text-lg font-medium">{name}</div>
            <p className="text-xs text-gray-400 mt-1">Dynamic routing unit</p>
          </div>
        ))}
      </div>
    </section>
  );
}
