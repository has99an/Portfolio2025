import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const ScrollReveal = ({ children, direction = "up", delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeIn(direction, "tween", delay, 0.5)}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;



