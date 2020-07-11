import React from "react";

import { Router, Link, Match } from "@reach/router";

const NavLink = props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          className: isCurrent ? "active" : "",
          style: {
            textDecoration: "none"
          }
        };
      }}
    />
  );
};

export default NavLink;
