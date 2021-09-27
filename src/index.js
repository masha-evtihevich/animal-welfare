import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducerForm from './reducers/reducerForm'
ReactDOM.render(
  <React.StrictMode>
    <div className="wrap">
      <Provider store={createStore(reducerForm)}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);