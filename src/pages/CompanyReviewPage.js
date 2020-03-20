import React, { useState, useContext, useEffect } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Form } from "../styles/FormStyles";
import InputField from "../components/InputField";
import Textarea from "../components/Textarea";
import { MainButton } from "../styles/Button";
import Checkbox from "../components/Checkbox";
import Box from "../components/Box";
import { ADD_REVIEW } from "../helpers/apiUrls";
import AuthContext from "../context/AuthContext";
import { navigate } from "@reach/router";
// import SelectLookup from "../components/SelectLookup";

const CompanyReviewPage = () => {
  // const [location, setLocation] = useState("");
  const [reviewTitle, setReviewTitle] = useState("");
  const [pros, setPros] = useState("");
  const [cons, setCons] = useState("");
  const [advice, setAdvice] = useState("");
  const [employerId, setEmployerId] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [authenticated] = useContext(AuthContext);
  // const handleJobLocationChange = ({ value }) => {
  //   setLocation({ value });
  // };

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
        createUser: authenticated.userID
      }
    })
      .then(res => res.json())
      .then(data => navigate("/review"))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    let reviewInfo = JSON.parse(window.sessionStorage.getItem("reviewType"));

    setEmploymentStatus(reviewInfo.employmentStatus);
    setEmployerId(reviewInfo.employerId);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Box
            heading="Rate a Company"
            text={[
              "It only take a minute! And your anonymous review will help other job seekers"
            ]}
          >
            <Form onSubmit={submitCompanyReview}>
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
              <InputField
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
              <MainButton type="submit">Submit</MainButton>
            </Form>
          </Box>
        </Col>
        <Col md={4}>
          <Box
            heading="Help the Community"
            text={[
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, non.",
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, non."
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyReviewPage;
