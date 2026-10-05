"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e14]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-lg shadow-black/30"
          : "bg-[#0a0e14]/75 backdrop-blur-md border-b border-zinc-800/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Responsive Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1 text-lg xs:text-xl sm:text-2xl font-extrabold tracking-tight text-white whitespace-nowrap select-none"
        >
          <span>Saurabh</span>
          <span className="hidden sm:inline font-bold text-zinc-300">
            Kumar Sahu
          </span>
          <span className="text-sky-400 group-hover:text-blue-500 transition-colors">
            .
          </span>
        </a>

        {/* Right Menu (Desktop Navigation & Actions) */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white relative py-1"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Resume Button */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center font-semibold text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white text-black hover:bg-zinc-200 active:scale-95 transition-all shadow-sm"
          >
            Resume
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            className="md:hidden flex items-center justify-center text-zinc-200 hover:text-white p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 focus:outline-none"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0a0e14]/98 backdrop-blur-2xl border-t border-zinc-800/80 px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900/80 px-4 py-3 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-zinc-800/80">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full font-bold text-sm py-3 px-4 rounded-xl bg-white text-black hover:bg-zinc-200 active:scale-98 transition-all shadow-md"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

