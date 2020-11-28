import React, { useState, useEffect, useContext } from "react";
import Box from "../../../common/components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "../../../styles/FormStyles";
import Textarea from "../../../common/components/Textarea/Textarea";
import { GET_USER_INFO, EDIT_USER_INFO } from "../../../common/helpers/apiUrls";
import AuthContext from "../../../common/context/AuthContext";
import Message from "../../../common/components/Message";
import { BioLoader } from "./bio-loader";
import Button from "../../../common/components/Button";
import { Flex } from "reflexbox";

const Bio = ({ userId }) => {
  const [editMode, setEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bio, setBio] = useState("");
  const { AuthState } = useContext(AuthContext);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setIsLoading(false);
          setBio(data[0].profile_description);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const updateBio = e => {
    e.preventDefault();
    fetch(`${EDIT_USER_INFO}`, {
      method: "POST",
      headers: {
        userId,
        profileDescription: bio
      }
    })
      .then(res => res.json())
      .then(data => window.location.reload())
      .catch(error => console.log(error));
  };

  if (isLoading) return <BioLoader />;

  return (
    <Box heading="Bio" editMode={editMode}>
      <Flex justifyContent="space-between" alignItems="center">
        {bio && !editMode && <Flex as="p">{bio}</Flex>}
        {!bio && !editMode && <Message text="No bio Added yet" />}

        {!editMode && AuthState.userID === +userId && (
          <Button
            icon={<FontAwesomeIcon icon="edit" />}
            variant="linkButton"
            onClick={toggleEditMode}
          />
        )}
      </Flex>
      {editMode && (
        <Form onSubmit={updateBio}>
          <Textarea
            name="bio"
            placeholder="Update your bio"
            value={bio}
            handleInputChange={e => setBio(e.target.value)}
          />
          <Button text="Update Bio" variant="primaryButton" type="submit" />
        </Form>
      )}
    </Box>
  );
};

export default Bio;
