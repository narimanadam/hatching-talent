import React from "react";
import { Box, Flex } from "reflexbox";

import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

const SecondaryLayout = ({ children }) => {
  return (
    <>
      <Flex height="100vh">
        <Box flex="1">
          <Sidebar />
        </Box>
        <Box flex="5" px={5} py={4}>
          {children}
        </Box>
      </Flex>

      <Footer />
    </>
  );
};

export default SecondaryLayout;
