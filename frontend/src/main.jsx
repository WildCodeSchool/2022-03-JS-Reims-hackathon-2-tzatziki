import React from "react";
import ReactDOM from "react-dom";

import MatchesContext from "./contexts/MatchesContext";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MatchesContext>
      <App />
    </MatchesContext>
  </React.StrictMode>,
  document.getElementById("root")
);
