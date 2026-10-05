"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=sahu720p@gmail.com";
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer
      className="relative text-white border-t border-zinc-800/80 py-10 sm:py-14 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#0a0e14",
      }}
    >
      <div
        style={{
          maxWidth: "1152px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          textAlign: "center",
        }}
      >
        <a
          href="#home"
          style={{
            fontSize: "1.6rem",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Saurabh<span style={{ color: "#3b82f6" }}>.</span>
        </a>

        <div style={{ display: "flex", gap: "1.25rem", fontSize: "1.2rem" }}>
          <a
            href="https://github.com/sahu720p"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full transition-all duration-200 hover:scale-110 hover:border-slate-300"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              color: "#ffffff",
            }}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-kumar-sahu-3a9b1a366/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full transition-all duration-200 hover:scale-110 hover:border-slate-300"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              color: "#ffffff",
            }}
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:sahu720p@gmail.com"
            onClick={handleEmailClick}
            aria-label="Email"
            className="rounded-full transition-all duration-200 hover:scale-110 hover:border-slate-300 cursor-pointer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              color: "#ffffff",
            }}
          >
            <FaEnvelope />
          </a>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "320px",
            height: "1px",
            backgroundColor: "#27272a",
          }}
        />

        <p style={{ color: "#9ca3af", fontSize: "0.875rem" }}>
          © 2026 Saurabh Kumar Sahu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
