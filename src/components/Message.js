import React, { Fragment } from "react";

function Message({ text, error }) {
  return (
    <Fragment>
      <p>{text}</p>
    </Fragment>
  );
}

export default Message;
