import { createStore } from "redux";
import { bankReducer } from "./reducers/bank-reducer";

export const store = createStore(bankReducer, 1000);

console.log(store.getState()); 