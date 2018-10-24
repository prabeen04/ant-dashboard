import { createSelector } from "reselect";

const data = state => state.chartsReducer.data
const viewType = state => state.chartsReducer.viewType