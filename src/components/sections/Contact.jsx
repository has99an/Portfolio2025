import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../../utils/motion";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../constants/translations";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";

const SectionDivider = () => (
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
);

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS on component mount
  // Credentials hentes fra environment variables (se .env fil)
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    } else {
      console.error("EmailJS Public Key mangler! Tjek .env filen.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const templateParams = {
        from_name: form.name,
        to_name: "Ahmad Almousa",
        from_email: form.email,
        to_email: "aalmousa563@gmail.com",
        message: form.message,
        reply_to: form.email,
      };

      console.log("Sending email with params:", templateParams);

      // Hent credentials fra environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials mangler! Tjek .env filen.");
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log("EmailJS Success:", result);
      setLoading(false);
      setSubmitStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("EmailJS Error Details:", {
        text: error.text,
        status: error.status,
        message: error.message,
        fullError: error,
      });
      
      setLoading(false);
      setSubmitStatus("error");
      
      // Set user-friendly error message
      if (error.text) {
        setErrorMessage(error.text);
      } else if (error.status === 0) {
        setErrorMessage("Netværksfejl. Tjek din internetforbindelse.");
      } else {
        setErrorMessage(`Fejl ${error.status || "ukendt"}. Prøv igen senere.`);
      }
      
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage("");
      }, 8000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-20">
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
            {t.contact.subtitle}
          </p>
          <h2 className="text-white font-black text-[28px] xs:text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] mt-2">
            {t.contact.title}
          </h2>
        </motion.div>

        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-6 md:gap-10"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-secondary text-lg mb-4 leading-relaxed">
              {t.contact.description}
            </p>
            <div className="mt-4 sm:mt-6 space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-accent to-accent-dark flex items-center justify-center shadow-lg flex-shrink-0">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-secondary text-xs sm:text-sm">{t.contact.email}</p>
                  <p className="text-white text-sm sm:text-base break-all">aalmousa563@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeIn("left", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-1 glass rounded-xl p-4 sm:p-6"
          >
            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="name"
                className="block text-white text-xs sm:text-sm font-medium mb-2"
              >
                {t.contact.name}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-black-100 border border-white/10 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="mb-3 sm:mb-4">
              <label
                htmlFor="email"
                className="block text-white text-xs sm:text-sm font-medium mb-2"
              >
                {t.contact.email}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-black-100 border border-white/10 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div className="mb-4 sm:mb-6">
              <label
                htmlFor="message"
                className="block text-white text-xs sm:text-sm font-medium mb-2"
              >
                {t.contact.message}
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-black-100 border border-white/10 rounded-lg text-white placeholder-secondary focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={loading}
            >
              {loading ? t.contact.sending : t.contact.sendBtn}
            </Button>

            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-green-400 text-sm text-center"
              >
                {t.contact.success}
              </motion.p>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4"
              >
                <p className="text-red-400 text-sm text-center">
                  {t.contact.error}
                </p>
                {errorMessage && (
                  <p className="text-red-300 text-xs text-center mt-2 opacity-75">
                    {errorMessage}
                  </p>
                )}
                <p className="text-secondary text-xs text-center mt-3">
                  Du kan også kontakte mig direkte på{" "}
                  <a
                    href="mailto:aalmousa563@gmail.com"
                    className="text-accent hover:underline"
                  >
                    aalmousa563@gmail.com
                  </a>
                </p>
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
