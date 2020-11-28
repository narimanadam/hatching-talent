import React, { useState, useContext, useEffect } from "react";
// import Labels from "../Labels";
import Box from "../../../common/components/Box";
import Input from "../../../common/components/Input";
import { InlineList, InlineListItem } from "../../../styles/ListStyle";
import {
  ADD_AWARD,
  GET_AWARDS,
  DELETE_AWARD
} from "../../../common/helpers/apiUrls";
import AuthContext from "../../../common/context/AuthContext";
import { Form } from "../../../styles/FormStyles";
import Message from "../../../common/components/Message/Message";
import Badge from "../../../common/components/Badge";
import AwardsLoader from "./awards-loader";
import Button from "../../../common/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Awards = ({ userId }) => {
  const [award, setAward] = useState("");
  const [awards, setAwards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddNewAward, setShowAddNewAward] = useState(false);
  const { AuthState } = useContext(AuthContext);

  const showAddNewAwardInput = () => setShowAddNewAward(true);
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
    setIsLoading(true);
    fetch(`${GET_AWARDS}`, {
      method: "POST",
      headers: {
        forUser: userId,
        type: "award"
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          setAwards(data);
          setIsLoading(false);
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getAwards();
  }, []);

  if (isLoading) return <AwardsLoader />;

  return (
    <>
      <Box heading="Awards &amp; Achievements">
        {awards.map(({ name, id }) => (
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
                onClick={() => deleteAward(id)}
              />
            )}
          </Badge>
        ))}

        {!awards.length && <Message text="No Awards Added yet" />}

        {showAddNewAward && (
          <Form style={{ marginTop: 16 }}>
            <Input
              type="text"
              name="award"
              placeholder="Add New Award"
              handleInputChange={e => setAward(e.target.value)}
            />
          </Form>
        )}
        <InlineList style={{ marginTop: 16 }}>
          {!showAddNewAward && AuthState.userID === +userId && (
            <InlineListItem>
              <Button
                text="Add New Award"
                icon={<FontAwesomeIcon icon="plus" />}
                variant="primaryOutlineButton"
                onClick={showAddNewAwardInput}
                type="button"
              />
            </InlineListItem>
          )}
          {showAddNewAward && (
            <>
              <InlineListItem>
                <Button
                  text="Cancel"
                  variant="primaryOutlineButton"
                  onClick={() => setShowAddNewAward(false)}
                  type="button"
                />
              </InlineListItem>
              <InlineListItem>
                <Button
                  text="Submit"
                  variant="primaryButton"
                  onClick={submitAward}
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

export default Awards;
