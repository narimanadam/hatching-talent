import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TabItem extends Component {
  render() {
    return (
      <div
        className={`tab__title ${this.props.className}`}
        onClick={this.props.handleClick}
        tabIndex={this.props.tabIndex}
      >
        {this.props.icon && (
          <FontAwesomeIcon
            icon={
              this.props.iconType
                ? ["far", `${this.props.icon}`]
                : this.props.icon
            }
            size="2x"
            className="tab__icon"
          />
        )}
        <span>{this.props.title}</span>
        {this.props.children}
      </div>
    );
  }
}

export default TabItem;
