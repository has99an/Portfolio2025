import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const RevealImage = ({ src, alt, className = "", onError }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        onError={onError}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{
          scale: isVisible ? 1 : 1.2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RevealImage;

