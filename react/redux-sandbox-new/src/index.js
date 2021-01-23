import {createStore, bindActionCreators} from "redux";
import reducer from "./reducer";
import * as actions from  "./actions";

const store = createStore(reducer);
const {dispatch} = store;

const bindActionCreator = (creator, dispatch) => (...args) => {
  dispatch(creator(...args));
}

const {inc, dec, rnd} = bindActionCreators({actions}, dispatch);


document
  .querySelector(".btn-inc")
  .addEventListener("click", inc);

document
  .querySelector(".btn-dec")
  .addEventListener("click", dec);

document
  .querySelector(".btn-rnd")
  .addEventListener("click", rnd);

const update = () => {
  document
  .querySelector(".counter")
  .innerHTML = store.getState();
}

store.subscribe(update);