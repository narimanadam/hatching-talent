import React from "react";
import * as Styled from "./HelpSection.styles";
import { Container } from "react-grid-system";
import Block from "../../../common/components/Block";

const HelpSection = () => {
  return (
    <Block title="Here's how we can help you" variant="grayBlock">
      <Container>
        <Styled.Wrapper>
          <Styled.Img src="../../../assets/find-job.svg" />

          <Styled.Content>
            <Styled.Title>Find a Job</Styled.Title>
            <Styled.Desc>
              Students and grads - It's time to hatch <br /> your career! Find
              student jobs, <br />
              entry-level roles, internships, co-ops, <br />
              talent programs, and more.
            </Styled.Desc>
            <Styled.Link>Find jobs</Styled.Link>
          </Styled.Content>
        </Styled.Wrapper>
        <Styled.Wrapper>
          <Styled.Content>
            <Styled.Title>Training Courses</Styled.Title>
            <Styled.Desc>
              Unsure about your career path? <br /> TalentEgg's Career Guides
              offer <br /> information and in-depth resources on <br /> a
              variety of egg-citing fields.
            </Styled.Desc>
            <Styled.Link>Explore training courses</Styled.Link>
          </Styled.Content>
          <Styled.Img src="../../../assets/online-courses.png" />
        </Styled.Wrapper>
      </Container>
    </Block>
  );
};

export default HelpSection;
