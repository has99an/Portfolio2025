import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import AnimatedCounter from "../ui/AnimatedCounter";

const Stats = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    { number: 5, label: language === "da" ? "Projekter" : "Projects", suffix: "+" },
    { number: 2, label: language === "da" ? "Års Erfaring" : "Years Experience", suffix: "+" },
    { number: 10, label: language === "da" ? "Teknologier" : "Technologies", suffix: "+" },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px]">
            {language === "da" ? "Nogle Tal" : "By The Numbers"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass rounded-xl p-6 sm:p-8 text-center group hover:shadow-lg hover:shadow-accent/20 transition-all"
            >
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent mb-2"
                whileHover={{ scale: 1.1 }}
              >
                <AnimatedCounter end={stat.number} duration={2000} suffix={stat.suffix} />
              </motion.div>
              <p className="text-secondary text-sm sm:text-base font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;



