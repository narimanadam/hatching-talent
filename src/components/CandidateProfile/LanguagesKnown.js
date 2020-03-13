import React, { useState, useContext, useEffect } from "react";
import Labels from "../Labels";
import Box from "../Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import InputField from "../InputField";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import {
  ADD_SKILL_AND_LANG,
  GET_SKILLS_AND_LANG,
  DELETE_SKILLS_AND_LANG
} from "../../helpers/apiUrls";
import AuthContext from "../../context/AuthContext";
import { Form } from "../../styles/FormStyles";
import Message from "../../components/Message";

const LanguagesKnown = ({ userId }) => {
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState([]);
  const [showAddNewLanguage, setShowAddNewLanguage] = useState(false);
  const [authenticated] = useContext(AuthContext);

  const showAddNewLanguageInput = () => {
    setShowAddNewLanguage(true);
  };

  const submitLanguage = () => {
    fetch(`${ADD_SKILL_AND_LANG}`, {
      method: "POST",
      headers: {
        forUser: authenticated.userID,
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
    fetch(`${GET_SKILLS_AND_LANG}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        forUser: userId,
        type: "language"
      }
    })
      .then(res => res.json())
      .then(data => setLanguages(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <Box heading="Languages">
      {!languages.length && (
        <Message text="Add the langugaes you know"></Message>
      )}

      {languages.map((language, index) => (
        <Labels
          key={index}
          title={language.name}
          handleClick={deleteLanguage.bind(this, language.id)}
          creatorUser={userId}
        />
      ))}

      {showAddNewLanguage && (
        <Form>
          <InputField
            type="text"
            name="language"
            placeholder="Add New Language"
            handleInputChange={e => setLanguage(e.target.value)}
          />
        </Form>
      )}
      <InlineList>
        {authenticated.userID == userId && (
          <InlineListItem>
            <MainOutlineButton onClick={showAddNewLanguageInput} type="button">
              Add New Language
            </MainOutlineButton>
          </InlineListItem>
        )}
        {showAddNewLanguage && (
          <InlineListItem>
            <MainButton onClick={submitLanguage} type="button">
              Submit
            </MainButton>
          </InlineListItem>
        )}
      </InlineList>
    </Box>
  );
};

export default LanguagesKnown;
