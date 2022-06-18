import { combineReducers, createStore } from "@reduxjs/toolkit";
import { popupSlice } from "./Popup/popup.slice";
import { tableSlice } from "./Table/table.slice";

let reducers = combineReducers({
  popup: popupSlice.reducer,
  table: tableSlice.reducer,
});

const store = createStore(reducers);

export default store;
