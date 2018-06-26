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
};

export default handleActions({
  [ActionTypes.getDataRequestNonCompareElize]: (state) => ({...state, loaderNonCompare: true}),
  [ActionTypes.getDataResponseNonCompareElize]: (state, {payload}) => ({
    ...state,
    loaderNonCompare: false,
    dataNonCompare: payload.data,
    countNonCompare: payload.count}),
  [ActionTypes.getDataRequestNonCompareProducts]: (state) => ({...state, loaderNonCompareProducts: true}),
  [ActionTypes.getDataResponseNonCompareProducts]: (state, {payload}) => ({
    ...state,
    loaderNonCompareProducts: false,
    dataNonCompareProducts: payload.data,
    countNonCompareProducts: payload.count}),
  [ActionTypes.getDataRequestAttachedElizeSec]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseAttachedElizeSec]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    dataAttached: payload.data,
    countAttached: payload.count}),
  [ActionTypes.updateInputValue]: (state, {payload}) => ({
    ...state,
    inputValue: payload}),
  [ActionTypes.changeItemsInEachPageNonCompareFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageNonCompare: payload}),
  [ActionTypes.changeItemsInEachPageNonCompareProductsFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageNonCompareProducts: payload}),
  [ActionTypes.changeItemsInEachPageCompareFuncSec]: (state, {payload}) => ({
    ...state,
    itemsInEachPageCompare: payload})
}, defaultState);
