import styled from "@emotion/styled";
import { Box } from "reflexbox";

// export const Grid = styled(Box)`
//   justify-content: center;
//   // margin-top: 20px;
//   margin-bottom: 20px;
// `;

// Grid.defaultProps = {
//   sx: {
//     display: "grid",
//     gridGap: ["30px"],
//     gridTemplateColumns: ["repeat(3, 1fr)"]
//   }
// };
// export const Item = styled(Box)`
//   box-shadow: 2px 2px 10px #ddd;
//   max-width: 100%;
// `;

// Item.defaultProps = {
//   bg: "white",
//   p: [4]
// };

export const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

Grid.defaultProps = {
  sx: {
    gridGap: 3
  }
};
