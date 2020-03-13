import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Section,
  SectionHeading,
  SectionDesc,
  SectionSeparator
} from "../pages/LandingPageStyle";

import { Row, Container } from "react-grid-system";
import FeaturedEmployersThumb from "./FeaturedEmployersThumb";
import { FEATURED_EMPLOYERS_URL } from "../helpers/apiUrls";

const FeaturedEmployers = () => {
  const [featuredEmployers, setFeaturedEmployers] = useState([]);

  useEffect(() => {
    // GET: Featured Employers
    axios
      .post(`${FEATURED_EMPLOYERS_URL}`)
      .then(({ data }) => setFeaturedEmployers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Section fetauredEmployers>
      <Container>
        <SectionHeading>Featured Employers</SectionHeading>
        <SectionDesc>
          These top employers want to meet you! <br /> Get to know them by
          checking out their profile
        </SectionDesc>
        <SectionSeparator />
        <Row>
          {featuredEmployers.map(featuredEmployer => (
            <FeaturedEmployersThumb
              name={featuredEmployer.company_name}
              key={featuredEmployer.user_id}
            ></FeaturedEmployersThumb>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

export default FeaturedEmployers;
