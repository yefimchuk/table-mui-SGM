import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import {PopupTableSliceInitType} from "../../../types/sliceTypes";

export const popupSlice: any = createSlice({
  name: "popupSlice",
  initialState: {
    rows: [
      {
        value: 21,
        date: moment(new Date("2018-12-17T03:12:00")).format("L"),
        user: "illya",
        comment: "i love front-end",
      },
      {
        value: 12,
        date: moment(new Date("2019-01-17T03:14:00")).format("L"),
        user: "arthur",
        comment: "i love back-end",
      },
      {
        value: 41,
        date: moment(new Date("2017-12-17T03:23:00")).format("L"),
        user: "oleg",
        comment: "i love design",
      },
      {
        value: 5,
        date: moment(new Date("2019-12-17T03:22:00")).format("L"),
        user: "dima",
        comment: "i love fullstack",
      },
    ],
  } as PopupTableSliceInitType,
  reducers: {
    addRows(state, action) {
      state.rows.push(action.payload.values);
    },
  },
  extraReducers: {},
});

export const { addRows } = popupSlice.actions;
