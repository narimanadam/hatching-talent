import styled from "styled-components";

const BoxStyles = styled.div`
  min-width: 600px;
  background: ${props => props.theme.lightGray};
  margin-bottom: 20px;
  padding: 30px;
  text-align: ${props => (props.center ? "center" : "left")};
  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.p`
  margin-bottom: 15px;
`;

const Heading = styled.h3`
  margin-bottom: 15px;
`;

const Text = styled.p`
  margin: 10px 0;
  font-size: 14px;
`;

export { BoxStyles, Icon, Heading, Text };
