import React, { useState, useContext, useEffect } from "react";
import Labels from "../Labels";
import Box from "../../common/components/Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import Input from "../../common/components/Input";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import {
  ADD_AWARD,
  GET_AWARDS,
  DELETE_AWARD
} from "../../common/helpers/apiUrls";
import AuthContext from "../../common/context/AuthContext";
import { Form } from "../../styles/FormStyles";
import Message from "../../common/components/Message/Message";

const AwardsAndAchievements = ({ userId }) => {
  const [award, setAward] = useState("");
  const [awards, setAwards] = useState([]);
  const [showAddNewAward, setShowAddNewAward] = useState(false);
  const { AuthState } = useContext(AuthContext);

  const showAddNewAwardInput = () => {
    setShowAddNewAward(true);
  };

  const submitAward = () => {
    fetch(`${ADD_AWARD}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
        name: award,
        type: "award"
      }
    })
      .then(res => res.json())
      .then(data => getAwards())
      .catch(error => console.log(error));
  };

  const deleteAward = Id => {
    fetch(`${DELETE_AWARD}`, {
      method: "POST",
      headers: {
        id: Id
      }
    })
      .then(res => res.json())
      .then(data => getAwards())
      .catch(error => console.log(error));
  };

  const getAwards = () => {
    fetch(`${GET_AWARDS}`, {
      method: "POST",
      headers: {
        forUser: userId,
        type: "award"
      }
    })
      .then(res => res.json())
      .then(data => {
        setAwards(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getAwards();
  }, []);

  return (
    <Box heading="Awards &amp; Achievements">
      {!awards.length && (
        <Message text="Enter details of any awards you may have received"></Message>
      )}
      {awards.map((award, index) => (
        <Labels
          key={index}
          title={award.name}
          handleClick={deleteAward.bind(this, award.id)}
          creatorUser={userId}
        />
      ))}
      {showAddNewAward && (
        <Form>
          <Input
            type="text"
            name="award"
            placeholder="Add New Award"
            handleInputChange={e => setAward(e.target.value)}
          />
        </Form>
      )}
      <InlineList>
        {AuthState.userID == userId && (
          <InlineListItem>
            <MainOutlineButton onClick={showAddNewAwardInput} type="button">
              Add New Award
            </MainOutlineButton>
          </InlineListItem>
        )}
        {showAddNewAward && (
          <InlineListItem>
            <MainButton onClick={submitAward} type="button">
              Submit
            </MainButton>
          </InlineListItem>
        )}
      </InlineList>
    </Box>
  );
};

export default AwardsAndAchievements;
