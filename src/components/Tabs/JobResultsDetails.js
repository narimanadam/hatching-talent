import React, { useState, useEffect } from "react";
import TabList from "../../common/components/Tabs/TabList";
import TabItem from "../../common/components/Tabs/TabTitle";
import { TabsHorizontal } from "../../common/components/Tabs/Tab.styles";
import TabContent from "../../common/components/Tabs/TabContent";
import { JobThumbnailStyled } from "../../styles/JobThumbnailStyled";
import Reviews from "../Reviews";
import { GET_USER_INFO } from "../../common/helpers/apiUrls";

const JobResultsDetails = ({ currentJob }) => {
  const [tabSelected, setTabSelected] = useState(0);
  const [employerInfo, setEmployerInfo] = useState({});
  const handleClick = ItemIndex => {
    setTabSelected(ItemIndex);
  };

  useEffect(() => {
    getUserInfo();
  }, [currentJob, employerInfo]);

  const getUserInfo = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: currentJob.employer_id
      }
    })
      .then(res => res.json())
      .then(data => setEmployerInfo(data[0]))
      .catch(error => console.log(error));
  };

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
            className={tabSelected == index ? "active" : ""}
            handleClick={handleClick.bind(this, index)}
          >
            {tabItem.title}
          </TabItem>
        ))}
      </TabList>
      <div className="tab__content-wrapper">
        <TabContent activeTab={tabSelected} tabId="0">
          <h4>Job title</h4>
          {currentJob.job_name}
          <h4>Location</h4>
          <p>{currentJob.location}</p>
          <h4>Job Description</h4>
          <p>{currentJob.job_description}</p>
        </TabContent>
        <TabContent activeTab={tabSelected} tabId="1">
          <JobThumbnailStyled>
            <div className="grid-thumb__img-wrapper">
              <img
                src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Coca-Cola_logo_2016.svg/revision/latest/scale-to-width-down/480?cb=20161225004719"
                alt=""
                className="grid-thumb__img"
              />
            </div>
            {employerInfo && (
              <div className="grid-thumb__info">
                <h3 className="grid-thumb__title">
                  {employerInfo.first_name} {employerInfo.last_name}
                </h3>
                <span className="grid-thumb__desc">
                  {employerInfo.profile_description}
                </span>
              </div>
            )}
          </JobThumbnailStyled>
          {employerInfo && <div>{employerInfo.profile_description}</div>}
        </TabContent>
        <TabContent activeTab={tabSelected} tabId="2">
          {currentJob.employer_id && (
            <Reviews employerId={currentJob.employer_id} />
          )}
        </TabContent>
      </div>
    </TabsHorizontal>
  );
};

export default JobResultsDetails;
