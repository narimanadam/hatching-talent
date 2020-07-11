import React from "react";
import LoadingGif from "../../../assets/loading.gif";
import * as Styled from "./Loading.styles";

const Loading = () => {
  return (
    <div>
      <Styled.Img src={LoadingGif} alt="Loading ..." />
    </div>
  );
};

export default Loading;
