import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter basename="/zenc">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);