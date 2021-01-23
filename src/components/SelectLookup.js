import React, { useState, useEffect, useCallback } from "react";
import ReactSelect from "react-select";
import { SelectStyles, SelectDefaultStyles } from "../styles/SelectStyles";
import { GET_LOOKUPs } from "../common/helpers/apiUrls";
import Message from "../common/components/Message";

const SelectLookup = ({ placeholder, name, typeId, type, error, label }) => {
  const [, setLookupTypeId] = useState("");
  const [lookupValues, setLookupValues] = useState([]);
  const [hasValue, setHasValue] = useState(false);
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

  const handleChange = useCallback(
    selectedOption => {
      if (selectedOption.value) {
        setHasValue(true);
      }
    },
    [error]
  );

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
    <>
      <div className="form_group">
        {label && <label className="form__label">{label}</label>}
      </div>
      <ReactSelect
        placeholder={placeholder}
        name={name}
        styles={type === "default" ? SelectDefaultStyles : SelectStyles}
        onChange={handleChange}
        options={selectOptions}
      />
      {error && !hasValue && <Message type="error" text={error.message} />}
    </>
  );
};

export default SelectLookup;
