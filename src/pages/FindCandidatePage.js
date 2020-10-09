import React, { useState } from "react";
import { Container, Row, Col } from "react-grid-system";
import Input from "../common/components/Input";
import { DefaultButtonOutline } from "../styles/Button";
import CandidateCard from "../components/CandidateCard/CandidateCard";
import { FIND_CANDIDATE } from "../common/helpers/apiUrls";
import { Form } from "../styles/FormStyles";
import PageHeader from "../common/components/PageHeader";
import * as Styled from "../styles/gridStyle";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import Grid from "../common/components/Grid/Grid";

const FindCandidatePage = () => {
  const [keyword, setKeyword] = useState("");
  const [candidates, setCandidates] = useState([]);
  const findCandidate = e => {
    e.preventDefault();
    fetch(`${FIND_CANDIDATE}`, {
      method: "POST",
      headers: {
        keyword: keyword
      }
    })
      .then(res => res.json())
      .then(data => setCandidates(data))
      .catch(error => console.log(error));
  };
  return (
    <>
      <PageHeader boldText="Find" normalText="Candidate" />
      <Form onSubmit={findCandidate} inline>
        <Input
          type="text"
          placeholder="Search Keyword ..."
          handleInputChange={e => setKeyword(e.target.value)}
        />
        <Input type="text" placeholder="Newyork, NY" />

        <DefaultButtonOutline type="submit">Search</DefaultButtonOutline>
      </Form>

      <Grid columns={5} mt={3}>
        {candidates.map(
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
        )}
      </Grid>
    </>
  );
};

export default WithSidebarLayout(FindCandidatePage);
