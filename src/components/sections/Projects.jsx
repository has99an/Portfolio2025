import { motion } from "framer-motion";
import { textVariant, staggerContainer, fadeIn } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { projects } from "../../constants";
import ProjectCard from "../ui/ProjectCard";

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="relative w-full py-20 bg-black-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <motion.div
          variants={textVariant()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-secondary text-xs sm:text-sm uppercase tracking-wider">
            {t.projects.subtitle}
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-2">
            {t.projects.title}
          </h2>
        </motion.div>

        <div className="w-full flex justify-center md:justify-start">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-3 text-secondary text-sm sm:text-base md:text-[17px] max-w-3xl leading-relaxed text-center md:text-left"
          >
            {t.projects.description}
          </motion.p>
        </div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap gap-4 sm:gap-6 md:gap-7 justify-center"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
              language={language}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
