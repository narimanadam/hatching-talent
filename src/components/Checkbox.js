import React from "react";

const Checkbox = ({ name, label }) => {
  return (
    <div className="form__group">
      <label htmlFor={name}>
        <input type="checkbox" id={name} /> {label}
      </label>
    </div>
  );
};

export default Checkbox;
