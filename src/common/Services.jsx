/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import i18n from "./Translation";

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
const Service = ({ icon, value, description }) => {
  return (
    <Box className="flex max-w-xs gap-6 items-center justify-center flex-col bg-white px-4 py-8  ">
      {icon}
      <div className="font-bold  text-xl">{value}</div>
      <p className="text-base ">{description}</p>
    </Box>
  );
};
const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8  ">
      <div className=" text-center md:text-start mx-8  grid grid-cols-1 lg:grid-cols-3 md:gap-20 ">
        <Service
          icon={
            <ChooseSVG name={'Truck'} />
          }
          value={i18n.t("services.1.value")}
          description={i18n.t("services.1.description")}
        />
        <Service
          icon={
            <ChooseSVG name={'Headphone'} />
          }
          value={i18n.t("services.2.value")}
          description={i18n.t("services.2.description")}
        />
        <Service
          icon={
            <ChooseSVG name={'Armor'} />
          }
          value={i18n.t("services.3.value")}
          description={i18n.t("services.3.description")}
        />
      </div>
    </div>
  );
};
export default Services;
