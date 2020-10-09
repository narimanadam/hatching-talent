import React, { useCallback, useState } from "react";
import { Box, Flex } from "reflexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Button from "../../common/components/Button";

const SidebarLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = useCallback(() => setIsOpen(true), []);

  return (
    <>
      <Flex minHeight="100vh">
        <Box
          flex={[0, 1, null]}
          sx={{
            transition: "0.3s",
            transform: [
              isOpen ? "translateX(0)" : "translateX(-400px)",
              "translateX(0)",
              null
            ]
          }}
        >
          <Sidebar />
        </Box>
        <Box flex="5" px={5} py={4}>
          {/* <Button onClick={handleIsOpen}>
            <FontAwesomeIcon icon="bars" size="2x" style={{ color: "#333" }} />
          </Button> */}
          {children}
        </Box>
      </Flex>

      <Footer />
    </>
  );
};

export default SidebarLayout;
