import React, { useState, useRef, useCallback } from "react";
import { Form } from "../styles/FormStyles";
import RadioInput from "../common/components/RadioInput/RadioInput";
import RadioButton from "../common/components/RadioButton";
import Input from "../common/components/Input";
import { Link } from "@reach/router";
import { FIND_EMPLOYER } from "../common/helpers/apiUrls";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import Button from "../common/components/Button";
import { Flex, Box } from "reflexbox";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";

const ReviewPage = () => {
  const [reviewType, setReviewType] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("Current");
  const [searchActive, setSearchActive] = useState(false);
  const [employerName, setEmployerName] = useState(null);
  const [employers, setEmployers] = useState([]);
  const [employerId, setEmployerId] = useState("");

  const searchResults = useRef();

  const getEmployerId = (id, companyName) => {
    setEmployerId(id);
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

  const getEmployersList = useCallback(query => {
    fetch(`${FIND_EMPLOYER}`, {
      method: "POST",
      headers: {
        keyWord: query
      }
    })
      .then(res => res.json())
      .then(data => {
        setSearchActive(true);
        setEmployers(data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <SidebarLayoutContainer>
      <Form hasBgColor reviewForm autocomplete="off">
        <Flex flexWrap="wrap">
          <Box width={[1 / 2]} mb={3}>
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

          <Box width={[1 / 2]} mb={3}>
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
            value={employerName}
            handleInputChange={e => getEmployersList(e.target.value)}
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
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(ReviewPage);
