import { motion } from "framer-motion";

const BlobMorph = () => {
  const blobs = [
    { size: 400, x: "10%", y: "10%", color: "from-accent/20 to-accent-dark/20" },
    { size: 300, x: "80%", y: "20%", color: "from-accent-dark/20 to-accent/20" },
    { size: 350, x: "50%", y: "80%", color: "from-accent/15 to-transparent" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-gradient-to-r ${blob.color} blur-3xl`}
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
          }}
          animate={{
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "50% 50% 50% 50% / 60% 40% 60% 40%",
              "30% 70% 70% 30% / 30% 30% 70% 70%",
            ],
            rotate: [0, 90, 180, 360],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2,
          }}
        />
      ))}
    </div>
  );
};

export default BlobMorph;

