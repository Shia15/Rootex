
export default function SystemStatus() {
  const data = {
    nodes: 12,
    streams: "Synced",
    build: "1.0.2",
    pulse: "4m ago"
  };
  return (
    <section className="py-16" data-aos="fade-up">
      <h2 className="text-xl font-semibold mb-4 text-center">Live System Status</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-sm">
        <div className="bg-white/5 rounded-md p-4">Nodes Active: <span className="font-medium text-indigo-400">{data.nodes}</span></div>
        <div className="bg-white/5 rounded-md p-4">Memory Streams: <span className="font-medium">{data.streams}</span></div>
        <div className="bg-white/5 rounded-md p-4">Build Version: <span className="font-medium">{data.build}</span></div>
        <div className="bg-white/5 rounded-md p-4 animate-pulse">Last Pulse: <span className="font-medium">{data.pulse}</span></div>
      </div>
    </section>
  );
}
