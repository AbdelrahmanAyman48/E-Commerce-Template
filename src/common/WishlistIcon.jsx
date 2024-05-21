/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { useWishlist } from "../context/WishlistContext";
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
const WishlistIcon = ({ selectedProduct, style = "" }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

  useEffect(() => {
    const wishlistItemExists = wishlistItems.some(
      (wishlistItem) => wishlistItem.id === selectedProduct.id
    );
    setIsInWishlist(wishlistItemExists);
  }, [wishlistItems, selectedProduct.id]);

  // Function to remove item from wishlist
  const handleDeleteFromWishlist = () => {
    removeFromWishlist(selectedProduct.id);
    setIsInWishlist(false);
  };

  // Function to add item to wishlist
  const handleAddToWishlist = () => {
    addToWishlist(selectedProduct);
    setIsInWishlist(true);
  };

  return (
    <div className="">
      {isInWishlist ? (
        <div className={`${style} bg-zinc-200 hover:bg-red-500  rounded-full `}>
          <IconButton onClick={handleDeleteFromWishlist} size="small">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full hover:bg-red-500 opacity-75"></span>
            <ChooseSVG name={'Trash'} /> 
          </IconButton>
        </div>
      ) : (
        <div className={`${style}  bg-zinc-200 hover:bg-red-500 rounded-full`}>
          <IconButton onClick={handleAddToWishlist} size="small">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full hover:bg-red-500 opacity-75"></span>
            <ChooseSVG name={'Heart'} /> 
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default WishlistIcon;
WishlistIcon.propTypes = {
  selectedProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    // Add other required props for selectedProduct if necessary
  }).isRequired,
};
