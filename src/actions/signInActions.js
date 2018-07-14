import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";
import store from "store";
import {tools} from "../resources";
import api from "../api/api";
import {push} from "react-router-redux";
import {errorHandler} from "./generalActions";

/////////////////////////////////////////////           sign in       ////////////////////////////////////////////////

const getDataRequestSignIn = createAction(ActionTypes.getDataRequestSignIn);
const responseResponseSignIn = createAction(ActionTypes.getDataResponseSignIn);

export function getDataResponseSignIn(data) {
  return (dispatch) => {
    let token = data.token;
    window.sessionStorage.setItem("token", token);
    store.dispatch(push('/'));
    return dispatch(responseResponseSignIn(token));
  };
}

export function signIn(obj) {
  return (dispatch) => {
    dispatch(getDataRequestSignIn());
    return api.signIn(obj)
      .then(data => dispatch(getDataResponseSignIn(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}

