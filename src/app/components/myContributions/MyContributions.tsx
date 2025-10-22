"use client";
import "./MyContributions.css";
import { useRouter } from "next/navigation";

export default function MyContributions() {

  const router = useRouter();

  const contributions = [
    {
      title: "Full-Stack web app Platform",
      description: "Led development of a scalable web app solution with Laravel backend and React frontend",
    },
    {
      title: "Real-Time Applications", 
      description: "Built a real-time system with WebSockets or Pusher integration and push notifications",
    },
    {
      title: "API Gateway Architecture",
      description: "Designed and implemented microservices architecture with API gateway pattern",
    },
    {
      title: "Database Optimization",
      description: "Optimized query performance and implemented caching strategies for high-traffic app",
    },
    {
      title: "CI/CD Pipeline Setup",
      description: "Implemented automated testing and deployment pipeline with GitHub Actions",
    },
    {
      title: "Authentication System",
      description: "Built secure authentication with multi-factor authentication and session management",
    },
    
  ];

  const handleSeeMore = () => {
    router.push('/pages/moreContributions');
  };

  return (
    <section className="relative overflow-hidden border border-gray-700 rounded-2xl p-[1.40rem] col-span-1 space-y-4 group my-contributions-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          <h2 className="text-xl font-bold text-white">Contributions</h2>
        </div>
        <button 
          onClick={handleSeeMore}
          className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-all duration-300 group/btn px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20">
          See More
          <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* contributions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {contributions.map((contribution, index) => (
          <div key={contribution.title} className="bento-card p-4 space-y-2 hover:bg-white/5 transition-all duration-300">
              <h3 className="text-sm font-semibold text-white group-hover/contribution:text-blue-400 transition-colors">
                {contribution.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {contribution.description}
              </p>
          </div>
        ))}
      </div>
    </section>
  );
}