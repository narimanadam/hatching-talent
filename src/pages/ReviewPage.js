import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-grid-system";
import { Form } from "../styles/FormStyles";
import RadioInput from "../common/components/RadioInput/RadioInput";
import RadioButton from "../common/components/RadioButton";
import Input from "../common/components/Input";
import { Link } from "@reach/router";
import { FIND_EMPLOYER } from "../common/helpers/apiUrls";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import Button from "../common/components/Button";
import { Flex, Box } from "reflexbox";

const ReviewPage = () => {
  const [reviewType, setReviewType] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [employerName, setEmployerName] = useState("");
  const [employers, setEmployers] = useState([]);
  const [employerId, setEmployerId] = useState("");

  const searchResults = useRef();

  const getEmployerId = (Id, companyName) => {
    setEmployerId(Id);
    setSearchActive(false);
    setEmployerName(companyName);
  };

  const getReviewType = () => {
    let reviewTypeFlow = {
      reviewType,
      employmentStatus,
      companyName: employerName,
      employerId
    };
    window.sessionStorage.setItem("reviewType", JSON.stringify(reviewTypeFlow));
  };

  const getEmployersList = employerName => {
    fetch(`${FIND_EMPLOYER}`, {
      method: "POST",
      headers: {
        keyWord: employerName
      }
    })
      .then(res => res.json())
      .then(data => {
        setSearchActive(true);
        setEmployers(data);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <Row>
        {/* <Box
          heading="Post one of the follwing to get unlimited access:"
          text={[
            "Glassdoor has millions of salaries and company reviews shared by real employees, It only takes a minute to get unlimited access to all our content for 12 months."
          ]}
        > */}
        {/* <Text>
              <strong>Add your anonymous ..</strong>
            </Text> */}
        {/* <List> */}
        <Form inline hasBgColor>
          <Flex flexWrap="wrap">
            <Box width={[1 / 2]}>
              <RadioInput
                label="Company Review"
                name="review"
                colored
                value="company"
                handleInputChange={e => setReviewType(e.target.value)}
              />
            </Box>
            <Box width={[1 / 2]}>
              <RadioInput
                label="Interview Review"
                name="review"
                colored
                value="interview"
                handleInputChange={e => setReviewType(e.target.value)}
              />
            </Box>

            <Box width={[1 / 2]}>
              <RadioButton
                label="Current"
                name="employerStatus"
                button
                value="Current"
                handleChange={e => setEmploymentStatus(e.target.value)}
                checked="checked"
              />
            </Box>
            <Box width={[1 / 2]}>
              <RadioButton
                label="Former"
                name="employerStatus"
                button
                value="Former"
                handleChange={e => setEmploymentStatus(e.target.value)}
              />
            </Box>

            <Input
              type="text"
              placeholder="Employer Name"
              name="employername"
              label="Employer Name"
              value={employerName || ""}
              handleInputKeyup={e => getEmployersList(e.target.value)}
              handleInputChange={e => setEmployerName(e.target.value)}
            />
          </Flex>
          {searchActive && (
            <ul className="list__search-results" ref={searchResults}>
              {employers.map((employer, i) => (
                <li
                  className="list__search-results__item"
                  onClick={getEmployerId.bind(
                    this,
                    employer.user_id,
                    employer.company_name
                  )}
                  key={i}
                >
                  {employer.company_name}
                </li>
              ))}
            </ul>
          )}
          <Link to={`${reviewType}-review`}>
            <Button
              text="Next"
              variant="primaryButton"
              type="button"
              onClick={getReviewType()}
            />
          </Link>
        </Form>
        {/* </Box> */}
        {/* <Col md={4}>
          <Box
            heading="Help the Community"
            text={[
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, non.",
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, non."
            ]}
          />
        </Col> */}
      </Row>
    </>
  );
};

export default WithSidebarLayout(ReviewPage);
