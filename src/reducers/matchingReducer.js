import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  dataCompare: [],
  countCompare: 0,
  loaderCompare: false,
  itemsInEachPageCompare: 5,
  searchText: "",
  filterBrand: "",
  filterBrandData: [],
  filterTitle: "",
  filterTitleData: [],
  filterSourceData: [],
  filterSource: "",
  compareSortBy: "id",
  compareSortDir: "asc",

  token: "",
  imageZoom: '',
  matchingCheckbox: {
    'all': false,
  },
};

export default handleActions({
  [ActionTypes.changeImageZoomHome]: (state, {payload}) => ({
    ...state,
    imageZoom: payload
  }),
  [ActionTypes.filterBySourceElize]: (state, {payload}) => ({
    ...state,
    filterSource: payload
  }),
  [ActionTypes.getDataRequestCompareElize]: (state) => ({...state, loaderCompare: true}),
  [ActionTypes.getDataResponseCompareElize]: (state, {payload}) => ({
    ...state,
    loaderCompare: false,
    dataCompare: payload.data,
    countCompare: payload.count
  }),
  [ActionTypes.changeItemsInEachPageCompareFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageCompare: payload
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
  [ActionTypes.getDataRequestElizeSource]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseElizeSource]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterSourceData: payload.data
  }),
  [ActionTypes.toggleCheckbox]: (state, {payload}) => {
    let countAll = 0;
    let countOfChecked = 0;
    let bool = false;
    for (let key in state.matchingCheckbox) {
      if (state.matchingCheckbox[key] && key !== 'all' && !state.matchingCheckbox[payload]) {
        countOfChecked ++;
      }
      countAll++;
    }

    if (countOfChecked === countAll - 2) {
      bool = true;
    }

    return({
      ...state,
      matchingCheckbox: {
        ...state.matchingCheckbox,
        [payload]: !state.matchingCheckbox[payload],
        ['all']: bool,
      },
    })
  },
  [ActionTypes.changeMatchingCheckboxes]: (state, {payload}) => ({
    ...state,
    matchingCheckbox: {
      ...payload
    },
  }),
}, defaultState);

