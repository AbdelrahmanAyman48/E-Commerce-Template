import React, { useEffect, useState } from "react";
import { Fab } from "@mui/material";


import PropTypes from 'prop-types';
import { svgArray } from "./ChooseSVG";
// Component to choose SVG from the array
const ChooseSVG = ({ name }) => {
  // Find the SVG object by name
  const selectedSVG = svgArray.find(svgObj => svgObj.name === name);
  
  // Render the selected SVG
  return selectedSVG ? selectedSVG.svg : <div>SVG not found</div>;
};
// PropTypes validation
ChooseSVG.propTypes = {
  name: PropTypes.string.isRequired,
};

{/* <ChooseSVG name={'Arrow'} />  */}



function ScrollToTop() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <React.Fragment>
      {showScrollButton && (
        <div className="fixed bottom-5 md:bottom-10 right-[42%] md:right-20 z-10 ">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-20 "></span>
          <Fab aria-label="scroll-to-top" onClick={scrollToTop}>
            <ChooseSVG name={'Up'}  />
          </Fab>
        </div>
      )}
    </React.Fragment>
  );
}

export default ScrollToTop;
