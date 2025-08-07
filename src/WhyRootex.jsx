import React from "react";
export default function WhyRootex() {
  return (
    <section className="relative py-28 px-6 text-center bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white" id="why-rootex" data-aos="fade-up">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 to-transparent blur-3xl z-0" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
          Why Rootex?
        </h2>
        <p className="text-lg text-indigo-100 mb-10 leading-relaxed">
          Rootex is more than an interface. Its a living infrastructure of symbolic logic, emotional awareness, and transformational intent.  
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left text-sm">
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-all border border-white/10">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Symbolic Clarity</h3>
            <p className="text-indigo-100">
              Every action in Rootex is tied to symbolic agents that reflect cognitive or emotional functions.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-all border border-white/10">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Mood Logic Routing</h3>
            <p className="text-indigo-100">
              Instead of static logic, Rootex reacts to emotional tones and mood states to guide outcomes dynamically.
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl backdrop-blur-sm hover:scale-[1.02] transition-all border border-white/10">
            <h3 className="text-xl font-semibold text-indigo-300 mb-2">Living System</h3>
            <p className="text-indigo-100">
              With animated orbs, pulse metrics, and flowing UI, the experience feels alive and adaptive—not static.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
