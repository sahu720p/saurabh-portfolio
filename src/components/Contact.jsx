"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/sahu720p@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          "Submitted At (IST)": new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "medium",
            timeStyle: "medium",
            hour12: true,
          }) + " (IST)",
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 6000);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=sahu720p@gmail.com";
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
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
        style={{ maxWidth: "580px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <p
            className="font-medium tracking-widest uppercase text-sm"
            style={{ color: "#9ca3af", marginBottom: "0.75rem" }}
          >
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "#ffffff" }}>
            Contact <span style={{ color: "#ffffff" }}>Me</span>
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

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border"
          style={{
            background: "linear-gradient(to bottom, #111111, #000000)",
            borderColor: "#3f3f46",
            padding: "2rem",
            boxSizing: "border-box",
            boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="rounded-xl border outline-none transition-all duration-200 focus:border-white focus:ring-1 focus:ring-white"
              style={{
                width: "100%",
                padding: "0.95rem 1.15rem",
                backgroundColor: "#18181b",
                borderColor: "#3f3f46",
                color: "#ffffff",
                boxSizing: "border-box",
                fontSize: "0.95rem",
              }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="rounded-xl border outline-none transition-all duration-200 focus:border-white focus:ring-1 focus:ring-white"
              style={{
                width: "100%",
                padding: "0.95rem 1.15rem",
                backgroundColor: "#18181b",
                borderColor: "#3f3f46",
                color: "#ffffff",
                boxSizing: "border-box",
                fontSize: "0.95rem",
              }}
            />

            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="rounded-xl border outline-none transition-all duration-200 focus:border-white focus:ring-1 focus:ring-white"
              style={{
                width: "100%",
                padding: "0.95rem 1.15rem",
                backgroundColor: "#18181b",
                borderColor: "#3f3f46",
                color: "#ffffff",
                boxSizing: "border-box",
                resize: "vertical",
                fontSize: "0.95rem",
              }}
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-xl font-bold transition-all duration-200 hover:bg-slate-200 active:scale-[0.99]"
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                padding: "0.95rem",
                opacity: status === "sending" ? 0.6 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
                fontSize: "1rem",
              }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p style={{ color: "#22c55e", textAlign: "center", fontSize: "0.9rem", fontWeight: 500 }}>
                ✓ Message sent successfully! I will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#ef4444", textAlign: "center", fontSize: "0.9rem" }}>
                Something went wrong. Please try again or email directly.
              </p>
            )}
          </form>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              backgroundColor: "#27272a",
              margin: "2rem 0",
            }}
          />

          {/* Contact info list inside the card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {[
              {
                icon: <FaEnvelope />,
                label: "Email",
                value: "sahu720p@gmail.com",
                href: "mailto:sahu720p@gmail.com",
                onClick: handleEmailClick,
              },
              {
                icon: <FaGithub />,
                label: "GitHub",
                value: "github.com/sahu720p",
                href: "https://github.com/sahu720p",
              },
              {
                icon: <FaLinkedin />,
                label: "LinkedIn",
                value: "linkedin.com/in/saurabh-kumar-sahu",
                href: "https://www.linkedin.com/in/saurabh-kumar-sahu-3a9b1a366/",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={item.onClick}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="rounded-xl transition-all duration-200 hover:bg-zinc-800/90 group cursor-pointer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  backgroundColor: "#18181b",
                  padding: "0.85rem 1.15rem",
                  border: "1px solid #27272a",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    minWidth: "40px",
                    borderRadius: "9999px",
                    backgroundColor: "#09090b",
                    border: "1px solid #3f3f46",
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                  className="group-hover:border-slate-300 transition-colors"
                >
                  {item.icon}
                </span>
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      color: "#9ca3af",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ color: "#ffffff", fontSize: "0.92rem", fontWeight: 500 }}>
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
