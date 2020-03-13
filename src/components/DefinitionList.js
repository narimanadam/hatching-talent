import React from "react";
import { DefList, DefTerm, DefDesc } from "../styles/DefinitionListStyles";

const DefinitionList = ({ term, desc }) => {
  return (
    <DefList>
      <DefTerm>{term}</DefTerm>
      <DefDesc>{desc}</DefDesc>
    </DefList>
  );
};

export default DefinitionList;
