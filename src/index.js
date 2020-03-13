import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faSuitcase, faDesktop, faPlayCircle, faChevronLeft, faThumbsUp, faComment, faLightbulb, faGraduationCap, faTv, faPlus, faMinus, faCheckCircle, faTimesCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import { faHeart, faShareSquare, faEdit, faFileAlt, faTrashAlt, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import brands from "@fortawesome/fontawesome-free-brands";

// library.add(faSuitcase, faDesktop, faPlayCircle, faChevronLeft, faThumbsUp, faComment, faLightbulb, faGraduationCap, faTv, faHeart, faShareSquare, faEdit, faFileAlt, faTrashAlt, faPlusSquare, faPlus, faMinus, faCheckCircle, faTimesCircle, faChevronRight, brands)
library.add(fas, far, brands);

const theme = {
  main: "#ffc544",
  sec: "#8AC02C",
  white: "#fff",
  gray: "#6c6e72",
  darkGray: "#686768",
  lightGray: "#f6f6f6",
  grey: "#e6e6e6",
  black: "#333",
  success: "#28a745",
  error: "#dc3545",
  facebook: "#3b5999",
  linkedin: "#0077B5",
  boxShadow: "2px 3px 5px #eee"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
