import { motion } from "framer-motion";
import { textVariant, staggerContainer } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { technologies } from "../../constants";
import SkillBadge from "../ui/SkillBadge";

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="relative w-full py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-secondary text-xs sm:text-sm uppercase tracking-wider">
            {t.skills.subtitle}
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-2">
            {t.skills.title}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-6"
        >
          {technologies.map((tech, index) => (
            <SkillBadge
              key={tech.name}
              name={tech.name}
              icon={tech.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
