import { motion } from "framer-motion";

const Card = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`glass rounded-xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;

