import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import "./index.css"
import ProviderDashboard from "./ProviderDashboard";
import UserDashboard from "./Userdashboard";

function App() {
  const [input, setInput] = useState("");
  const [gig, setGig] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [view, setView] = useState("main"); // 'main' | 'user' | 'provider'
  useEffect(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech Recognition is not supported in this browser. Please use Chrome or Edge.");
    }
  }, []);
  const handleSubmit = async () => {
    const res = await fetch("http://localhost:5000/generate-gig", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });
    const data = await res.json();
    setGig(data);
  };
  const toggleVoiceInput = () => {
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return;
    if (!isListening) {
      const recognition = new Recognition();
      recognition.lang = "hi-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };
      recognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };
      recognition.onend = () => {
        setIsListening(false);
      };
      setIsListening(true);
      recognition.start();
    } else {
      setIsListening(false);
    }
  };
  if (view === "user") return <UserDashboard />;
  if (view === "provider") return <ProviderDashboard />;
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-purple-100 flex justify-center items-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 space-y-8 flex flex-col justify-center items-center text-center">
        {/* Header */}
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.png" alt="logo" className="h-14 drop-shadow" />
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">Hunarify</h1>
          <p className="text-base text-gray-600 max-w-md">
            Empowering Local Skills into Global Freelance Opportunities with Voice + AI
          </p>
          <button
            className="mt-3 bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
            onClick={() => setView("provider")}
          >
            🏢 Go to Provider Dashboard
          </button>
        </div>
        {/* Input */}
        <div className="w-full flex flex-col items-center gap-4">
          <label className="block text-sm font-medium text-gray-700 w-full max-w-md text-left">
            Describe your skill or work (in Hindi or local language)
          </label>
          <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full max-w-md focus-within:ring-2 focus-within:ring-blue-500">
            <input
              type="text"
              className="w-full px-4 py-3 text-base focus:outline-none"
              placeholder="मैं मेहंदी डिज़ाइनिंग में माहिर हूं"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={toggleVoiceInput}
              className={`bg-blue-100 px-4 text-blue-600 transition ${
                isListening ? "bg-gray-300 animate-pulse" : "hover:bg-blue-200"
              }`}
              disabled={isListening}
            >
              🎙️
            </button>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full max-w-md mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Generate Gig
          </button>
        </div>
        {/* Gig Result */}
        {gig && (
          <>
            <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transition hover:shadow-xl">
              <h2 className="font-bold text-xl text-gray-800 mb-2">🎯 Your AI-generated Gig:</h2>
              <div className="text-left space-y-2">
                <h3 className="font-semibold text-lg text-blue-700">{gig.title}</h3>
                <p className="text-sm text-gray-700">{gig.bio}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {(gig.tags || []).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-700 px-3 py-1 text-xs rounded-full shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigate to User Dashboard */}
            <button
              onClick={() => setView("user")}
              className="w-full max-w-md mt-4 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Go to User Dashboard ➜
            </button>
          </>
        )}
        {/* Key Features */}
        <div className="w-full max-w-md text-sm text-gray-600 border-t pt-6 text-center space-y-3">
          <h3 className="font-semibold text-gray-800 text-base">✨ Key Features</h3>
          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">🎤 Voice input in Hindi</div>
            <div className="flex items-center gap-2">🤖 AI-generated profiles</div>
            <div className="flex items-center gap-2">🖼️ Portfolio from photos</div>
            <div className="flex items-center gap-2">📲 Jobs via WhatsApp</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
