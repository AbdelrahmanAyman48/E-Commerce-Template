/* eslint-disable */

import PropTypes from "prop-types";
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
// const Arrows = ({ handlePrevItem, handleNextItem }) => {
const Arrows = () => {
  return (
    <div className="absolute  right-8 md:right-32 gap-2">
      <button
        // onClick={handlePrevItem}
        className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 focus:outline-none"
      >
        <ChooseSVG name={'Left'}/>
      </button>
      <button
        // onClick={handleNextItem}
        className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 focus:outline-none"
      >
      <ChooseSVG name={'RightBlack'}/>
      </button>
    </div>
  );
};
export default Arrows;

// Arrows.propTypes = {
//   handlePrevItem: PropTypes.func.isRequired,
//   handleNextItem: PropTypes.func.isRequired,
// };
