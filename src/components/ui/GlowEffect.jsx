import { motion } from "framer-motion";

const GlowEffect = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: "radial-gradient(circle, rgba(0, 217, 255, 0.3) 0%, transparent 70%)",
          filter: "blur(20px)",
          zIndex: -1,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {children}
    </motion.div>
  );
};

export default GlowEffect;



