import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TabItem = ({
  title,
  handleClick,
  tabIndex,
  className,
  iconType,
  icon,
  children
}) => (
  <div
    className={`tab__title ${className}`}
    onClick={handleClick}
    tabIndex={tabIndex}
  >
    {icon && (
      <FontAwesomeIcon
        icon={iconType ? ["far", `${icon}`] : icon}
        size="2x"
        className="tab__icon"
      />
    )}
    <span>{title}</span>
    {children}
  </div>
);

export default TabItem;
