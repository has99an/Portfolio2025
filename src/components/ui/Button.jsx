import { motion } from "framer-motion";

const Button = ({ children, onClick, className = "", variant = "primary", type = "button", disabled = false }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300 relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-accent-dark text-white hover:shadow-lg hover:shadow-accent/50",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white",
    outline: "bg-transparent border-2 border-white/20 text-white hover:border-accent hover:text-accent",
  };

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default Button;

