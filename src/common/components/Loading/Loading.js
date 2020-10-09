import React from "react";
import LoadingGif from "../../../assets/loading.gif";
import * as Styled from "./Loading.styles";
import { Flex } from "reflexbox";

const Loading = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Styled.Img src={LoadingGif} alt="Loading ..." />
    </Flex>
  );
};

export default Loading;
