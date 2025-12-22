import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import { services } from "../../constants";
import Card from "../ui/Card";

const SectionDivider = () => (
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
);

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="relative w-full py-20">
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
            {t.about.subtitle}
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-2">
            {t.about.title}
          </h2>
        </motion.div>

        <div className="mt-8 sm:mt-12 flex flex-col md:flex-row gap-6 md:gap-10">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
              {t.about.description}
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {services.map((service, index) => (
                <Card key={service.title} delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 flex items-center justify-center">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-white font-medium text-xs sm:text-sm">
                      {service.title}
                    </h3>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
