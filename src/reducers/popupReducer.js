import {ActionTypes} from "../constants/index";
import {handleActions} from "redux-actions";

const defaultState = {
    resetPassword: false,
    password: '',
    confirmPassword: '',
    passwordErrorText: '',
    show: false,
    text: ''
 };

export default handleActions({
	[ActionTypes.changePopup]: (state, {payload}) => {
    	return({...state, text: payload.text, show: payload.show, resetPassword: payload.resetPassword, passwordErrorText: payload.passwordErrorText});  
  	},
    [ActionTypes.getDataRequestChangePassword]: (state) => ({...state}),
    [ActionTypes.passwordChangeInPopup]: (state, {payload}) => {
        return({...state, password: payload.password, passwordErrorText: payload.passwordErrorText});  
    },
    [ActionTypes.confirmChangeInPopup]: (state, {payload}) => {
        return({...state, confirmPassword: payload.password, passwordErrorText: payload.passwordErrorText});  
    },
    
    [ActionTypes.getDataResponseChangePassword]: (state, {payload}) => ({...state,
        show: payload.show,
        resetPassword: payload.resetPassword,
        text: payload.text,
        password: payload.password,
        passwordErrorText: payload.passwordErrorText, 
        confirmPassword: payload.confirmPassword }),
    [ActionTypes.getDataResponseErrorChangePassword]: (state) => ({...state})
 
}, defaultState);
