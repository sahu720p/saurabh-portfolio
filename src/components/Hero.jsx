"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

const ROLES = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Problem Solver",
  "Python & C++ Programmer",
];

const STACK = [
  "Python",
  "C++",
  "MERN Stack",
  "Full Stack",
  "HTML",
  "CSS",
  "JavaScript",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedRole.length < current.length) {
          setTypedRole(current.slice(0, typedRole.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (typedRole.length > 0) {
          setTypedRole(current.slice(0, typedRole.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex]);

  const handleEmailClick = (e) => {
    e.preventDefault();
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=sahu720p@gmail.com";
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden text-white pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#0a0e14",
      }}
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-4 sm:left-12 h-[260px] sm:h-[420px] lg:h-[500px] w-[260px] sm:w-[420px] lg:w-[500px] rounded-full bg-cyan-500/20 blur-[90px] sm:blur-[140px]"
          animate={{ opacity: [0.45, 0.85, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-4 sm:right-12 h-[260px] sm:h-[420px] lg:h-[500px] w-[260px] sm:w-[420px] lg:w-[500px] rounded-full bg-fuchsia-500/15 blur-[90px] sm:blur-[140px]"
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] sm:h-[420px] w-[320px] sm:w-[420px] rounded-full bg-blue-600/10 blur-[130px] sm:blur-[150px]" />

        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 90%)",
          }}
        />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-14 my-auto">
        {/* Left Column: Details & Typography */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-5"
        >
          {/* Welcome Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-widest uppercase rounded-full border border-zinc-700/80 bg-zinc-900/90 text-zinc-300 shadow-sm backdrop-blur-md">
              {/* Compact Sleek Green Blinking Dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              WELCOME TO MY PORTFOLIO
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-[4rem] font-black leading-tight sm:leading-[1.1] tracking-tight text-white"
          >
            SAURABH KUMAR SAHU
          </motion.h1>

          {/* Animated Typed Role */}
          <motion.div variants={itemVariants} className="min-h-[2.5rem] sm:min-h-[3rem] flex items-center justify-center lg:justify-start">
            <p className="text-lg xs:text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-zinc-200 flex items-center">
              <span>{typedRole}</span>
              <span className="ml-1.5 inline-block w-0.5 sm:w-1 h-5 sm:h-7 bg-blue-500 animate-pulse" />
            </p>
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-1.5 sm:gap-2 justify-center lg:justify-start pt-1"
          >
            {STACK.map((tech) => (
              <motion.span
                key={tech}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-sm font-medium px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-zinc-900/90 text-zinc-300 border border-zinc-700/70 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Introduction Bio */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed max-w-xl pt-1"
          >
            I'm a Computer Science student graduating in 2027, passionate about
            Full Stack Web Development, MERN Stack, Python, C++, and problem solving.
            I build responsive, reliable web applications and efficient software systems
            designed for real-world impact.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto pt-2"
          >
            <motion.a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-white text-black font-bold text-sm sm:text-base shadow-lg shadow-white/10 hover:bg-zinc-200 transition-all w-full xs:w-auto"
            >
              <FaDownload size={14} />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-zinc-900/90 text-white font-semibold text-sm sm:text-base border border-zinc-700 hover:border-zinc-500 transition-all w-full xs:w-auto"
            >
              Contact Us
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 sm:gap-3.5 justify-center lg:justify-start pt-2"
          >
            {[
              {
                icon: <FaGithub />,
                href: "https://github.com/sahu720p",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                href: "https://www.linkedin.com/in/saurabh-kumar-sahu-3a9b1a366/",
                label: "LinkedIn",
              },
              {
                icon: <FaEnvelope />,
                href: "mailto:sahu720p@gmail.com",
                label: "Email",
                onClick: handleEmailClick,
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={item.onClick}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900/90 border border-zinc-700 text-white hover:border-zinc-400 text-base sm:text-lg transition-colors cursor-pointer"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image Card with Glowing Accents */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center w-full mt-4 lg:mt-0"
        >
          <div className="relative">
            {/* Ambient Back Glow */}
            <motion.div
              className="absolute -inset-4 sm:-inset-5 rounded-3xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 blur-2xl opacity-35"
              animate={{ opacity: [0.25, 0.45, 0.25] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Rotating Dashed Diamond/Square Outline */}
            <motion.div
              className="absolute -inset-2.5 sm:-inset-3.5 rounded-3xl border-2 border-dashed border-white/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            />

            {/* Photo Card Container */}
            <div className="relative w-[260px] xs:w-[300px] sm:w-[350px] lg:w-[380px] h-[280px] xs:h-[320px] sm:h-[370px] lg:h-[400px] max-w-[85vw] rounded-2xl p-[3px] shadow-2xl bg-gradient-to-b from-zinc-700 to-zinc-900">
              <div className="w-full h-full rounded-[calc(1rem-1px)] bg-zinc-950 overflow-hidden relative">
                <Image
                  src="/Profile.jpeg"
                  alt="Saurabh Kumar Sahu"
                  width={720}
                  height={720}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
