import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import mystore from "./Redux/Store/store";
import Createuser from "./Components/Createuser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={mystore}>
      <App />
      <Createuser/>
    </Provider>
  </React.StrictMode>
);
