import { createSelector } from "reselect";

const getDataDetached = state => state.detachedReducer.dataDetached;
const getSearchTextDetached = state => state.detachedReducer.searchTextDetached;

export const selectDataDetached = createSelector(
  [getDataDetached, getSearchTextDetached],
  (dataDetached, searchTextDetached) => {

    return dataDetached.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchTextDetached.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchTextDetached.toLowerCase()) > -1)));

  }
);