import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const ProjectCard = ({
  index,
  name,
  description,
  descriptionEn,
  tags,
  image,
  source_code_link,
  language,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      <Tilt
        className="w-full max-w-sm sm:w-[360px] rounded-2xl glass p-4 sm:p-5 hover:shadow-xl hover:shadow-accent/20 transition-all"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={1000}
      >
        <div className="relative w-full h-[200px] sm:h-[230px] overflow-hidden rounded-2xl group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/400x230?text=" +
                encodeURIComponent(name);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 flex justify-end m-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <div
              onClick={() =>
                window.open(
                  source_code_link?.api || source_code_link,
                  "_blank"
                )
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
                alt="github"
                className="w-1/2 h-1/2 object-contain filter invert"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-5">
          <h3 className="text-white font-bold text-lg sm:text-xl md:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-xs sm:text-sm md:text-[14px] leading-relaxed">
            {language === "da" ? description : descriptionEn}
          </p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
