import styled from "styled-components";
import recentArticlesImg from "../assets/recent-articles.jpg";
import mainBannerImg from "../assets/main-banner.jpg";

export const Section = styled.section`
  padding: 60px 0;
  background: ${props =>
    props.helpSection
      ? props.theme.main
      : props.recentCourses
      ? props.theme.black
      : props.theme.white};
  color: ${props =>
    props.recentCourses ? props.theme.white : props.theme.black};
`;

export const SectionHeading = styled.h2`
  font-size: 40px;
  font-weight: normal;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
`;

export const SectionDesc = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const SectionSeparator = styled.div`
  width: 150px;
  height: 1px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  background: ${props =>
    props.recentCourses || props.recentArticles
      ? props.theme.white
      : props.theme.black};
`;

export const RecentArticlesSection = styled(Section)`
  position: relative;
  background-image: url(${recentArticlesImg});
  background-size: cover;
  color: ${props => props.theme.white};
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const RecentArticlesContent = styled.div`
  position: relative;
  z-index: 999;
`;
export const MainBannerSection = styled(Section)`
  position: relative;
  background-image: url(${mainBannerImg});
  background-size: cover;
  color: ${props => props.theme.white};
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const MainBannerContent = styled.div`
  position: relative;
  z-index: 999;
  text-align: center;
`;

export const MainBannerHeading = styled.h1`
  font-size: 110px;
  font-weight: normal;
  margin-top: 15px;
  margin-bottom: 60px;
  line-height: 70px;
  text-align: center;
`;

export const MainBannerSubheading = styled.h3`
  font-size: 35px;
  font-weight: bold;
`;

export const MainBannerDesc = styled.p`
  margin-bottom: 20px;
`;

export const Feature = styled.div`
  text-align: center;
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
`;
export const FeatureIcon = styled.i`
  margin-bottom: 20px;
  display: inline-block;
`;
export const FeatureTitle = styled.h3`
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 10px;
`;
export const FeatureDesc = styled.p`
  font-size: 14px;
`;
export const FeatureLink = styled.a`
  font-weight: bold;
  font-size: 14px;
  text-decoration: underline;
  margin-top: 15px;
  display: inline-block;
`;

export const EmployerThumb = styled.div`
  background: ${props => props.theme.white};
  box-shadow: 2px 2px 4px #eee;
  margin-bottom: 20px;
`;

export const EmployerThumbCoverWrapper = styled.div`
  height: 250px;
`;
export const EmployerThumbCover = styled.img`
  width: 100%;
  height: 100%;
`;
export const EmployerThumbInfo = styled.div`
  position: relative;
`;
export const EmployerThumbLogo = styled.img`
  position: absolute;
  top: -30px;
  left: 15px;
  width: 60px;
  height: 60px;
  background: green;
`;
export const EmployerThumbName = styled.span`
  margin-top: 10px;
  margin-bottom: 20px;
  display: inline-block;
  padding-left: 100px;
`;

export const RecentCoursesThumb = styled.div``;
export const RecentCoursesThumbImgWrapper = styled.div`
  height: 190px;
  overflow: hidden;
`;
export const RecentCoursesThumbImg = styled.img`
  width: 100%;
  transition: 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;
export const RecentCoursesThumbTitle = styled.h3`
  font-size: 16px;
  text-align: left;
  margin-bottom: 5px;
`;
export const RecentCoursesThumbDesc = styled.p`
  text-align: left;
`;
export const RecentCoursesThumbRating = styled.div`
  text-align: left;
  margin-bottom: 5px;
`;
export const RecentCoursesThumbInfo = styled.div`
  position: relative;
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
  padding: 15px 25px;
  :after {
    content: "";
    position: absolute;
    top: -15px;
    left: 0;
    right: 0;
    width: 0;
    height: 0;
    margin: auto;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid ${props => props.theme.white};
  }
`;
