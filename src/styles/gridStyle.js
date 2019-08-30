import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const GridItem = styled.div`
  box-shadow: 2px 2px 10px #ddd;
  max-width: 100%;
  position: relative;
`;

export { Grid, GridItem };
