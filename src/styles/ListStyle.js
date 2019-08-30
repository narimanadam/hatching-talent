import styled from "styled-components";

const List = styled.ul``;

const ListItem = styled.li`
  list-style: none;
`;

const InlineList = styled.ul`
  display: table;
  margin: ${props => (props.center ? "auto" : "initial")};
  margin-bottom: ${props => (props.hasMarginBottom ? "15px" : "0")};
`;

const InlineListItem = styled.li`
  list-style: none;
  display: table-cell;
  padding-right: 20px;
  text-align: ${props => (props.center ? "center" : "left")};
  &:last-child {
    padding-right: 0;
  }
`;

const InlineListIcon = styled.div`
  margin-bottom: 5px;
`;

export { List, ListItem, InlineList, InlineListItem, InlineListIcon };
