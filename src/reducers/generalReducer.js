import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  dataCompare: [],
  countCompare: 0,
  loaderCompare: false,
  dataAttached: [],
  countAttached: 0,
  loaderAttached: false,
  itemsInEachPageCompare: 5,
  itemsInEachPageAttached: 5,
  searchText: "",
  filterBrand: "",
  filterBrandData: [],
  filterTitle: "",
  filterTitleData: [],
  filterBrandAttached: "",
  filterTitleAttached: "",
  filterBrandAttachedData: [],
  filterTitleAttachedData: [],
  filterSourceData: [],
  filterSource: "",
  compareSortBy: "id",
  compareSortDir: "asc",
  attachedBrandElize: "",
  attachedTitleElize: "",
  attachedSortBy: "id",
  attachedSortDir: "asc",

  searchTextAttached: "",
  token: ""
};

export default handleActions({
  [ActionTypes.filterBySourceElize]: (state, {payload}) => ({
    ...state,
    filterSource: payload
  }),
  [ActionTypes.getDataRequestElizeSource]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseElizeSource]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterSourceData: payload.data
  }),
  [ActionTypes.getDataRequestCompareElize]: (state) => ({...state, loaderCompare: true}),
  [ActionTypes.getDataResponseCompareElize]: (state, {payload}) => ({
    ...state,
    loaderCompare: false,
    dataCompare: payload.data,
    countCompare: payload.count
  }),
  [ActionTypes.getDataRequestAttachedElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseAttachedElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    dataAttached: payload.data,
    countAttached: payload.count
  }),

  [ActionTypes.getDataRequestBrandElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterBrandData: payload.data
  }),
  [ActionTypes.getDataRequestBrandElizeTitle]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseBrandElizeTitle]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterTitleData: payload.data
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
  // [ActionTypes.getDataRequestBrandProducts]: (state) => ({...state, loaderAttached: true}),
  // [ActionTypes.getDataResponseBrandProducts]: (state, {payload}) => ({
  //   ...state,
  //   loaderAttached: false,
  //   filterTitleData: payload.data
  // }),
  [ActionTypes.changeItemsInEachPageCompareFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageCompare: payload
  }),
  [ActionTypes.changeItemsInEachPageAttachedFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageAttached: payload
  }),
  [ActionTypes.changeSearchText]: (state, {payload}) => ({
    ...state,
    searchText: payload
  }),
  [ActionTypes.filterByBrand]: (state, {payload}) => ({
    ...state,
    filterBrand: payload
  }),
  [ActionTypes.filterByTitle]: (state, {payload}) => ({
    ...state,
    filterTitle: payload
  }),
  [ActionTypes.filterByBrandAttached]: (state, {payload}) => ({
    ...state,
    filterBrandAttached: payload
  }),
  [ActionTypes.filterByTitleAttached]: (state, {payload}) => ({
    ...state,
    filterTitleAttached: payload
  }),
  [ActionTypes.changeSearchTextAttached]: (state, {payload}) => ({
    ...state,
    searchTextAttached: payload
  }),
  [ActionTypes.changeSortDir]: (state, {payload}) => ({
    ...state,
    compareSortDir: payload
  }),
  [ActionTypes.getDataResponseSignIn]: (state, {payload}) => ({...state, token: payload}),
  [ActionTypes.emailChange]: (state, {payload}) => ({
    ...state,
    username: payload
  }),
  [ActionTypes.passwordChange]: (state, {payload}) => ({
    ...state,
    password: payload
  })
}, defaultState);

