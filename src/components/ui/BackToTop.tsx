"use client";

import { useEffect, useState } from "react";

export default function BackToTop({ bottom }: { bottom?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setVisible(scrolled >= total - 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed left-0 right-0 flex justify-center z-50 pointer-events-none"
      style={{ bottom: bottom !== undefined ? `${bottom}px` : "1.5rem" }}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="pointer-events-auto px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm"
        style={{
          background: "rgba(181, 170, 150, 0.55)",
          color: "#FAF8F5",
          border: "1px solid rgba(237, 233, 227, 0.4)",
        }}
        aria-label="Volver al inicio"
      >
        ↑ Volver arriba
      </button>
    </div>
  );
}
