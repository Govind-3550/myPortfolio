import { useState } from "react";
import { FaFileAlt, FaDownload } from "react-icons/fa";

const DownloadButton = () => {
  const [hover, setHover] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setHover(true);
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure your file is in the public folder
    link.download = "Govind_Resume.pdf"; // Change filename as needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      id="downloadResume"
      className="relative resumeBtn flex items-center justify-center gap-1 opacity-[77.5%] rounded-full bg-[#eee] px-[1rem] py-2 font-sans text-sm font-medium transition duration-300 hover:text-blue-600 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleDownload}
    >
      {!hover ? (
        <>
          <FaFileAlt />
          Download Resume
        </>
      ) : (
        <div
          className="absolute text-blue-600 transition-transform duration-300 scale-125 animate-shrink"
          style={{ left: position.x, top: position.y, transform: "translate(-50%, -50%)" }}
        >
          <FaDownload />
        </div>
      )}
    </button>
  );
};

export default DownloadButton;
