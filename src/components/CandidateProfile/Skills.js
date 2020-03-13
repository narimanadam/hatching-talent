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

const Skills = ({ userId }) => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [showAddNewSkill, setShowAddNewSkill] = useState(false);
  const [authenticated] = useContext(AuthContext);

  const showAddNewSkillInput = () => {
    setShowAddNewSkill(true);
  };

  const submitSkill = () => {
    fetch(`${ADD_SKILL_AND_LANG}`, {
      method: "POST",
      headers: {
        forUser: authenticated.userID,
        name: skill,
        type: "skill"
      }
    })
      .then(res => res.json())
      .then(data => getSkills())
      .catch(error => console.log(error));
  };

  const deleteSkill = Id => {
    fetch(`${DELETE_SKILLS_AND_LANG}`, {
      method: "POST",
      headers: {
        id: Id
      }
    })
      .then(res => res.json())
      .then(data => getSkills())
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = () => {
    fetch(`${GET_SKILLS_AND_LANG}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        forUser: userId,
        type: "skill"
      }
    })
      .then(res => res.json())
      .then(data => {
        setSkills(data);
      })
      .catch(error => console.log(error));
  };

  return (
    <Box heading="Skills">
      {!skills.length && authenticated.userID == userId && (
        <Message text="Add the skills you have"></Message>
      )}

      {skills.map((skill, index) => (
        <Labels
          key={index}
          title={skill.name}
          handleClick={deleteSkill.bind(this, skill.id)}
          creatorUser={userId}
        />
      ))}

      {showAddNewSkill && (
        <Form>
          <InputField
            type="text"
            name="skill"
            placeholder="Add New Skill"
            handleInputChange={e => setSkill(e.target.value)}
          />
        </Form>
      )}
      {authenticated.userID == userId && (
        <InlineList>
          <InlineListItem>
            <MainOutlineButton onClick={showAddNewSkillInput} type="button">
              Add New Skill
            </MainOutlineButton>
          </InlineListItem>
          {showAddNewSkill && (
            <InlineListItem>
              <MainButton onClick={submitSkill} type="button">
                Submit
              </MainButton>
            </InlineListItem>
          )}
        </InlineList>
      )}
    </Box>
  );
};

export default Skills;
