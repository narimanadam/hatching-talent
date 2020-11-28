import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";

const DefList = styled.dl`
  margin-bottom: 20px;
`;

const DefTerm = styled.dt`
  text-transform: uppercase;
  font-size: 16px;
  text-align: left;
  font-size: 14px;
  margin-bottom: 10px;
`;

const DefDesc = styled.dd`
  font-weight: bold;
  text-align: left;
`;

export { DefList, DefTerm, DefDesc };
