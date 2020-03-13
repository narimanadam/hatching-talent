import React, { useEffect, useState } from "react";
import Box from "../Box";
import DefinitionList from "../DefinitionList";
import { Row, Col } from "react-grid-system";
import { GET_USER_INFO } from "../../helpers/apiUrls";
const PersonalDetails = props => {
  const [userInfo, setUserInfo] = useState({});
  const getUserInfo = () => {
    fetch(`${GET_USER_INFO}`, {
      method: "POST",
      headers: {
        userId: props.userId
      }
    })
      .then(res => res.json())
      .then(data => setUserInfo(data[0]))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <Box heading="Personal Details" grid>
      <Row>
        <Col md={6}>
          <DefinitionList term="Home Town" desc="-"></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList
            term="gender"
            desc={userInfo.gender !== null ? userInfo.gender : "-"}
          ></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList term="Permenant Address" desc="-"></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList term="Pin Code" desc="-"></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList
            term="Marital Status"
            desc={
              userInfo.marital_status !== null ? userInfo.marital_status : "-"
            }
          ></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList term="Date of birth" desc="-"></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList
            term="Passport Number"
            desc={userInfo.passport_no !== null ? userInfo.passport_no : "-"}
          ></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList term="Category" desc="-"></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList term="Work Permit for USA" desc="-"></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList
            term="Work Permit for other country"
            desc="-"
          ></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList term="specially abled" desc="-"></DefinitionList>
        </Col>
        <Col md={6}>
          <DefinitionList
            term="nationality"
            desc={
              userInfo.nationality_name !== null
                ? userInfo.nationality_name
                : "-"
            }
          ></DefinitionList>
        </Col>
      </Row>
    </Box>
  );
};

export default PersonalDetails;
