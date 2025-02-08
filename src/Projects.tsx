import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa"; // Sexy Overlay Icon

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "A sleek portfolio showcasing my work.",
    image: "/MainPortfolio.png",
    link: "#",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Sample portfolio website using react and material ui",
    image: "/image.png",
    link: "#",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A dynamic e-commerce store.",
    image: "/ecommers.png",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      id="Projects"
      className="w-full px-6 lg:px-40 flex flex-col py-10 dark:bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Header */}
      <div className="contactHead text-center mb-12">
        <motion.h1
          className="text-[2rem] font-bold font-sans dark:text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects & Creations
          <div className="line"></div>
        </motion.h1>
        <motion.p
          className="text-[17px] font-['Poppins', sans-serif] dark:text-white text-gray-600 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A glimpse into the websites and applications I have developed using
          modern technologies.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Sexy Overlay with Fire Icon */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-md 
                flex items-center justify-center opacity-100 transition-opacity duration-500 
                group-hover:opacity-0"
            >
              <FaFire className="w-12 h-12 text-white opacity-70" />
            </div>

            {/* Hover Effect: Expanding Overlay with Details */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center 
                      bg-gradient-to-t from-black/90 via-black/70 to-black/40 
                      opacity-0 backdrop-blur-sm transition-all duration-500 ease-in-out group-hover:opacity-100"
            >
              <h3 className="text-lg font-extrabold text-white drop-shadow-lg">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mt-2 px-4 text-center drop-shadow-md">
                {project.description}
              </p>

              {/* 🚀 Pill-Shaped Glowing Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-4 px-6 py-2 text-white text-sm font-semibold 
                        rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 
                        shadow-lg transition-all duration-300 
                        hover:scale-105 hover:shadow-xl 
                        hover:from-cyan-400 hover:to-blue-500 
                        dark:shadow-[0_0_15px_rgba(0,200,255,0.5)]"
              >
                🚀 Visit Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
