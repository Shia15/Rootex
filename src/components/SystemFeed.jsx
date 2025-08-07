import React from "react";

export default function SystemFeed() {
  return (
    <section className="mb-12" data-aos="fade-up">
      <h3 className="text-xl font-semibold mb-4">Live System Feed</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div><strong>Nodes Active:</strong> 12</div>
        <div><strong>Memory Streams:</strong> Synced</div>
        <div><strong>Build Version:</strong> 1.0.2</div>
        <div><strong>Last Pulse:</strong> 3m ago</div>
      </div>
    </section>
  );
}
