import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import i18n from "../../common/Translation";
import RedTitle from "../../common/RedTitle";
import Arrows from "../../common/Arrows";
import { svgArray } from "../../common/ChooseSVG";
/* eslint-disable */

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
const Category = ({ icon, name }) => (
  <Link to="category">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" w-full hover:animate-pulse flex gap-4 items-center justify-center flex-col bg-white  py-8 rounded-lg border border-gray-300 transition duration-300 hover:bg-cyan-400 hover:invert  hover:shadow-xl hover:-translate-y-2 "
    >
      <div>{icon}</div>
      <div className="text-lg">{name}</div>
    </button>
  </Link>
);

const CategoryList = () => {
  const categories = [
    {
      icon: (
        <ChooseSVG name={'Phones'} /> 
      ),
      name: i18n.t("category.categories.0"),
    },
    {
      icon: (
        <ChooseSVG name={'Computer'} /> 
      ),
      name: i18n.t("category.categories.1"),
    },
    {
      icon: (
        <ChooseSVG name={'Watch'} /> 
      ),
      name: i18n.t("category.categories.2"),
    },
    {
      icon: (
        <ChooseSVG name={'Camera'} /> 
      ),
      name: i18n.t("category.categories.3"),
    },
    {
      icon: (
        <ChooseSVG name={'HeadPhone'} /> 
      ),
      name: i18n.t("category.categories.4"),
    },
    {
      icon: (
        <ChooseSVG name={'Gaming'} /> 
      ),
      name: i18n.t("category.categories.5"),
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {categories.map((category, index) => (
        <Grid item key={index} xs={8} sm={6} md={4} lg={2} xl={2}>
          <Category icon={category.icon} name={category.name} />
        </Grid>
      ))}
    </Grid>
  );
};

const Categories = () => {
  return (
    <div className="py-12 ">
      <RedTitle title={i18n.t("category.redTitle")} />
      <div className="flex gap-20 flex-col md:flex-row  mb-8">
        <h2 className="text-xl md:text-3xl font-semibold ">
          {i18n.t("category.title")}
        </h2>
        <Arrows />
      </div>
      <CategoryList />
    </div>
  );
};

export default Categories;

Category.propTypes = {
  icon: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
