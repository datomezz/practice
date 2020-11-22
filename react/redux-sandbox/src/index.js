import {createStore} from "redux"; 

import {inc, dec, rnd} from "./actions";
import {reducer} from "./reducer"; 

const store = createStore(reducer);
const {dispatch} = store;
store.subscribe(update);

document
  .querySelector("#inc")
  .addEventListener("click", () => {
    dispatch(inc())
  });

document
  .querySelector("#dec")
  .addEventListener("click", () => {
    dispatch(dec())
  });

document
  .querySelector("#random")
  .addEventListener("click", () => {
    const payload = Math.floor(Math.random() * 10);
    dispatch(rnd(payload));
  });

function update() {
  document
    .querySelector("#counter")
    .innerHTML = store.getState();
}