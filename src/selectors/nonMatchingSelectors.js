import { createSelector } from "reselect";

const getDataNonCompare = state => state.nonMatchingReducer.dataNonCompare;
const getSearchTextNonCompare = state => state.nonMatchingReducer.searchTextNonCompare;

const getDataNonCompareProducts = state => state.nonMatchingReducer.dataNonCompareProducts;
const getSearchTextNonCompareProducts = state => state.nonMatchingReducer.searchTextNonCompareProducts;

const getDataAttached = state => state.nonMatchingReducer.dataAttached;
const getSearchTextAttached = state => state.nonMatchingReducer.searchTextAttached;

export const selectDataNoneCompare = createSelector(
  [getDataNonCompare, getSearchTextNonCompare],
  (dataNonCompare, searchTextNonCompare) => {

    return dataNonCompare.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchTextNonCompare.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchTextNonCompare.toLowerCase()) > -1)));

  }
);

export const selectDataNoneCompareProducts = createSelector(
  [getDataNonCompareProducts, getSearchTextNonCompareProducts],
  (dataNonCompareProducts, searchTextNonCompareProducts) => {

    return dataNonCompareProducts.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchTextNonCompareProducts.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchTextNonCompareProducts.toLowerCase()) > -1)));

  }
);

export const selectDataCompareAttached = createSelector(
  [getDataAttached, getSearchTextAttached],
  (dataAttached, searchTextAttached) => {

    return dataAttached.filter(t => ((t.fullTitleElize && t.fullTitleElize.toLowerCase().indexOf(searchTextAttached.toLowerCase()) > -1) || (t.fullTitle && t.fullTitle.toLowerCase().indexOf(searchTextAttached.toLowerCase()) > -1)));

  }
);