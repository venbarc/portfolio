"use client";
import "./TechStacks.css"

type TechCategory = 'frontend' | 'backend';

export default function TechStacks() {
  const techStacks: Record<TechCategory, string[]> = {
    frontend: ["TypeScript", "React", "JavaScript", "Next.js"],
    backend: ["Laravel", "PHP", "PostgreSQL", "MySQL"],
  };

  const getCategoryIcon = (category: TechCategory) => {
    const icons = {
      frontend: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      backend: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    };
    return icons[category];
  };

  const getCategoryColor = (category: TechCategory) => {
    const colors = {
      frontend: "text-blue-400 border-blue-400/20 hover:border-blue-400/40",
      backend: "text-green-400 border-green-400/20 hover:border-green-400/40",
      devops: "text-purple-400 border-purple-400/20 hover:border-purple-400/40"
    };
    return colors[category];
  };

  return (
    <section className="mb-1 relative overflow-hidden border border-gray-700 rounded-2xl bg-[#0a0a0a] p-6 col-span-1 space-y-4 group tech-stacks-fade-in cursor-pointer">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Tech Stack
          </h2>
        </div>
        <button className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-all duration-300 group/btn px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20">
          See More
          <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Tech Categories */}
      <div className="space-y-5">
        {(Object.entries(techStacks) as [TechCategory, string[]][]).map(([category, technologies]) => (
          <div key={category} className="group/category">
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-3">
              <div className={`p-1.5 rounded-lg bg-white/5 border ${getCategoryColor(category)}`}>
                {getCategoryIcon(category)}
              </div>
              <h3 className="text-sm font-semibold text-gray-300 capitalize">
                {category}
              </h3>
            </div>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:scale-105 transition-all duration-300 hover:bg-white/10 hover:border-white/20 tech-tag`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}