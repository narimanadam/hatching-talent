import React from "react";
import { Box } from "reflexbox";

const Message = ({ text, type }) => {
  return <Box variant={type}>{text}</Box>;
};

export default Message;
