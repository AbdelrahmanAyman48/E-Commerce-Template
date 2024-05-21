import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import RedTitle from "../../common/RedTitle";
import i18n from "../../common/Translation";
import Arrows from "../../common/Arrows";
import ViewAllBtn from "../../common/ViewAllBtn";
import FlashSaleItem from "../../common/FlashSaleItem";
/* eslint-disable */

const AllProducts = ({ items }) => {
// const AllProducts = () => {
  return (
    <>
      <div className="mx-2 xl:mx-0 my-12">
        <RedTitle title={i18n.t("allProducts.redTitle")} />
        <div className="flex justify-between items-center md:mr-6 md:mb-4">
          <h2 className="text-xl md:text-3xl font-semibold ">
            {i18n.t("allProducts.title")}
          </h2>
          <Arrows />
        </div>
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {items.slice(0, 8).map((item, index) => (
              <Grid item key={item.id}>
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={items.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className=" flex justify-center">
        <ViewAllBtn name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </>
  );
};

AllProducts.propTypes = {
  items: PropTypes.array.isRequired,
};

export default AllProducts;
