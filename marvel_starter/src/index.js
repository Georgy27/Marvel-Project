import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import GlobalStyle from "../../marvel_starter/src/style/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
