import React from "react";

const TabContent = ({ activeTab, type, children }) => (
  <div className={`tab__content ${activeTab === type ? "visible" : ""}`}>
    {children}
  </div>
);

export default TabContent;
