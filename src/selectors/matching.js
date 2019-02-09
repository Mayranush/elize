import { createSelector } from "reselect";

const getDataCompare = state => state.matchingReducer.dataCompare;
const getSearchText = state => state.matchingReducer.searchText;

export const selectDataCompare = createSelector(
  [getDataCompare, getSearchText],
  (dataCompare, searchText) => {

      return dataCompare.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchText.toLowerCase()) > -1)));

  }
);