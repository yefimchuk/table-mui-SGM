import {createSelector} from "reselect";


export const selectTableTextData = createSelector(
    (state: any) => state,
    (state) => state.table.textData

);