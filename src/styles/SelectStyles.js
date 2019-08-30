const SelectStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: "#fff",
    color: "#686768",
    minWidth: "200px",
    borderRadius: "none",
    boxShadow: "none",
    border: "2px solid #fff"
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

export { SelectStyles };
