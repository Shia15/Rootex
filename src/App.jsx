import React from "react";
import Header from "./components/Header.jsx";
import Modules from "./components/Modules.jsx";
import SystemFeed from "./components/SystemFeed.jsx";
import Orb from "./components/Orb.jsx";
import AccessPanel from "./components/AccessPanel.jsx";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen p-6 max-w-7xl mx-auto font-sans">
      <Header />
      <main>
        <h2 className="text-5xl font-bold leading-tight mb-6" data-aos="fade-up">Root. Build. <br />Transcend.</h2>
        <p className="text-lg mb-12 text-gray-400" data-aos="fade-up" data-aos-delay="100">Symbolic logic meets modern infrastructure.</p>
        <Modules />
        <SystemFeed />
        <Orb />
        <AccessPanel />
        <footer className="text-xs text-gray-600 mt-16">© 2025 Rootex Systems. All rights reserved.</footer>
      </main>
    </div>
  );
}
