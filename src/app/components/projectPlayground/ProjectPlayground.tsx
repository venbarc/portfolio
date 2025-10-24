"use client";
import "./ProjectPlayground.css";

export default function ProjectPlayground() {

  const projects = [
    {
      title: "Image to Text",
      description: "Get all Text from an image (best use for grocery receipts for logging)",
      url: "https://image-to-text-nextjs-two.vercel.app/",
    },
    {
      title: "Physical Fitness", 
      description: "Start your fitness journey with the guidance of coach Marvin",
      url: "https://nivram.vercel.app/",
    },
    {
      title: "Learning Platform",
      description: "Learn about tech and engineering with amazing partnerships and get certified",
      url: "https://eira.erovoutika.ph/",
    },
  ];

  return (
    <section className="h-full relative overflow-hidden border border-gray-700 rounded-2xl p-6 col-span-1 space-y-4 group project-playground-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 sm:mb-6">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <h2 className="text-xl font-bold text-white">Project Playground</h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-3">
        {projects.map((project, index) => (
            <a 
              key={project.title}
              target="_blank" 
              rel="noopener noreferrer" 
              className="block space-y-2 group/project"
              href={project.url}
            >
            <div className="bento-card p-4 space-y-2 hover:bg-white/5 transition-all duration-300">
                <h3 className="text-sm font-semibold text-white group-hover/project:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {project.description}
                </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}