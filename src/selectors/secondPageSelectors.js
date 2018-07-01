import { createSelector } from "reselect";

const getDataNonCompare = state => state.secondPage.dataNonCompare;
const getSearchTextNonCompare = state => state.secondPage.searchTextNonCompare;

const getDataNonCompareProducts = state => state.secondPage.dataNonCompareProducts;
const getSearchTextNonCompareProducts = state => state.secondPage.searchTextNonCompareProducts;

const getDataAttached = state => state.secondPage.dataAttached;
const getSearchTextAttached = state => state.secondPage.searchTextAttached;

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