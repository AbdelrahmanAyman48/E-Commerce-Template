import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#000",
          },
        myColor: {
          main: "#F6FC"
        },
        bg: {
          main: "#F6F6"
        },
          neutral: {
            main: "#6047",
          },
          favColor: {
            main: grey[50],
          },
        }
      : {
          // ! palette values for dark mode
          text: {
            primary: "#db4444",
          },
          myColor: {
            main: "#258b32"
          },
          bg: {
            main: "#1D9921",
          },
          neutral: {
            main: "#6150AB",
          },

          favColor: {
            main: grey[200],
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};