/* eslint-disable react/prop-types */
import { useState } from "react";
import { Box } from "@mui/material";
import PaginationIndicator from "../../common/PaginationIndicator";

import { svgArray } from "../../common/ChooseSVG";
import i18n from "../../common/Translation";
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

const teamMembersData = [
  {
    name: i18n.t("aboutPage.name1"),
    role: i18n.t("aboutPage.job3"),
    image: <ChooseSVG name={'Person1'} /> ,
  },
  {
    name: i18n.t("aboutPage.name2"),
    role: i18n.t("aboutPage.job1"),
    image: <ChooseSVG name={'Person2'} />,
  },
  {
    name: i18n.t("aboutPage.name4"),
    role: i18n.t("aboutPage.job2"),
    image: <ChooseSVG name={'Person1'} />,
  },
  {
    name: i18n.t("aboutPage.name3"),
    role: i18n.t("aboutPage.job3"),
    image: <ChooseSVG name={'Person2'} />,
  },
  {
    name: i18n.t("aboutPage.name2"),
    role: i18n.t("aboutPage.job1"),
    image: <ChooseSVG name={'Person1'} />,
  },
  {
    name: i18n.t("aboutPage.name1"),
    role: i18n.t("aboutPage.job4"),
    image: <ChooseSVG name={'Person2'} />,
  },
  {
    name: i18n.t("aboutPage.name3"),
    role: i18n.t("aboutPage.job2"),
    image: <ChooseSVG name={'Person1'} />,
  },
];

const TeamMember = ({ name, role, image }) => {
  return (
    <Box className="flex gap-4 flex-col ">
      <Box className="bg-gray-200 rounded-xl w-full md:w-96 flex items-center justify-center">
        {image}
      </Box>
      <Box className="flex md:mx-10  gap-4 items-center md:items-start flex-col ">
        <h2 className="font-bold text-3xl">{name}</h2>
        <p className="text-base">{role}</p>
        <>
          <a href="#">
          <ChooseSVG name={'Social'} /> 
          </a>
        </>
      </Box>
    </Box>
  );
};

const TeamMembers = () => {
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div>
      <div className=" md:mx-32 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {teamMembersData
          .slice(startIndex, startIndex + 3)
          .map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
      </div>

      <div className="mx-8 md:mx-32 mt-8">
        <PaginationIndicator
          activeIndex={startIndex}
          onClick={setStartIndex}
          data={teamMembersData}
        />
      </div>
    </div>
  );
};

export default TeamMembers;
