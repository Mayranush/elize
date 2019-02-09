import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  dataDetached: [],
  countDetached: 0,
  loaderDetached: false,
  searchTextDetached: "",
  itemsInEachPageDetached: 5,

  filterBrandDetached: "",
  filterTitleDetached: "",
  filterSrcDetached: "",
  filterBrandDetachedData: [],
  filterTitleDetachedData: [],
  filterSrcDetachedData: [],

  detachedBrandElize: "",
  detachedTitleElize: "",
  detachedSortBy: "id",
  detachedSortDir: "asc",

  imageZoom: '',
};

export default handleActions({
  [ActionTypes.changeImageZoomHome]: (state, {payload}) => ({
    ...state,
    imageZoom: payload
  }),
  [ActionTypes.getDataRequestDetachedElize]: (state) => ({...state, loaderDetached: true}),
  [ActionTypes.getDataResponseDetachedElize]: (state, {payload}) => ({
    ...state,
    loaderDetached: false,
    dataDetached: payload.data,
    countDetached: payload.count
  }),
  [ActionTypes.changeSearchTextDetached]: (state, {payload}) => ({
    ...state,
    searchTextDetached: payload
  }),
  [ActionTypes.changeItemsInEachPageDetachedFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageDetached: payload
  }),
  [ActionTypes.getDataRequestBrandElize]: (state) => ({...state, loaderDetached: true}),
  [ActionTypes.getDataResponseBrandElize]: (state, {payload}) => ({
    ...state,
    loaderDetached: false,
    filterBrandData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeTitle]: (state) => ({...state, loaderDetached: true}),
  [ActionTypes.getDataResponseBrandElizeTitle]: (state, {payload}) => ({
    ...state,
    loaderDetached: false,
    filterTitleData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeDetached]: (state) => ({...state, loaderDetached: true}),
  [ActionTypes.getDataResponseBrandElizeDetached]: (state, {payload}) => ({
    ...state,
    loaderDetached: false,
    filterBrandDetachedData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeTitleDetached]: (state) => ({...state, loaderDetached: true}),
  [ActionTypes.getDataResponseBrandElizeTitleDetached]: (state, {payload}) => ({
    ...state,
    loaderDetached: false,
    filterTitleDetachedData: payload.data
  }),
  [ActionTypes.getDataRequestElizeSrcDetached]: (state) => ({...state, loaderDetached: true}),
  [ActionTypes.getDataResponseElizeSrcDetached]: (state, {payload}) => ({
    ...state,
    loaderDetached: false,
    filterSrcDetachedData: payload.data
  }),
  [ActionTypes.filterBySrcDetached]: (state, {payload}) => ({
    ...state,
    filterSrcDetached: payload
  }),
  [ActionTypes.filterByBrandDetached]: (state, {payload}) => ({
    ...state,
    filterBrandDetached: payload
  }),
  [ActionTypes.filterByTitleDetached]: (state, {payload}) => ({
    ...state,
    filterTitleDetached: payload
  }),
  [ActionTypes.getDataRequestElizeSource]: (state) => ({...state, loaderDetached: true}),
  [ActionTypes.getDataResponseElizeSource]: (state, {payload}) => ({
    ...state,
    loaderDetached: false,
    filterSourceData: payload.data
  }),
}, defaultState);

