import React, { useState, useEffect } from "react";
import { Container, Row } from "react-grid-system";
import { GET_LOOKUPs } from "../helpers/apiUrls";
import { Form } from "../styles/FormStyles";
import Select from "react-select";
import { SelectStyles } from "../styles/SelectStyles";
import Box from "../components/Box";
import { List, ListItem } from "../styles/ListStyle";
import SectionHeading from "../components/SectionHeading";

const ViewLookups = () => {
  const [lookupTypeId, setLookupTypeId] = useState("");
  const [lookupValues, setLookupValues] = useState([]);

  const lookupTypes = [
    { value: "Locations", label: "Locations" },
    { value: "Industries", label: "Industries" },
    { value: "Roles", label: "Roles" },
    { value: "Nationalities", label: "Nationalities" },
    { value: "Shifts", label: "Shifts" },
    { value: "EmploymentsTypes", label: "EmploymentsTypes" },
    { value: "levels", label: "Job Level" }
  ];

  const getLookups = type => {
    fetch(`${GET_LOOKUPs}`, {
      method: "POST",
      headers: {
        lookTypeName: type
      }
    })
      .then(res => res.json())
      .then(data => {
        setLookupValues(data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getLookups(lookupTypeId);
  }, [lookupTypeId]);

  const handleLookupTypeChange = ({ value }) => {
    setLookupTypeId(value);
  };

  const activateLookup = () => {
    // fetch(`${CHANGE_LOOKUP_STATUS}`, {
    //   method: "POST",
    //   headers: {
    //     // lookupValueId : ,
    //     status: "Active"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));
  };

  const deactivateLookup = () => {
    // fetch(`${CHANGE_LOOKUP_STATUS}`, {
    //   method: "POST",
    //   headers: {
    //     // lookupValueId : ,
    //     status: "InActive"
    //   }
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error));
  };

  return (
    <>
      <div className="main-colored">
        <Container>
          <SectionHeading boldText="Find" normalText="Lookup"></SectionHeading>
          <Row>
            <Form>
              <div className="form__group">
                <Select
                  options={lookupTypes}
                  placeholder="Select Lookup"
                  name="lookups"
                  styles={SelectStyles}
                  onChange={handleLookupTypeChange}
                />
              </div>
            </Form>
          </Row>
        </Container>
      </div>
      <Container>
        {!lookupValues.length && <Box>Select Lookup Value to display</Box>}
        <List>
          {lookupValues.map(({ value }) => (
            <Box style={{ display: "flex" }}>
              <ListItem>
                {value}
                {/* <InlineList
                  style={{
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                >
                  <InlineListItem>
                    <MainButton onClick={activateLookup}>Activate</MainButton>
                    <MainOutlineButton onClick={deactivateLookup}>
                      Deactivate
                    </MainOutlineButton>
                  </InlineListItem>
                </InlineList> */}
              </ListItem>
            </Box>
          ))}
        </List>
      </Container>
    </>
  );
};

export default ViewLookups;
