import React, { useState } from "react";
import Input from "../common/components/Input";
import { Form } from "../styles/FormStyles";
import { ADD_LOOKUP } from "../common/helpers/apiUrls";
import Select from "react-select";
import { SelectStyles } from "../styles/SelectStyles";
import { Link, navigate } from "@reach/router";
import PageHeader from "../common/components/PageHeader";
import Button from "../common/components/Button";
import WithSidebarLayout from "../Layout/SidebarLayout/WithSidebarLayout";
import { SidebarLayoutContainer } from "../Layout/SidebarLayout/SidebarLayout";
import { Flex } from "reflexbox";

const LookupsPage = () => {
  const [lookupValue, setLookupValue] = useState("");
  const [lookupType, setLookupType] = useState("");

  const lookupTypes = [
    { value: 1, label: "Locations" },
    { value: 2, label: "Industries" },
    { value: 3, label: "Roles" },
    { value: 4, label: "Nationalitites" },
    { value: 5, label: "Shifts" },
    { value: 6, label: "EmploymentsTypes" },
    { value: 7, label: "Job Level" }
  ];

  const submitLookupForm = e => {
    e.preventDefault();
    fetch(`${ADD_LOOKUP}`, {
      method: "POST",
      headers: {
        lookUpValue: lookupValue,
        lookUpTypeId: lookupType
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data[0].value === "Ok") {
          navigate("/view-lookups");
        }
      })
      .catch(error => console.log(error));
  };

  const handleLookupTypeChange = ({ value }) => {
    setLookupType(value);
  };

  return (
    <SidebarLayoutContainer>
      <PageHeader>
        <Form onSubmit={submitLookupForm} hasBgColor>
          <Input
            name="lookupValue"
            placeholder="Add Lookup"
            handleInputChange={e => setLookupValue(e.target.value)}
            variant="darkFormField"
          ></Input>
          <div className="form__group">
            <Select
              options={lookupTypes}
              placeholder="Select Job Role"
              name="jobRole"
              styles={SelectStyles}
              onChange={handleLookupTypeChange}
            />
          </div>
          <Flex>
            <Button
              text="Submit"
              type="submit"
              variant="primaryButton"
              mr={3}
            />
            <Link to="/view-lookups">
              <Button text="View Lookups" variant="primaryOutlineButton" />
            </Link>
          </Flex>
        </Form>
      </PageHeader>
    </SidebarLayoutContainer>
  );
};

export default WithSidebarLayout(LookupsPage);
