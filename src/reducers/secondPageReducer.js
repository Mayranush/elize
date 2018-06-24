import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
  dataNonCompare: [],
  countNonCompare: 0,
  loaderNonCompare: false,
  dataNonCompareProducts: [],
  countNonCompareProducts: 0,
  loaderNonCompareProducts: false,
  dataCompare: [],
  countCompare: 0,
  loaderCompare: false,
  inputValue: []
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
  [ActionTypes.getDataRequestCompareElizeSecond]: (state) => ({...state, loaderCompare: true}),
  [ActionTypes.getDataResponseCompareElizeSecond]: (state, {payload}) => ({
    ...state,
    loaderCompare: false,
    dataCompare: payload.data,
    countCompare: payload.count}),
  [ActionTypes.updateInputValue]: (state, {payload}) => ({
    ...state,
    inputValue: payload})
}, defaultState);
