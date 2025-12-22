import { motion } from "framer-motion";

const SkillBadge = ({ name, icon, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="glass rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center gap-2 min-w-[100px] sm:min-w-[120px] cursor-pointer group"
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-1 sm:mb-2 group-hover:scale-110 transition-transform">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-white text-xs sm:text-sm font-medium text-center">{name}</p>
    </motion.div>
  );
};

export default SkillBadge;
