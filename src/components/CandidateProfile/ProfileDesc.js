import React, { useState, useEffect, useContext } from "react";
import Box from "../../common/components/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, MainButton } from "../../styles/Button";
import { Form } from "../../styles/FormStyles";
import Textarea from "../../common/components/Textarea/Textarea";
import { GET_USER_INFO, EDIT_USER_INFO } from "../../common/helpers/apiUrls";
import AuthContext from "../../common/context/AuthContext";
import Message from "../../common/components/Message";

const ProfileDesc = ({ userId }) => {
  const [editMode, setEditMode] = useState(false);
  const [bio, setBio] = useState("");
  const { AuthState } = useContext(AuthContext);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const getBio = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId
      }
    })
      .then(res => res.json())
      .then(data => setBio(data[0].profile_description))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getBio();
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

  return (
    <Box heading="Bio" text={[`${bio}`]} editMode={editMode}>
      {bio == "" && !editMode && (
        <Message text="Let employers know more about you" />
      )}
      {editMode && (
        <Form onSubmit={updateBio}>
          <Textarea
            name="bio"
            placeholder="Update your bio"
            value={bio}
            handleInputChange={e => setBio(e.target.value)}
          />
          <MainButton type="submit">Update Bio</MainButton>
        </Form>
      )}
      {!editMode && AuthState.userID == userId && (
        <Button colored onClick={toggleEditMode}>
          <FontAwesomeIcon icon="edit" />
          Edit Bio
        </Button>
      )}
    </Box>
  );
};

export default ProfileDesc;
