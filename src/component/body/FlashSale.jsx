/* eslint-disable */
import { useState, useEffect } from "react";
import RedTitle from "../../common/RedTitle";
import Arrows from "../../common/Arrows";
import ViewAllBtn from "../../common/ViewAllBtn";
import countDown from "../../common/functions/countDown";
import { motion } from "framer-motion"; 
import { ITEMS } from "../../common/functions/items";
import i18n from "../../common/Translation";
import FlashSaleItem from "../../common/FlashSaleItem";

const FlashSale = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState( countDown(new Date("2024-05-27T00:00:00")) );
  const saleItems = ITEMS.filter((item) => item.discount !== "");
  const duplicatedItems = Array.from({ length: 4 }, () => saleItems).flat(); // Updated to duplicate items three times

  const handlePrevItem = (state = 1) => {
    if (currentIndex <= -(duplicatedItems.length - 2)) {
      setCurrentIndex(0);
    }
    setCurrentIndex((prevIndex) => prevIndex - state);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(countDown(new Date("2024-05-27T00:00:00")));
      setCurrentIndex((prevIndex) => (prevIndex - 1) % duplicatedItems.length);
      handlePrevItem();
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className=" p-4">
        <RedTitle title={i18n.t("homeSections.row2.0")} />
        <div className="flex md:justify-between items-center md:mr-6 md:mb-4">
          <div className="flex gap-20 flex-col md:flex-row ">
            <h2 className="text-2xl md:text-3xl font-semibold ">
              {i18n.t("homeSections.row2.1")}
            </h2>
            <div className="font-inter font-bold text-2xl md:text-3xl relative">
              <span className="absolute text-xs font-poppins bottom-full left-0.5">
                {i18n.t("homeSections.row2.2")}
              </span>
              <span>{timeLeft.days}</span>
              <span className="text-red-400 mx-4">:</span>
              <span className="absolute text-xs font-poppins bottom-full left-1/4">
                {i18n.t("homeSections.row2.3")}
              </span>
              <span>{timeLeft.hours}</span>
              <span className="text-red-400 mx-4">:</span>
              <span className="absolute text-xs font-poppins bottom-full left-1/2">
                {i18n.t("homeSections.row2.4")}
              </span>
              <span>{timeLeft.minutes}</span>
              <span className="text-red-400 mx-4">:</span>
              <span className="absolute text-xs font-poppins bottom-full left-3/4">
                {i18n.t("homeSections.row2.5")}
              </span>
              <span>{timeLeft.seconds}</span>
            </div>
          </div>
          <Arrows/>
        </div>

        <div className="scrollbar relative  overflow-x-hidden hover:overflow-scroll  overflow-y-hidden flex justify-start items-center h-[500px] md:h-[400px] ">
          <motion.div
            className="flex gap-2 md:gap-12"
            initial={{ opacity: 0.5, x: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 8 },
              x: currentIndex * 100,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 80 }}
          >
            {duplicatedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 5 }}
                whileHover={{ scale: 1.1 }}
              >
                <FlashSaleItem
                  item={item}
                  index={index}
                  totalItems={duplicatedItems.length}
                  stars={item.stars}
                  rates={item.rates}
                />
              </motion.div> 
            ))}
          </motion.div>
        </div>
        {/* Motion */}
      </div>
      <div className="flex justify-center">
        <ViewAllBtn name={i18n.t("redButtons.viewAllProducts")} />
      </div>
      <hr className="mx-40 border-gray-300 md:mt-16" />
    </>
  );
};

export default FlashSale;
