import { motion } from "framer-motion";

// Example Data with Demo Images and SVG Icons
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "A fun and creative web app.",
    image: "https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Project+1",
    link: "#",
    svgIcon: "M10 20v-6h5v6h3v-8h2L12 3 2 12h2v8z", // Example SVG icon path for "Link"
  },
  {
    id: 2,
    title: "Project 2",
    description: "A sleek portfolio showcasing my work.",
    image: "https://via.placeholder.com/600x400/33B5FF/FFFFFF?text=Project+2",
    link: "#",
    svgIcon: "M10 20v-6h5v6h3v-8h2L12 3 2 12h2v8z",
  },
  {
    id: 3,
    title: "Project 3",
    description: "A dynamic e-commerce store.",
    image: "https://via.placeholder.com/600x400/4CAF50/FFFFFF?text=Project+3",
    link: "#",
    svgIcon: "M10 20v-6h5v6h3v-8h2L12 3 2 12h2v8z",
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      id="Projects"
      className="w-full px-6 lg:px-40 flex flex-col py-10 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="relative bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Glowing Border Animation with Soothing Bluish Gradient */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-lg animate-border group-hover:border-blue-600"
              style={{
                background:
                  "linear-gradient(45deg, rgba(170, 200, 255, 0.8), rgba(109, 169, 224, 0.7), rgba(77, 133, 181, 0.6), rgba(56, 119, 164, 0.5))",
                backgroundSize: "400% 400%",
                animation: "borderAnimation 4s ease infinite",
              }}
            ></motion.div>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover rounded-md"
            />

            {/* Project Content */}
            <div className="mt-4 z-10 relative">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md hover:ring-2 hover:ring-blue-300"
              >
                <i className="fas fa-link mr-2 text-lg"></i>
                <span className="font-medium text-sm">View Project</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
