import { createSelector } from "reselect";

export const selectPopup = createSelector(
  (state: any) => state,
  (state) => state.popup
);
