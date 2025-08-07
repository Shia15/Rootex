const modules = ["Signal Processor", "Memory Parser", "Mood Router", "Intent Mapper"];
export default function Modules() {
  return (
    <section className="mb-12" data-aos="fade-up">
      <h3 className="text-xl font-semibold mb-4">Modules</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {modules.map((m, i) => (
          <div key={i} className="border border-gray-700 rounded-md px-4 py-2 hover:scale-105 transition-transform">{m}</div>
        ))}
      </div>
    </section>
  );
}
