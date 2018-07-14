import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  dataNonCompare: [],
  countNonCompare: 0,
  loaderNonCompare: false,
  dataNonCompareProducts: [],
  countNonCompareProducts: 0,
  loaderNonCompareProducts: false,
  dataAttached: [],
  countAttached: 0,
  loaderAttached: false,
  inputValue: [],
  itemsInEachPageNonCompare: 5,
  itemsInEachPageNonCompareProducts: 5,
  itemsInEachPageCompare: 5,
  searchTextNonCompare: "",
  searchTextNonCompareProducts: "",
  searchTextAttached: "",
  filterBrandConElize: "",
  filterTitleConElize: "",
  filterBrandConElizeData: [],
  filterTitleConElizeData: [],
  compareSortByConElize: "id",
  compareSortDirConElize: "asc",
  filterBrandCon: "",
  filterTitleCon: "",
  filterBrandConData: [],
  filterTitleConData: [],
  compareSortByCon: "id",
  compareSortDirCon: "asc",
  filterBrandConAttached: "",
  filterTitleConAttached: "",
  filterBrandConAttachedData: [],
  filterTitleConAttachedData: [],
  compareSortByConAttached: "id",
  compareSortDirConAttached: "asc",
};

export default handleActions({
  [ActionTypes.getDataRequestNonCompareElize]: (state) => ({...state, loaderNonCompare: true}),
  [ActionTypes.getDataResponseNonCompareElize]: (state, {payload}) => ({
    ...state,
    loaderNonCompare: false,
    dataNonCompare: payload.data,
    countNonCompare: payload.count
  }),
  [ActionTypes.getDataRequestNonCompareProducts]: (state) => ({...state, loaderNonCompareProducts: true}),
  [ActionTypes.getDataResponseNonCompareProducts]: (state, {payload}) => ({
    ...state,
    loaderNonCompareProducts: false,
    dataNonCompareProducts: payload.data,
    countNonCompareProducts: payload.count
  }),
  [ActionTypes.getDataRequestAttachedElizeSec]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseAttachedElizeSec]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    dataAttached: payload.data,
    countAttached: payload.count
  }),
  [ActionTypes.updateInputValue]: (state, {payload}) => ({
    ...state,
    inputValue: payload
  }),
  [ActionTypes.changeItemsInEachPageNonCompareFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageNonCompare: payload
  }),
  [ActionTypes.changeItemsInEachPageNonCompareProductsFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageNonCompareProducts: payload
  }),
  [ActionTypes.changeItemsInEachPageCompareFuncSec]: (state, {payload}) => ({
    ...state,
    itemsInEachPageCompare: payload
  }),
  [ActionTypes.changeSearchTextNonCompare]: (state, {payload}) => ({
    ...state,
    searchTextNonCompare: payload
  }),
  [ActionTypes.changeSearchTextNonCompareProducts]: (state, {payload}) => ({
    ...state,
    searchTextNonCompareProducts: payload
  }),
  [ActionTypes.changeSearchTextAttachedSec]: (state, {payload}) => ({
    ...state,
    searchTextAttached: payload
  }),

  [ActionTypes.getDataRequestBrandElizeConElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeConElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterBrandConElizeData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeTitleConElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeTitleConElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterTitleConElizeData: payload.data
  }),
  [ActionTypes.filterByBrandConElize]: (state, {payload}) => ({
    ...state,
    filterBrandConElize: payload
  }),
  [ActionTypes.filterByTitleConElize]: (state, {payload}) => ({
    ...state,
    filterTitleConElize: payload
  }),


  [ActionTypes.getDataRequestBrandElizeCon]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeCon]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterBrandConData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeTitleCon]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeTitleCon]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterTitleConData: payload.data
  }),
  [ActionTypes.filterByBrandCon]: (state, {payload}) => ({
    ...state,
    filterBrandCon: payload
  }),
  [ActionTypes.filterByTitleCon]: (state, {payload}) => ({
    ...state,
    filterTitleCon: payload
  }),
  [ActionTypes.getDataRequestBrandElizeConAttached]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeConAttached]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterBrandConAttachedData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeTitleConAttached]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeTitleConAttached]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterTitleConAttachedData: payload.data
  }),
  [ActionTypes.filterByBrandConAttached]: (state, {payload}) => ({
    ...state,
    filterBrandConAttached: payload
  }),
  [ActionTypes.filterByTitleConAttached]: (state, {payload}) => ({
    ...state,
    filterTitleConAttached: payload
  }),
  [ActionTypes.changeSortDirConElize]: (state, {payload}) => ({
    ...state,
    compareSortDirConElize: payload
  }),
  [ActionTypes.changeSortDirCon]: (state, {payload}) => ({
    ...state,
    compareSortDirCon: payload
  }),
  [ActionTypes.changeSortDirConAttached]: (state, {payload}) => ({
    ...state,
    compareSortDirConAttached: payload
  }),

}, defaultState);
