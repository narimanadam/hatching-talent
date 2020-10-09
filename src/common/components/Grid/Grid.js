import React, { useMemo } from "react";
import { Box } from "reflexbox";

const Grid = ({ columns, children, ...rest }) => {
  const GridStyles = {
    display: "grid",
    sx: {
      gridGap: 3,
      gridTemplateColumns: `repeat(${columns}, 1fr)`
    }
  };
  return (
    <Box {...GridStyles} {...rest}>
      {children}
    </Box>
  );
};

export default Grid;
