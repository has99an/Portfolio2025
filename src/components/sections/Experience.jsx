import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { experiences } from "../../constants";

const SectionDivider = () => (
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
);

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="relative w-full py-20">
      <SectionDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-secondary text-xs sm:text-sm uppercase tracking-wider">
            {t.experience.subtitle}
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-2">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="mt-8 sm:mt-12 flex flex-col gap-6 sm:gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", index * 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass rounded-xl p-4 sm:p-6 hover:shadow-lg hover:shadow-accent/20 transition-all group relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
              />
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 relative z-10">
                <div className="flex-shrink-0 flex justify-center md:justify-start">
                  <motion.div
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-accent to-accent-dark flex items-center justify-center text-2xl sm:text-3xl shadow-lg pulse-glow"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {experience.icon}
                  </motion.div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-white text-lg sm:text-xl font-bold">
                    {language === "da" ? experience.title : experience.titleEn}
                  </h3>
                  <p className="text-accent text-sm mt-1">
                    {language === "da"
                      ? experience.company_name
                      : experience.company_nameEn}
                  </p>
                  <p className="text-secondary text-sm mt-1">
                    {language === "da" ? experience.date : experience.dateEn}
                  </p>
                  <ul className="mt-4 list-disc list-inside space-y-2">
                    {(language === "da"
                      ? experience.points
                      : experience.pointsEn
                    ).map((point, i) => (
                      <li key={i} className="text-secondary text-sm">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
