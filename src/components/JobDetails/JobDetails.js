import React from "react";
import { Container } from "react-grid-system";
import { Flex } from "reflexbox";

import Button from "../../common/components/Button";
import useUserType from "../../common/utils/UserTypes";
import * as Styled from "./JobDetails.styles";

const JobDetails = ({
  jobTitle,
  jobLevel,
  jobDesc,
  approveJob,
  rejectJob,
  applyJob
}) => {
  const { isAdmin, isCandidate } = useUserType();

  return (
    <>
      <Styled.Header>
        <Styled.Wrapper>
          <Styled.ImgWrapper>
            <Styled.Img
              src="https://freemuse.org/wp-content/uploads/2017/06/mbc-logo-590x300.jpg"
              alt="company name"
            />
          </Styled.ImgWrapper>
          <Styled.CompanyName>MBC</Styled.CompanyName>
        </Styled.Wrapper>
      </Styled.Header>

      <Container>
        <Styled.JobTitle>{jobTitle}</Styled.JobTitle>
        <Styled.JobLevel>{jobLevel}</Styled.JobLevel>
        <Styled.JobDesc>{jobDesc}</Styled.JobDesc>
        <Flex mt={4} justifyContent="flex-end">
          {isCandidate && (
            <Button
              text="Apply to this Job"
              handleClick={applyJob}
              type="submit"
              variant="primaryButton"
            />
          )}

          {isAdmin && (
            <Flex>
              <Button
                text="Approve"
                handleClick={approveJob}
                type="submit"
                variant="primaryButton"
                mr={2}
              />
              <Button
                text="Reject"
                handleClick={rejectJob}
                type="submit"
                variant="primaryOutlineButton"
              />
            </Flex>
          )}
        </Flex>
      </Container>
    </>
  );
};

export default JobDetails;
