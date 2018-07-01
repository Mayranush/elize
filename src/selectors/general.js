import { createSelector } from "reselect";

const getDataCompare = state => state.general.dataCompare;
const getSearchText = state => state.general.searchText;

const getDataAttached = state => state.general.dataAttached;
const getSearchTextAttached = state => state.general.searchTextAttached;

export const selectDataCompare = createSelector(
  [getDataCompare, getSearchText],
  (dataCompare, searchText) => {

      return dataCompare.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchText.toLowerCase()) > -1)));

  }
);

export const selectDataCompareAttached = createSelector(
  [getDataAttached, getSearchTextAttached],
  (dataAttached, searchTextAttached) => {

    return dataAttached.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchTextAttached.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchTextAttached.toLowerCase()) > -1)));

  }
);