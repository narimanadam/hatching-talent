import React from "react";
import {
  Section,
  SectionHeading,
  SectionDesc,
  SectionSeparator,
  MainBannerSection,
  MainBannerSubheading,
  MainBannerHeading,
  MainBannerDesc,
  MainBannerContent,
  Feature,
  FeatureIcon,
  FeatureTitle,
  FeatureDesc,
  FeatureLink
  // RecentCoursesThumb,
  // RecentCoursesThumbImgWrapper,
  // RecentCoursesThumbImg,
  // RecentCoursesThumbTitle,
  // RecentCoursesThumbDesc,
  // RecentCoursesThumbRating,
  // RecentCoursesThumbInfo
} from "./LandingPageStyle";
import { Row, Container, Col } from "react-grid-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeaturedEmployers from "../components/FeaturedEmployers";
import RecentArticles from "../components/RecentArticles";

const LandingPage = () => {
  return (
    <div>
      <MainBannerSection>
        <MainBannerContent>
          <MainBannerSubheading>Student or recent grad?</MainBannerSubheading>
          <MainBannerHeading>Get to work.</MainBannerHeading>
          <MainBannerDesc>
            Find meaningful jobs. Explore career paths. Check out helpful
            resources.
          </MainBannerDesc>
          {/* <Container>
                            <form action="">
                                <InlineList center hasMarginBottom>
                                    <InlineListItem>
                                        <Select options={jobLocationsOptions} placeholder="Select an Industry" styles={SelectStyles} />
                                    </InlineListItem>
                                    <InlineListItem>
                                        <Select options={jobLocationsOptions} placeholder="Select a Place" styles={SelectStyles} />
                                    </InlineListItem>
                                    <InlineListItem>
                                        <DefaultButtonOutline onClick={this.handleJobSearchSubmit}>Search</DefaultButtonOutline>
                                    </InlineListItem>
                                </InlineList>
                            </form>
                        </Container> */}
          {/* <InlineList center>
                            <InlineListItem>Upload Your Resume</InlineListItem>
                            <InlineListItem><Link to="/post-job" style={{ color: '#fff', textDecoration: 'none' }}>Hiring? Post a Job for Free</Link></InlineListItem>
                        </InlineList> */}
        </MainBannerContent>
      </MainBannerSection>
      {/* Featured Employers */}
      <FeaturedEmployers></FeaturedEmployers>
      {/* We Can help you Section */}
      <Section helpSection>
        <Container>
          <SectionHeading>Here's how we can help you</SectionHeading>
          <SectionDesc>
            Find meaningful jobs. Explore training courses. Check out helpful
            resources
          </SectionDesc>
          <SectionSeparator />
          <Row>
            <Col md={4}>
              <Feature>
                <FeatureIcon>
                  <FontAwesomeIcon icon="suitcase" size="2x" />
                </FeatureIcon>
                <FeatureTitle>Find a Job</FeatureTitle>
                <FeatureDesc>
                  Students and grads - It's time to hatch <br /> your career!
                  Find student jobs, <br />
                  entry-level roles, internships, co-ops, <br />
                  talent programs, and more.
                </FeatureDesc>
                <FeatureLink>Find jobs</FeatureLink>
              </Feature>
            </Col>
            <Col md={4}>
              <Feature>
                <FeatureIcon>
                  <FontAwesomeIcon icon="desktop" size="2x" />
                </FeatureIcon>
                <FeatureTitle>Training Courses</FeatureTitle>
                <FeatureDesc>
                  Unsure about your career path? <br /> TalentEgg's Career
                  Guides offer <br /> information and in-depth resources on{" "}
                  <br /> a variety of egg-citing fields.
                </FeatureDesc>
                <FeatureLink>Explore training courses</FeatureLink>
              </Feature>
            </Col>
            <Col md={4}>
              <Feature>
                <FeatureIcon>
                  <FontAwesomeIcon icon="play-circle" size="2x" />
                </FeatureIcon>
                <FeatureTitle>Resources</FeatureTitle>
                <FeatureDesc>
                  Hatchoo has thousands of resources <br /> to help you get
                  cracking with your <br /> career. Learn how to write a resume{" "}
                  <br /> for your dream job, research career <br />
                  prospects in your industry, and much <br />
                  more with our insightful articles and <br /> videos.
                </FeatureDesc>
                <FeatureLink>Go to Incubator</FeatureLink>
              </Feature>
            </Col>
          </Row>
        </Container>
      </Section>
      {/* Recent Courses Section */}
      {/* <Section recentCourses>
        <Container>
          <SectionHeading>Recent Courses</SectionHeading>
          <SectionDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, iusto!
          </SectionDesc>
          <SectionSeparator recentCourses />
          <Row>
            <Col md={4}>
              <RecentCoursesThumb>
                <RecentCoursesThumbImgWrapper>
                  <RecentCoursesThumbImg src={recentCourses} />
                </RecentCoursesThumbImgWrapper>
                <RecentCoursesThumbInfo>
                  <RecentCoursesThumbTitle>Video Title</RecentCoursesThumbTitle>
                  <RecentCoursesThumbRating>4.2</RecentCoursesThumbRating>
                  <RecentCoursesThumbDesc>
                    86% recommended to a friend
                  </RecentCoursesThumbDesc>
                </RecentCoursesThumbInfo>
              </RecentCoursesThumb>
            </Col>
            <Col md={4}>
              <RecentCoursesThumb>
                <RecentCoursesThumbImgWrapper>
                  <RecentCoursesThumbImg src={recentCourses} />
                </RecentCoursesThumbImgWrapper>
                <RecentCoursesThumbInfo>
                  <RecentCoursesThumbTitle>Video Title</RecentCoursesThumbTitle>
                  <RecentCoursesThumbRating>4.2</RecentCoursesThumbRating>
                  <RecentCoursesThumbDesc>
                    86% recommended to a friend
                  </RecentCoursesThumbDesc>
                </RecentCoursesThumbInfo>
              </RecentCoursesThumb>
            </Col>
            <Col md={4}>
              <RecentCoursesThumb>
                <RecentCoursesThumbImgWrapper>
                  <RecentCoursesThumbImg src={recentCourses} />
                </RecentCoursesThumbImgWrapper>
                <RecentCoursesThumbInfo>
                  <RecentCoursesThumbTitle>Video Title</RecentCoursesThumbTitle>
                  <RecentCoursesThumbRating>4.2</RecentCoursesThumbRating>
                  <RecentCoursesThumbDesc>
                    86% recommended to a friend
                  </RecentCoursesThumbDesc>
                </RecentCoursesThumbInfo>
              </RecentCoursesThumb>
            </Col>
          </Row>
        </Container>
      </Section> */}
      {/* Recent Articles Section */}
      <RecentArticles></RecentArticles>
      {/* <RecentArticlesSection>
        <RecentArticlesContent>
          <SectionHeading>Recent Articles</SectionHeading>
          <SectionSeparator recentArticles />
          <SimpleSlider />
        </RecentArticlesContent>
      </RecentArticlesSection> */}
    </div>
  );
};

export default LandingPage;
