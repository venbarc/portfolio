"use client";
import "./HeadStart.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function HeadStart() {
  return (
    <header className="mt-[8%] animate-fade-in">
  {/* Container with responsive layout */}
  <div className="flex flex-col lg:flex-row justify-between gap-4">
    
    {/* Left section: Image + Details */}
    <div className="flex gap-4 items-start">
      <img
        src="img/james-reid.jpg"
        alt="Profile"
        className="w-35 h-35 sm:w-40 sm:h-40 object-cover"
      />

      <div className="flex flex-col">
        {/* Name + Verified */}
        <div className="flex items-baseline space-x-2">
          <h1 className="text-3xl font-bold tracking-wide">Ben Obre</h1>
          <svg
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500 flex-shrink-0"
            aria-label="Verified user"
          >
            <path d="M20.396 11c-.018-.646-.215-1.275-..." fill="currentColor"></path>
          </svg>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-3">
          <img src="img/ph-logo.png" alt="Philippines logo" className="w-4 h-4 object-cover" />
          <span className="text-gray-300">Metro Manila, Makati City</span>
        </div>

        {/* Role */}
        <p className="text-lg font-semibold text-gray-300 mt-1">Full Stack Developer</p>

        {/* GitHub + Phone */}
        <div className="flex items-center gap-2 mt-2">
          <a
            href="https://github.com/venbarc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-all duration-200"
          >
            <FaGithub className="text-lg" />
            venbarc
          </a>
          <a href="tel:+639393370186" className="text-sm hover:text-blue-400 transition-colors">
            +63 9393370186
          </a>
        </div>
      </div>
    </div>

    {/* Right section: Buttons inline, top-right */}
    <div className="flex flex-row gap-3 mt-0 items-start w-full lg:w-auto">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=bentf24@gmail.com&su=Hello&body=Hi%20there"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
      >
        <MdEmail className="text-lg" />
        Send Email
      </a>
      <a
        target="_blank"
        href="https://calendly.com/bentf24/30min"
        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 whitespace-nowrap"
      >
        <FaRegCalendarAlt className="text-lg" />
        Schedule a Call
      </a>
    </div>
  </div>
</header>

  );
}
