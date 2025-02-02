import { useEffect, useState } from "react";

const DynamicHeading = () => {
  const headingMsg = ["Govind Vishwakarma", "Web Developer", "UI Specialist"];
  const [currentHeading, setCurrentHeading] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Trigger fade-out animation
      setTimeout(() => {
        setCurrentHeading((prev) => (prev + 1) % headingMsg.length); // Change content
        setFade(false); // Trigger fade-in animation
      }, 500);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []); // ✅ Dependency array should be empty

  return (
    <div>
      <div className="marquee-container">
        <h1
          className={`text-yellow-600 transition-all duration-500 ${
            fade ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {headingMsg[currentHeading]}
        </h1>
      </div>
    </div>
  );
};

export default DynamicHeading;
