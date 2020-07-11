import React, { Component } from "react";

class TabContent extends Component {
  render() {
    return (
      <div
        className={`tab__content ${
          this.props.activeTab == this.props.tabId ? "visible" : ""
        }`}
      >
        {this.props.children}
      </div>
    );
  }
}

export default TabContent;
