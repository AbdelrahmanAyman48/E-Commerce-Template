// TopHeader.jsx
import LangButton from "./LangButton";
import { Link } from "react-router-dom";
import i18n from "../../../common/Translation";
import { ColorModeContext } from "../../../theme";
import { IconButton, useTheme } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { useContext } from "react";

const TopHeader = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div className="fixed top-0 left-0 w-full bg-black z-40 px-2 md:px-4">
      <div className="bg-black flex justify-between items-center lg:px-64">
        <div className="text-white flex justify-center gap-2 items-center flex-1">
          <h1 className="text-[11px] max-w-[200px] md:max-w-full md:text-sm">
            {i18n.t("topHeader")}
            {/* Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! */}
          </h1>
          <Link to="/allProducts">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm md:text-base font-semibold underline whitespace-nowrap"
            >
              {i18n.t("shop")}
              {/* {("shop")} */}
            </button>
          </Link>
        </div>
        {/* theme icon  */}
        <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "20px", color: "#fff" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "20px" }} />
              </IconButton>
            )}
          </div>
        <LangButton/>
      </div>
    </div>
  );
};

export default TopHeader;
