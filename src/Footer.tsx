import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="relative bg-gray-900 text-white py-8 px-4 text-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-10 blur-3xl"></div>

      {/* Footer Content */}
      <div className="relative z-10">
        <p className="text-lg font-semibold tracking-wider">
          Designed with <span className="text-pink-400">❤️</span> by Govind Vishwakarma
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-4">
          {[
            { icon: <FaGithub />, link: "https://github.com/Govind-3550" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/govind-vishwakarma-2157a7258/" },
            { icon: <FaTwitter />, link: "https://twitter.com/govindv" },
            { icon: <FaEnvelope />, link: "mailto:govindb2922@gmail.com" },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-400 transition-all"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Neon Glow Animated Border */}
        <div className="mt-6 w-36 mx-auto h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-glow"></div>

        {/* Copyright */}
        <p className="mt-4 text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Govind Vishwakarma. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
