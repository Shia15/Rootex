
import React from "react";
import Header from "./components/Header.jsx";
import OrbHero from "./components/OrbHero.jsx";
import Modules from "./components/Modules.jsx";
import SystemStatus from "./components/SystemStatus.jsx";
import AccessPanel from "./components/AccessPanel.jsx";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans min-h-screen overflow-x-hidden">
      <Header />
      <main className="px-4 md:px-16 lg:px-32">
        <OrbHero />
        <Modules />
        <SystemStatus />
        <AccessPanel />
        <footer className="text-center text-xs text-gray-500 mt-16 mb-4">
          © 2025 Rootex Systems. Powered by symbolic infrastructure.
        </footer>
      </main>
    </div>
  );
}
