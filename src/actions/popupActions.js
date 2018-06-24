import {createAction} from "redux-actions";
import ActionTypes from "../constants/actionTypes";

const changePopupResponse = createAction(ActionTypes.changePopup);

export function changePopup(text, show, resetPassword, passwordErrorText) {
  	return (dispatch) => {
		if (text === 'Token is incorrect !') {
			return(dispatch(cleanData()));
		}
		return dispatch(changePopupResponse({text, show, resetPassword, passwordErrorText}));
    };
}

export function confirmChangeInPopup(confirmPassword, password) {
    return (dispatch) => {
        let obj = passwordCompare(confirmPassword, password);
        return dispatch(confirmChangeResponceInPopup(obj));
    };
}

export function passwordChangeInPopup(password, confirmPassword) {
    return (dispatch) => {
        let obj = passwordCompare(password, confirmPassword);
        return dispatch(passwordChangeResponceInPopup(obj));
    };
}

/////////////////////////////////////////////           Change Password     ////////////////////////////////////////////////

const requestResponseChangePassword = createAction(ActionTypes.getDataRequestChangePassword);

export function getDataRequestChangePassword() {
  return (dispatch) => {
    return dispatch(requestResponseChangePassword());
  };
}

const responseResponseChangePassword = createAction(ActionTypes.getDataResponseChangePassword);

export function getDataResponseChangePassword(data) {
  return (dispatch) => {
    let show = true;
    let resetPassword = false;
    let text = "Successfully updated";
    let password = '';
    let passwordErrorText = '';
    let confirmPassword = '';
    store.dispatch(push('/settings'));
    return dispatch(responseResponseChangePassword({show, resetPassword, text, password, passwordErrorText, confirmPassword}));
  };
}

export function changeAndResetPassword(obj) {
  return (dispatch) => {
    dispatch(getDataRequestChangePassword());
    return api.changePassword(obj)
      .then(data => dispatch(getDataResponseChangePassword(data.data)))
      .catch(error => dispatch(errorHandler(error)));
  };
}






