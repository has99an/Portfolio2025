import { motion } from "framer-motion";

const Button = ({ children, onClick, className = "", variant = "primary" }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent to-accent-dark text-white hover:shadow-lg hover:shadow-accent/50",
    secondary: "bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white",
    outline: "bg-transparent border-2 border-white/20 text-white hover:border-accent hover:text-accent",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;

