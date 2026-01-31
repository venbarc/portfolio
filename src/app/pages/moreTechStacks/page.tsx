"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { 
  Code2, 
  Type, 
  Atom, 
  ArrowRight, 
  Wind, 
  Bold, 
  Diamond, 
  Zap,
  Package,
  RefreshCw,
  DollarSign,
  Coffee,
  Plus,
  Hash,
  Cloud,
  Cog,
  Gitlab,
  Settings,
  Flame,
  Brain,
  Shield,
  Ticket,
  Key,
  Lock,
  Check,
  Globe,
  MessageSquare,
  Users,
  Target,
  Puzzle,
  ClipboardList,
  Wrench,
  Palette,
  Database,
  Workflow,
  Cpu,
  Mountain, 
  Github
} from "lucide-react"; 
import "./moreTechStacks.css";

export default function MoreTechStacks() {
  const router = useRouter();

  const techCategories = {
    frontend: [
      "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap",
      "SCSS", "Styled Components", "Vite", "Webpack", "Ajax", "JQuery", "Alpine"
    ],
    backend: [
      "Python", "Java", "C++", "C#", "PHP", "Laravel", "API Integration", 
      "PostgreSQL", "MySQL", "OAuth", "REST"
    ],
    devops: [
      "AWS","IAM", "EC2", "Cloudways", "GitHub Actions", "GitLab CI", "Cpanel", "Linux CI/CD"
    ],
    ai: [
      "PyTorch", "Gemeni", "OpenAI", "Claude"
    ],
    security: [
      "Laravel Sanctum", "Bearer Token", "JWT Authentication", "CSRF Protection",
      "CORS", "Input Validation", "SQL Injection Prevention", "XSS Protection",
      "Laravel Security", "API Authentication", "Middleware Protection", "SonarQube"
    ],
    cms: [
      "WordPress", "Xenforo"
    ],
    tools: [
      "Git", "GitHub", "GitLab", "VS Code", "Canvas",
      "Discord", "Teams", "JIRA", "VS Code Extensions", "ClickUp", "Termius", "Trello"
    ]
  };

  const getTechIcon = (tech: string) => {
    const icons: Record<string, React.ReactNode> = {
      // Frontend
      "JavaScript": <Code2 className="w-4 h-4" />,
      "TypeScript": <Type className="w-4 h-4" />,
      "React": <Atom className="w-4 h-4" />,
      "Next.js": <ArrowRight className="w-4 h-4" />,
      "Tailwind CSS": <Wind className="w-4 h-4" />,
      "Bootstrap": <Bold className="w-4 h-4" />,
      "SCSS": <Diamond className="w-4 h-4" />,
      "Styled Components": <Diamond className="w-4 h-4" />,
      "Vite": <Zap className="w-4 h-4" />,
      "Webpack": <Package className="w-4 h-4" />,
      "Ajax": <RefreshCw className="w-4 h-4" />,
      "JQuery": <DollarSign className="w-4 h-4" />,
      "Alpine": <Mountain className="w-4 h-4" />, 

      // Backend
      "Python": <Code2 className="w-4 h-4" />,
      "Java": <Coffee className="w-4 h-4" />,
      "C++": <Plus className="w-4 h-4" />,
      "C#": <Hash className="w-4 h-4" />,
      "PHP": <Code2 className="w-4 h-4" />,
      "Laravel": <Flame className="w-4 h-4" />,
      "API Integration": <Workflow className="w-4 h-4" />,
      "PostgreSQL": <Database className="w-4 h-4" />,
      "MySQL": <Database className="w-4 h-4" />,
      "OAuth": <Key className="w-4 h-4" />,
      "REST": <Globe className="w-4 h-4" />,

      // DevOps
      "AWS": <Cloud className="w-4 h-4" />,
      "GitHub Actions": <Cog className="w-4 h-4" />,
      "GitLab CI": <Gitlab className="w-4 h-4" />,
      "Cpanel": <Settings className="w-4 h-4" />,
      "Linux CI/CD": <Cog className="w-4 h-4" />,

      // AI
      "PyTorch": <Flame className="w-4 h-4" />,
      "Gemeni": <Brain className="w-4 h-4" />,
      "OpenAI": <Brain className="w-4 h-4" />,

      // Security
      "Laravel Sanctum": <Shield className="w-4 h-4" />,
      "Bearer Token": <Ticket className="w-4 h-4" />,
      "JWT Authentication": <Key className="w-4 h-4" />,
      "CSRF Protection": <Shield className="w-4 h-4" />,
      "CORS": <Globe className="w-4 h-4" />,
      "Input Validation": <Check className="w-4 h-4" />,
      "SQL Injection Prevention": <Shield className="w-4 h-4" />,
      "XSS Protection": <Shield className="w-4 h-4" />,
      "Laravel Security": <Lock className="w-4 h-4" />,
      "API Authentication": <Key className="w-4 h-4" />,
      "Middleware Protection": <Shield className="w-4 h-4" />,
      "SonarQube": <Settings className="w-4 h-4" />,

      // CMS
      "WordPress": <MessageSquare className="w-4 h-4" />,
      "Xenforo": <MessageSquare className="w-4 h-4" />,

      // Tools
      "Git": <Code2 className="w-4 h-4" />,
      "GitHub": <Github className="w-4 h-4" />,
      "GitLab": <Gitlab className="w-4 h-4" />,
      "VS Code": <Code2 className="w-4 h-4" />,
      "Canvas": <Palette className="w-4 h-4" />,
      "Discord": <MessageSquare className="w-4 h-4" />,
      "Teams": <Users className="w-4 h-4" />,
      "JIRA": <Target className="w-4 h-4" />,
      "VS Code Extensions": <Puzzle className="w-4 h-4" />,
      "ClickUp": <ClipboardList className="w-4 h-4" />,
      "Termius": <Wrench className="w-4 h-4" />,
    };

    return icons[tech] || <Cpu className="w-4 h-4" />;
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header with Back Button */}
        <div className="flex items-center gap-4 mb-12 more-tech-stacks-fade-in">
          <button 
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-base text-gray-400 hover:text-white transition-colors group/back"
          >
            <svg className="w-4 h-4 transition-transform group-hover/back:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          <h1 className="text-3xl font-bold text-white">Tech Stack</h1>
        </div>

        {/* Tech Categories */}
        <div className="space-y-8 more-tech-stacks-fade-in">
          {Object.entries(techCategories).map(([category, technologies]) => (
            <div key={category} className="group">
              <h2 className="text-xl font-bold text-white mb-2 capitalize">
                {category === 'devops' ? 'DevOps & Cloud' :
                 category === 'ai' ? 'AI & Machine Learning' :
                 category === 'cms' ? 'CMS & Forums' :
                 category === 'tools' ? 'Developer Tools' :
                 category}
              </h2>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-2 text-base rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all flex items-center gap-2"
                    style={{ animationDelay: `${index * 40}ms` }}
                  >
                    <span className="text-blue-300">{getTechIcon(tech)}</span>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
