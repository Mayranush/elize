import { combineReducers } from "redux";
import general from "./generalReducer";
import secondPage from "./secondPageReducer";
import popup from "./popupReducer";

const appReducer = combineReducers({
    general,
    secondPage,
    popup
});

const  rootReducer = (state, action) => {
  if (action.type === 'CLEAN_DATA') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;
