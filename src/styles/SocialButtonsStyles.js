import styled from "styled-components";

const SocialButton = styled.button`
  max-width: 250px;
  width: 250px;
  height: 30px;
  display: block;
  margin-bottom: 10px;
  border: none;
  line-height: 30px;
  text-transform: uppercase;
  color: ${props => props.theme.white};
  font-weight: bold;
  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
`;

const SocialButtonText = styled.span`
  margin: 0 15px;
`;

const FacebookButton = styled(SocialButton)`
  background: ${props => props.theme.facebook};
`;

const LinkedInButton = styled(SocialButton)`
  background: ${props => props.theme.linkedin};
`;

export { SocialButton, SocialButtonText, FacebookButton, LinkedInButton };
