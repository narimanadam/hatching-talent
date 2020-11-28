import React from "react";
// import { LabelStyles, CloseIcon, LabelLink } from "./social-links.styles";
import * as Styled from "./social-links.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { generateSocialIcon } from "../../common/helpers/helpers";

const SocialLinks = ({ links }) => {
  return (
    <Styled.Labels>
      {React.Children.toArray(
        links.map(({ name }) => (
          <Styled.Link href={name} target="_blank">
            <FontAwesomeIcon
              icon={["fab", generateSocialIcon(name)]}
            ></FontAwesomeIcon>
          </Styled.Link>
        ))
      )}

      {/* {!link && <span>{title}</span>} */}
      {/* {AuthState.userID == creatorUser && (
        <CloseIcon type="submit" onClick={handleClick}>
          <FontAwesomeIcon icon="times" />
        </CloseIcon>
      )} */}
    </Styled.Labels>
  );
};

export default SocialLinks;
