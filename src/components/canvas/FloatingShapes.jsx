import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    { size: 100, x: "10%", y: "20%", duration: 20 },
    { size: 150, x: "80%", y: "30%", duration: 25 },
    { size: 80, x: "50%", y: "70%", duration: 18 },
    { size: 120, x: "20%", y: "80%", duration: 22 },
    { size: 90, x: "90%", y: "60%", duration: 19 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%)`,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;



