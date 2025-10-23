"use client";
import "./Experience.css"
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Fullstack Developer",
      description: "CF Solutions",
      year: "Nov 10 2025 - present",
      highlight: true,
    },
    {
      title: "Backend Developer",
      description: "Coding Collective",
      year: "July 8 2024 - Nov 6 2025",
    },
    {
      title: "Software Developer",
      description: "Intellect Philippines",
      year: "Feb 22 2024 - Jul 5 2024",
    },
    {
      title: "Lead & Fullstack Developer",
      description: "Erovoutika International",
      year: "Sept 2022 - 2023",
    },
    {
      title: "Contractual Projects",
      description: "Work on side projects",
      year: "2019",
    },
    {
      title: "Hello World",
      description: "Wrote my 1st line of code",
      year: "2018",
    },
  ];

  return (
    <section className="mb-1 border h-full border-gray-700 rounded-2xl p-5 bg-[#0a0a0a] text-gray-200 experience-fade-in">
      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <Briefcase className="w-5 h-5 text-blue-400" />
        <h2 className="text-lg font-bold">Professional Experience</h2>
      </div>

      {/* Timeline */}
      <div className="relative space-y-6">
        {/* Vertical line */}
        <div className="absolute left-[6px] top-0 bottom-0 w-px bg-gray-700"></div>
        

        {experiences.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline dot */}
            <div
              className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 transition-colors 
                ${
                  item.highlight
                    ? "border-blue-400 bg-blue-400"
                    : "border-gray-600 bg-gray-900 group-hover:bg-blue-400 group-hover:border-blue-400"
                }`}
            ></div>

            {/* Content */}
            <div className="space-y-1">
              <h3
                className={`text-xs font-semibold transition-colors ${
                  item.highlight
                    ? "text-blue-400"
                    : "group-hover:text-blue-400 text-gray-300"
                }`}
              >
                {item.title}
              </h3>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">{item.description}</span>
                <span
                  className={`text-[10px] font-mono px-3 py-1 rounded-full border font-light
                    ${
                      item.highlight
                        ? "bg-blue-400/10 border-blue-400/30 text-blue-300"
                        : "bg-gray-700 border-gray-600 text-gray-200"
                    }`}
                >
                  {item.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
