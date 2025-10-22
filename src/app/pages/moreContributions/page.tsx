"use client";
import React from "react";
import "./moreContributions.css";
import { useRouter } from "next/navigation";

export default function MoreContributions() {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  const contributions = [
    {
      title: "Full-Stack web app Platform",
      description: "Led development of a scalable web app solution with Laravel backend and React frontend",
      type: "Web Development"
    },
    {
      title: "Real-Time Applications",
      description: "Built a real-time system with WebSockets or Pusher integration and push notifications",
      type: "Real-time Systems"
    },
    {
      title: "API Gateway Architecture",
      description: "Designed and implemented microservices architecture with API gateway pattern",
      type: "Backend Architecture"
    },
    {
      title: "Database Optimization",
      description: "Optimized query performance and implemented caching strategies for high-traffic app",
      type: "Database"
    },
    {
      title: "CI/CD Pipeline Setup",
      description: "Implemented automated testing and deployment pipeline with GitHub Actions",
      type: "DevOps"
    },
    {
      title: "Authentication System",
      description: "Built secure authentication with multi-factor authentication and session management",
      type: "Security"
    },
    {
      title: "Admin Dashboard",
      description: "Created comprehensive admin panel with analytics and user management",
      type: "Dashboard"
    },
    {
      title: "RESTful API Design",
      description: "Designed and documented REST APIs with proper versioning and error handling",
      type: "API Development"
    },
    {
      title: "Frontend Component Library",
      description: "Built reusable React component library with Storybook documentation",
      type: "UI/UX"
    },
    {
      title: "Performance Monitoring",
      description: "Implemented application monitoring and error tracking system",
      type: "DevOps"
    },
    {
      title: "CMS Development",
      description: "Custom content management system with dynamic content types",
      type: "Web Development"
    },
    {
      title: "Data Migration Tool",
      description: "Built tool for seamless data migration between different database systems",
      type: "Data Engineering"
    },
    {
      title: "Legacy System Modernization",
      description: "Migrated legacy PHP application to modern Laravel framework",
      type: "System Upgrade"
    },
    {
      title: "Social Media Integration",
      description: "Integrated multiple social media APIs for user authentication and sharing",
      type: "Integration"
    },
    {
      title: "Email System Implementation",
      description: "Built robust email system with templates, queues, and delivery tracking",
      type: "Communication"
    },
    {
      title: "File Storage Solution",
      description: "Implemented cloud file storage with AWS S3 and CDN integration",
      type: "Infrastructure"
    },
    {
      title: "Search Functionality",
      description: "Enhanced search with filters, sorting, and relevance scoring",
      type: "Search"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header with Back Button - Matching Reference */}
        <div className="flex items-center gap-4 mb-8 more-contributions-fade-in">
          <button 
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          <h1 className="text-2xl font-bold text-white">All Contributions</h1>
        </div>

        {/* Contributions Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 more-contributions-fade-in">
          {contributions.map((contribution, index) => (
            <div 
              key={index}
              className="bento-card p-6 space-y-4 group hover:transform hover:scale-105 transition-all duration-300"
            >
            
              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {contribution.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {contribution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="text-center mt-12 more-contributions-fade-in">
          <div className="inline-flex items-center gap-6 px-6 py-4 rounded-xl bg-white/5 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-sm text-gray-400">Years Active</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}