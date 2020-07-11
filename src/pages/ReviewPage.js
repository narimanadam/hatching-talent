import React, { useState, useRef, forwardRef } from "react";
import { Container, Row, Col } from "react-grid-system";
import { List, ListItem } from "../styles/ListStyle";
import { Form } from "../styles/FormStyles";
import RadioInput from "../common/components/RadioInput/RadioInput";
import { Text } from "../common/components/Box/Box.styles";
import RadioButton from "../common/components/RadioButton";
import Input from "../common/components/Input";
import { MainButton } from "../styles/Button";
import Box from "../common/components/Box";
import { Link } from "@reach/router";
import { FIND_EMPLOYER } from "../common/helpers/apiUrls";

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
      <Container>
        <Row>
          <Col md={8}>
            <Box
              heading="Post one of the follwing to get unlimited access:"
              text={[
                "Glassdoor has millions of salaries and company reviews shared by real employees, It only takes a minute to get unlimited access to all our content for 12 months."
              ]}
            >
              <Text>
                <strong>Add your anonymous ..</strong>
              </Text>
              <List>
                <Form>
                  <ListItem>
                    <RadioInput
                      label="Company Review"
                      name="review"
                      colored
                      value="company"
                      handleInputChange={e => setReviewType(e.target.value)}
                    />
                  </ListItem>
                  <ListItem>
                    <RadioInput
                      label="Interview Review"
                      name="review"
                      colored
                      value="interview"
                      handleInputChange={e => setReviewType(e.target.value)}
                    />
                  </ListItem>
                </Form>
              </List>
              <Form>
                <RadioButton
                  label="Current"
                  name="employerStatus"
                  button
                  value="Current"
                  heading="Employer Status"
                  handleChange={e => setEmploymentStatus(e.target.value)}
                />
                <RadioButton
                  label="Former"
                  name="employerStatus"
                  button
                  value="Former"
                  handleChange={e => setEmploymentStatus(e.target.value)}
                />
                <Row>
                  <Col sm={6}>
                    <Input
                      type="text"
                      placeholder="Employer Name"
                      name="employername"
                      label="Employer Name"
                      value={employerName || ""}
                      handleInputKeyup={e => getEmployersList(e.target.value)}
                      handleInputChange={e => setEmployerName(e.target.value)}
                    />
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
                  </Col>
                </Row>
                <Link to={`${reviewType}-review`}>
                  <MainButton type="button" onClick={getReviewType}>
                    Next
                  </MainButton>
                </Link>
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
    </>
  );
};

export default ReviewPage;
