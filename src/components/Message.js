import React from "react";
import styled from "styled-components";

const MessageStyles = styled.p`
  margin-bottom: 15px;
  &.error {
    color: red;
  }
  &.success {
    color: green;
  }
`;

const Message = ({ text, type }) => {
  return <MessageStyles className={type}>{text}</MessageStyles>;
};

export default Message;
