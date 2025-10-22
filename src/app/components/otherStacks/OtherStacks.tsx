"use client";
import React from "react";
import "./OtherStacks.css";

export default function OtherStacks() {
  const otherStacks = [
    "Canva",
    "OpenAi",
    "DeepSeek",
    "Java",
    "C++",
    "C#",
    "VS Code",
    "Postman",
    "Figma"
  ];

  const getStackIcon = (stack: string) => {
    const icons: Record<string, React.ReactNode> = {
      Canva: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        </svg>
      ),
      OpenAi: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      DeepSeek: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      Java: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      "C++": (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4l8 8-8 8-8-8 8-8z" />
        </svg>
      ),
      "C#": (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16M4 12h16" />
        </svg>
      ),
      "VS Code": (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7l9 5-9 5V7zm9 0l9 5-9 5V7z" />
        </svg>
      ),
      Postman: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 2" />
        </svg>
      ),
      Figma: (
        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="7" r="3" />
          <circle cx="12" cy="17" r="3" />
          <circle cx="17" cy="12" r="3" />
          <circle cx="7" cy="12" r="3" />
        </svg>
      )
    };
    return icons[stack];
  };

  const getStackColor = (stack: string) => {
    const colors: Record<string, string> = {
      Canva: "text-gray-300 border-pink-400/20 hover:border-pink-400/40",
      OpenAi: "text-gray-300 border-green-400/20 hover:border-green-400/40",
      DeepSeek: "text-gray-300 border-blue-400/20 hover:border-blue-400/40",
      Java: "text-gray-300 border-red-400/20 hover:border-red-400/40",
      "C++": "text-gray-300 border-purple-400/20 hover:border-purple-400/40",
      "C#": "text-gray-300 border-cyan-400/20 hover:border-cyan-400/40",
      "VS Code": "text-gray-300 border-indigo-400/20 hover:border-indigo-400/40",
      Postman: "text-gray-300 border-orange-400/20 hover:border-orange-400/40",
      Figma: "text-gray-300 border-pink-300/20 hover:border-pink-300/40"
    };
    return colors[stack] || "text-gray-400 border-gray-400/20 hover:border-gray-400/40";
  };

  return (
    <section className="relative overflow-hidden border border-gray-700 rounded-2xl bg-[#0a0a0a] p-[6%] sm:p-[11%] col-span-1 space-y-4 group other-stack-fade-in cursor-pointer">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Others
          </h2>
        </div>
      </div>

      {/* Tools List */}
      <div className="flex flex-wrap gap-2">
        {otherStacks.map((stack) => (
          <span
            key={stack}
            className={`px-3 py-1.5 text-xs flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${getStackColor(stack)}`}
          >
            {getStackIcon(stack)}
            {stack}
          </span>
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}