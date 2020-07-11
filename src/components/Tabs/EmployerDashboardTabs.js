import React, { useState } from "react";
import TabList from "../../common/components/Tabs/TabList";
import TabTitle from "../../common/components/Tabs/TabTitle";
import TabContent from "../../common/components/Tabs/TabContent";
import { TabsStyled } from "../../common/components/Tabs/Tab.styles";
import ActiveJobs from "../ActiveJobs";
import PendingJobs from "../PendingJobs";
import ClosedJobs from "../ClosedJobs";
import RejectedJobs from "../RejectedJobs";
import PageHeader from "../../common/components/PageHeader";
import Logo from "../../assets/logo.png";

const EmployerDashboardTabs = () => {
  const [tabSelected, setTabSelected] = useState(0);

  const handleClick = ItemIndex => {
    setTabSelected(ItemIndex);
  };

  let data = [
    {
      id: "1",
      title: "Active Jobs",
      icon: "file-alt"
    },
    {
      id: "2",
      title: "Closed Jobs",
      icon: "trash-alt"
    },
    {
      id: "3",
      title: "Rejected Jobs",
      icon: "edit"
    },
    {
      id: "4",
      title: "Pending Jobs",
      icon: "edit"
    }
  ];
  return (
    <>
      <PageHeader boldText="Employer" normalText="Dashboard" />
      <TabsStyled>
        <TabList>
          {/* <img src={Logo} width="150px" style={{ margin: "32px 24px" }} /> */}
          {data.map((tabItem, index) => (
            <TabTitle
              title={tabItem.title}
              key={tabItem.id}
              icon={tabItem.icon}
              iconType="far"
              className={tabSelected == index ? "active" : ""}
              handleClick={handleClick.bind(this, index)}
            />
          ))}
        </TabList>
        <div className="tab__content-wrapper">
          <TabContent activeTab={tabSelected} tabId="0">
            <ActiveJobs />
          </TabContent>
          <TabContent activeTab={tabSelected} tabId="1">
            <ClosedJobs />
          </TabContent>
          <TabContent activeTab={tabSelected} tabId="2">
            <RejectedJobs />
          </TabContent>
          <TabContent activeTab={tabSelected} tabId="3">
            <PendingJobs />
          </TabContent>
        </div>
      </TabsStyled>
    </>
  );
};

export default EmployerDashboardTabs;
