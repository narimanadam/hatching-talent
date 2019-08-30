import styled from "styled-components";

const ProfileInfoBoxStyles = styled.div`
  text-align: center;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 7px solid ${props => props.theme.white};
  margin-bottom: 10px;
`;

const Name = styled.span`
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 10px;
  display: block;
`;

const JobTitle = styled.span`
  text-align: center;
  display: block;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export { ProfileInfoBoxStyles, Avatar, Name, JobTitle };
