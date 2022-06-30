import React from "react";
import ReactDOM from "react-dom";

import { MatchesContextProvider } from "./contexts/MatchesContext";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <MatchesContextProvider>
      <App />
    </MatchesContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
