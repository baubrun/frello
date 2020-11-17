import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {AppStateProvider} from "./context/AppStateContext"


ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


// ReactDOM.render(
//   <React.StrictMode>
//     <AppStateContext.Provider value={[appData, dataReducer]}>
//       <App />
//     </AppStateContext.Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
