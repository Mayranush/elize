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
  itemsInEachPageAttached: 5
};

export default handleActions({
  [ActionTypes.getDataRequestCompareElize]: (state) => ({...state, loaderCompare: true}),
  [ActionTypes.getDataResponseCompareElize]: (state, {payload}) => ({
    ...state,
    loaderCompare: false,
    dataCompare: payload.data,
    countCompare: payload.count}),
  [ActionTypes.getDataRequestAttachedElize]: (state) => ({...state, loaderAttached: true}),
  [ActionTypes.getDataResponseAttachedElize]: (state, {payload}) => ({
    ...state,
    loaderAttached: false,
    dataAttached: payload.data,
    countAttached: payload.count}),
  [ActionTypes.changeItemsInEachPageCompareFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageCompare: payload}),
  [ActionTypes.changeItemsInEachPageAttachedFunc]: (state, {payload}) => ({
    ...state,
    itemsInEachPageAttached: payload})
}, defaultState);
