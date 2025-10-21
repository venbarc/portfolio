"use client";
import "./Resume.css";

export default function Resume() {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/pdf/Barcebal_Benedict_Obre.pdf';
    link.download = 'Barcebal_Benedict_Obre_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      onClick={handleDownload}
      className="border border-gray-700 rounded-2xl px-6 py-6 h-[40%] sm:h-[56%] flex items-center justify-between resume-fade-in bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300 group cursor-pointer"
    >
      
      {/* Left Side - Icon */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
            />
          </svg>
        </div>
      </div>

      {/* Right Side - Text Content & Arrow */}
      <div className="flex-1 ml-4 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          Get my Resume
        </h3>
        
        <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 mt-1">
          PDF Format
        </p>
      </div>

      {/* Download Arrow */}
      <div className="flex-shrink-0 group-hover:translate-y-1 transition-transform duration-300">
        <svg 
          className="w-5 h-5 text-blue-400" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>

    </section>
  );
}