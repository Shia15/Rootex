import React from "react";
import Header from "./components/Header.jsx";
import OrbHero from "./components/OrbHero.jsx";
import Modules from "./components/Modules.jsx";
import WhyRootex from "./components/WhyRootex.jsx";
import SystemStatus from "./components/SystemStatus.jsx";
import AccessPanel from "./components/AccessPanel.jsx";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main className="px-4 md:px-16 lg:px-32">
        <OrbHero />
        <Modules />
        <WhyRootex />
        <SystemStatus />
        <AccessPanel />
      </main>
    </div>
  );
}
