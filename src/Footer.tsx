import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-100 py-6 text-center text-gray-600 dark:bg-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <p>Designed with ❤️ by Govind Vishwakarma</p>
    </motion.footer>
  );
};

export default Footer;
