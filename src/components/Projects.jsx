"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Inventory & Bill Management",
    description:
      "A comprehensive full-stack MERN web application for inventory tracking, automated bill & invoice generation, real-time product stock monitoring, and customer transaction management with secure REST APIs and MongoDB database.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "REST API"],
    github: "https://github.com/sahu720p/inventory-bill-management",
    live: "https://github.com/sahu720p/inventory-bill-management",
  },
  {
    title: "Library Management System",
    description:
      "An automated MERN stack library operations system designed to catalog books, track issue and return timelines, manage student member databases, and calculate overdue fines with an interactive React dashboard and Express backend.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API", "Tailwind CSS"],
    github: "https://github.com/sahu720p",
    live: "https://github.com/sahu720p",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, high-performance personal developer portfolio built with React.js, Next.js, Tailwind CSS, and Framer Motion featuring sleek dark ambient lighting, dynamic typing roles, smooth transitions, and responsive mobile design.",
    tech: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "JavaScript"],
    github: "https://github.com/sahu720p",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen text-white relative overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#0a0e14",
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-6 sm:left-10 h-[220px] sm:h-[320px] lg:h-[420px] w-[220px] sm:w-[320px] lg:w-[420px] rounded-full bg-cyan-500/15 blur-[80px] sm:blur-[120px]"
          animate={{ opacity: [0.35, 0.75, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-6 sm:right-10 h-[220px] sm:h-[320px] lg:h-[420px] w-[220px] sm:w-[320px] lg:w-[420px] rounded-full bg-fuchsia-500/15 blur-[80px] sm:blur-[120px]"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] w-[360px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)",
          }}
        />
      </div>

      <div
        className="relative z-10 w-full"
        style={{ maxWidth: "760px", marginLeft: "auto", marginRight: "auto" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p
            className="font-medium tracking-widest uppercase text-sm"
            style={{ color: "#9ca3af", marginBottom: "0.75rem" }}
          >
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "#ffffff" }}>
            My <span style={{ color: "#ffffff" }}>Projects</span>
          </h2>
          <div
            style={{
              width: "5rem",
              height: "4px",
              margin: "1.25rem auto 0",
              borderRadius: "9999px",
              background: "linear-gradient(to right, #6b7280, #d1d5db)",
            }}
          />
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", alignItems: "stretch" }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -5 }}
      className="relative rounded-xl overflow-hidden border transition-all duration-300"
      style={{
        background: "linear-gradient(to bottom, #111111, #000000)",
        borderColor: "#3f3f46",
        width: "100%",
        boxSizing: "border-box",
        padding: "1.75rem",
      }}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <h3
          className="text-xl sm:text-2xl font-bold"
          style={{ color: "#ffffff" }}
        >
          {project.title}
        </h3>
        <span className="text-xs font-mono text-zinc-500 font-semibold">
          0{index + 1}
        </span>
      </div>

      <p
        className="text-sm"
        style={{ color: "#a1a1aa", lineHeight: "1.7", marginBottom: "0.5rem" }}
      >
        {expanded
          ? project.description
          : project.description.length > 95
          ? project.description.slice(0, 95) + "..."
          : project.description}
      </p>

      {project.description.length > 95 && (
        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="text-sm font-medium transition-colors hover:text-white"
          style={{ color: "#38bdf8", marginBottom: "1.25rem", display: "inline-block" }}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}

      {/* Tech Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
        {project.tech.map((t, i) => (
          <span
            key={i}
            className="text-xs rounded-full border font-medium"
            style={{
              backgroundColor: "#18181b",
              color: "#d4d4d8",
              borderColor: "#3f3f46",
              padding: "0.3rem 0.8rem",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Action Links */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium rounded-lg border transition-colors hover:bg-zinc-800"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            borderColor: "#3f3f46",
            color: "#ffffff",
            padding: "0.55rem 1.1rem",
          }}
        >
          <FaGithub size={16} />
          GitHub
        </a>

        {project.live && project.live !== "#" ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold rounded-lg transition-colors hover:bg-slate-200"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#ffffff",
              color: "#000000",
              padding: "0.55rem 1.1rem",
            }}
          >
            <ExternalLink size={15} />
            Live Demo
          </a>
        ) : (
          <span
            className="text-sm font-medium rounded-lg opacity-60 cursor-default"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#27272a",
              color: "#a1a1aa",
              padding: "0.55rem 1.1rem",
            }}
          >
            In Progress
          </span>
        )}
      </div>
    </motion.div>
  );
}
