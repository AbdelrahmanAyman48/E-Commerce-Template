import { useState, useContext } from "react";
import { styled, alpha} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import { CiSearch } from "react-icons/ci";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { SelectedProductContext } from "../../../context/SelectedProductContext";
import i18n from "../../../common/Translation";
import { ITEMS } from "../../../common/functions/items";


const Search = styled("div")(({ theme }) => {
  // const currentTheme = useTheme();
  return{
  position: "relative",
  backgroundColor: alpha(theme.palette.grey[300], 0.3),
  // backgroundColor: "theme.palette.myColor.main",
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 0.6),
  },
  // backgroundColor: `rgba(${currentTheme.palette.grey[300]}, 0.3)`,
  // "&:hover": {
  //   backgroundColor: `rgba(${currentTheme.palette.grey[300]}, 0.6)`,
  // },
  flex: 1,
  maxWidth: "400px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  alignItems: "center",
  "& .MuiAutocomplete-root": {
    flex: 1,
    "& .MuiInputBase-root": {
      borderRadius: "10",
      backgroundColor: "transparent",
      "& .MuiInputBase-input": {
        borderRadius: "10",
        fontSize: "0.9rem", // Default font size for input
        [theme.breakpoints.down("sm")]: {
          fontSize: "0.8rem", // Smaller font size for mobile
        },
      },
    },
  },
  "& .MuiIconButton-root": {
    "&:hover": {
      backgroundColor: "rgba(219, 68, 68, .9)",
      color: "white",
    },
  },
};
});

const SearchAppBar = () => {

  const [searchText, setSearchText] = useState("");
  const { setSelectedProduct } = useContext(SelectedProductContext);

  let selectedItem = ITEMS[0];

  // const handleItemSelected = (event) => {
  //   setSearchText(event.target.value);
  //   handleSearch();
  // };

  const handleSearch = (event, newValue) => {
    if (newValue) {
      const selectedItem = ITEMS.find(
        (item) => item.title.trim() === newValue.trim()
      );
      if (selectedItem) {
        setSelectedProduct(selectedItem);
      } else {
        // Handle case where no item matches the search text
        // For example, display a message to the user or clear selected product
        setSelectedProduct(null);
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  
  return (
    <Search className="flex items-center justify-center w-48 md:w-96">
      <Autocomplete
        freeSolo
        disableClearable
        disableListWrap
        openOnFocus
        options={ITEMS.map((item) => item.title)}
        value={searchText}
        // onSelect={handleItemSelected}
        onChange={handleSearch}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={i18n.t("search")}
            onKeyDown={handleKeyDown}
            onChange={(event) => setSearchText(event.target.value)}
          />
        )}
      />
      {/* <IconButton aria-label="search" color="inherit" onClick={handleSearch}>
        <Link to={{ pathname: `/allProducts/${selectedItem.title}` }}>
          <CiSearch className="w-5 h-auto md:w-8 md:h-8" />
        </Link>
      </IconButton> */}
        <IconButton
        aria-label="search"
        color="inherit"
        component={Link}
        to={`/allProducts/${selectedItem.title}`}
      >
        <CiSearch className="w-5 h-auto md:w-8 md:h-8" />
      </IconButton>
    </Search>
  );
};

export default SearchAppBar;
