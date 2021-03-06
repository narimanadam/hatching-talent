import React, { useState, useContext, useEffect } from "react";
import { Form } from "../styles/FormStyles";
import Input from "../common/components/Input";
import Textarea from "../common/components/Textarea";
import Box from "../common/components/Box";
import { ADD_REVIEW } from "../common/helpers/apiUrls";
import AuthContext from "../common/context/AuthContext";
import { navigate } from "@reach/router";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import Button from "../common/components/Button/";
// import SelectLookup from "../components/SelectLookup";

const CompanyReviewPage = () => {
  // const [location, setLocation] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [advice, setAdvice] = useState("");
  const [employerId, setEmployerId] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const { AuthState } = useContext(AuthContext);
  // const handleJobLocationChange = ({ value }) => {
  //   setLocation({ value });
  // };

  useEffect(() => {
    let reviewInfo = JSON.parse(window.sessionStorage.getItem("reviewType"));

    setEmploymentStatus(reviewInfo.employmentStatus);
    setEmployerId(reviewInfo.employerId);
    console.log("reviewInfo.employerId", reviewInfo.employerId);
  }, [employerId, employmentStatus]);

  const submitCompanyReview = e => {
    e.preventDefault();
    fetch(`${ADD_REVIEW}`, {
      method: "POST",
      headers: {
        reviewTitle,
        pros,
        cons,
        advice,
        employemntStatus: employmentStatus,
        toEmployer: employerId,
        createUser: AuthState.userID
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data[0].value === "Ok") {
          navigate("/review");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <SidebarLayoutContainer>
      <Box
        heading="Rate a Company"
        text={[
          "It only take a minute! And your anonymous review will help other job seekers"
        ]}
      />
      <Form onSubmit={submitCompanyReview} hasBgColor>
        {/* <Row>
                <Col md={8}>
                  <SelectLookup
                    name="jobLocation"
                    placeholder="Select Job Location"
                    typeId="Locations"
                    handleSelectChange={handleJobLocationChange}
                    type="default"
                  ></SelectLookup>
                </Col>
              </Row> */}
        <Input
          placeholder="Title"
          label="Review Title"
          name="reviewTitle"
          handleInputChange={e => setReviewTitle(e.target.value)}
        />
        <Textarea
          placeholder="Share Some of the best reasons to work at MBC Group"
          label="Pros"
          name="pros"
          handleInputChange={e => setPros(e.target.value)}
        />
        <Textarea
          placeholder="Share som eof the downsides of working at MBC Group"
          label="Cons"
          name="cons"
          handleInputChange={e => setCons(e.target.value)}
        />
        <Textarea
          placeholder="Write your advice that you would like to give to company management"
          label="Advice To Management"
          name="adviceToManagement"
          handleInputChange={e => setAdvice(e.target.value)}
        />
        {/* <Checkbox
                label="I agree to this platform Terms of Use. This Review of my experience at my current or former employer."
                name="agreeTermsAndConditions"
              /> */}
        <Button type="submit" text="Submit" variant="primaryButton" />
      </Form>
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(CompanyReviewPage);
