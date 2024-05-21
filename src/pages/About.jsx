/* eslint-disable react/prop-types */

import TeamMembers from "../component/about/TeamMembers.jsx";
import Services from "../common/Services.jsx";
import PropTypes from 'prop-types';
import i18n from "../common/Translation.jsx";
import StatsCards from "../component/about/StatsCards.jsx";
import BreadCrumb from "../common/BreadCrumb.jsx";
import { svgArray } from "../common/ChooseSVG.jsx";


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

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-start mt-48 ">
        <div className="md:mx-40">
          <BreadCrumb
            path={`${i18n.t("home")}/${i18n.t("aboutPage.title")}`}
          />
        </div>

        <div className="flex justify-center md:justify-between items-center md:mt-10  my-24 md:mb-36 ">
          <div className="flex flex-col gap-10 items-center md:items-start justify-center max-w-lg mx-8 md:mx-40">
            <h1 className="text-5xl font-bold font-inter">
              {i18n.t("aboutPage.story")}
            </h1>
            <p className="text-base text-center md:text-start">
              {i18n.t("aboutPage.paragraph1")}
            </p>
            <p className="text-base text-center md:text-start">
              {i18n.t("aboutPage.paragraph2")}
            </p>
          </div>
          <ChooseSVG name={'Pink'} />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-8">
        <StatsCards />
      </div>

      <div className="flex flex-col items-center justify-center gap-8 my-36 ">
        <TeamMembers />
      </div>
      <Services />
    </>
  );
};
export default About;
