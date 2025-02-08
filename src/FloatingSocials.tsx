import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const FloatingSocials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footer = document.querySelector("footer");
    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <motion.div
      className={`fixed bottom-6 right-6 flex flex-col gap-4 p-3 rounded-xl  dark:shadow-[0_0_10px_rgba(255,255,255,0.2)]
      backdrop-blur-xl transition-all duration-500 border border-gray-300 dark:border-gray-700 
      shadow-xl dark:shadow-gray-900 
      bg-white/80 dark:bg-gray-900/80
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {[
        { icon: <FaGithub />, link: "https://github.com/Govind-3550", label: "GitHub" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/govind-vishwakarma-2157a7258/", label: "LinkedIn" },
        { icon: <FaTwitter />, link: "https://twitter.com/govindv", label: "Twitter" },
        { icon: <FaEnvelope />, link: "mailto:govindb2922@gmail.com", label: "Email" },
      ].map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="text-2xl text-gray-800 dark:text-white hover:text-pink-500 
          dark:hover:text-blue-400 transition-all"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingSocials;
