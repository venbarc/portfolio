"use client";
import "./BeyondCoding.css";

export default function BeyondCoding() {
  return (
    <section className="border border-gray-700 rounded-2xl p-6 flex flex-col beyond-coding-fade-in h-full">
      
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 text-blue-400">
        Beyond Coding
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1">
        When I'm not writing code, I love staying active and enjoying life. I play basketball to keep fit, 
        go to the gym, challenge my mind with chess, and spend quality time with friends every weekend. 
        I also enjoy shopping occasionally to treat myself and explore new things. 
        These moments help me recharge and bring fresh energy to my coding journey.
      </p>
    </section>
  );
}