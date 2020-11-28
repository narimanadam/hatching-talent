import React, { Component } from "react";
import TabList from "../../common/components/Tabs/TabList";
import TabTitle from "../../common/components/Tabs/TabTitle";
import TabContent from "../../common/components/Tabs/TabContent";
import { TabsStyled } from "../../common/components/Tabs/Tab.styles";
import { Row, Col } from "react-grid-system";
import { MainOutlineButton } from "../../styles/Button";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
class AboutTabs extends Component {
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
        title: "Hatchoo: #1 in Morocco",
        icon: "thumbs-up"
      },
      {
        id: "2",
        title: "About Hatchoo",
        icon: "tv"
      },
      {
        id: "3",
        title: "How we do it",
        icon: "lightbulb"
      },
      {
        id: "4",
        title: "How students use Hatchoo",
        icon: "graduation-cap"
      },
      {
        id: "5",
        title: "What our clients say",
        icon: "comment"
      }
    ];
    return (
      <TabsStyled>
        <Row>
          <Col md={3}>
            <TabList>
              {data.map((tabItem, index) => (
                <TabTitle
                  title={tabItem.title}
                  key={tabItem.id}
                  icon={tabItem.icon}
                  className={this.state.tabSelected === index ? "active" : ""}
                  handleClick={this.handleClick.bind(this, index)}
                />
              ))}
            </TabList>
          </Col>
          <Col md={9}>
            <div className="tab__content-wrapper">
              <TabContent activeTab={this.state.tabSelected} tabId="0">
                <h3 className="tab__content__header"> About Hatching Talent</h3>
                <p className="tab__content__desc">
                  Hatchoo is Morocco's most popular job board and online career
                  resource for college and university students and recent
                  graduates.
                </p>
                <p className="tab__content__desc">
                  How do we knwo Hatchoo is #1 in Morocco?
                </p>
                <p className="tab__content__desc">
                  Compared to any other job board and online career resource for
                  students and recent graduates in Morocco. Hatchoo has:
                </p>
                <ul className="tab__content__list">
                  <li className="tab__content__list-item">More Employers</li>
                  <li className="tab__content__list-item">
                    More job opportunities
                  </li>
                  <li className="tab__content__list-item">
                    A larger, more engaged audience of students and recent
                    graduates (Source Alexa.com)
                  </li>
                  <li className="tab__content__list-item">
                    A social media community that is 800% larger!
                  </li>
                </ul>
                <InlineList>
                  <InlineListItem>
                    <MainOutlineButton>Request More Info</MainOutlineButton>
                  </InlineListItem>
                </InlineList>
              </TabContent>
              <TabContent activeTab={this.state.tabSelected} tabId="1">
                Content 2
              </TabContent>
              <TabContent activeTab={this.state.tabSelected} tabId="2">
                Content 3
              </TabContent>
              <TabContent activeTab={this.state.tabSelected} tabId="3">
                Content 4
              </TabContent>
              <TabContent activeTab={this.state.tabSelected} tabId="4">
                Content 5
              </TabContent>
            </div>
          </Col>
        </Row>
      </TabsStyled>
    );
  }
}

export default AboutTabs;
