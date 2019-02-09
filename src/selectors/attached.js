import { createSelector } from "reselect";

const getDataAttached = state => state.attachedReducer.dataAttached;
const getSearchTextAttached = state => state.attachedReducer.searchTextAttached;

export const selectDataAttached = createSelector(
  [getDataAttached, getSearchTextAttached],
  (dataAttached, searchTextAttached) => {

    return dataAttached.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchTextAttached.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchTextAttached.toLowerCase()) > -1)));

  }
);