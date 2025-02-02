import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./themeSlice";
import { RootState } from "./store";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [toggleState, setToggleState] = useState(darkMode);

  useEffect(() => {
    setToggleState(darkMode); // Ensures proper reactivity
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => dispatch(toggleDarkMode())}
      key={toggleState ? "dark" : "light"} // Forces re-render to ensure class updates
      className="darkMode relative flex items-center w-14 h-7 rounded-full px-1 py-1 
                 bg-gray-300 dark:bg-gray-800 transition-all duration-300 
                 shadow-md hover:scale-105"
    >
      {/* Toggle Circle */}
      <span
        className={`absolute w-5 h-5 flex items-center justify-center 
                    rounded-full transition-all duration-300 transform
                    ${darkMode ? "translate-x-7 bg-yellow-400" : "translate-x-0 bg-white"}`}
      >
        {darkMode ? (
          <FaMoon size={10} color ="black" />
        ) : (
          <FaSun size={10} color ="orange" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
