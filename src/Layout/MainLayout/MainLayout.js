import React from "react";
import { Box } from "reflexbox";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;
