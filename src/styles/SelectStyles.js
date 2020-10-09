const SelectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "#f6f7f9",
    color: "#333",
    minWidth: "200px",
    borderRadius: "none",
    boxShadow: "none",
    border: "2px solid #f6f7f9"
  }),
  option: styles => ({
    ...styles,
    transition: "0.3s",
    "&:hover": { backgroundColor: "#686768", color: "#fff", cursor: "pointer" },
    "&:checked": { backgroundColor: "#686768" }
  }),
  dropdownIndicator: styles => ({ ...styles, color: "#686768" }),
  menu: styles => ({
    ...styles,
    backgroundColor: "#fff",
    color: "#686768",
    zIndex: 100
  }),
  placeholder: styles => ({ ...styles, color: "#333", fontSize: "14px" })
};

const SelectDefaultStyles = {
  container: styles => ({
    ...styles,
    width: "100%"
  }),
  control: styles => ({
    ...styles,
    backgroundColor: "#fff",
    color: "#fff",
    borderRadius: "none",
    boxShadow: "none",
    border: "none",
    marginBottom: "15px"
  }),
  option: styles => ({
    ...styles,
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#fff",
      cursor: "pointer"
    },
    "&:checked": { backgroundColor: "#fff" }
  }),
  dropdownIndicator: styles => ({ ...styles, color: "#333" }),
  menu: styles => ({
    ...styles,
    backgroundColor: "#fff",
    color: "#333",
    zIndex: 100
  }),
  placeholder: styles => ({ ...styles, color: "#333" })
};

export { SelectStyles, SelectDefaultStyles };
