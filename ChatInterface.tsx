"use client";

import { useState } from "react";

export default function ChatInterface() {
  const [prompt, setPrompt] = useState("");

  async function askAI() {
    await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ prompt })
    });
  }

  return (
    <div className="max-w-3xl mx-auto">
      <textarea
        className="w-full border p-4 rounded-xl"
        rows={5}
        placeholder="Ask Proxa..."
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={askAI}
        className="mt-4 px-6 py-3 bg-violet-600 rounded-lg"
      >
        Submit
      </button>
    </div>
  );
}
