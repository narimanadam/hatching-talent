import styled from "styled-components";

const ProgressBarStyles = styled.div`
  position: relative;
  margin-bottom: 100px;
  margin-top: 50px;
`;
const ProgressBarTrack = styled.div`
  position: absolute;
  width: 100%;
  height: 10px;
  background: ${props => props.theme.darkGray};
  border-radius: 10px;
`;
const ProgressBarThumb = styled.div`
  position: absolute;
  width: ${props => props.progress}%;
  height: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background: ${props => props.theme.main};
`;

const ProgressText = styled.span`
  position: absolute;
  right: 0;
  top: -30px;
`;

export { ProgressBarStyles, ProgressBarTrack, ProgressBarThumb, ProgressText };
