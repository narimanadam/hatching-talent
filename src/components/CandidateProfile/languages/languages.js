import React, { useState, useContext, useEffect } from "react";
// import Labels from "../Labels";
import Box from "../../../common/components/Box";
import Input from "../../../common/components/Input";
import { InlineList, InlineListItem } from "../../../styles/ListStyle";
import {
  ADD_SKILL_AND_LANG,
  GET_SKILLS_AND_LANG,
  DELETE_SKILLS_AND_LANG
} from "../../../common/helpers/apiUrls";
import AuthContext from "../../../common/context/AuthContext";
import { Form } from "../../../styles/FormStyles";
import Message from "../../../common/components/Message/Message";
import Badge from "../../../common/components/Badge";
import LanguagesLoader from "./languages-loader";
import Button from "../../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Languages = ({ userId }) => {
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddNewLanguage, setShowAddNewLanguage] = useState(false);
  const { AuthState } = useContext(AuthContext);

  const showAddNewLanguageInput = () => setShowAddNewLanguage(true);

  const submitLanguage = () => {
    fetch(`${ADD_SKILL_AND_LANG}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
        name: language,
        type: "language"
      }
    })
      .then(res => res.json())
      .then(data => getLanguages())
      .catch(error => console.log(error));
  };

  const deleteLanguage = Id => {
    fetch(`${DELETE_SKILLS_AND_LANG}`, {
      method: "POST",
      headers: {
        id: Id
      }
    })
      .then(res => res.json())
      .then(data => getLanguages())
      .catch(error => console.log(error));
  };

  const getLanguages = () => {
    setIsLoading(true);
    fetch(`${GET_SKILLS_AND_LANG}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        forUser: userId,
        type: "language"
      }
    })
      .then(res => res.json())
      .then(data => {
        setLanguages(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getLanguages();
  }, []);

  if (isLoading) return <LanguagesLoader />;

  return (
    <>
      <Box heading="Languages">
        {languages.map(({ name, id }) => (
          <Badge text={name} key={id} variant="defaultBadge">
            {AuthState.userID === +userId && (
              <Button
                variant="linkButton"
                type="button"
                px={0}
                pl={1}
                fontSize={2}
                icon={
                  <FontAwesomeIcon icon="times" style={{ color: "#fff" }} />
                }
                onClick={() => deleteLanguage(id)}
              />
            )}
          </Badge>
        ))}

        {!languages.length && <Message text="No Languages added yet" />}

        {showAddNewLanguage && (
          <Form style={{ marginTop: 16 }}>
            <Input
              type="text"
              name="language"
              placeholder="Add New Language"
              handleInputChange={e => setLanguage(e.target.value)}
            />
          </Form>
        )}
        <InlineList style={{ marginTop: 16 }}>
          {!showAddNewLanguage && AuthState.userID === +userId && (
            <InlineListItem>
              <Button
                text="Add New Language"
                variant="primaryOutlineButton"
                onClick={showAddNewLanguageInput}
                icon={<FontAwesomeIcon icon="plus" />}
                type="button"
              />
            </InlineListItem>
          )}
          {showAddNewLanguage && (
            <>
              <InlineListItem>
                <Button
                  text="Cancel"
                  variant="primaryOutlineButton"
                  onClick={() => setShowAddNewLanguage(false)}
                  type="button"
                />
              </InlineListItem>
              <InlineListItem>
                <Button
                  text="Submit"
                  variant="primaryButton"
                  onClick={submitLanguage}
                  type="button"
                />
              </InlineListItem>
            </>
          )}
        </InlineList>
      </Box>
    </>
  );
};

export default Languages;
