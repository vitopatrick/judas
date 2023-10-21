import React from "react";
import NavBar from "../home/nav-bar";
import Footer from "../home/footer";

const Layout = ({ children }: { children: React.ReactElement | any }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
