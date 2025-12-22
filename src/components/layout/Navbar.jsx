import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../../constants";
import { translations } from "../../constants/translations";
import { useLanguage } from "../../context/LanguageContext";
import { scrollToSection } from "../../utils/helpers";
import { logo } from "../../assets";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <img src={logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent whitespace-nowrap">
              Ahmad Almousa
            </h1>
          </motion.div>

          <ul className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(link.id);
                    scrollToSection(link.id);
                  }}
                  className={`text-sm font-medium transition-colors relative ${
                    active === link.id
                      ? "text-accent"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {t.nav[link.id]}
                  {active === link.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg glass text-xs sm:text-sm font-medium text-white hover:text-accent transition-colors flex items-center gap-1.5 sm:gap-2"
            >
              <span className="text-sm sm:text-base">{language === "da" ? "🇩🇰" : "🇬🇧"}</span>
              <span>{language === "da" ? "DA" : "EN"}</span>
            </motion.button>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setToggle(!toggle)}
                className="text-white focus:outline-none"
              >
                {toggle ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(link.id);
                      setToggle(false);
                      scrollToSection(link.id);
                    }}
                    className={`text-base font-medium ${
                      active === link.id
                        ? "text-accent"
                        : "text-secondary"
                    }`}
                  >
                    {t.nav[link.id]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
