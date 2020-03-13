import React, { useState } from "react";
import { Container } from "react-grid-system";

const AccordionItemTitle = ({ active, step, title }) => {
  const [opened, setOpened] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleClick = e => {
    setOpened(!opened);

    if (active) {
      setOpened(!opened);
    }
  };

  useEffect(() => {
    active ? setOpened(true) : setDisabled(true);
  }, []);

  return (
    <div
      onClick={handleClick}
      className={`accordion__header  ${opened ? "opened" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <Container>
        <h5 className="accordion__subtitle">{step}</h5>
        <h2 className="accordion__title">{title}</h2>
      </Container>
    </div>
  );
};

export default AccordionItemTitle;
