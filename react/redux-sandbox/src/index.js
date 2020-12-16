import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux"; 
import {Provider} from "react-redux";

// REDUX
import {reducer} from "./reducer"; 

// COMPONENTS
import App from "./components/App";

const store = createStore(reducer);
console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
