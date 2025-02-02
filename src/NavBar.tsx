import { ReactNode, useEffect, useState } from "react";
// import { FaRegMoon } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { Link } from "react-scroll"; // Importing scroll library
import { motion } from "framer-motion";

interface Props {
  logo: ReactNode;
  liName: string[];
}

function NavBar({ liName, logo }: Props) {
  let [isScrolled, setScroll] = useState(false);
  let [isMenuOpen, setMenuOpen] = useState(false); // State to control mobile menu visibility
  let [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen); // Toggle mobile menu

  return (
    <>
      <motion.nav
        className={`flex cursor-pointer lg:justify-center justify-between dark:bg-gray-800 dark:text-white lg:gap-28 items-center h-14 sticky top-0 z-[9999] px-4 py-2 ${
          isScrolled ? "bg-white shadow-md" : ""
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="flex justify-start items-center gap-1 font-medium"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {logo}
          <span>Govind</span>
        </motion.span>
        
        <ul className="hidden lg:flex justify-center space-x-8 items-center">
          {liName.map((val) => {
            return (
              <li className="group" key={val}>
                <Link
                  to={val}
                  smooth={true}
                  spy={true}
                  duration={1000}
                  offset={-50}
                  className={`relative font-medium transition duration-300 group-hover:text-blue-600 ${
                    activeSection === val ? "text-blue-600" : "sample"
                  }`}
                  onSetActive={() => setActiveSection(val)} // Set active section
                >
                  {val}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            );
          })}
        </ul>
        <DarkModeToggle/>

        {/* <span className="flex justify-end items-center gap-1 font-medium">
          <FaRegMoon />
          <span  className="text-nowrap">Color Mode</span>
        </span> */}

        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </div>
      </motion.nav>

      <motion.div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md py-4 px-6 space-y-4 sticky top-0 z-[9999]`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {liName.map((val) => {
          return (
            <Link
              key={val}
              to={val}
              smooth={true}
              spy={true}
              duration={1000}
              offset={-150}
              className="block text-black font-medium hover:text-blue-600 transition duration-300"
            >
              {val}
            </Link>
          );
        })}
        <DarkModeToggle />
      </motion.div>
    </>
  );
}

export default NavBar;
