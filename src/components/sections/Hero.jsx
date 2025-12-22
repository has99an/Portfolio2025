import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { profile } from "../../assets";
import FloatingShapes from "../canvas/FloatingShapes";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative w-full h-screen mx-auto pt-20 overflow-hidden">
      <FloatingShapes />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-tertiary to-black-200 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,217,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-16 flex flex-col md:flex-row items-center justify-center h-full gap-8 md:gap-12">
        <motion.div
          className="flex-1 flex flex-col justify-center text-center md:text-left"
          initial="hidden"
          animate="show"
        >
          <motion.div variants={textVariant(0.1)}>
            <p className="text-accent font-medium text-base sm:text-lg mb-2">
              {t.hero.greeting}
            </p>
          </motion.div>

          <motion.h1
            variants={textVariant(0.2)}
            className="font-black text-white text-[32px] xs:text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px] leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[98px]"
          >
            {t.hero.name}
            <br />
            <span className="animated-gradient bg-clip-text text-transparent">
              {t.hero.subtitle}
            </span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="mt-4 sm:mt-5"
          >
            <p className="text-secondary text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {t.hero.description}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.5, 1)}
          initial="hidden"
          animate="show"
          className="flex-1 flex justify-center items-center mt-8 md:mt-0"
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="relative float"
            >
              <div className="absolute inset-0 rounded-full glow opacity-50" />
              <img
                src={profile}
                alt="Profile"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent/50 shadow-2xl z-10"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          initial="hidden"
          animate="show"
          className="absolute bottom-4 sm:bottom-10 flex justify-center w-full"
        >
          <div className="w-[30px] h-[50px] sm:w-[35px] sm:h-[64px] rounded-3xl border-2 sm:border-4 border-secondary flex justify-center items-start p-1.5 sm:p-2">
            <motion.div
              animate={{
                y: [0, 18, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
