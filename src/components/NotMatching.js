import React from "react";
import { NotMatchingStyles } from "../styles/NotMatchingStyles";

const NotMatching = ({ message }) => {
  return <NotMatchingStyles>{message}</NotMatchingStyles>;
};

export default NotMatching;
