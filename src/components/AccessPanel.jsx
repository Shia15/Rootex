import React from "react";

import { useState } from "react";
export default function AccessPanel() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [apiKey, setApiKey] = useState("");

  const generateAPIKey = () => {
    if (username && password) {
      const encoded = btoa(username + ":" + password).slice(0, 16);
      setApiKey("API Key: " + encoded + " 🔑");
    } else {
      setApiKey("Please enter both fields.");
    }
  };

  return (
    <section className="mb-12" data-aos="fade-up">
      <h3 className="text-xl font-semibold mb-4">Root Access Panel</h3>
      <div className="space-y-2 max-w-md">
        <input type="text" placeholder="Enter username" value={username}
          onChange={(e) => setUsername(e.target.value)} className="w-full bg-gray-800 border border-gray-700 p-2 rounded-md"/>
        <input type="password" placeholder="Enter password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="w-full bg-gray-800 border border-gray-700 p-2 rounded-md"/>
        <button onClick={generateAPIKey}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 w-full text-white py-2 rounded-md">Generate API Key</button>
        <p className="text-sm text-green-400 mt-2">{apiKey}</p>
      </div>
    </section>
  );
}
