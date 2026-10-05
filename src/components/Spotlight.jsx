"use client";

import { useEffect, useRef } from "react";

export default function Spotlight() {
  const glow = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (!glow.current) return;

      glow.current.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 500,
          fill: "forwards",
          easing: "ease-out",
        }
      );
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glow}
      className="pointer-events-none fixed z-0 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,.22) 0%, rgba(139,92,246,.18) 35%, rgba(6,182,212,.12) 55%, transparent 75%)",
      }}
    />
  );
}
