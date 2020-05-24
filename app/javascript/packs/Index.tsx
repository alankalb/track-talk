import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <p>Hello World!</p>,
    document.body.appendChild(document.createElement("div"))
  );
});
