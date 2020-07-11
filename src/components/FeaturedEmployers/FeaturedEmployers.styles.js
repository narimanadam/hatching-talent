import styled from "@emotion/styled";
import { Box } from "reflexbox";

export const CardList = styled(Box)`
  display: grid;
  align-content: center;
  justify-content: center;
`;

CardList.defaultProps = {
  as: "ul",
  sx: {
    gridTemplateColumns: ["repeat(4, 1fr)"],
    gridGap: [3]
  }
};

export const Card = styled(Box)`
  box-shadow: 2px 2px 4px #eee;
  text-align: center;
`;

Card.defaultProps = {
  as: "li",
  bg: "white",
  py: [3]
};

export const Logo = styled(Box)``;

Logo.defaultProps = {
  as: "img",
  width: ["80px"],
  height: ["80px"]
};

export const Name = styled(Box)`
  display: block;
`;

Name.defaultProps = {
  as: "span",
  mt: [2]
};
