import React from "react";
import { Box } from "reflexbox";

const Message = ({ text, type }) => {
  return (
    <Box variant={type} mt={2}>
      {text}
    </Box>
  );
};

export default Message;
