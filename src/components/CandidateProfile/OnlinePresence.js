import React, { useState, useContext, useEffect } from "react";
import Box from "../../common/components/Box";
import { MainOutlineButton, MainButton } from "../../styles/Button";
import Input from "../../common/components/Input";
import { InlineList, InlineListItem } from "../../styles/ListStyle";
import Labels from "../Labels";
import { Form } from "../../styles/FormStyles";
import AuthContext from "../../common/context/AuthContext";
import { ADD_LINK, GET_LINKS, DELETE_LINK } from "../../common/helpers/apiUrls";
import Message from "../../common/components/Message/Message";

const OnlinePresence = ({ userId }) => {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const [showAddNewLink, setShowAddNewLink] = useState(false);
  const [bluredInputs, setBluredInputs] = useState(false);
  const [domainName, setDomainName] = useState("");
  const { AuthState } = useContext(AuthContext);

  const setBlurred = e => {
    setBluredInputs({ ...bluredInputs, [e.target.name]: true });
  };

  const showAddNewInput = () => {
    setShowAddNewLink(true);
  };

  const validateLink = () => {
    return /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi.test(
      link
    );
  };

  const addLink = () => {
    fetch(`${ADD_LINK}`, {
      method: "POST",
      headers: {
        forUser: AuthState.userID,
        name: link,
        type: "link"
      }
    })
      .then(res => res.json())
      .then(data => getLinks())
      .catch(error => console.log(error));
  };

  const getLinks = () => {
    fetch(`${GET_LINKS}`, {
      method: "POST",
      headers: {
        forUser: userId,
        type: "link"
      }
    })
      .then(res => res.json())
      .then(data => {
        setLinks(data);
      })
      .catch(error => console.log(error));
  };

  const deleteLink = Id => {
    fetch(`${DELETE_LINK}`, {
      method: "POST",
      headers: {
        id: Id
      }
    })
      .then(res => res.json())
      .then(data => getLinks())
      .catch(error => console.log(error));
  };

  const linkIsValid = validateLink();

  const formValid = linkIsValid;

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <Box
      heading="Online Presence"
      body="Add link to your social profiles(linkedin, facebook, ...etc)"
    >
      {links.map(({ name, id }) => (
        <Labels
          title={name}
          key={id}
          handleClick={deleteLink.bind(this, id)}
          link="true"
          creatorUser={userId}
        />
      ))}
      <Form onSubmit={addLink}>
        {showAddNewLink && (
          <Input
            type="text"
            name="link"
            placeholder="Add New Link"
            handleInputChange={e => setLink(e.target.value)}
            handleBlur={setBlurred}
          />
        )}
        {bluredInputs.link && !linkIsValid && (
          <Message text="Please Enter a valid Link" type="error" />
        )}
        {AuthState.userID == userId && (
          <InlineList>
            <InlineListItem>
              <MainOutlineButton onClick={showAddNewInput} type="button">
                Add Your Social Presence Links
              </MainOutlineButton>
            </InlineListItem>
            {showAddNewLink && (
              <InlineListItem>
                <MainButton
                  onClick={addLink}
                  type="button"
                  disabled={!formValid}
                >
                  Submit
                </MainButton>
              </InlineListItem>
            )}
          </InlineList>
        )}
      </Form>
    </Box>
  );
};

export default OnlinePresence;
