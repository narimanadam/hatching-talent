import React from "react";
import { Box } from "reflexbox";
// import * as Styled from "./grid.styles";

const Grid = ({ columns, children, ...rest }) => {
  const GridStyles = {
    display: "grid",
    sx: {
      gridGap: 3,
      gridTemplateColumns: ["1fr", null, "1fr 1fr", `repeat(${columns}, 1fr)`]
    }
  };
  return (
    <Box {...GridStyles} {...rest}>
      {children}
    </Box>
  );
};

export default Grid;
