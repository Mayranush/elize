import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  dataAttached: [],
  countAttached: 0,
  loaderAttached: false,
  searchTextAttached: "",
  itemsInEachPageAttached: 5,

  filterBrandAttached: "",
  filterTitleAttached: "",
  filterSrcAttached: "",
  filterBrandAttachedData: [],
  filterTitleAttachedData: [],
  filterSrcAttachedData: [],

  attachedBrandElize: "",
  attachedTitleElize: "",
  attachedSortBy: "id",
  attachedSortDir: "asc",

  imageZoom: '',
};

export default handleActions({
  [ActionTypes.changeImageZoomHome]: (state, {payload}) => ({
    ...state,
    imageZoom: payload
  }),
  [ActionTypes.getDataRequestAttachedElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseAttachedElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    dataAttached: payload.data,
    countAttached: payload.count
  }),
  [ActionTypes.changeSearchTextAttached]: (state, {payload}) => ({
    ...state,
    searchTextAttached: payload
  }),
  [ActionTypes.changeItemsInEachPageAttachedFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageAttached: payload
  }),
  [ActionTypes.getDataRequestBrandElizeAttached]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeAttached]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterBrandAttachedData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeTitleAttached]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeTitleAttached]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterTitleAttachedData: payload.data
  }),
  [ActionTypes.getDataRequestElizeSrcAttached]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseElizeSrcAttached]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterSrcAttachedData: payload.data
  }),
  [ActionTypes.filterBySrcAttached]: (state, {payload}) => ({
    ...state,
    filterSrcAttached: payload
  }),
  [ActionTypes.filterByBrandAttached]: (state, {payload}) => ({
    ...state,
    filterBrandAttached: payload
  }),
  [ActionTypes.filterByTitleAttached]: (state, {payload}) => ({
    ...state,
    filterTitleAttached: payload
  })
}, defaultState);

