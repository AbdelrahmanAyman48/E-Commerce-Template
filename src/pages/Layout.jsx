// Layout.js
// import React from "react";
import { Outlet } from "react-router-dom";
import Header1 from "../component/Header/header1/Header1"
import Header2 from "../component/Header/header2/Header2"
import Footer from "../component/Footer";
// import About from "./About";
// import Contact from "./Contact";
const Layout = () => {
  return (
    <>
      <Header1 />
      <Header2 />
      <Outlet />
      {/* <About/> */}
      {/* <Contact/> */}
      <Footer />
    </>
  );
};

export default Layout;
