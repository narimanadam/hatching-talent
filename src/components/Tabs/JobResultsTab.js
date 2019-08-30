import React, { Component } from "react";
import TabList from "./TabList";
import TabItem from "./TabTitle";
import { TabsHorizontal } from "../../styles/TabStyles";
import TabContent from "./TabContent";
import { JobThumbnailStyled } from "../../styles/JobThumbnailStyled";
import Reviews from "../Reviews";

class JobResultsTab extends Component {
  state = {
    tabSelected: 0
  };
  handleClick = ItemIndex => {
    this.setState({
      tabSelected: ItemIndex
    });
  };
  render() {
    let data = [
      {
        id: "1",
        title: "Job"
      },
      {
        id: "2",
        title: "Company"
      },
      {
        id: "3",
        title: "Reviews"
      }
    ];
    return (
      <TabsHorizontal horizontal>
        <TabList>
          {data.map((tabItem, index) => (
            <TabItem
              key={tabItem.id}
              className={this.state.tabSelected == index ? "active" : ""}
              handleClick={this.handleClick.bind(this, index)}
            >
              {tabItem.title}
            </TabItem>
          ))}
        </TabList>
        <div className="tab__content-wrapper">
          <TabContent activeTab={this.state.tabSelected} tabId="0">
            <h4>Job title</h4>
            {this.props.currentJob.name}
            <h4>Location</h4>
            <p>Dubai, United Arab Emirates</p>
            <h4>Job Description</h4>
            <p>{this.props.currentJob.job_name}</p>
          </TabContent>
          <TabContent activeTab={this.state.tabSelected} tabId="1">
            <JobThumbnailStyled>
              <div className="grid-thumb__img-wrapper">
                <img
                  src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Coca-Cola_logo_2016.svg/revision/latest/scale-to-width-down/480?cb=20161225004719"
                  alt=""
                  className="grid-thumb__img"
                />
              </div>
              <div className="grid-thumb__info">
                <h3 className="grid-thumb__title">
                  {this.props.currentJob.name}
                </h3>
                <span className="grid-thumb__desc">
                  {this.props.currentJob.email}
                </span>
                <span className="grid-thumb__desc">
                  {this.props.currentJob.email}
                </span>
                <span className="grid-thumb__desc">
                  {this.props.currentJob.email}
                </span>
              </div>
            </JobThumbnailStyled>
            <div>
              {this.props.currentJob.name} {this.props.currentJob.email}
            </div>
          </TabContent>
          <TabContent activeTab={this.state.tabSelected} tabId="2">
            <Reviews />
          </TabContent>
          <TabContent activeTab={this.state.tabSelected} tabId="3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            alias.
          </TabContent>
        </div>
      </TabsHorizontal>
    );
  }
}

export default JobResultsTab;
