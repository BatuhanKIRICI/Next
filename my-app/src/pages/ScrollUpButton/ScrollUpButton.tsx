import React from "react";
import { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setDisplay(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setDisplay(false);
  };

  return (
    <div>
      {display && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-700 hover:bg-blue-700
         text-white font-bold py-2 px-4 rounded-[100px]"
        >
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 
          12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 
          12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
