import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "emotion-theming";
import BaseTheme from "./common/theme/base-theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import brands from "@fortawesome/fontawesome-free-brands";

library.add(fas, far, brands);

ReactDOM.render(
  <ThemeProvider theme={BaseTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
