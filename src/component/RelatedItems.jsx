/* eslint-disable react/prop-types */
import { Grid } from "@mui/material";
import { ITEMS } from "../common/functions/items";
import i18n from "../common/Translation";
import FlashSaleItem from "../common/FlashSaleItem";
import ViewAllBtn from "../common/ViewAllBtn";
import RedTitle from "../common/RedTitle";

const RelatedItems = ({ selectedProduct }) => {
  const relatedItems = ITEMS.filter(
    (item) =>
      item.type == selectedProduct.type && item.title !== selectedProduct.title
  );

  return (
    <>
      <div className="mx-auto md:mx-2">
        <RedTitle title={i18n.t("productPage.relatedItems")} />
        <div className="relative mt-10 flex flex-row gap-2 md:gap-12 transition-transform duration-300 transform ">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {relatedItems.map((item, index) => (
              <Grid item key={item.id}>
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={relatedItems.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <ViewAllBtn name={i18n.t("redButtons.viewAllProducts")} />
      </div>
    </>
  );
};

export default RelatedItems;
