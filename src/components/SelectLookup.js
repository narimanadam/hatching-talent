import React, { useState, useEffect } from "react";
import Select from "react-select";
import { SelectStyles, SelectDefaultStyles } from "../styles/SelectStyles";
import { GET_LOOKUPs } from "../common/helpers/apiUrls";
import Message from "../common/components/Message";

const SelectLookup = ({
  placeholder,
  name,
  handleSelectChange,
  handleSelectBlur,
  typeId,
  type,
  validationMessage
}) => {
  const [lookupTypeId, setLookupTypeId] = useState("");
  const [lookupValues, setLookupValues] = useState([]);
  let selectOptions = [];
  const getLookups = type => {
    fetch(`${GET_LOOKUPs}`, {
      method: "POST",
      headers: {
        lookTypeName: type
      }
    })
      .then(res => res.json())
      .then(data => setLookupValues(data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    setLookupTypeId(typeId);
    getLookups(typeId);
  }, []);

  selectOptions = lookupValues.map(option => ({
    value: option.value,
    label: option.value,
    name
  }));
  return (
    <div>
      <Select
        placeholder={placeholder}
        name={name}
        styles={type === "default" ? SelectDefaultStyles : SelectStyles}
        onChange={handleSelectChange}
        onBlur={e => handleSelectBlur(name, e.target.value)}
        options={selectOptions}
      />
      {validationMessage && (
        <Message type="error" text={validationMessage || ""} />
      )}
    </div>
  );
};

export default SelectLookup;
