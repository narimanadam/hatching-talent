import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: ${props => props.theme.lightGray};
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const FooterList = styled.ul`
  padding: 70px 0;
`;

export const FooterListHeading = styled.h4`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
  text-align: left;
`;

export const FooterListItem = styled.li`
  list-style: none;
  text-align: left;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Copyrights = styled.p`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  padding: 40px 0;
  font-size: 14px;
`;
