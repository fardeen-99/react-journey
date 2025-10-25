import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./component/HEADER.JSX";
import Footer from "./component/FOOTER.JSX";


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
