import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <motion.div
      id="Resume"
      className=" text-gray-900 font-sans w-full px-6 lg:px-40 py-10 dark:bg-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <header className="contactHead text-center">
        <motion.h1
          className="h-auto font-bold font-sans text-[2rem] dark:text-white"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Professional Path
        </motion.h1>
        <span className="line"></span>
        <motion.p
          className="text-[17px] font-['Poppins', sans-serif] dark:text-white text-gray-600 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A timeline of my academic journey and professional experience,
          showcasing the skills and knowledge I've gained along the way.
        </motion.p>
      </header>

      {/* TIMELINE SECTION */}
      <section className="relative py-10">
        <div className="container relative mx-auto px-4">
          <div className="timeline-line absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform"></div>

          {/* EXPERIENCE SECTION */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-1 dark:bg-gray-800">
            {/* Experience Item 1 */}
            <motion.div
              className="fade-slide-in relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="pulse-glow absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500"></div>
              <div className="ml-auto w-full rounded-lg max-w-lg bg-gray-100 p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-blue-500">
                  Junior Web Developer
                </h3>
                <span className="text-sm text-gray-500">
                  Jan 2023 - Present
                </span>
                <p className="mt-2 text-gray-700">
                  Techno Purple IT Solutions Pvt Ltd <br />
                  Designed and developed responsive front-end interfaces using
                  HTML, CSS, JavaScript, ReactJS, and Bootstrap. Implemented
                  over 100+ dynamic features and bug fixes.
                </p>
              </div>
            </motion.div>
          </div>

          {/* EDUCATION SECTION */}
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-1 dark:bg-gray-800">
            {/* Education Item 1 */}
            <motion.div
              className="fade-slide-in relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="pulse-glow absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-green-500"></div>
              <div className="mr-auto w-full max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-green-500">
                  M.Sc. IT (AI Specialization)
                </h3>
                <span className="text-sm text-gray-500">2022 - 2024</span>
                <p className="mt-2 text-gray-700">
                  SDSM College (University of Mumbai) <br />
                  Focused on artificial intelligence and advanced IT concepts.
                </p>
              </div>
            </motion.div>

            {/* Education Item 2 */}
            <motion.div
              className="fade-slide-in relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="pulse-glow absolute left-1/2 top-0 h-6 w-6 -translate-x-1/2 transform rounded-full border-4 border-white bg-purple-500"></div>
              <div className="ml-auto w-full max-w-lg rounded-lg bg-gray-100 p-6 shadow-lg transition-transform duration-500 hover:scale-105">
                <h3 className="text-xl font-bold text-purple-500">B.Sc. IT</h3>
                <span className="text-sm text-gray-500">2019 - 2022</span>
                <p className="mt-2 text-gray-700">
                  St. John College of Humanities and Sciences (University of
                  Mumbai) <br />
                  Studied information technology fundamentals and developed a
                  strong programming foundation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Timeline;
