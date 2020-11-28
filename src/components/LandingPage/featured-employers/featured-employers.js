import React, { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "react-grid-system";
import FeaturedEmployersCard from "./featured-employers-card";
import { FEATURED_EMPLOYERS_URL } from "../../../common/helpers/apiUrls";
import Block from "../../../common/components/Block";
import Grid from "../../../common/components/Grid/Grid";
import FeaturedEmployersLoader from "./featured-employers-loader";

const FeaturedEmployers = () => {
  const [featuredEmployers, setFeaturedEmployers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // GET: Featured Employers
    axios
      .post(`${FEATURED_EMPLOYERS_URL}`)
      .then(({ data }) => {
        setFeaturedEmployers(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <Block title="Featured Employers" variant="whiteBlock">
      <Container>
        <Grid columns={4}>
          {featuredEmployers.map(({ company_name, user_id }) => (
            <FeaturedEmployersCard name={company_name} key={user_id} />
          ))}
          {isLoading && <FeaturedEmployersLoader />}
        </Grid>
      </Container>
    </Block>
  );
};

export default FeaturedEmployers;
