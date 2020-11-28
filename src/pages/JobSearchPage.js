import React, { useState } from "react";

import Input from "../common/components/Input";
import JobResults from "../components/JobResults";
import { Form } from "../styles/FormStyles";

import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";

const JobSearchPage = () => {
  const [query, setQuery] = useState("");

  return (
    <SidebarLayoutContainer>
      <Form>
        <Input
          type="text"
          placeholder="Search Keyword ..."
          handleInputChange={e => setQuery(e.target.value)}
        />
      </Form>
      <JobResults query={query} />
    </SidebarLayoutContainer>
  );
};
export default WithSidebarLayout(JobSearchPage);
