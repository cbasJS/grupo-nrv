"use client";

import { useEffect, useRef, useState } from "react";
// import FooterSoft from "@/components/layout/copy-home/FooterSoft";
import BackToTop from "@/components/ui/BackToTop";
import NewHomeFooterSoft from "@/components/sections/copy-home/NewHomeFooterSoft";

export default function FooterBackTopWrapper() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [backToTopTop, setBackToTopTop] = useState<number | undefined>(
    undefined,
  );

  useEffect(() => {
    const calculate = () => {
      if (!footerRef.current) return;
      const footerHeight = footerRef.current.offsetHeight;
      setBackToTopTop(footerHeight - 13);
    };

    calculate();

    const resizeObserver = new ResizeObserver(calculate);
    if (footerRef.current) resizeObserver.observe(footerRef.current);
    window.addEventListener("resize", calculate);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return (
    <>
      <div ref={footerRef}>
        {/* <FooterSoft /> */}
        <NewHomeFooterSoft />
      </div>
      <BackToTop bottom={backToTopTop} />
    </>
  );
}
