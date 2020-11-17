import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataContext } from "./context/DataContext";
import { appData } from "./data";
import { dataReducer } from "./context/dataReducer";




ReactDOM.render(
  <React.StrictMode>
    <DataContext.Provider value={[appData, dataReducer]}>
      <App />
    </DataContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
