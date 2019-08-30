import React, { Component } from "react";
import TabList from "./TabList";
import TabTitle from "../Tabs/TabTitle";
import TabContent from "../Tabs/TabContent";
import { TabsHorizontal } from "../../styles/TabStyles";
import { Container, Row, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../styles/Button";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import JobStats from "../JobStats";

class EmployerDashboardTabs extends Component {
  state = {
    tabSelected: 0,
    jobs: []
  };

  componentDidMount() {
    fetch("http://127.0.0.1:8080/app/resources/jobs/getEmployerJob", {
      method: "POST",
      headers: {
        employerId: 5,
        jobStatus: "active"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          jobs: data,
          currentJob: data[0]
        });
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  handleClick = ItemIndex => {
    this.setState({
      tabSelected: ItemIndex
    });
  };

  render() {
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
      <TabsHorizontal horizontal>
        <Container>
          <TabList>
            {data.map((tabItem, index) => (
              <TabTitle
                title={tabItem.title}
                key={tabItem.id}
                icon={tabItem.icon}
                iconType="far"
                className={this.state.tabSelected == index ? "active" : ""}
                handleClick={this.handleClick.bind(this, index)}
              />
            ))}
          </TabList>
          <div className="tab__content-wrapper">
            <TabContent activeTab={this.state.tabSelected} tabId="0">
              {this.state.jobs.map(job => (
                <JobStats name={job.job_name} desc={job.job_description} />
              ))}
            </TabContent>
            <TabContent activeTab={this.state.tabSelected} tabId="1">
              <JobStats closed="true" />
            </TabContent>
          </div>
        </Container>
      </TabsHorizontal>
    );
  }
}

export default EmployerDashboardTabs;
