import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = winHeight > 0 ? (scrollPx / winHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-black-100/50 z-50">
      <motion.div
        className="h-full bg-gradient-to-r from-accent via-accent-dark to-accent"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default ScrollProgress;

