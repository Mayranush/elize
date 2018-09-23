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
  filterSourceConElize: "",
  filterBrandConElizeData: [],
  filterTitleConElizeData: [],
  filterSourceConElizeData: [],
  compareSortByConElize: "id",
  compareSortDirConElize: "asc",
  filterBrandCon: "",
  filterTitleCon: "",
  filterSourceCon: "",
  filterBrandConData: [],
  filterTitleConData: [],
  filterSourceConData: [],
  compareSortByCon: "id",
  compareSortDirCon: "asc",
  filterBrandConAttached: "",
  filterTitleConAttached: "",
  filterSrcConAttached: "",
  filterBrandConAttachedData: [],
  filterTitleConAttachedData: [],
  filterSrcConAttachedData: [],
  compareSortByConAttached: "id",
  compareSortDirConAttached: "asc",
  exportType:'Сопоставление Продукты',
  statusData:[],
  statusAll:'1',
  calculateScore:'',
  imageZoom:''
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
  [ActionTypes.getDataRequestAttachedElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseAttachedElize]: (state, {payload}) => ({
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
  [ActionTypes.filterBySourceConElize]: (state, {payload}) => ({
    ...state,
    filterSourceConElize: payload
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
  [ActionTypes.filterBySourceCon]: (state, {payload}) => ({
    ...state,
    filterSourceCon: payload
  }),

  [ActionTypes.getDataRequestElizeSourceCon]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseElizeSourceCon]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterSourceConData: payload.data
  }),
  [ActionTypes.getDataRequestElizeSourceConElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseElizeSourceConElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterSourceConElizeData: payload.data
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
  [ActionTypes.getDataRequestSrcElizeConAttached]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseSrcElizeConAttached]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    filterSrcConAttachedData: payload.data
  }),
  [ActionTypes.filterByBrandConAttached]: (state, {payload}) => ({
    ...state,
    filterBrandConAttached: payload
  }),
  [ActionTypes.filterBySrcConAttached]: (state, {payload}) => ({
    ...state,
    filterSrcConAttached: payload
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
  [ActionTypes.changeImageZoom]: (state, {payload}) => ({
    ...state,
    imageZoom: payload
  }),


  [ActionTypes.exportType]: (state, {payload}) => ({
    ...state,
    exportType: payload
  }),
  [ActionTypes.getDataRequestStatus]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseStatus]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    statusData: payload.data
  }),
  [ActionTypes.getDataRequestStatusAll]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseStatusAll]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    statusAll: payload.data
  }),
  [ActionTypes.getDataRequestCalculate]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseCalculate]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    calculateScore: payload.data
  }),

  [ActionTypes.getDataRequestCompare]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseCompare]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    statusAll: payload.data
  }),
  [ActionTypes.getDataRequestStopCompareElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseStopCompareElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    statusAll: payload.data
  }),
  [ActionTypes.getDataRequestStartElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseStartElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    statusAll: payload.data
  }),
  [ActionTypes.getDataRequestStopElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseStopElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    statusAll: payload.data
  }),
}, defaultState);
