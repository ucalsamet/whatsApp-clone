import React from "react";
import ReactDOM from "react-dom";
import "./Style/index.css";
import App from "./App";
import reducer, { initialState } from "./reducers/Reducer";
import { StateProvider } from "./contexts/StateContext";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
