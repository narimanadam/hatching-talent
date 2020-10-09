// import React, { useState, useRef } from "react";
// import { Link } from "@reach/router";
// import { Flex, Box } from "reflexbox";

// import { Form } from "../styles/FormStyles";
// import RadioInput from "../common/components/RadioInput/RadioInput";
// import RadioButton from "../common/components/RadioButton";
// import Input from "../common/components/Input";
// import Button from "../common/components/Button";

// const ReviewForm = ({handleGetEmployers}) => {
//   <Form inline hasBgColor>
//     <Flex flexWrap="wrap">
//       <Box width={[1 / 2]}>
//         <RadioInput
//           label="Company Review"
//           name="review"
//           colored
//           value="company"
//           handleInputChange={e => setReviewType(e.target.value)}
//         />
//       </Box>
//       <Box width={[1 / 2]}>
//         <RadioInput
//           label="Interview Review"
//           name="review"
//           colored
//           value="interview"
//           handleInputChange={e => setReviewType(e.target.value)}
//         />
//       </Box>

//       <Box width={[1 / 2]}>
//         <RadioButton
//           label="Current"
//           name="employerStatus"
//           button
//           value="Current"
//           handleChange={e => setEmploymentStatus(e.target.value)}
//           checked="checked"
//         />
//       </Box>
//       <Box width={[1 / 2]}>
//         <RadioButton
//           label="Former"
//           name="employerStatus"
//           button
//           value="Former"
//           handleChange={e => setEmploymentStatus(e.target.value)}
//         />
//       </Box>

//       <Input
//         type="text"
//         placeholder="Employer Name"
//         name="employername"
//         label="Employer Name"
//         value={employerName || ""}
//         handleInputKeyup={e => getEmployersList(e.target.value)}
//         handleInputChange={e => setEmployerName(e.target.value)}
//       />
//     </Flex>
//     {searchActive && (
//       <ul className="list__search-results" ref={searchResults}>
//         {employers.map((employer, i) => (
//           <li
//             className="list__search-results__item"
//             onClick={getEmployerId.bind(
//               this,
//               employer.user_id,
//               employer.company_name
//             )}
//             key={i}
//           >
//             {employer.company_name}
//           </li>
//         ))}
//       </ul>
//     )}
//     <Link to={`${reviewType}-review`}>
//       <Button
//         text="Next"
//         variant="primaryButton"
//         type="button"
//         onClick={getReviewType()}
//       />
//     </Link>
//   </Form>;
// };

// export default ReviewForm;
