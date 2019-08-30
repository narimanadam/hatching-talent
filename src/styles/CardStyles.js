import styled from "styled-components";

const CardStyles = styled.div``;

const ImgWrapper = styled.div`
  height: 250px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const VideoWrapper = styled.div`
  height: 250px;
`;

const Video = styled.iframe`
  height: 100%;
  width: 100%;
`;

const Info = styled.div`
  background: ${props => props.theme.white};
  padding: 20px 15px;
  :after {
    content: "";
    clear: both;
    display: block;
  }
`;

const Title = styled.h3`
  text-align: left;
  margin-bottom: 15px;
  text-decoration: none;
  color: ${props => props.theme.black};
  :focus,
  :hover,
  :visited,
  :link,
  :active {
    text-decoration: none;
  }
  :first-letter {
    text-transform: uppercase;
  }
`;

const Body = styled.p`
  text-align: left;
  margin-bottom: 25px;
  text-decoration: none;
  color: ${props => props.theme.black};
`;

const Actions = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  max-width: 100%;
`;

const CardLink = styled.a`
  float: left;
  color: ${props => props.theme.main};
  font-weight: bold;
  font-size: 14px;
`;

const Views = styled.span`
  float: right;
  text-decoration: none;
  color: ${props => props.theme.black};
`;

export {
  CardStyles,
  ImgWrapper,
  Img,
  VideoWrapper,
  Video,
  Info,
  Title,
  Body,
  Actions,
  CardLink,
  Views
};
