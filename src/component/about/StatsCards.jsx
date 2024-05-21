/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import i18n from "../../common/Translation";
import { svgArray } from "../../common/ChooseSVG";
import PropTypes from 'prop-types';
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
const StatsCard = ({ icon, value, description }) => {
  return (
    <Box className="flex max-w-xs gap-4 items-center justify-center flex-col bg-white px-4 py-8 rounded-lg border border-gray-300 transition duration-300 hover:invert hover:bg-cyan-400  hover:shadow-xl">
      <Box className="p-2 rounded-full bg-gray-300">
        <Box className="text-4xl  invert  p-2 rounded-full bg-white  ">
          {icon}
        </Box>
      </Box>
      <div className="font-bold text-3xl">{value}</div>
      <p className="text-base ">{description}</p>
    </Box>
  );
};
const StatsCards = () => {
  return (
    <div className="mx-8 md:mx-32 grid grid-cols-1 lg:grid-cols-4 gap-8 ">
      <StatsCard
        icon={
          <ChooseSVG name={'Home'} /> 
        }
        value={i18n.t("aboutPage.k1")}
        description={i18n.t("aboutPage.card1")}
      />
      <StatsCard
        icon={
          <ChooseSVG name={'Dollar'} /> 
        }
        value={i18n.t("aboutPage.k2")}
        description={i18n.t("aboutPage.card2")}
      />
      <StatsCard
        icon={
          <ChooseSVG name={'Bag'} /> 
        }
        value={i18n.t("aboutPage.k3")}
        description={i18n.t("aboutPage.card3")}
      />
      <StatsCard
        icon={
          <ChooseSVG name={'DolBag'} /> 
        }
        value={i18n.t("aboutPage.k4")}
        description={i18n.t("aboutPage.card4")}
      />
    </div>
  );
};
export default StatsCards;
