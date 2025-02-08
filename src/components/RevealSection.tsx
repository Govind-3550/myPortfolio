import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({ children, className }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // ❌ Removed triggerOnce so animation happens every time
    threshold: 0.2, // Triggers when 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Reset animation when out of view
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealSection;
