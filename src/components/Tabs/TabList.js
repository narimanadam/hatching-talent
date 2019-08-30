import React, { Component } from "react";

class TabList extends Component {
  render() {
    return <div className="tab__list">{this.props.children}</div>;
  }
}

export default TabList;
