import React from "react";
import LoadingGif from "../assets/loading.gif";
import styled from "styled-components";

const LoadingImg = styled.img`
  width: 100px;
  margin-top: 100px;
`;

const Loading = () => {
  return (
    <div>
      <LoadingImg src={LoadingGif} alt="Loading ..." />
    </div>
  );
};

export default Loading;
