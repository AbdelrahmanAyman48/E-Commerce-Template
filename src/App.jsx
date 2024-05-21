import React, { useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import { LangProvider } from "./context/LangContext";
import i18n from "./common/Translation";
import { SelectedProductProvider } from "./context/SelectedProductContext";
import Loading from "./common/Loading";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

import ScrollUp from "./common/ScrollUp";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [theme, colorMode] = useMode();
  useEffect(() => {
    // Simulating data loading with a timeout (replace this with actual data fetching logic)
    const fetchData = async () => {
      try {
        // Fetch data or perform asynchronous tasks here
        // For demonstration, we'll just wait for 1 second
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoaded(true); // Update isLoaded after data is fetched
      } catch (error) {
        console.error("Error loading data:", error);
        // Handle errors (e.g., display error message)
      }
    };

    fetchData(); // Call the function to start data loading
  }, []);

  return (
    <Router>
      
      <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
    <div dir={i18n.t("dir")} className={i18n.t("font")}>
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <LangProvider>
          <SelectedProductProvider>
            <CartProvider>
              <WishlistProvider>
                {isLoaded ? (
                  <React.Fragment>
                    <Routes>
                      {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          element={<route.element />}
                        >
                          {route.children &&
                            route.children.map((childRoute, childIndex) => (
                              <Route
                                key={childIndex}
                                path={childRoute.path}
                                element={<childRoute.element />}
                              />
                            ))}
                        </Route>
                      ))}
                    </Routes>
                    <ScrollUp />
                  </React.Fragment>
                ) : (
                  <Loading />
                )}
              </WishlistProvider>
            </CartProvider>
          </SelectedProductProvider>
        </LangProvider>
        </ThemeProvider>
    </div>
    </ColorModeContext.Provider>
    </Router>
  );
}

export default App;
{/* <React.Fragment>
<Routes>
  {routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<route.element />}
    >
      {route.children &&
        route.children.map((childRoute, childIndex) => (
          <Route
            key={childIndex}
            path={childRoute.path}
            element={<childRoute.element />}
          />
        ))}
    </Route>
  ))}
</Routes>
<ScrollToTop />
</React.Fragment>
) : (
<Loading />
)} */}