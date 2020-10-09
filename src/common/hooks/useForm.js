import { useState } from "react";
import { toPascalCase } from "../helpers/helpers";
import { validationSchema } from "../helpers/validationSchema";

const useForm = (initialValues, cb) => {
  const [values, setValues] = useState(initialValues);
  const [selectedValue, setSelectedValue] = useState("");
  const [errors, setErrors] = useState({});
  const [touchedValues, setTouchedValues] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value
    });

    validateForm(name, value);
  };

  const handleSelectChange = ({ name, value }) => {
    setValues({
      ...values,
      [name]: value
    });
    setSelectedValue(value);
    console.log(value);
    validateForm(name, value);
  };

  const handleBlur = ({ target: { name, value } }) => {
    setTouchedValues({
      ...touchedValues,
      [name]: true
    });
    validateForm(name, value);
  };

  const handleSelectBlur = name => {
    setTouchedValues({
      ...touchedValues,
      [name]: true
    });

    validateForm(name, selectedValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (formIsValid) {
      cb();
    }
  };

  const validateForm = (name, value) => {
    let errorMessage = "";
    if (value === "" && validationSchema[name].required) {
      errorMessage = `${toPascalCase(name)} is required`;
    } else if (
      value !== "" &&
      validationSchema[name].validator &&
      !validationSchema[name].validator.regEx.test(value)
    ) {
      errorMessage = validationSchema[name].validator.errorMessage;
    } else {
      errorMessage = "";
    }

    setErrors({ ...errors, [name]: errorMessage });

    errors[name] === "" ? setFormIsValid(true) : setFormIsValid(false);
  };

  return {
    values,
    formIsValid,
    errors,
    touchedValues,
    handleSelectChange,
    handleChange,
    handleBlur,
    handleSelectBlur,
    handleSubmit
  };
};

export default useForm;
