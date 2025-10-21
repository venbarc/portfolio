"use client";
import "./About.css";

export default function About() {
  return (
    <section className="border border-gray-700 rounded-2xl h-full p-6 flex flex-col justify-justify items-justify about-fade-in">
      
      {/* Title */}
      <h2 className="text-xl sm:text-xl font-bold mb-4 text-blue-400 text-start">
        Beyond Coding
      </h2>

      {/* Paragraph */}
      <p className="text-gray-400 text-sm sm:text-sm leading-relaxed text-start">
        When I'm not writing code, I love staying active and enjoying life. I play 
        basketball to keep fit, challenge my mind with chess, and spend quality 
        time with friends every weekend. I also enjoy shopping occasionally to 
        treat myself and explore new things. These moments help me recharge and 
        bring fresh energy to my coding journey.
      </p>
    </section>
  );
}
