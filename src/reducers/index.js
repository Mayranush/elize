import {combineReducers} from "redux";
import matchingReducer from "./matchingReducer";
import nonMatchingReducer from "./nonMatchingReducer";
import attachedReducer from "./attachedReducer";
import detachedReducer from "./detachedReducer";
import popup from "./popupReducer";

const appReducer = combineReducers({
  matchingReducer,
  nonMatchingReducer,
  attachedReducer,
  detachedReducer,
  popup
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAN_DATA') {
    state = undefined
  }

  return appReducer(state, action)
};

export default rootReducer;
