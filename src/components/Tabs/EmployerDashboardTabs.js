import React, { useCallback, useState } from "react";
import TabList from "../../common/components/Tabs/TabList";
import TabTitle from "../../common/components/Tabs/TabTitle";
import TabContent from "../../common/components/Tabs/TabContent";
import { TabsStyled } from "../../common/components/Tabs/Tab.styles";
import EmployerJobs from "../EmployerJobs";
import { SidebarLayoutContainer } from "../../Layout/SidebarLayout/SidebarLayout";

const EmployerDashboardTabs = () => {
  const [tabSelected, setTabSelected] = useState(0);
  const [activeTab, setActiveTab] = useState("Active");

  const handleClick = useCallback(ItemIndex => setTabSelected(ItemIndex), []);

  let data = [
    {
      id: "1",
      title: "Active Jobs",
      type: "Active",
      icon: "file-alt"
    },
    {
      id: "2",
      title: "Closed Jobs",
      type: "Closed",
      icon: "trash-alt"
    },
    {
      id: "3",
      title: "Rejected Jobs",
      type: "Rejected",
      icon: "edit"
    },
    {
      id: "4",
      title: "Pending Jobs",
      type: "Pending",
      icon: "edit"
    }
  ];
  return (
    <SidebarLayoutContainer>
      {/* <PageHeader boldText="Employer" normalText="Dashboard" /> */}
      <TabsStyled>
        <TabList>
          {data.map(({ id, title, type, icon }, index) => (
            <TabTitle
              title={title}
              key={id}
              icon={icon}
              iconType="far"
              className={tabSelected === index ? "active" : ""}
              handleClick={() => {
                handleClick(index);
                setActiveTab(type);
              }}
            />
          ))}
        </TabList>
        <div className="tab__content-wrapper">
          <TabContent activeTab={activeTab} type={activeTab}>
            <EmployerJobs type={activeTab} />
          </TabContent>
        </div>
      </TabsStyled>
    </SidebarLayoutContainer>
  );
};

export default EmployerDashboardTabs;
