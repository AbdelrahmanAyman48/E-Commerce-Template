
import { Link } from "react-router-dom";
import { ITEMS } from "../../common/functions/items";

import PropTypes from 'prop-types';
import i18n from "../../common/Translation";
import { svgArray } from "../../common/ChooseSVG";
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
const Row1 = () => {
  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.17.title")
  );

  return (
    <div className="flex flex-row ">
      {/* Left Sidebar */}
      <div className=" text-gray-450 w-64 flex-shrink-0 hidden xl:block">
        <nav className="py-6">
          <ul>
            <li className="flex justify-between items-center px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.0")}
              </Link>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black"/>
</svg>
<div> </div>
            </li>
            <li className="flex justify-between items-center px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8  ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.1" )}
              </Link>
              <div> </div>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z" fill="black"/>
                </svg>
                <div> </div>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8  ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.2")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.3")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.4")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.5")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.6")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.7")}{" "}
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer hover:underline hover:underline-offset-8   ease-in-out  duration-300 transform hover:translate-x-4">
              <Link to="/allProducts">
                {i18n.t("homeSections.row1.col1.8")}{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Vertical Line */}
      <div className="border-l border-gray-300 hidden xl:block"></div>

      {/* Main Content */}
      <div
        className="flex xl:my-10 xl:ml-10 xl:gap-16 items-center justify-between flex-col-reverse 
      md:flex-row  md:h-96 bg-black text-white w-full "
      >
        <div className="flex flex-col md:max-w-72 gap-5 items-center md:items-start justify-center md:ml-16">
        <div className="max-w-72 flex justify-center items-center gap-6">
        <ChooseSVG name={'AppleLogo'} />
            <h1 className="text-lg">{i18n.t("homeSections.row1.col2.0")}</h1>
          </div>
          <h2 className="text-2xl md:text-5xl leading-10">
            {i18n.t("homeSections.row1.col2.1")}
          </h2>
          <Link to="/allProducts">
            <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2 px-6 focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
              <span>{i18n.t("homeSections.row1.col2.2")}</span>
              <ChooseSVG name={'RightWhite'} />
            </button>
          </Link>
        </div>
        <div className=" relative overflow-hidden mt-4 ">
          <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
            <Link to="/allProducts">
              <img
                src={dealItem.imageSrc}
                alt={dealItem.title}
                className="transition-transform duration-300 transform translate-y-4 hover:translate-y-0 hover:scale-102 hover:motion-safe:animate-pulse"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;
