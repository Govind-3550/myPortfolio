import { FaFileAlt } from "react-icons/fa";
import DynamicHeading from "./dynamicHeading";
import { motion } from "framer-motion";
// import DownloadButton from "./DownloadBtn";
interface prop {
  heading : string;
  description : string; 
}
const SectionOne = ({heading , description}:prop) => {
  return (
    <motion.div
    id="About"
    className="lgsectionOne grid dark:bg-gray-800 dark:text-white py-10 items-center lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  w-full lg:px-40  sm:w-auto  sm:justify-center"
    initial={{ opacity: 0, y: 50 }} // Initial state
    whileInView={{ opacity: 1, y: 0 }} // Animate when in view
    viewport={{ once: true, amount: 0.5 }} // Trigger only once when 50% of the section is visible
    transition={{ duration: 0.8 }} // Animation duration
  >
      <div className="sectionOneInfo flex flex-col gap-5  container m-auto px-5">
          <div className="welcomeText dark:text-white  font-[#eee] font-['Poppins', sans-serif] text-gray-600 font-bold">
            Welcome to my portfolio website!
          </div>
          <div className="sectionOneHeading  font-[sans-sarif] text-4xl font-bold">
             <div className="flex flex-col xl:flex-row  gap-2 lg:whitespace-nowrap"><span>{heading}</span><DynamicHeading/></div> 
          </div>
          
          <div className="sectionOneDesc font-['Poppins', sans-serif] dark:text-white text-gray-600">
              {description}
          </div>
          <div className="sectionOneDownload ">
            <button id="downloadResume" className="resumeBtn flex items-center justify-center gap-1 opacity-[77.5%] rounded-full bg-[#eee] px-[1rem] py-2 font-sans text-sm  font-medium  transition duration-300 hover:text-blue-600">
            <a  href="/Govind Bharat Vishwakarma_Resume(November_2024_Common) (1).pdf" className="flex items-center justify-center gap-1" download="Govind_Vishwakarma_resume.pdf" ><FaFileAlt />
            Download Resume </a>

            </button>
              
                        {/* <DownloadButton/> */}

          </div> 
      </div>
      <div className="sectionOneImg container m-auto">
      <img src="/sectionOne.svg" alt="SVG Image"></img>
      </div>
    </motion.div>
  )
}

export default SectionOne