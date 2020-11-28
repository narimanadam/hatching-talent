import React, { useCallback, useEffect, useState } from "react";
import Input from "../common/components/Input";
import CandidateCard from "../components/CandidateCard/CandidateCard";
import { FIND_CANDIDATE } from "../common/helpers/apiUrls";
import { Form } from "../styles/FormStyles";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import Grid from "../common/components/Grid/Grid";
import CandidateCardLoader from "../components/CandidateCard/CandidateCardLoader";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";

const FindCandidatePage = () => {
  const [keyword, setKeyword] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const findCandidate = () => {
    setIsLoading(true);
    fetch(`${FIND_CANDIDATE}`, {
      method: "POST",
      headers: {
        keyword: keyword
      }
    })
      .then(res => res.json())
      .then(data => {
        setCandidates(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = useCallback(
    ({ target: { value } }) => {
      setKeyword(value);
      findCandidate();
    },
    [findCandidate]
  );

  useEffect(() => {
    findCandidate();
  }, []);

  return (
    <SidebarLayoutContainer>
      {/* <PageHeader boldText="Find" normalText="Candidate" /> */}
      <Form>
        <Input
          type="text"
          placeholder="Search Candidates by Job Title ..."
          handleInputChange={handleInputChange}
          variant="darkFormField"
        />
      </Form>

      <Grid columns={5} mt={5}>
        {isLoading ? (
          <CandidateCardLoader />
        ) : (
          candidates.map(
            ({ user_id, first_name, last_name, email, job_title }) => (
              <CandidateCard
                imgSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
                id={user_id}
                firstName={first_name}
                lastName={last_name}
                email={email}
                jobTitle={job_title}
                key={user_id}
              />
            )
          )
        )}
      </Grid>
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(FindCandidatePage);
