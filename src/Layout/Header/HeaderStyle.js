import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: #fff;
  width: 100%;
`;

export const HeaderTop = styled.div`
  padding: 15px 0;
  text-align: left;
  background: ${props => props.theme.white};
`;

export const Logo = styled.img`
  padding: 15px 0;
  height: 60px;
  display: inline-block;
  border-right: 1px solid #eee;
  padding-right: 25px;
`;
export const Slogan = styled.p`
  width: 150px;
  display: inline-block;
  padding-left: 15px;
  font-size: 14px;
  color: ${props => props.theme.gray};
`;

export const Navigation = styled.nav`
  background: ${props => props.theme.gray};
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const NavigationItem = styled.li`
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: ${props => props.theme.white};
  padding: 15px 0;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    width: 0;
    height: 3px;
    margin: auto;
    background: ${props => props.theme.main};
    transition: 0.3s;
  }
  :hover:after {
    width: 100%;
  }
`;
