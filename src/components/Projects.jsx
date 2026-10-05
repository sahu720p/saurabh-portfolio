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
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "REST API",
    ],
    github: "https://github.com/sahu720p/inventory-bill-management",
    live: "https://inventory-bill-management.vercel.app",
  },

  {
    title: "Library Management System",
    description:
      "An automated MERN stack library operations system designed to catalog books, track issue and return timelines, manage student member databases, and calculate overdue fines with an interactive React dashboard and Express backend.",
    tech: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "REST API",
      "Tailwind CSS",
    ],
    github: "https://github.com/sahu720p/library-management-system",
    live: "#",
  },

  {
    title: "Personal Portfolio Website",
    description:
      "A modern, high-performance personal developer portfolio built with React.js, Next.js, Tailwind CSS, and Framer Motion featuring sleek dark ambient lighting, dynamic typing roles, smooth transitions, and responsive mobile design.",
    tech: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
    ],
    github: "https://github.com/sahu720p/saurabh-portfolio",
    live: "https://saurabh-portfolio-rho-five.vercel.app",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 font-medium mb-3">
            MY WORK
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Here are some of the projects I have built using modern
            web technologies and full-stack development tools.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 overflow-hidden"
    >
      {/* Card Glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />

      <div className="relative z-10">
        {/* Project Number */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-purple-400 font-semibold">
            0{index + 1}
          </span>

          <FaGithub className="text-2xl text-gray-400 group-hover:text-white transition-colors" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <div className="text-gray-400 text-sm leading-6 mb-5">
          {expanded
            ? project.description
            : `${project.description.substring(0, 150)}...`}

          {project.description.length > 150 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 text-purple-400 hover:text-purple-300 font-medium"
            >
              {expanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-7">
          {project.tech.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
          >
            <FaGithub />
            GitHub
          </a>

          {project.live && project.live !== "#" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90 transition-all duration-300"
            >
              <ExternalLink size={17} />
              Live Demo
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed">
              <ExternalLink size={17} />
              In Progress
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}