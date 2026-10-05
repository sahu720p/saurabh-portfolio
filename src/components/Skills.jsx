"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

const allSkills = {
  Programming: [
    { name: "Python", icon: <SiPython size={28} /> },
    { name: "C++", icon: <SiCplusplus size={28} /> },
    { name: "JavaScript", icon: <SiJavascript size={28} /> },
    { name: "HTML5", icon: <SiHtml5 size={28} /> },
    { name: "CSS3", icon: <FaCss3Alt size={28} /> },
  ],
  Frontend: [
    { name: "React.js", icon: <SiReact size={28} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
    { name: "JavaScript (ES6+)", icon: <SiJavascript size={28} /> },
    { name: "HTML5", icon: <SiHtml5 size={28} /> },
    { name: "CSS3", icon: <FaCss3Alt size={28} /> },
  ],
  "Full Stack / MERN": [
    { name: "React.js", icon: <SiReact size={28} /> },
    { name: "Node.js", icon: <SiNodedotjs size={28} /> },
    { name: "Express.js", icon: <SiExpress size={28} /> },
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
  ],
  Database: [
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
    { name: "MySQL", icon: <SiMysql size={28} /> },
    { name: "SQLite", icon: <SiSqlite size={28} /> },
  ],
  Tools: [
    { name: "Git", icon: <SiGit size={28} /> },
    { name: "GitHub", icon: <SiGithub size={28} /> },
    { name: "VS Code", icon: <VscCode size={28} /> },
  ],
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Skills() {
  const [active, setActive] = useState("Programming");

  const categories = Object.keys(allSkills);

  return (
    <section
      id="skills"
      className="relative min-h-[80vh] overflow-hidden text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "#0a0e14",
      }}
    >
      {/* Ambient background lighting */}
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

      {/* Main content */}
      <div
        className="relative z-10"
        style={{ maxWidth: "1152px", marginLeft: "auto", marginRight: "auto" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-medium tracking-widest uppercase text-sm"
          style={{ color: "#9ca3af", marginBottom: "0.75rem", textAlign: "center" }}
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
          style={{ color: "#ffffff", textAlign: "center" }}
        >
          My Tech Stack
        </motion.h2>

        <div
          style={{
            width: "5rem",
            height: "4px",
            margin: "1.25rem auto 1.5rem",
            borderRadius: "9999px",
            background: "linear-gradient(to right, #6b7280, #d1d5db)",
          }}
        />

        <p style={{ color: "#a1a1aa", textAlign: "center", marginBottom: "3rem", fontSize: "1.05rem" }}>
          Technologies and tools I use to build robust, scalable applications.
        </p>

        {/* Category Filter Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "3.5rem",
          }}
        >
          {categories.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActive(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-semibold text-sm transition-all duration-300"
              style={{
                padding: "0.65rem 1.6rem",
                borderRadius: "9999px",
                border: "1px solid #3f3f46",
                backgroundColor: active === tab ? "#ffffff" : "#18181b",
                color: active === tab ? "#000000" : "#d4d4d8",
                boxShadow: active === tab ? "0 4px 14px rgba(255,255,255,0.2)" : "none",
              }}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Tech Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            style={{ gap: "1.25rem", justifyItems: "center" }}
          >
            {allSkills[active].map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariants}
                whileHover={{ scale: 1.06, y: -4, transition: { duration: 0.2 } }}
                className="rounded-xl border transition-all duration-300 w-full"
                style={{
                  minHeight: "140px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  background: "linear-gradient(to bottom, #111111, #000000)",
                  borderColor: "#3f3f46",
                  padding: "1.25rem 0.75rem",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ color: "#ffffff", marginBottom: "0.75rem" }}>
                  {item.icon}
                </div>
                <h3 className="font-semibold" style={{ color: "#ffffff", fontSize: "0.95rem" }}>
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
