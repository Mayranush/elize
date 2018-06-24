import { render } from "react-dom";
import React from "react";
import App from "./App";
import "general.scss";

render(
  <App />,
  document.getElementById("root")
);

// if (module.hot) {
//   module.hot.accept("pages/routes", () => {
//     const NewRoot = require("pages/routes").default;

//     render(
//       <NewRoot />,
//       document.getElementById("root")
//     );
//   });
// }
