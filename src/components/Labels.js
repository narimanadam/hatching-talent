import React, { useState, useEffect, useContext } from "react";
import { LabelStyles, CloseIcon, LabelLink } from "../styles/LabelStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AuthContext from "../common/context/AuthContext";
const Labels = ({ title, handleClick, link, creatorUser }) => {
  const [domainName, setDomainName] = useState("");
  const { AuthState } = useContext(AuthContext);

  const getDomain = () => {
    let websiteName = title
      .replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
      .split("/")[0];
    setDomainName(websiteName.split(".com")[0]);
  };

  useEffect(() => {
    getDomain();
  }, []);

  return (
    <LabelStyles>
      {link && domainName && (
        <FontAwesomeIcon icon={["fab", domainName]}></FontAwesomeIcon>
      )}
      {link && <LabelLink href={title}>{title}</LabelLink>}
      {!link && <span>{title}</span>}
      {AuthState.userID == creatorUser && (
        <CloseIcon type="submit" onClick={handleClick}>
          <FontAwesomeIcon icon="times" />
        </CloseIcon>
      )}
    </LabelStyles>
  );
};

export default Labels;
