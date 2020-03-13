import React, { useState, useEffect } from "react";
import Select from "react-select";
import { SelectStyles, SelectDefaultStyles } from "../styles/SelectStyles";
import { GET_LOOKUPs } from "../helpers/apiUrls";

const SelectLookup = ({
  placeholder,
  name,
  options,
  handleSelectChange,
  typeId,
  type
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

  selectOptions = lookupValues.map(options => ({
    value: options.value,
    label: options.value
  }));
  return (
    <div>
      <Select
        placeholder={placeholder}
        name={name}
        styles={type === "default" ? SelectDefaultStyles : SelectStyles}
        onChange={handleSelectChange}
        options={selectOptions}
      />
    </div>
  );
};

export default SelectLookup;
