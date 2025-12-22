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
  documentation_link,
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
        className="w-full max-w-sm sm:w-[360px] rounded-2xl glass p-4 sm:p-5 hover:shadow-xl hover:shadow-accent/20 transition-all group relative overflow-hidden"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        transitionSpeed={1000}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
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
          <div className="absolute inset-0 flex justify-end items-end gap-2 m-3 opacity-0 group-hover:opacity-100 transition-opacity">
            {source_code_link && (
              <div
                onClick={() => {
                  const link = typeof source_code_link === 'object' 
                    ? (source_code_link.server || source_code_link.ui || source_code_link.api)
                    : source_code_link;
                  if (link && link !== "#") {
                    window.open(link, "_blank");
                  }
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                title="GitHub Repository"
              >
                <img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/github.svg"
                  alt="github"
                  className="w-1/2 h-1/2 object-contain filter invert"
                />
              </div>
            )}
            {documentation_link && documentation_link !== "#" && (
              <div
                onClick={() => window.open(documentation_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
                title="Documentation"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>

        <div className="mt-4 sm:mt-5 relative z-10">
          <h3 className="text-white font-bold text-lg sm:text-xl md:text-[24px] group-hover:text-accent transition-colors">{name}</h3>
          <p className="mt-2 text-secondary text-xs sm:text-sm md:text-[14px] leading-relaxed">
            {language === "da" ? description : descriptionEn}
          </p>
        </div>

        <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
          {tags.map((tag) => (
            <motion.p
              key={tag.name}
              className={`text-[14px] ${tag.color} cursor-default`}
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
