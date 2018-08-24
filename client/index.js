import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

window.onload = function() {
  const root = document.querySelector("#root");
  ReactDOM.render(<App />, root);
};
