"use client";
import "./HeadStart.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function HeadStart() {
  return (
    <header className="mt-[6%] head-start-fade-in">
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
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold tracking-wide">Ben Obre</h1>
              <img
                  src="/img/verified.png"
                  className="h-6 w-6"
                  alt="Verified user"
              />
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 mt-3">
              <img src="img/ph-logo.png" alt="Philippines logo" className="w-4 h-4 object-cover" />
              <span className="text-gray-300">Metro Manila, Makati City</span>
            </div>

            {/* Role */}
            <p className="text-base font-semibold text-gray-300 mt-1">Full Stack Developer</p>

            {/* GitHub + Phone */}
            <div className="flex items-center gap-2 mt-2">
              <a
                href="https://github.com/venbarc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-all duration-200"
              >
                <FaGithub className="text-xs" />
                venbarc
              </a>
              <a href="tel:+639393370186" className="text-xs hover:text-blue-400 transition-colors">
                +63 9393370186
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-start gap-3 w-full lg:w-auto">
          {/* Schedule button */}
          <div className="flex justify-end w-full">
            <a
              target="_blank"
              href="https://calendly.com/bentf24/30min"
              className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 whitespace-nowrap w-full sm:w-[200px] lg:w-[250px]"
            >
              <FaRegCalendarAlt className="text-lg" />
              Schedule a call
            </a>
          </div>

          {/* Social buttons - matching Schedule button width exactly */}
          <div className="flex justify-end w-full">
            <div className="flex gap-3 w-full">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bentf24@gmail.com&su=Hello&body=Hi%20there"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
              >
                <MdEmail className="text-lg text-white" />
                <span className="hidden 2xl:inline">Email</span>
              </a>

              <a
                href="https://www.facebook.com/benobre24"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
              >
                <FaFacebook className="text-lg text-blue-500" />
                <span className="hidden 2xl:inline">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/bndct24/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-gray-700 text-gray-200 hover:bg-gray-800 transition-all duration-200 whitespace-nowrap"
              >
                <FaInstagram className="text-lg text-pink-500" />
                <span className="hidden 2xl:inline">Instagram</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}